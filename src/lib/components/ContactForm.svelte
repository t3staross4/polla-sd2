<script lang="ts">
	// export let form: any;
	import { enhance } from '$app/forms';
	export let form;

	// console.log(form);
	// Doc: https://kit.svelte.dev/docs/types#public-types-submitfunction
	const onFormSubmitHandler = async () => {};
</script>

<div class="py-8 pb-24 flex items-center" id="contact">
	<form class="space-y-4 bg-surface-300-600-token p-4 rounded-lg shadow" method="POST">
		<div class="font-semibold text-2xl py-4">¡Habla con nosotros!</div>

		<div class="flex items-center space-x-4">
			<label class="label">
				<span>Nombre</span>
				<input class="input" name="name" type="text" placeholder="Nombre..." />
			</label>
			<label class="label">
				<span>Email</span>
				<input
					class="input"
					name="email"
					type="email"
					placeholder="Inserta una direccion de correo valida..."
				/>
			</label>
			<label class="label">
				<span>Telefono</span>
				<input
					class="input"
					name="phone"
					type="phone"
					placeholder="Inserta una direccion de correo valida..."
				/>
			</label>
		</div>
		<label for="categories" class="label">
			<label class="label">
				<span>Háblanos de ti</span>
				<textarea class="textarea" rows="4" placeholder="Mandanos un mensaje!" name="message" />
			</label>
		</label>
		<button class="btn variant-filled-primary" type="submit">Contáctanos</button>
	</form>
</div>
