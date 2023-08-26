import type { Collection, Schema, SchemaKey } from '@rescribe/core'
import { REMIX_BASE_PATH } from '@rescribe/core'
import fg from 'fast-glob'
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { z } from 'zod'

export async function readItemsInCollection(collection: Collection) {
	const { path } = collection
	const fullPath = `${process.cwd()}/${REMIX_BASE_PATH}/${path}.{md,mdx}`
	const entries = await fg(fullPath, { onlyFiles: true })

	return entries
}

export function generateZodSchema<key extends SchemaKey>(
	collectionSchema: Schema<key>
) {
	const collectionSchemaEntries = Object.keys(collectionSchema).map((key) => {
		const item = collectionSchema[key as key]
		// TODO: add better zod types for slug and url
		switch (item.type) {
			case 'date': {
				return [key, z.coerce.date()]
			}
			case 'boolean': {
				return [key, z.boolean().default(false)]
			}
			default: {
				return [key, z.string()]
			}
		}
	})

	const formDataSchema = Object.fromEntries(collectionSchemaEntries)

	return formDataSchema
}

export function generateMarkdownFromHtml(html: string) {
	const textReplace = [/\[\s\]/g, '[ ]'] as const
	const markdown = NodeHtmlMarkdown.translate(html, {
		bulletMarker: '-',
		globalEscape: textReplace,
		useInlineLinks: false,
	})

	return markdown
}
