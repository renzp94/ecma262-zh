<script lang="ts">
	export let visibleHeight = 300;
	export let bottom = '5rem';
	export let right = '0.625rem';
	export let duration = 500;
	export let target: HTMLElement | undefined =
		typeof document !== 'undefined' ? document.documentElement : undefined;

	let visible = false;
	const onScroll = () => {
		if (target?.scrollTop) {
			visible = target?.scrollTop > visibleHeight;
		}
	};
	if (target) {
		target.onscroll = onScroll;
	}

	const onScrollToTop = () => {
		if (target) {
			top(target, duration);
		}
	};
	const top = (el: Element, duration: number, top = 0) => {
		const cubic = (value: number) => Math.pow(value, 3);
		const easeInOutCubic = (value: number) =>
			value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

		const beginTime = Date.now();
		const beginValue = el.scrollTop;
		const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));
		const frameFunc = () => {
			const progress = (Date.now() - beginTime) / duration;
			if (progress < 1) {
				el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
				rAF(frameFunc);
			} else {
				el.scrollTop = top;
			}
		};
		rAF(frameFunc);
	};
	$: style = `bottom: ${bottom};right: ${right};display: ${visible ? 'flex' : 'none'}`;
</script>

<svelte:window on:scroll={onScroll} />
<div class="back-top" {style} on:click={onScrollToTop}>
	<i class="iconfont icon-back-top" />
</div>

<style>
	.back-top {
		position: fixed;
		bottom: 5rem;
		right: 0.625rem;
		height: 3rem;
		width: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		background-color: var(--c-white);
		cursor: pointer;
	}

	:global(.back-top .icon-back-top) {
		font-size: 2rem;
	}
</style>
