'use client';

import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { client } from '@/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';

// SVG Icon direkt eingebettet und verkleinert
const MailIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"  // Verkleinert auf h-5 und w-5
    >
        <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
    </svg>
);

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

interface Person {
    name: string;
    role: string;
    image: {
        asset: {
            _ref: string;
        };
    };
    email?: string;
    linkedinUrl?: string;
}

const Team: React.FC = () => {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        const fetchPeople = async () => {
            const query = '*[_type == "people"]{name, role, image, email, linkedinUrl}';
            const result = await client.fetch(query);
            setPeople(result);
        };

        fetchPeople();
    }, []);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our team</h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img alt={person.name} src={urlFor(person.image).width(1024).height(1024).url()} className="aspect-[3/2] w-full rounded-2xl object-cover" />
                            <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-base/7 text-gray-600">{person.role}</p>
                            <ul role="list" className="mt-6 flex gap-x-6">
                                {person.email && (
                                    <li>
                                        <a href={`mailto:${person.email}`} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Email</span>
                                            <MailIcon />
                                        </a>
                                    </li>
                                )}
                                {person.linkedinUrl && (
                                    <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                                                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                                            </svg>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Company() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>
            <Container>
                <Team />
            </Container>
            <Footer />
        </main>
    );
}