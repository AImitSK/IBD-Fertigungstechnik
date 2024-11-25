'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from '@/sanity/env';
import { schema } from '@/sanity/schema';
import { maschinenType } from '@/sanity/types/maschinen';
import { maschinentypeType } from '@/sanity/types/maschinentype';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [...schema.types, maschinenType, maschinentypeType],
  },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});