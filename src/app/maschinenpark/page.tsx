'use client';

import * as React from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import MaschinenTable from '@/components/maschinen';
import { Heading } from '@/components/text';
import Image from 'next/image';
import { getFeaturedPosts } from '@/sanity/queries';
import { image as sanityImage } from '@/sanity/image';
import dayjs from "dayjs";
import {Link} from "@/components/link";

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

    async function FeaturedPosts() {
        let featuredPosts = await getFeaturedPosts(3);

        if (featuredPosts.length === 0) {
            return null;
        }

        return (
            <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
                <Container>
                    <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
                    <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {featuredPosts.map((post) => (
                            <div
                                key={post.slug}
                                className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
                            >
                                {post.mainImage && (
                                    <img
                                        alt={post.mainImage.alt || ''}
                                        src={sanityImage(post.mainImage).size(1170, 780).url()}
                                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                                    />
                                )}
                                <div className="flex flex-1 flex-col p-8">
                                    <div className="text-sm/5 text-gray-700">
                                        {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                                    </div>
                                    <div className="mt-2 text-base/7 font-medium">
                                        <Link href={`/blog/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </div>
                                    <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                                        {post.excerpt}
                                    </div>
                                    {post.author && (
                                        <div className="mt-6 flex items-center gap-3">
                                            {post.author.image && (
                                                <img
                                                    alt=""
                                                    src={sanityImage(post.author.image).size(64, 64).url()}
                                                    className="aspect-square size-6 rounded-full object-cover"
                                                />
                                            )}
                                            <div className="text-sm/5 text-gray-700">
                                                {post.author.name}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
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
            <FeaturedPosts />
            <Footer />
        </main>
    );
};

export default MaschinenPark;