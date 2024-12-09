"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    useCdn: true,
});

interface Gallery {
    _id: string;
    titel: string;
    images: { url: string; alt: string }[];
}

interface GalleryProps {
    galleryName: string;
    galleryTitel: string;
}

export default function Gallery({ galleryName, galleryTitel }: GalleryProps) {
    const [gallery, setGallery] = useState<Gallery | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        async function fetchGallery() {
            const query = `
                *[_type == "gallery" && titel == $galleryName]{
                    _id,
                    titel,
                    images[] {
                        ...,
                        "url": asset->url
                    }
                }
            `;
            const params = { galleryName };

            try {
                const result = await client.fetch(query, params);
                if (result.length > 0) {
                    setGallery(result[0]);
                } else {
                    console.warn(`No gallery found for name: ${galleryName}. Please verify the backend data.`);
                }
            } catch (error) {
                console.error('Error fetching gallery:', error);
            }
        }

        fetchGallery();
    }, [galleryName]);

    const handleClick = (index: number) => {
        setPhotoIndex(index);
        setIsImageLoaded(false); // Bild wird geladen
        setIsOpen(true); // Öffne die Lightbox
    };

    const handleImageLoad = () => {
        setIsImageLoaded(true); // Bild erfolgreich geladen
    };

    return (
        <div className="my-12 mx-auto max-w-7xl px-0">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    {gallery ? (
                        <>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-6">
                                {galleryTitel}
                            </h2>
                            {/* Responsive Grid: Maximal 4 Spalten */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {gallery.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full h-auto cursor-pointer group"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Image
                                            src={image.url}
                                            alt={image.alt || 'Image'}
                                            layout="responsive"
                                            width={300}
                                            height={200}
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg shadow-md"
                                        />
                                    </div>
                                ))}
                            </div>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={gallery.images[photoIndex].url}
                                    nextSrc={gallery.images[(photoIndex + 1) % gallery.images.length].url}
                                    prevSrc={gallery.images[(photoIndex + gallery.images.length - 1) % gallery.images.length].url}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() => {
                                        setPhotoIndex((photoIndex + gallery.images.length - 1) % gallery.images.length);
                                        setIsImageLoaded(false); // Ladezustand zurücksetzen
                                    }}
                                    onMoveNextRequest={() => {
                                        setPhotoIndex((photoIndex + 1) % gallery.images.length);
                                        setIsImageLoaded(false); // Ladezustand zurücksetzen
                                    }}
                                    reactModalProps={{
                                        onAfterOpen: () => {
                                            const img = new window.Image();
                                            img.src = gallery.images[photoIndex].url;
                                            img.onload = handleImageLoad; // Ladeüberwachung
                                        },
                                    }}
                                />
                            )}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
