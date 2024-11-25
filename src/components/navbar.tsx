'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'; // Korrigierter Import
import { motion } from 'framer-motion';
import { Link } from './link';
import Image from 'next/image';
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';

interface LinkItem {
    href: string;
    label: string;
    children?: LinkItem[];
}

const links: LinkItem[] = [
    { href: '/maschinenpark', label: 'Maschinenpark', children: [] },
    {
        href: '',
        label: 'Techniken',
        children: [
            { href: '/drehen', label: 'Drehen' },
            { href: '/fraesen', label: 'Fräsen' },
            { href: '/schleifen', label: 'Schleifen' },
        ],
    },
    {
        href: '',
        label: 'Unternehmen',
        children: [
            { href: '/unternehmen/ueber-ibd', label: 'Über IBD' },
            { href: '/unternehmen/karriere', label: 'Karriere' },
        ],
    },
    {
        href: '',
        label: 'Kontakt',
        children: [
            { href: '/kontakt/ansprechpartner', label: 'Ansprechpartner' },
            { href: '/kontakt/kontaktformular', label: 'Kontaktformular' },
        ],
    },
];

function DesktopNav() {
    return (
        <nav className="relative hidden lg:flex">
            {links.map(({ href, label, children }) => (
                <PlusGridItem key={label} className="relative flex">
                    {children && children.length > 0 ? (
                        <Popover className="relative flex">
                            <PopoverButton className="inline-flex items-center gap-x-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%] focus:outline-none">
                                {label}
                                <ChevronDownIcon className="size-5" />
                            </PopoverButton>
                            <PopoverPanel className="absolute z-10 mt-3 w-screen max-w-xs -translate-x-1/2 px-4">
                                <div className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                                    {children.map(({ href, label }) => (
                                        <Link key={href} href={href} className="block p-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 focus:outline-none">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                    ) : (
                        <Link
                            href={href}
                            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%] focus:outline-none"
                        >
                            {label}
                        </Link>
                    )}
                </PlusGridItem>
            ))}
        </nav>
    );
}

function MobileNavButton() {
    return (
        <DisclosureButton
            className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden focus:outline-none"
            aria-label="Open main menu"
        >
            <Bars3Icon className="size-6" /> {/* Korrigierte Zeile */}
        </DisclosureButton>
    );
}

function MobileNav() {
    return (
        <DisclosurePanel className="lg:hidden">
            <div className="flex flex-col gap-6 py-4">
                {links.map(({ href, label, children }, linkIndex) => (
                    <motion.div
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: 'easeInOut',
                            rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
                        }}
                        key={href}
                    >
                        <DisclosureButton className="flex w-full justify-between px-4 py-2 text-left text-lg font-medium text-gray-900 focus:outline-none">
                            {label}
                        </DisclosureButton>
                        {children && children.length > 0 && (
                            <Disclosure.Panel className="pl-4 py-2 border-l-2 border-gray-200">
                                <div className="flex flex-col gap-2">
                                    {children.map(({ href, label }) => (
                                        <Link key={href} href={href} className="text-base text-gray-700 hover:text-gray-900 focus:outline-none">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        )}
                    </motion.div>
                ))}
            </div>
            <div className="absolute left-1/2 w-screen -translate-x-1/2">
                <div className="absolute inset-x-0 top-0 border-t border-black/5" />
                <div className="absolute inset-x-0 top-2 border-t border-black/5" />
            </div>
        </DisclosurePanel>
    );
}

interface NavbarProps {
    banner?: React.ReactNode;
}

export function Navbar({ banner }: NavbarProps) {
    return (
        <Disclosure as="header" className="pt-12 sm:pt-16">
            <PlusGrid>
                <PlusGridRow className="relative flex justify-between">
                    <div className="relative flex gap-6">
                        <PlusGridItem className="py-3">
                            <Link href="/" title="Home">
                                <Image src="/logo-ibd-ft.svg" alt="Logo" width={202} height={44} className="h-11" />
                            </Link>
                        </PlusGridItem>
                        {banner && (
                            <div className="relative hidden items-center py-3 lg:flex">
                                {banner}
                            </div>
                        )}
                    </div>
                    <DesktopNav />
                    <MobileNavButton />
                </PlusGridRow>
            </PlusGrid>
            <MobileNav />
        </Disclosure>
    );
}