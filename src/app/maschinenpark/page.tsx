import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import MaschinenTable from '@/components/maschinen';

export const metadata: Metadata = {
    title: 'Seitentitel',
    description:
        'We’re on a mission to transform revenue organizations by harnessing vast amounts of customer data.',
}

export default function Company() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>
            <Container>
                <MaschinenTable maschinentyp="CNC-Drehen" />
                <MaschinenTable maschinentyp="CNC-Fräsen" />
                <MaschinenTable maschinentyp="CNC-Schleifen" />
            </Container>
            <Footer />
        </main>
    )
}