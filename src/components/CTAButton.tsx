import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container'; // Importiere den Container

interface CTAButtonProps {
    imageSrc: string;
    headline: string;
    text: string;
    linkText: string;
    linkHref: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ imageSrc, headline, text, linkText, linkHref }) => {
    return (
        <Container className="mt-32 mb-32"> {/* Verwende Container hier */}
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 shadow-lg min-h-[560px]">
                <div className="relative min-h-[300px] lg:min-h-0">
                    <Image
                        src={imageSrc}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-none lg:rounded-l-lg"
                    />
                    <div className="absolute inset-0 bg-[#1F274D] opacity-30 rounded-none lg:rounded-l-lg"></div>
                </div>
                <div className="flex flex-col justify-center bg-[#1F274D] text-white p-16 lg:p-24 rounded-none lg:rounded-r-lg">
                    <h2 className="text-3xl font-bold mb-4 text-left">{headline}</h2>
                    <p className="mb-8 text-left">{text}</p>
                    <div className="text-left">
                        <a
                            href={linkHref}
                            className="bg-[#7CB6E4] hover:bg-[#B0D3EF] text-white font-bold py-2 px-4 rounded-full inline-block"
                        >
                            {linkText}
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CTAButton;