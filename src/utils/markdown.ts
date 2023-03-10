import fs from 'fs'
import path from 'path'
import {marked} from 'marked'
import hljs from 'highlight.js'
import grayMatter from 'gray-matter'

export type Docs = {
	id:string
	title:string
	time:string
	author:string
	sort: number
}

export interface AnchorTree {
	id:string,
	title:string,
	level:number
}

export const resolve = (filename:string) => path.resolve('docs',filename)

// 加载markdown文件
export const loadMarkdown = (filename: string): string => fs.readFileSync(resolve(filename), 'utf-8')
// 渲染markdown内容
export const generateDoc = (markdown: string): string => {
	// Parse front matter
	const { data, content } = grayMatter(markdown)
	// Render html from string
	const renderer = new marked.Renderer()
	const anchorTree: AnchorTree[] = []
	renderer.heading = (text:string, level:number) => {
		const id = text.toLowerCase().replace(/[^\w]+/g, '-')
		anchorTree.push({
			title: text,
			id,
			level
		})
	
		return `<h${level} id="${id}">${text}</h${level}>`;
	}
	
	const html = marked.parse(content, {
		renderer,
		breaks: true,
		highlight: (code: string) => hljs.highlightAuto(code).value,
	})

	return JSON.stringify({ ...data, html, anchorTree })
}

// 读取md文件名
export const loadMarkdownFiles = ():Array<Docs> => {
	const fileList:Array<string> = fs.readdirSync('docs')

	const docs:Array<Docs> = fileList.map(filename => {
		const markdown = loadMarkdown(filename)
		const { data:{title,time,author,sort} } = grayMatter(markdown)
		return {
			id:filename.replace('.md',''),
			title,
			time,
			author,
			sort
		}
	}).sort((prev,curr) =>prev.sort - curr.sort)

	return docs
}

export function dateFormat(date:string) :string{
	return Intl.DateTimeFormat('zh-CN', { dateStyle: "full", timeStyle:"short" }).format(new Date(date))
}