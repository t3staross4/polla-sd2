

<script lang="ts">
	interface CardWithStatsProps {
		image: string
		title: string
		description: string
		stats: {
			title: string
			value: string
		}[]
	}
	const mockdata: CardWithStatsProps = {
		image:
			'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		title: 'Running challenge',
		description:
			'56 km this month • 17% improvement compared to last month • 443 place in global scoreboard',
		stats: [
			{ title: 'Distance', value: '27.4 km' },
			{ title: 'Avg. speed', value: '9.6 km/h' },
			{ title: 'Score', value: '88/100' }
		]
	}
</script>

<div class="card w-80 mx-auto rounded-xl overflow-hidden shadow-md">
	<img src={mockdata.image} alt={mockdata.title} class="" />
	<div class="px-4 py-2 space-y-6">
		<div class="flex justify-between items-center">
			<b>{mockdata.title}</b>
			<div class="text-sm opacity-70">80% completed</div>
		</div>
		<div class="text-sm opacity-70">{mockdata.description}</div>
	</div>

</div>