<script lang="ts">
	import { onMount } from 'svelte';
	import { dualipa2017 } from '$lib/data/dualipa2017';

	let duaLipaShowcaseIsOpen = false;

	let hoveredSong: string = 'Genesis';
	let hoveredSongDescription: string =
		'Genesis is the opening song to Dua Lipa’s self-titled record. The track employs Biblical references as a metaphor for a passionate love. The album contains quite a few Biblical references in its narrative. It was officially shared in her documentary “See In Blue” as an acoustic version that follows her musical journey leading up to the release of her debut album.';

	const hoverSong = (songName: string, songDescription: string) => {
		hoveredSong = songName;
		hoveredSongDescription = songDescription;
	};

	onMount(() => {
		const dua2017Container = document.getElementById('dua2017Container');

		const songListAlbum2017 = document.getElementById('songListAlbum2017');

		const nameDisplayer = document.getElementById('songNameDisplay');

		let scroll2017AlbumBy = 0;

		let songNameDisplayerPosition: number;

		if (dua2017Container && songListAlbum2017 && nameDisplayer) {
			const animateOpenClose = () => {
				handleOpenCloseAnimation(dua2017Container);
			};

			const getOpenHandler = document.getElementById('album2017Open');
			const getExitHandler = document.getElementById('album2017Exit');

			if (getOpenHandler && getExitHandler) {
				getOpenHandler.onclick = animateOpenClose;
				getExitHandler.onclick = animateOpenClose;
			}

			songListAlbum2017.scrollTop = 1;

			const onMouseMove = (e: any, displayerPosition: number) => {
				if (e.clientY <= 120) {
					displayerPosition = -60;
				} else displayerPosition = e.clientY - 190;

				nameDisplayer.style.top = displayerPosition + 'px';
			};

			dua2017Container.addEventListener('mousemove', (e) => {
				if (duaLipaShowcaseIsOpen) {
					onMouseMove(e, songNameDisplayerPosition);
				}
			});

			const scrollList = (e: any) => {
				if (duaLipaShowcaseIsOpen) {
					let scrollLength = songListAlbum2017.scrollHeight - songListAlbum2017.clientHeight - 85;

					if (songListAlbum2017.scrollTop <= 0) {
						songListAlbum2017.scrollTop = 1;
						scroll2017AlbumBy = 0;
						return;
					}

					if (songListAlbum2017.scrollTop > scrollLength) {
						songListAlbum2017.scrollTop = scrollLength - 1;
						scroll2017AlbumBy = scrollLength - 1;
						return;
					}

					scroll2017AlbumBy += e.deltaY * 0.4;

					songListAlbum2017.scrollTo({ top: scroll2017AlbumBy, behavior: 'smooth' });
				}
			};

			dua2017Container.onwheel = scrollList;

			const handleOpenCloseAnimation = (elem: HTMLElement) => {
				if (duaLipaShowcaseIsOpen === false) {
					elem.classList.add('animFromRight');
					elem.classList.remove('animFromLeft');
				} else {
					elem.classList.add('animFromLeft');
					elem.classList.remove('animFromRight');
				}

				const update = duaLipaShowcaseIsOpen === true ? false : true;
				duaLipaShowcaseIsOpen = update;
			};
		}
	});
</script>

<section
	id="dua2017Container"
	class="flex fixed max-h-screen bg-grainy w-full z-[100000] text-[#f9cdcd] text-sm transition-all duration-1000 opacity-100 top-0 flex-row min-h-screen translate-x-full"
>
	<h1
		class="absolute text-zinc-800 text-3xl sm:text-4xl
lg:text-5xl xl:text-6xl min-h-[45px] sm:h-32 left-14"
	>
		DUA LIPA
	</h1>

	<div
		class="h-auto w-[67%] sm:w-[33%] border-t border-r border-zinc-500 ml-[50px] text-zinc-800 animOpacity px-3 sm:p-3"
	>
		<p class="text-sm sm:text-lg flex flex-col gap-5 w-full font-mono mt-10 sm:mt-48">
			<span class="block xl:hidden underline">{hoveredSong}</span>
			{hoveredSongDescription}
		</p>
	</div>

	<h2
		id="songNameDisplay"
		class="border-b border-zinc-500 absolute text-zinc-800 text-left w-[67%] -right-[34px] text-xl sm:text-2xl
		lg:text-3xl xl:text-4xl z-50 mt-32 hidden xl:block"
	>
		{hoveredSong}
	</h2>

	<div class="absolute border-r border-zinc-500 right-32 h-screen hidden sm:block" />

	<ul
		class="w-[33%] sm:w-[67%]  flex flex-col sm:overflow-y-hidden overflow-x-hidden box-border transition-transform duration-500 gap-3 mt-[40px] sm:mt-32 max-h-[80vh]"
		id="songListAlbum2017"
	>
		{#each dualipa2017 as song, i (i)}
			<li
				data-name={song.title}
				data-description={song.description}
				on:mouseenter={() => hoverSong(song.title, song.description)}
				class="flex-1 left-0 song flex justify-start sm:justify-end sm:pr-72 z-[10000000] grayscale hover:grayscale-0"
			>
				<article class="relative">
					<picture class="max-h-[180px] min-h-[180px] max-w-[180px]">
						<img
							class={`h-full object-cover w-full `}
							src={song.image}
							alt={song.imageAlt}
						/></picture
					>
				</article>
			</li>
		{/each}
	</ul>

	<div
		class="bg-transparent w-[50px] absolute h-full flex-col flex justify-between border-r border-zinc-500"
	>
		<button id="album2017Exit" class="pl-2 border-b border-gray-600 text-zinc-800"
			><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M3 6h10v2H3V6m0 10h10v2H3v-2m0-5h12v2H3v-2m13-4l-1.42 1.39L18.14 12l-3.56 3.61L16 17l5-5l-5-5Z"
				/></svg
			>
		</button>

		<h1 class="text-zinc-900 text-2xl pl-2">
			DUA <span class="text-zinc-900 text-2xl font-bold">LIPA</span>
		</h1>
	</div>
</section>
