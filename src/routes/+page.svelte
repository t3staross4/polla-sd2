<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Banner from '$lib/components/Banner.svelte';
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Investments from '$lib/components/Investments.svelte';
	import VideoShower from '$lib/components/VideoShower.svelte';
	import { applyAction, deserialize } from '$app/forms';
	// import { data } from '../modules/investment.store.ts';
	let successEmail = false;
	/** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
	async function handleSubmit(event: any) {
		const data = new FormData(event.currentTarget);
		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});

		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

		if (result.type === 'success') {
			// rerun all `load` functions, following the successful update
			await invalidateAll();
			successEmail = true;
		}

		applyAction(result);
	}
	// const setData = (investAmount: number, roi: number, roi2: number) => {
	// 	data.update((n) => {
	// 		return { investAmount, roi, roi2 };
	// 	});
	// };

	let play = false;
	const onPlay = () => {
		play = !play;
	};
</script>

<div class=" h-full flex flex-col justify-start items-center w-full">
	<!-- <HeroSection /> -->
	<div class="w-full flex justify-center">
		<div class="max-w-[1440px] w-full flex flex-col lg:flex-row text-primary-token md:my-8 mb-16">
			<div class="w-full relative">
				{#if play}
					<div class="absolute top-16 w-[300px] z-20">
						<div
							class="px-8 pb-8 pt-1 flex flex-col justify-center items-center lg:justify-start w-full my-12 text-center lg:text-left"
						>
							<h1 class="text-7xl mb-8 font-bold">
								Galaxy Fitness <span class=" text-primary-400-500-token">Center</span>
							</h1>
							<p class="py-12 text-xl">
								La mayor experiencia integral de Fitness en una amplia gama de servicios.
							</p>
							<div class="w-full">
								<a href="#contact" class="btn btn-lg variant-filled-primary w-fit">Contactanos</a>
							</div>
						</div>
					</div>
				{/if}
				<button class="w-full" on:click={() => onPlay()}>
					<VideoShower />
				</button>
			</div>
		</div>
	</div>
	<div id="inversiones">
		<Investments />
	</div>
	<Banner />
	<div class="w-full pb-24" id="membresia">
		<FeatureSection />
	</div>
	<!-- <ContactForm /> -->
	<div class="py-8 pb-24" id="contact">
		<form
			class="space-y-4 bg-surface-300-600-token py-4 px-2 md:p-4 shadow"
			method="POST"
			action="/"
			on:submit|preventDefault={handleSubmit}
		>
			<div class="font-semibold text-2xl pt-4">¡Habla con nosotros!</div>
			<div class="flex items-start flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
				<label class="label w-full">
					<span>Nombre</span>
					<input class="input w-full" name="name" type="text" placeholder="Nombre" />
				</label>
				<label class="label w-full">
					<span>Email</span>
					<input class="input w-full" name="email" type="email" placeholder="Email" />
				</label>
				<label class="label w-full">
					<span>Teléfono </span>
					<input class="input w-full" name="phone" type="text" placeholder="Teléfono" />
				</label>
			</div>
			<label for="categories" class="label">
				<label class="label">
					<span>Escribe tu consulta</span>
					<textarea class="textarea" rows="4" placeholder="Mandanos un mensaje!" name="message" />
				</label>
			</label>
			<div class="flex space-x-8">
				<button class="btn variant-filled-primary" type="submit">Contáctanos</button>
				{#if successEmail}
					<div class="btn variant-filled-success">¡Enviado!</div>
				{/if}
			</div>
		</form>
	</div>

	<Footer />
</div>

<style lang="postcss">
</style>
