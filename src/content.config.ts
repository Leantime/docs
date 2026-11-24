import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	/** Starlight's interface text, changed in src/content/i18n/en.json (e.g. "Suggest an edit"). */
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
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
				 * Where the page applies, shown under the title (src/lib/availability.ts sets a default per folder):
				 * `both` (Cloud and self-hosted), `self-hosted` or `cloud`.
				 */
				edition: z.enum(['both', 'self-hosted', 'cloud']).optional(),
				/** The plugin the page is about. Shows "Plugin: name" (linked to `url`) instead of "Core feature". */
				plugin: z.object({ name: z.string(), url: z.string().url().optional() }).optional(),
				/** The Leantime version the page was last checked against, e.g. "3.14". */
				checked: z.string().optional(),
				/**
				 * The "At a glance" box under the title: how long the task takes, who it's for,
				 * what you need before you start, where you do the work (in order) and what you have at the end.
				 * Also published as timeRequired / educationalLevel in the page's structured data.
				 */
				glance: z
					.object({
						minutes: z.number().int().positive().optional(),
						/** For a range: `minutes: 10` and `maxMinutes: 30` show "10–30 min". */
						maxMinutes: z.number().int().positive().optional(),
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
