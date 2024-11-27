import type { SchemaTypeDefinition } from 'sanity'

import { authorType } from './types/author'
import { blockContentType } from './types/block-content'
import { categoryType } from './types/category'
import { postType } from './types/post'
import { peopleType } from './types/people' // Importieren Sie den neuen Schema-Typ

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, peopleType], // Fügen Sie den neuen Schema-Typ hinzu
}