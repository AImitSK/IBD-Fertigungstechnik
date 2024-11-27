'use client';

import * as React from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import MaschinenTable from '@/components/maschinen';
import { Heading } from '@/components/text';
import Image from 'next/image';
import FeaturedPostsBox from "@/components/featured-posts";

const MaschinenPark = () => {

    function ContentArea() {
        return (
            <Container className="mt-16">
                <h3 className="text-2xl font-medium tracking-tight text-[#7CB6E4]">Maschinenpark</h3>
                <Heading as="h1">
                    Unser Maschinenpark liefert <br />
                    Präzision und Vielfalt
                </Heading>
                <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                    <div className="max-w-lg">
                        <p className="mt-6 text-md/6 text-gray-600">
                            Unsere Fertigung basiert auf einem hochmodernen Maschinenpark,
                            der uns maximale Flexibilität und höchste Präzision ermöglicht.
                            Hier erhalten Sie einen Überblick über die einzelnen Bereiche
                            und ihre Ausstattung.
                        </p>
                    </div>
                    <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="/maschinen-01.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                                <img
                                    alt=""
                                    src="/maschinen-02.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        );
    }

    function CTABox() {
        return (
            <Container className="mt-32 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 rounded-lg shadow-lg min-h-[560px]">
                    <div className="relative">
                        <Image
                            src="/team.jpg"
                            alt="Fräsen"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-l-lg lg:rounded-l-lg lg:rounded-r-none"
                        />
                    </div>
                    <div
                        className="flex flex-col justify-center bg-[#1F274D] text-white p-16 lg:p-24 rounded-r-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-left">Legen wir los!</h2>
                        <p className="mb-8 text-left">
                            Mit modernster Technologie und einem motivierten Team sorgen
                            wir für zuverlässige Qualität in der CNC-Bearbeitung. Vertrauen
                            Sie auf unsere Expertise und lassen Sie uns gemeinsam Ihre
                            Projekte erfolgreich umsetzen.
                        </p>
                        <div className="text-left">
                            <a
                                href="/kontakt"
                                className="bg-[#7CB6E4] hover:bg-[#B0D3EF] text-white font-bold py-2 px-4 rounded-full inline-block"
                            >
                                Anfrage senden
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>
            <ContentArea />
            <Container>
                <MaschinenTable maschinentyp="CNC-Drehen" />
                <MaschinenTable maschinentyp="CNC-Fräsen" />
                <MaschinenTable maschinentyp="CNC-Schleifen" />
            </Container>
            <CTABox />
            <FeaturedPostsBox />
            <Footer />
        </main>
    );
};

export default MaschinenPark;