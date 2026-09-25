import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const obras = defineCollection({
  loader: glob({ base: './src/content/obras', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    estado: z.enum(['en ejecución', 'terminada', 'planificada']),
    fecha: z.coerce.date(),
    imagen: z.string().min(1),
  }),
});

const turismo = defineCollection({
  loader: glob({ base: './src/content/turismo', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    ubicacion: z.string(),
    imagen: z.string().min(1),
  }),
});

export const collections = { obras, turismo };
