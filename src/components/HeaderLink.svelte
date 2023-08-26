<script lang="ts">
	type Link = {
		goToPage: string;
		ariaLabel: string;
		name: string;
	};

	export let link: Link;
</script>

<li class="w-max">
	<a class="hover:text-red-600 transition-colors duration-100 text-base font-mono text-zinc-800" href={link.goToPage} aria-label={link.ariaLabel}>{link.name}</a>
</li>
