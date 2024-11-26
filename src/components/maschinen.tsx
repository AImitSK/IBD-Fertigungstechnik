"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    useCdn: true,
});

interface Maschine {
    _id: string;
    titel: string;
    beschreibung: string;
    maschinentyp: {
        _ref: string;
        _type: string;
    };
}

export default function MaschinenTable({ maschinentyp }: { maschinentyp: string }) {
    const [maschinen, setMaschinen] = useState<Maschine[]>([]);

    useEffect(() => {
        async function fetchMaschinen() {
            const query = `
                *[_type == "maschinen" && maschinentyp._ref in *[_type == "maschinentype" && title == $maschinentyp]._id]{
                    _id,
                    titel,
                    beschreibung,
                    maschinentyp
                }
            `;
            const params = { maschinentyp };
            console.log('Fetching machines with type:', maschinentyp);

            try {
                const result = await client.fetch(query, params);
                console.log('Query:', query);
                console.log('Params:', params);
                console.log('Fetch result:', result);
                setMaschinen(result);
                if (result.length === 0) {
                    console.warn(`No machines found for maschinentyp: ${maschinentyp}. Please verify the backend data.`);
                }
            } catch (error) {
                console.error('Error fetching machines:', error);
            }
        }

        fetchMaschinen();
    }, [maschinentyp]);

    return (
        <div className="my-12 px-0 sm:px-0 lg:px-0">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: 'tight', color: '#111827' }}>
                        {maschinentyp}
                    </h2>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-1/2">
                                    Titel
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 w-1/2">
                                    Beschreibung
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {maschinen.length > 0 ? (
                                maschinen.map((maschine) => (
                                    <tr key={maschine._id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 w-1/2">
                                            {maschine.titel}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-1/2">{maschine.beschreibung}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={2} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 w-1/2">
                                        Keine Maschinen gefunden
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}