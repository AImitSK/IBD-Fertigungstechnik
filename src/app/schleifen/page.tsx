'use client';

import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import MaschinenTable from '@/components/maschinen';
import * as React from "react";
import { Heading } from "@/components/text";
import Image from "next/image";
import Gallery from "@/components/gallery";

const textBoxes = [
    {
        name: 'CNC-Drehen mit Präzision',
        description: 'Wir fertigen präzise Drehteile aus verschiedenen Materialien wie Edelstahl, NE-Metallen und Guss. Unsere CNC-Drehmaschinen ermöglichen Durchmesser von 4 mm bis 600 mm und eine Bearbeitungslänge bis 2000 mm.',
    },
    {
        name: 'Komplexe Bearbeitungen',
        description: 'Unsere CNC-Drehmaschinen mit C- und Y-Achse sowie angetriebenen Werkzeugen und Gegenspindeln bieten eine vollständige Bearbeitung in einem Arbeitsgang.',
    },
    {
        name: 'Hohe Flexibilität',
        description: 'Ob Einzelteil, Kleinserie oder Großserie – unsere Maschinen sind für jede Stückzahl gerüstet. Die Kombination aus modernster CAD/CAM-Software und qualifizierten Fachkräften garantiert erstklassige Ergebnisse.',
    },
];

function ContentArea() {
    return (
        <Container className="mt-16">
            <h3 className="text-2xl font-medium tracking-tight text-[#7CB6E4]">
                Drehen
            </h3>
            <Heading as="h1">
                Flexible Drehlösungen<br />
                für anspruchsvolle<br />
                Fertigungsprozesse
            </Heading>
            <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div className="max-w-lg">
                    <p className="text-md/6 mt-6 text-gray-600">
                        Unsere Drehverfahren bieten eine präzise und effiziente
                        Antwort auf Ihre Fertigungswünsche. Mit unseren modernen
                        CNC-Maschinen erfüllen wir unterschiedlichste Anforderungen – von
                        kleinen Durchmessern bis zu komplexen Formen. Langjährige Erfahrung
                        und unser hoher Qualitätsanspruch machen uns zu Ihrem verlässlichen
                        Partner in der Drehfertigung.
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
    )
}

function TextBoxen() {
    return (
        <div className="flex-center my-[150px]">
            <Container className="relative">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {textBoxes.map((box, boxIndex) => (
                        <TextBox key={boxIndex} box={box} index={boxIndex} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

function TextBox({ box, index }: { box: (typeof textBoxes)[number], index: number }) {
    // Bestimme das Styling basierend auf dem Index der Box
    const isDark = index === 0;
    const boxStyles = isDark
        ? "bg-[#1F274D] text-white"
        : "bg-[#E9EAEE] text-[#1F274D]";

    return (
        <div className="-m-2 rounded-4xl ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md p-4 flex">
            <div className={`${boxStyles} p-6 shadow-md ring-1 ring-black/5 rounded-3xl flex flex-col justify-between w-full`}>
                <div>
                    <p className="text-2xl font-medium">{box.name}</p>
                    <p className="mt-2 text-lg">{box.description}</p>
                </div>
            </div>
        </div>
    );
}

function CTABox() {
    return (
        <Container className="mt-32 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 rounded-lg shadow-lg min-h-[560px]">
                <div className="relative">
                    <Image
                        src="/fraesen.jpg"
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

function QualitySection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between my-[150px]">
            <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#1F274D]">
                    Qualität, auf die Sie sich <br /> verlassen können
                </h2>
            </div>
            <div className="md:w-1/6 flex justify-center my-6 md:my-0">
                <Image
                    src="/germany.png"
                    alt="Made in Germany"
                    width={80}
                    height={80}
                    className="object-contain"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left text-gray-600">
                <p>
                    Unser Ziel ist es, Ihnen Produkte zu liefern, die in puncto
                    Maßgenauigkeit und Oberflächenqualität höchsten Ansprüchen gerecht
                    werden. Dafür setzen wir auf CNC-Rundschleifen bis zu einer Länge von
                    600 mm, um selbst anspruchsvollste Toleranzen zu erreichen.
                </p>
            </div>
        </div>
    );
}



export default function Schleifen() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>
            <ContentArea />
            <TextBoxen />
            <Container>
                <Gallery galleryName="Drehen" galleryTitel="Referenzen" />
                <MaschinenTable maschinentyp="CNC-Drehen" />
            </Container>
            <CTABox />
            <Container>
                <QualitySection />
            </Container>
            <Footer />
        </main>
    );
}