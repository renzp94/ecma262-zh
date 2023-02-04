import { loadMarkdownFiles } from '../utils/markdown'
import type { PageServerLoad } from './[id]/$types'

export const load:PageServerLoad = (({ params }) => {
	const files = loadMarkdownFiles()

	return { files, id: params.id }
})