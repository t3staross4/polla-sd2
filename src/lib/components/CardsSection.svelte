

<script lang="ts">
import Icon from '@iconify/svelte'; 
	import StatsCard from './StatsCard.svelte';
	const mockdata = [
		{
			title: 'Extreme performance',
			description:
				'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
			// icon: IconGauge
		},
		{
			title: 'Privacy focused',
			description:
				'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
			// icon: IconUser
		},
		{
			title: 'No third parties',
			description:
				'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
			// icon: IconCookie
		},
		{
			title: 'No third parties',
			description:
				'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
			// icon: IconCookie
		},
		
	]
</script>
<div class="container mx-auto max-w-screen-xl py-4">
	<div class="text-center space-y-4">
		<div class="text-xl md:text-3xl font-bold">
			Planes de Inversion
		</div>
		<p class="max-w-xl opacity-60 mx-auto">
			Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger
			drives it to try biting a Steel-type Pokémon.
		</p>
	</div>
	<div class="flex flex-wrap justify-start  items-start gap-4 pt-16 px-24">
		{#each mockdata as feature , index}
			<StatsCard/>
		{/each}
	</div>
</div>