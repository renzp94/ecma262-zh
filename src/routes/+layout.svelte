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
						<div title={file.title} class="menu-text">{file.title}</div>
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

<style lang="less">
	.layout {
		display: flex;
		background-color: var(--bg-base);
		height: 100%;
	}
	.aside {
		width: 25%;
		max-width: 350px;
		min-width: 200px;
		height: 100%;
		padding: 16px;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: none;
		overflow-y: auto;

		&-footer {
			border-top: 1px solid var(--c-gray-4);
		}
	}
	.menu {
		margin: 12px 0;
		&-text {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: var(--c-gray-6);
			font-weight: 700;
			&:hover {
				text-decoration: underline;
				color: var(--tc-primary);
			}
		}
		&-item--active &-text {
			color: var(--tc-primary);
		}
	}
	.content {
		flex: 1;
		padding: 16px;
		overflow: auto;
		background-color: #fff;
		scroll-behavior: smooth;
	}
	.logo {
		width: 100%;
		object-fit: cover;
		&-link {
			display: block;
			border-bottom: 1px solid var(--c-gray-4);
		}
	}
	.github {
		color: var(--c-gray-5);
		&:hover {
			color: var(--tc-primary);
		}
	}
	.icon-github {
		font-size: 28px;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
		&-link {
			display: block;
			color: var(--tc-primary);
			border: 1px solid var(--c-gray-4);
			padding: 8px 16px;
			border-radius: 8px;
			transition: border 0.3s;
			&:hover {
				border-color: var(--tc-primary);
				.footer-link-text {
					text-decoration: underline;
				}
			}
		}
	}
</style>
