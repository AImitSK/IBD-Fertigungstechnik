import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import CTAButton from '@/components/CTAButton';
import FeaturedPostsBox from "@/components/featured-posts";

export const metadata: Metadata = {
  title: 'Seitentiel',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}



function Content() {
  return (
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Über IBD-Fertigungstechnik
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              IBD-Fertigungstechnik GmbH ist Ihr Spezialist für
              CNC-Präzisionsfertigung mit Fokus auf CNC-Drehen, CNC-Fräsen und
              Schleifen. Mit der Übernahme der Körtner GmbH aus Bad Oeynhausen
              setzen wir die 60-jährige Tradition eines erfahrenen Unternehmens
              fort.
            </p>
            <p className="mt-6 text-xl/8 text-gray-700">
              Unsere moderne Ausstattung und unser umfassender Maschinenpark
              ermöglichen uns die Fertigung von Dreh- und Frästeilen in Klein-
              und Großlosen aus Edelstahl und NE-Metallen für verschiedenste
              Industrien, wie die Lebensmittelindustrie, den Maschinenbau und
              die Kunststoffindustrie.
            </p>
            <p className="mt-6 text-xl/8 text-gray-700">
              Unsere Kunden schätzen unseren individuellen Service und unsere umfassenden Fertigungsmöglichkeiten. Mit eigener Montage begleiten wir Projekte von der ersten Skizze bis zur Endmontage. Unsere flexible Produktion umfasst sowohl Einzelteile als auch komplexe Serienteile, stets in gleichbleibend hoher Qualität.
            </p>
            <p className="mt-6 text-xl/8 text-gray-700">
              Unser Maschinenpark umfasst sowohl manuelle Fertigung als auch kurvengesteuerte Automaten und CNC-Bereiche, um vielfältige Kundenanforderungen zu erfüllen. Jedes Produkt durchläuft eine strenge Qualitätskontrolle, die auf Wunsch mit Prüfprotokoll dokumentiert wird.
            </p>
            <p className="mt-6 text-xl/8 text-gray-700">
              Mit unserem motivierten Team und unserem modernen Maschinenpark bieten wir präzise, zuverlässige und individuelle Lösungen. Vertrauen Sie auf über 60 Jahre Erfahrung in der Fertigungstechnik.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                  aria-hidden="true"
                  className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              >
                <rect
                    fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                />
              </svg>
              <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img
                      alt=""
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">
                      Brenna Goyette
                    </div>
                    <div className="text-gray-600">@brenna</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                                    <strong className="font-semibold text-gray-900">CNC-Drehen, CNC-Fräsen und Schleifen</strong>
                                </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                                    <strong className="font-semibold text-gray-900">Fertigung von Klein- und Großlosen</strong>
                                </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                                    <strong className="font-semibold text-gray-900">Komplette Bearbeitung inklusive Bohren, Fräsen und Schleifen</strong>
                                </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                                    <strong className="font-semibold text-gray-900">Eigene Montageabteilung</strong>
                                </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                                    <strong className="font-semibold text-gray-900">Qualitätsendkontrolle mit Prüfprotokoll</strong>
                                </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}


export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Content />
        <CTAButton
            imageSrc="/fraesen.jpg"
            headline="Legen wir los!"
            text="Mit modernster Technologie und einem motivierten Team sorgen wir für zuverlässige Qualität in der CNC-Bearbeitung. Vertrauen Sie auf unsere Expertise und lassen Sie uns gemeinsam Ihre Projekte erfolgreich umsetzen."
            linkText="Anfrage senden"
            linkHref="/kontakt"
        />
        <FeaturedPostsBox />
      <Footer />
    </main>
  )
}
