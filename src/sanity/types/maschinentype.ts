import { TagIcon } from '@heroicons/react/16/solid';
import { defineField, defineType } from 'sanity';

export const maschinentypeType = defineType({
    name: 'maschinentype',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required().error('A slug is required.'),
        }),
    ],
});