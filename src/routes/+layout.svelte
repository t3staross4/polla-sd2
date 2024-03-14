<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell class="bg-surface-100-800-token">
	<svelte:fragment slot="pageHeader">
		<div class="max-w-[1440px] mx-auto">
			<!-- App Bar -->
			<AppBar background="">
				<svelte:fragment slot="lead">
					<div class="flex space-x-2 itmes-center">
						<img src="/favicon.png" alt="" class="w-24 h-20" />
						<!-- <strong class="text-2xl">Galaxy Fitness Center</strong> -->
					</div>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<div class="hidden md:flex space-x-4">
						<a class="btn variant-ghost-surface" href="#inversiones" rel="noreferrer"> Invierte </a>
						<a class="btn variant-ghost-surface" href="#membresia" rel="noreferrer"> Membresia </a>
						<a class="btn variant-ghost-surface" href="#contact" rel="noreferrer"> Contact </a>
						<a
							class="btn variant-ghost-surface"
							href="https://drive.google.com/file/d/1dPwtZ9wkIXakCi3bqsAaHp36jR7TQRpU/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Brochure
						</a>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
