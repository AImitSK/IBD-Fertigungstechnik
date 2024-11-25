import { defineField, defineType } from 'sanity';

export const maschinenType = defineType({
    name: 'maschinen',
    type: 'document',
    fields: [
        defineField({
            name: 'titel',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'beschreibung',
            title: 'Beschreibung',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'titel',
            },
            validation: (Rule) => Rule.required().error('A slug is required.'),
        }),
        defineField({
            name: 'maschinentyp',
            title: 'Maschinentyp',
            type: 'reference',
            to: { type: 'maschinentype' },
            validation: (Rule) => Rule.required().error('Please select a machine type.'),
        }),
    ],
    preview: {
        select: {
            title: 'titel',
            subtitle: 'maschinentyp.title',
        },
    },
});