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

export const resolve = (filename:string) => path.resolve('docs',filename)

// 加载markdown文件
export const loadMarkdown = (filename: string): string => fs.readFileSync(resolve(filename), 'utf-8')
// 渲染markdown内容
export const generateDoc = (markdown: string): string => {
	// Parse front matter
	const { data, content } = grayMatter(markdown)
	// Render html from string
	const renderer = new marked.Renderer()
	
	const html = marked.parse(content, {
		renderer,
		highlight: (code: string) => hljs.highlightAuto(code).value,
	})

	return JSON.stringify({ ...data, html })
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

export function dateFormat(date:string,fmt = 'YYYY-mm-dd HH:MM:SS') :string{
	let ret;
	
	let dateTime = new Date(date)
	const timeDiff = 1000 * 60 * 60 * 8
	const timeStamp = dateTime.getTime()
	dateTime = new Date(timeStamp - timeDiff)
	
	const opt:any = {
			"Y+": dateTime.getFullYear().toString(),        // 年
			"m+": (dateTime.getMonth() + 1).toString(),     // 月
			"d+": dateTime.getDate().toString(),            // 日
			"H+": dateTime.getHours().toString(),           // 时
			"M+": dateTime.getMinutes().toString(),         // 分
			"S+": dateTime.getSeconds().toString()          // 秒
	};
	for (const k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt);
			if (ret) {
					fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			};
	};
	return fmt;
}