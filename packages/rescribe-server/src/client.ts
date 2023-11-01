import type { Collection, Collections, Config } from '@rescribejs/core'

import { getItemInCollectionFromSlug, readItemsInCollection } from './helpers'
import type {
	AllParams,
	AllReturn,
	CollectionInterface,
	RescribeClient,
	UniqueReturn,
} from './types'

export function createClient(config: Config<Collections>): RescribeClient {
	let client = {}

	for (const key in config.collections) {
		const collection = config.collections[key]
		client = Object.assign(client, {
			[key]: {
				...generateInterfaceForCollection(collection),
			},
		})
	}

	function generateInterfaceForCollection(collection: Collection) {
		let collectionInterface: CollectionInterface = {
			_format: collection?.format || 'md',
			_label: collection.label,
			_slug: collection.slug,
			_path: collection.path,
			_schema: collection.schema,

			async all({ filter }: AllParams): Promise<AllReturn[]> {
				return await readItemsInCollection({
					collection,
					options: { filter },
				})
			},

			async unique({
				where,
				options = { headings: false },
			}): Promise<UniqueReturn> {
				return await getItemInCollectionFromSlug({
					collection,
					slug: where.slug,
					options,
				})
			},
		}

		return collectionInterface
	}

	return client
}
