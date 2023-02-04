import { loadMarkdownFiles } from '../utils/markdown'
import type { PageServerLoad } from './$types'

export const load:PageServerLoad = (() => {
	const files = loadMarkdownFiles()

	return { files }
})