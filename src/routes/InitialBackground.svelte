<script lang="ts">
	import { onMount } from 'svelte';

	let mouseY = 500;
	let mouseX = 500;

	const moveSpan = (el: HTMLElement) => {
		el.style.left = mouseX + 'px';
		el.style.top = mouseY + 'px';
	};

	const handleMouseMovement = (e: MouseEvent) => {
		const newMouseY = e.screenY;
		const newMouseX = e.screenX;

		mouseY = newMouseY - 150;
		mouseX = newMouseX - 150;

		const getSpan = document.getElementById('followingSpan');

		if (getSpan) {
			moveSpan(getSpan);
		}
	};

	onMount(() => {
		const getBg = document.getElementById('initialBg');

		if (getBg) {
			document.addEventListener('mousemove', handleMouseMovement);

			const handleClick = () => {
				getBg.classList.add('flash');

				document.removeEventListener('mousemove', handleMouseMovement);

				document.removeEventListener('click', handleClick);
			};

			document.addEventListener('click', handleClick);
		}
	});
</script>

<div
	id="initialBg"
	role="status"
	class="bg-grainy w-screen h-screen z-[100000000000000000000] absolute top-0 left-0"
>
	<h1 class="text-center text-6xl border-b border-zinc-500 ">WELCOME</h1>

	<span
		id="followingSpan"
		class="text-3xl text-zinc-900 absolute bg-transparent p-16 rounded-[55%] bg-opacity-50 backdrop-blur-sm"
	>
		ENTER
	</span>
</div>
