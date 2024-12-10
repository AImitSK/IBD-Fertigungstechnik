"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    useCdn: true,
});

interface ImageData {
    url: string;
    alt: string;
}

interface Gallery {
    _id: string;
    titel: string;
    images: ImageData[];
}

interface GalleryProps {
    galleryName: string;
    galleryTitel: string;
}

export default function Gallery({ galleryName, galleryTitel }: GalleryProps) {
    const [gallery, setGallery] = useState<Gallery | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

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
                    console.warn(`No gallery found for name: ${galleryName}`);
                }
            } catch (error) {
                console.error("Error fetching gallery:", error);
            }
        }

        fetchGallery();
    }, [galleryName]);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="my-12 mx-auto max-w-7xl px-0">
            {gallery ? (
                <>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-6">
                        {galleryTitel}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {gallery.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full h-auto cursor-pointer group"
                                onClick={() => handleImageClick(index)}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.alt || "Image"}
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                    <Lightbox
                        open={isOpen}
                        close={() => setIsOpen(false)}
                        slides={gallery.images.map((img) => ({
                            src: img.url,
                            alt: img.alt || "Image",
                        }))}
                        index={currentIndex} // Startet bei dem Bild, das angeklickt wurde
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
