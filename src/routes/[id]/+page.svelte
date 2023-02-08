<script lang="ts">
	import { onMount } from 'svelte';
	import { dateFormat, type AnchorTree } from '../../utils/markdown';
	import type { PageData } from './$types';
	export let data: PageData;
	$: hasAnchorTree = data.page.anchorTree.length > 1;

	let hash: string;
	let anchorTopList: number[] = [];

	const scrollToHash = () => {
		anchorTopList = data.page.anchorTree.map(
			(item: AnchorTree) => document.getElementById(item.id)?.offsetTop
		);
		const index = data.page.anchorTree.findIndex((item: AnchorTree) => `#${item.id}` === hash);
		const top = anchorTopList[index];
		const contentEl = document.querySelector('.content');
		if (top && contentEl) {
			contentEl.scrollTop = top;
		}
	};

	const onHashchange = () => {
		hash = location.hash;
	};

	onMount(() => {
		hash = location.hash;
		scrollToHash();
	});
</script>

<svelte:window on:hashchange={onHashchange} />
<svelte:head>
	<title>ECMAScript - {data.page.title}</title>
</svelte:head>

<section class="md">
	<main class="md-content">
		<div class={`md-content__html ${!hasAnchorTree ? 'md-content__html-no-tree' : ''}`}>
			{@html data.page.html}
		</div>
		{#if hasAnchorTree}
			<div class="anchor-tree">
				<div class="anchor-tree-title">本页目录</div>
				{#each data.page.anchorTree as item}
					<ul class="anchor-tree__list">
						<li style={`padding-left: ${12 * (item.level - 1)}px`}>
							<a
								class={`anchor ${hash === `#${item.id}` ? 'anchor--active' : ''}`}
								title={item.title}
								href={`#${item.id}`}>{item.title}</a
							>
						</li>
					</ul>
				{/each}
			</div>
		{/if}
	</main>
	<footer class="footer">
		<span class="author">译者：{data.page.author}</span>
		<span class="time">时间：{dateFormat(data.page.time)}</span>
	</footer>
</section>

<style lang="less">
	@anchor-tree-height: 280px;

	.footer {
		color: var(--c-gray-6);
		font-size: 0.8rem;
		margin-top: 2rem;
	}

	.md-content {
		display: flex;

		&__html {
			margin-right: @anchor-tree-height;
			padding: 0 24px;

			&-no-tree {
				margin-right: 0;
			}
		}
	}

	.anchor-tree {
		flex: none;
		width: @anchor-tree-height;
		right: 16px;
		position: fixed;
		font-size: 12px;
		border-left: 1px solid var(--tc-placeholder);

		&-title {
			font-weight: 700;
			margin-left: 8px;
			color: var(--c-gray-7);
		}

		&__list {
			list-style: none;
			margin-left: 8px;
		}

		.anchor {
			width: 100%;
			display: inline-block;
			overflow-x: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			flex: none;
			overflow-y: auto;
			color: var(--tc-secondary);
			font-weight: 700;

			&:hover,
			&--active {
				color: var(--tc-primary);
			}
		}
	}

	.author {
		margin-right: 1.5rem;
	}

	@media screen and (max-width: 1100px) {
		.anchor-tree {
			display: none;
		}

		.md-content__html {
			margin-right: 0;
		}
	}
</style>
