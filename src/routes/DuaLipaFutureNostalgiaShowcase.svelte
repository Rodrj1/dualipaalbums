<script lang="ts">
	import { onMount } from 'svelte';
	import { futureNostalgiaSongs } from '$lib/data/futurenostalgia';

	let futureNostalgiaAlbumIsOpen = false;

	let hoveredSong: string = 'Genesis';
	let hoveredSongDescription: string =
		'The futuristic-esque title track and first promotional single released off of Dua Lipa’s sophomore album, Future Nostalgia, was first teased by the British singer-songwriter on her interview with Heart Breakfast back in November of 2019';

	const hoverSong = (songName: string, songDescription: string) => {
		hoveredSong = songName;
		hoveredSongDescription = songDescription;
	};

	onMount(() => {
		const futureNostalgiaContainer = document.getElementById('futureNostalgiaContainer');

		const songListFutureNostalgia = document.getElementById('songListFutureNostalgia');

		const nameDisplayer = document.getElementById('songNameFuture');

		let scroll2017AlbumBy = 0;

		let songNameDisplayerPosition: number;

		if (futureNostalgiaContainer && songListFutureNostalgia && nameDisplayer) {
			const animateOpenClose = () => {
				handleOpenCloseAnimation(futureNostalgiaContainer);
			};

			const getOpenHandler = document.getElementById('futureNostalgiaOpen');
			const getExitHandler = document.getElementById('futureNostalgiaExit');

			if (getOpenHandler && getExitHandler) {
				getOpenHandler.onclick = animateOpenClose;
				getExitHandler.onclick = animateOpenClose;
			}

			songListFutureNostalgia.scrollTop = 1;

			const onMouseMove = (e: any, displayerPosition: number) => {
				if (e.clientY <= 120) {
					displayerPosition = -60;
				} else displayerPosition = e.clientY - 190;

				nameDisplayer.style.top = displayerPosition + 'px';
			};

			futureNostalgiaContainer.addEventListener('mousemove', (e) => {
				if (futureNostalgiaAlbumIsOpen) {
					onMouseMove(e, songNameDisplayerPosition);
				}
			});

			const scrollList = (e: any) => {
				if (futureNostalgiaAlbumIsOpen) {
					if (songListFutureNostalgia.scrollTop <= 0) {
						songListFutureNostalgia.scrollTop = 1;
						scroll2017AlbumBy = 0;
						return;
					}

					if (songListFutureNostalgia.scrollTop > 3825.8) {
						songListFutureNostalgia.scrollTop = 3825.8;
						scroll2017AlbumBy = 3825.8;
						return;
					}

					scroll2017AlbumBy += e.deltaY * 0.4;

					songListFutureNostalgia.scrollTo({ top: scroll2017AlbumBy, behavior: 'smooth' });
				}
			};

			futureNostalgiaContainer.onwheel = scrollList;

			const handleOpenCloseAnimation = (elem: HTMLElement) => {
				if (futureNostalgiaAlbumIsOpen === false) {
					elem.classList.add('animFromRight');
					elem.classList.remove('animFromLeft');
				} else {
					elem.classList.add('animFromLeft');
					elem.classList.remove('animFromRight');
				}

				const update = futureNostalgiaAlbumIsOpen === true ? false : true;
				futureNostalgiaAlbumIsOpen = update;
			};
		}
	});
</script>

<section
	id="futureNostalgiaContainer"
	class="flex fixed max-h-screen bg-grainy w-full z-[100000] text-[#f9cdcd] text-sm transition-all duration-1000 opacity-100 top-0 flex-row min-h-screen translate-x-full"
>
	<h1
		class="absolute text-zinc-800 text-3xl sm:text-4xl
lg:text-5xl xl:text-6xl w-[100%] sm:w-[32.70%] h-[45px] sm:h-32 left-14 sm:border-r border-zinc-500"
	>
		FUTURE NOSTALGIA
	</h1>

	<div
		class="h-auto flex-[0.67] sm:flex-[0.33] border-t border-r border-zinc-500 mt-10 sm:mt-32 ml-[50px] text-zinc-800 animOpacity px-3 sm:p-3"
	>
		<p class="text-sm sm:text-lg flex flex-col gap-5 w-full font-mono">
			<span class="block sm:hidden underline">{hoveredSong}</span>
			{hoveredSongDescription}
		</p>
	</div>

	<h2
		id="songNameFuture"
		class="border-b border-zinc-500 absolute text-zinc-800 text-center w-full text-3xl sm:text-4xl
		lg:text-5xl xl:text-6xl z-50 mt-32 hidden sm:block"
	>
		{hoveredSong}
	</h2>

	<div class="absolute border-r border-zinc-500 right-32 h-screen hidden sm:block" />

	<ul
		class="flex-[0.33] sm:flex-[0.67] flex flex-col overflow-y-hidden overflow-x-hidden w-[100%] box-border transition-transform duration-500 gap-3 mt-[40px] sm:mt-32 max-h-[80vh]"
		id="songListFutureNostalgia"
	>
		{#each futureNostalgiaSongs as song, i (i)}
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
		<button id="futureNostalgiaExit" class="pl-2 border-b border-gray-600 text-zinc-800"
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
