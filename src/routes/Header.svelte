<script>
	import HeaderLink from '../components/HeaderLink.svelte';

	const links = [
		{ name: 'HOME', goToPage: '/', ariaLabel: 'To Home Section' },
	];
</script>

<header
	class={`px-1 font-bold header z-[10000] border-b sm:border-r border-zinc-500 m-auto absolute`}
>
	<nav>
		<ul class="flex flex-col px-6 sm:py-6 items-center gap-4 text-3xl w-screen h-[50px] sm:h-screen sm:w-[50px]">
			{#each links as link}
				<HeaderLink {link} />
			{/each}
		</ul>
	</nav>
</header>
