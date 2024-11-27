import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import ContactForm from '@/components/contact-form' // Stelle sicher, dass der Pfad korrekt ist
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Seitentitel',
    description:
        'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}

export default function Company() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
                <ContactForm /> {/* Kontaktformular hinzufügen */}
            </Container>
            <Footer />
        </main>
    )
}