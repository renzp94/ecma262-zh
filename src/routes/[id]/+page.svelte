<script lang="ts">
	import { dateFormat } from '../../utils/markdown';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>ECMAScript - {data.page.title}</title>
</svelte:head>

<section class="md">
	<main class="md-content">
		{@html data.page.html}
	</main>
	<footer class="footer">
		<span class="author">译者：{data.page.author}</span>
		<span class="time">时间：{dateFormat(data.page.time)}</span>
	</footer>
</section>

<style lang="less">
	.footer {
		color: var(--c-gray-6);
		font-size: 0.8rem;
		margin-top: 2rem;
	}

	.author {
		margin-right: 1.5rem;
	}
</style>
