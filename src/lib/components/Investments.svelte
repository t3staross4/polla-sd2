<script lang="ts">
	let investmentAmount = 0;
	let roi = 0;
	let roi2 = 0;
	let interest = Math.pow(1.3, 1 / 12) - 1;
	let interest2 = Math.pow(1.3, 1 / 24) - 1;

	let texts1 = [
		'Rentabilidad: 30% anual.',
		'Invierte la cantidad que quieras.',
		'Contrato de 12 o 24 meses.',
		'Desembolso de utilidad mensual.',
		'Recupero de capital el mes 12 o 24 segun contrato. Las utilidades se pagan mensualmente.',
		'Garantia: Acciones de Galaxy Fitness S.A respaldando tu monto de inversión.',
		'Terminado el contrato se devuelven las acciones.'
	];
	let texts2 = [
		'Inversion minima 100.000',
		'Rentabilidad: 30% asegurada y garantizada, pero si el negocio rinde mas mes a mes se incrementará.',
		'Contrato : Venta de acciones por el valor que invierta.',
		'Desembolso de utilidades: mensuales',
		'Garantia: Acciones y conforma el directorio de la empresa.',
		'También puede trabajar dentro del establecimiento o en la',
		'administración con un salario acorde a la función acordada.'
	];
	const handleInvestmentChange = (e: any) => {
		investmentAmount = e.target.value;
		roi = Number(investmentAmount) * interest;
		roi2 = Number(investmentAmount) * interest2;
	};
</script>

<div class="py-32 w-full">
	<div class="w-full text-center text-5xl font-semibold mb-4">Inversion</div>
	<div class="w-full text-center text-xl mb-6 text-primary-900-50-token">
		¡Invierte en el futuro del bienestar con Galaxy Fitness Center!<br /> Únete a una oportunidad de
		inversión única.
	</div>
	<div class="w-full px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="flex flex-wrap w-full justify-between">
			<!-- Pricing Card -->
			<div
				class="w-full mb-6 md:mb-0 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
			>
				<h3 class="mb-1 text-3xl font-semibold">Desde</h3>

				<div class="flex justify-center items-baseline my-4">
					<span class="mr-2 text-5xl font-extrabold">$10,000</span>
					<!-- <span class="text-gray-500 dark:text-gray-400">/month</span> -->
				</div>
				<!-- List -->
				<ul role="listbox" class="mb-8 space-y-4 text-left">
					{#each texts1 as data}
						<li class="flex items-center space-x-3">
							<!-- Icon -->
							<svg
								class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path></svg
							>
							<span>{data}</span>
						</li>
					{/each}
				</ul>
				<a
					href="#contact"
					class="mt-auto text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
					>Contáctanos</a
				>
			</div>
		</div>

		<div class="space-y-4 bg-surface-300-600-token py-4 px-2 md:p-4 shadow">
			<div class="w-full pb-2 pt-4">
				<div
					class="text-2xl font-semibold border-b-2 border-b-primary-500 mb-4 text-center w-fit mx-auto"
				>
					Retornos de Inversión
				</div>
				<label class="label flex flex-col mb-2">
					<span class="text-center">Inversión</span>
					<input
						class="input w-full"
						name="investment"
						type="number"
						placeholder="Monto Minimo $10,000"
						on:input={(e) => handleInvestmentChange(e)}
					/>
				</label>
				<div>
					Por su inversion de monto tienes el siguiente ROI <span class="font-extrabold"
						>mensual</span
					>
				</div>
				<div class=" p-2 text-center my-4 w-fit mx-auto">
					{#if investmentAmount >= 9999}
						<div class="bg-surface-200-700-token p-2 mb-2">
							<div>Retorno a 12 meses:</div>
							<div class="text-2xl">
								{roi.toFixed(2).toString()}$
							</div>
						</div>
						<div class="bg-surface-200-700-token p-2">
							<div>Retorno a 24 meses:</div>
							<div class="text-2xl">
								{roi2.toFixed(2).toString()}$
							</div>
						</div>
					{:else}
						<div class="font-light">Ingrese monto mayor a 10,000$</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
