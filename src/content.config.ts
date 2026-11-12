import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/**
				 * Which colour-coded section the page belongs to. Most pages get it from their folder
				 * (src/lib/sections.ts); set it to put a page somewhere else, e.g. `section: ai`.
				 */
				section: z.enum(['install', 'use', 'ai', 'learn', 'dev']).optional(),
				/**
				 * The "At a glance" box under the title: how long the task takes, who it's for,
				 * what you need before you start, where you do the work (in order) and what you have at the end.
				 * Also published as timeRequired / educationalLevel in the page's structured data.
				 */
				glance: z
					.object({
						minutes: z.number().int().positive().optional(),
						level: z.enum(['Beginner', 'Some experience', 'Advanced']).optional(),
						needs: z.array(z.string()).optional(),
						where: z.array(z.string()).optional(),
						result: z.string().optional(),
					})
					.optional(),
			}),
		}),
	}),
};
