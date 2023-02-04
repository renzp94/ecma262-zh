import { loadMarkdown, generateDoc } from '../../utils/markdown'
import type { PageServerLoad } from './$types'

export const load:PageServerLoad = (({ params: { id } }) => {
	const markdown = loadMarkdown(`${id}.md`)
	const doc = generateDoc(markdown)

	return { page:JSON.parse(doc) }
})