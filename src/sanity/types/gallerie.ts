import { defineField, defineType } from 'sanity';

// @ts-ignore
export const refGallerie = defineType({
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        defineField({
            name: 'titel',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                defineField({
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        }),
                    ],
                }),
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],

});