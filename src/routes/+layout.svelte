<script lang="ts">
	import BackTop from '$lib/components/BackTop.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="layout">
	<aside class="aside">
		<ul class="list">
			{#each data.files as file (file.id)}
				<li>
					<a class="item" href={`${file.id}`}>
						<div class="title">{file.title}</div>
					</a>
				</li>
			{/each}
		</ul>
	</aside>
	<main class="content">
		<slot />
	</main>
	<BackTop />
</section>

<style>
	.layout {
		display: flex;
		background-color: var(--bg-base);
		height: 100%;
	}
	.aside {
		width: 200px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 16px;
		background-color: #fff;
		flex: none;
	}

	.content {
		flex: 1;
		padding: 16px;
		overflow-x: auto;
	}
</style>
