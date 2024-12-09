
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import {Heading, Lead, Subheading} from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Image from 'next/image';
import FeaturedPostsBox from '@/components/featured-posts';


export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

const teaserBoxes = [
    {
        name: 'CNC Drehen',
        imgSrc: '/01.png',
        description: 'Präzise Fertigung von Bauteilen mit Durchmessern von 4 mm bis 600 mm. Wir bieten Ihnen hohe Flexibilität und Effizienz.',
        href: '/drehen',  // Angepasste Route
    },
    {
        name: 'CNC Fräsen',
        imgSrc: '/01.png',
        description: 'Hochpräzise Fräsbearbeitung für anspruchsvolle Geometrien. Von kleinen Bauteilen bis hin zu komplexen 3D-Formen.',
        href: '/fraesen',  // Angepasste Route
    },
    {
        name: 'CNC Schleifen',
        imgSrc: '/01.png',
        description: 'Perfekte Oberflächen für höchste Ansprüche. Wir bieten Rund- und Flachschleifen für die optimale Endbearbeitung.',
        href: '/schleifen',  // Angepasste Route
    },
];

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[1.0] font-medium tracking-tight text-gray-950 sm:text-6xl/[1.0] md:text-7xl/[1.0]">
              Zuverlässiger Qualität <br />in der CNC-Bearbeitung.
          </h1>
          <p className="mt-8 mb-16 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Ihr Spezialist für CNC-Drehen, Fräsen und Schleifen.
          </p>

        </div>
      </Container>
    </div>
  )
}

function TeaserBoxen() {
    return (
        <div className="relative m-[-150px] mb-[150px]">
            <Container className="relative">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {teaserBoxes.map((box, boxIndex) => (
                        <TeaserBox key={boxIndex} box={box} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

function TeaserBox({ box }: { box: (typeof teaserBoxes)[number] }) {
    return (
        <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <img className="mb-4 mx-auto w-full h-48 object-cover rounded-lg" src={box.imgSrc} alt={box.name} />
                    <p className="mt-1 text-2xl/8 font-medium text-gray-950">{box.name}</p>
                    <p className="mt-2 text-sm/6 text-gray-950/75">{box.description}</p>
                    <div className="mt-8">
                        <Button href={box.href}>mehr hierzu</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentArea() {
    return (
        <Container className="mt-16">
            <Heading as="h1">Helping companies generate revenue.</Heading>
            <Lead className="mt-6 max-w-3xl">
                We’re on a mission to transform revenue organizations by harnessing vast
                amounts of illegally acquired customer data.
            </Lead>
            <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div className="max-w-lg">
                    <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
                    <p className="mt-6 text-sm/6 text-gray-600">
                        At Radiant, we are dedicated to transforming the way revenue
                        organizations source and close deals. Our mission is to provide our
                        customers with an unfair advantage over both their competitors and
                        potential customers through insight and analysis. We’ll stop at
                        nothing to get you the data you need to close a deal.
                    </p>
                </div>
                <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                    <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                        <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                            <img
                                alt=""
                                src="/company/1.jpg"
                                className="block size-full object-cover"
                            />
                        </div>
                        <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                            <img
                                alt=""
                                src="/company/2.jpg"
                                className="block size-full object-cover"
                            />
                        </div>

                    </div>
                </div>

            </section>
        </Container>
    )
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



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
          <TeaserBoxen />
          <ContentArea />
          <CTABox />
          <FeaturedPostsBox />
      </main>
      <Footer />
    </div>
  )
}