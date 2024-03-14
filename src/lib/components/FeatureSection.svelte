<script lang="ts">
	import Icon from '@iconify/svelte';
	import img5 from '$lib/assets/5thumb.webp';
	import img6 from '$lib/assets/6thumb.webp';
	import fitnessFood from '$lib/assets/fitnes_food.webp';
	import nutricion from '$lib/assets/nutricionista.webp';
	import personalTrainer from '$lib/assets/personal_trainer.webp';
	import revision from '$lib/assets/revision.webp';
	const mockdata = [
		{
			title: 'Entrenador Personal',
			description:
				'Con nuestros entrenadores personales de élite en Galaxy Fitness Center, obtienes la atención individualizada y la orientación experta que necesitas para alcanzar tus objetivos de bienestar de manera rápida y efectiva.',
			img: personalTrainer
		},
		{
			title: 'Nutricionisa',
			description:
				'Nuestros nutricionistas en Galaxy Fitness Center están aquí para proporcionarte un plan de alimentación personalizado que se adapte a tus necesidades y objetivos de bienestar. ¡Descubre cómo una dieta equilibrada puede transformar tu vida!',
			img: nutricion // icon: IconUser
		},
		{
			title: 'Fitness Food',
			description:
				'En Galaxy Fitness Center, nuestro servicio de Fitness Food te ofrece la comodidad de una alimentación saludable y conveniente, diseñada específicamente para tus necesidades de entrenamiento.',
			img: fitnessFood
		},
		{
			// icon: IconLock,
			title: 'Clases Grupales',
			description:
				'En Galaxy Fitness Center, nuestras clases grupales son más que solo entrenamiento: son una oportunidad para socializar, motivarse mutuamente y superar desafíos juntos.',
			img: img5
		},
		{
			// icon: IconMessage2,
			title: 'Golf Virtual y Cancha de Paddle',
			description:
				'Nuestras canchas de pádel y golf virtual en Galaxy Fitness Center son el lugar ideal para disfrutar del deporte sin importar el clima ni la hora del día. Una nueva forma de divertirte mientras cuidas de tu salud y bienestar.',
			img: img6
		},
		{
			// icon: IconMessage2,
			title: 'Evaluacion Fisica',
			description:
				'En Galaxy Fitness Center, nuestras clases grupales son más que solo entrenamiento: son una oportunidad para socializar, motivarse mutuamente y superar desafíos juntos.',
			img: revision
		}
	];
</script>

<div class="container mx-auto max-w-screen-xl pt-24 pb-6">
	<div class="text-center space-y-4">
		<div class="text-xl md:text-5xl font-bold">Membresia</div>
		<p class="max-w-xl opacity-80 mx-auto text-lg">
			¡Únete a la élite del bienestar con nuestra exclusiva membresía en Galaxy Fitness Center!
		</p>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16 px-16">
		{#each mockdata as feature, i}
			<div
				class={`border-surface-400-500-token border shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 `}
			>
				<img src={feature.img} alt="" class="w-full h-60" />
				<div class="p-4 space-y-2">
					<div class="bg-surface-300-600-token p-2 w-fit rounded-token">
						<Icon icon="heroicons:fire-solid" />
					</div>
					<div class="md:text-xl text-lg">
						{feature.title}
					</div>
					<div class="md:text-lg opacity-60">
						{feature.description}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
