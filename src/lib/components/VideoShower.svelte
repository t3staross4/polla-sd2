<script lang="ts">
	import { onMount } from 'svelte';
	import 'vidstack/bundle';
	import Player from '../player/Player.svelte';
	onMount(() => {
		new Player({
			target: document.getElementById('player')!
		});
	});
</script>

<div class="w-full">
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- <iframe
		id="iframe"
		src="https://drive.google.com/file/d/17XSfVTARm1sXCFbBvODymnLeAW1rtMKf/preview?autoplay=true"
		class="w-full aspect-video"
		allow="autoplay"
		bind:this={iframe}
	></iframe> -->
	<div id="player"></div>
</div>
