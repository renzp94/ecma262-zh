<script lang="ts">
	import BackTop from '$lib/components/BackTop.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const target =
		typeof document !== 'undefined'
			? (document.querySelector('.content') as HTMLElement)
			: undefined;
	$: index = data.files.findIndex((item) => item.id === data.id);
	$: prevDocs = index > 0 ? data.files[index - 1] : null;
	$: nextDocs = data.files.length > index ? data.files[index + 1] : null;
</script>

<section class="layout">
	<aside class="aside">
		<a class="logo-link" href="/">
			<img class="logo" alt="logo" src="/assets/images/ecma-logo.svg" />
		</a>
		<ul class="menu">
			{#each data.files as file (file.id)}
				<li>
					<a class={`menu-item ${data.id === file.id ? 'menu-item--active' : ''}`} href={file.id}>
						<div class="menu-text">{file.title}</div>
					</a>
				</li>
			{/each}
		</ul>
		<div class="aside-footer">
			<a
				class="github"
				href="https://github.com/renzp94/ecma262-zh"
				target="_blank"
				rel="noreferrer"
			>
				<i class="iconfont icon-github" />
			</a>
		</div>
	</aside>
	<main class="content">
		<slot />
		<footer class="footer">
			<div>
				{#if prevDocs}
					<a class="footer-link" href={prevDocs.id}>
						<span class="footer-link-text">{prevDocs.title}</span>
					</a>
				{/if}
			</div>
			<div>
				{#if nextDocs}
					<a class="footer-link" href={nextDocs.id}>
						<span class="footer-link-text">{nextDocs.title}</span>
					</a>
				{/if}
			</div>
		</footer>
	</main>
	<BackTop {target} />
</section>

<style>
	.layout {
		display: flex;
		background-color: var(--bg-base);
		height: 100%;
	}
	.aside {
		width: 200px;
		height: 100%;
		padding: 16px;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background-color: #fff;
		flex: none;
		overflow-y: auto;
	}
	.menu {
		margin: 12px 0;
	}
	.menu-text {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: var(--c-gray-6);
		font-weight: 700;
	}
	.menu-item--active .menu-text {
		color: var(--tc-primary);
	}
	.menu-text:hover {
		text-decoration: underline;
		color: var(--tc-primary);
	}

	.content {
		flex: 1;
		padding: 24px;
		overflow: auto;
	}
	.logo {
		width: 100%;
		object-fit: cover;
	}
	.logo-link {
		display: block;
	}
	.github {
		color: var(--c-gray-5);
	}
	.github:hover {
		color: var(--tc-primary);
	}
	.icon-github {
		font-size: 28px;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
	}
	.footer-link {
		display: block;
		color: var(--tc-primary);
		border: 1px solid var(--c-gray-4);
		padding: 8px 16px;
		border-radius: 8px;
		transition: border 0.3s;
	}
	.footer-link:hover {
		border-color: var(--tc-primary);
	}
	.footer-link:hover .footer-link-text {
		text-decoration: underline;
	}
</style>
