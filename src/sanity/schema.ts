import type { SchemaTypeDefinition } from 'sanity'

import { authorType } from './types/author'
import { blockContentType } from './types/block-content'
import { categoryType } from './types/category'
import { postType } from './types/post'
import { peopleType } from './types/people' // Importieren Sie den neuen Schema-Typ
import { refGallerie } from './types/gallerie'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, peopleType, refGallerie], // Fügen Sie den neuen Schema-Typ hinzu
}