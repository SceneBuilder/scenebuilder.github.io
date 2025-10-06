<script lang="ts">
	import Abstract from '$lib/content/abstract.md';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Scene.svelte';

	const scenes = [
		{
			title: 'Classroom',
			url: '/scenes/single_room/classroom.glb',
			// extra_info: TODO
		},
		{
			title: 'Bar',
			url: '/scenes/single_room/bar.glb',
			// extra_info: TODO
		},
	];
</script>

<main class="grid grid-cols-[1fr,min(80ch,100%),1fr] gap-y-8 py-8">
	<div class="col-start-2 px-4">
		<div class="text-center">
			<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
				SceneBuilder
			</h1>
			<p
				class="mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				Indoor Scene Synthesis Using Agentic VLM Workflow
			</p>
		</div>
	</div>

	<div class="col-start-2 px-4">
		<section class="space-y-6">
			<h2 class="text-center text-2xl font-bold tracking-tighter sm:text-3xl">Abstract</h2>
			<div class="prose mx-auto max-w-2xl text-justify leading-relaxed [&>p]:mb-4">
				<Abstract />
			</div>
		</section>
	</div>

	<div class="col-span-3 px-4">
		<section class="space-y-6">
			<h2 class="text-center text-2xl font-bold tracking-tighter sm:text-3xl">Examples</h2>
			<div class="mx-auto max-w-6xl space-y-8">
				{#each scenes as scene}
					<div class="space-y-4">
						<h3 class="text-center text-xl font-semibold">{scene.title}</h3>
						<div class="mx-auto h-96 w-full max-w-4xl rounded-lg border bg-background">
							<Canvas>
								<Scene url={scene.url} />
							</Canvas>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</div>
</main>
