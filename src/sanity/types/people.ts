import { defineField, defineType } from 'sanity';

export const peopleType = defineType({
    name: 'people',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().error('A name is required.'),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (Rule) => Rule.required().error('A role is required.'),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Allow cropping
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                },
            ],
            validation: (Rule) => Rule.required().error('An image is required.'),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string', // Stellen Sie sicher, dass der Typ 'string' ist
            validation: (Rule) =>
                Rule.required()
                    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
                        name: 'email', // Fehlername
                        invert: false, // Verwenden Sie 'invert' um die Regel umzukehren
                    })
                    .error('A valid email is required.'),
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
            validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }).error('A valid LinkedIn URL is required.'),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
});