<script>
	import Header from './Header.svelte';
	import { page } from '$app/stores';
	import { userClicked } from '../store';
	import './styles.css';
	import InitialBackground from './InitialBackground.svelte';
</script>

<div
	class={`movingBg min-w-screen min-h-screen max-h-screen relative overflow-y-hidden overflow-x-hidden text-zinc-900
	${$page.url.pathname === '/' && 'bg-grainy grayscale-[0.7]'}
	${$page.url.pathname === '/albums' && 'bg-grainy grayscale-[0.7]'}
`}
>
	{#if $userClicked}
		<Header />
		<slot />
	{/if}
	
	<InitialBackground />
</div>
