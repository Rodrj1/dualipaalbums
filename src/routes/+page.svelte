<script lang="ts">
	import DuaLipaAlbum2017Showcase from './DuaLipaAlbum2017Showcase.svelte';
	import DuaLipaFutureNostalgiaShowcase from './DuaLipaFutureNostalgiaShowcase.svelte';
	import InitialBackground from './InitialBackground.svelte';
</script>

<svelte:head>
	<title>Dua Lipa</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="w-[100vw] m-auto border-b border-zinc-500 h-[99vh] overflow-x-auto flex flex-col xl:flex-row justify-center items-center"
>
	<section
		class="group m-auto flex items-center z-[1000] w-[80vw] xl:max-w-[40vw] sm:border-r xl:border-r-0 xl:border-l border-zinc-500"
	>
		<div class="flex flex-col sm:flex-row xl:flex-col items-start sm:items-center gap-3">
			<picture id="album2017Open" class="animOpacity rotate-90 sm:rotate-0">
				<img
					loading="lazy"
					id="dualipa2017"
					class="h-[25vh] sm:h-[45vh] xl:h-[75vh] w-auto object-cover hover:animate-none transition-all cursor-pointer"
					src="https://i.pinimg.com/736x/4a/71/1e/4a711ecd52c11679c641c6249052905b.jpg"
					alt="Dua Lipa with posing for Dua Lipa 2017 Album"
				/>
			</picture>

			<p
				class="font-mono sm:opacity-0 sm:-translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all h-auto sm:h-[15vh] text-xs sm:text-sm self-start xl:self-center w-[70%]"
			>
				Dua Lipa is the debut studio album by Dua Lipa. Released through Warner Records on 2 June
				2017, the album is a dance-pop, electropop, and R&B record with elements of disco, hip hop,
				and tropical house.
			</p>
		</div>
	</section>

	<section
		class="group m-auto flex items-center z-[1000] w-[80vw] xl:max-w-[40vw] sm:border-r border-zinc-500"
	>
		<div class="flex flex-col sm:flex-row xl:flex-col items-start sm:items-center gap-3">
			<picture id="futureNostalgiaOpen" class="animOpacity rotate-90 sm:rotate-0">
				<img
					loading="lazy"
					id="futureNostalgia"
					class="h-[25vh] sm:h-[45vh] xl:h-[75vh] w-auto object-cover hover:animate-none transition-all cursor-pointer"
					src="https://i.pinimg.com/originals/84/6f/35/846f35ce5bbe69db45b5b748caeff9b1.jpg"
					alt="Dua Lipa with posing for Future Nostalgia 2020 Album"
				/>
			</picture>

			<p
				class="font-mono sm:opacity-0 sm:-translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all h-auto sm:h-[15vh] text-xs sm:text-sm self-start xl:self-center w-[70%]"
			>
				Future Nostalgia is the second studio album Dua Lipa, released on 27 March 2020 by Warner
				Records. A "nostalgic" pop and disco record with influences from dance-pop and electronic
				music, inspired by the music that Lipa enjoyed during her childhood.
			</p>
		</div>
	</section>
</section>

<div
	class="bg-transparent w-[50px] absolute h-full flex-col flex justify-end border-l border-zinc-500 top-0 right-0"
>
	<h1 class="text-zinc-900 text-2xl pl-2 pb-2">
		DUA<span class="text-zinc-900 text-2xl font-bold">LIPA</span>
	</h1>
</div>

<DuaLipaAlbum2017Showcase />

<DuaLipaFutureNostalgiaShowcase />

<svg style="display: none;">
	<defs>
		<filter id="noise">
			<feTurbulence baseFrequency="0.274,0.158" seed="26" type="fractalNoise" result="static" />

			<feDisplacementMap in="SourceGraphic" in2="static" scale="0">
				<animate
					attributeName="scale"
					values="0;40;0"
					dur="500ms"
					repeatCount="1"
					begin="dualipa2017.mouseenter"
				/>
			</feDisplacementMap>

			<animate
				attributeName="seed"
				values="0;100"
				dur="500ms"
				repeatCount="1"
				begin="dualipa2017.mouseenter"
			/>
		</filter>
	</defs>
</svg>

<svg style="display: none;">
	<defs>
		<filter id="noiseFuture">
			<feTurbulence baseFrequency="0.274,0.158" seed="26" type="fractalNoise" result="static" />

			<feDisplacementMap in="SourceGraphic" in2="static" scale="0">
				<animate
					attributeName="scale"
					values="0;40;0"
					dur="500ms"
					repeatCount="1"
					begin="futureNostalgia.mouseenter"
				/>
			</feDisplacementMap>

			<animate
				attributeName="seed"
				values="0;100"
				dur="500ms"
				repeatCount="1"
				begin="futureNostalgia.mouseenter"
			/>
		</filter>
	</defs>
</svg>
