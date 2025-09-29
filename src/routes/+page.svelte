<script lang="ts">
	import Abstract from '$lib/content/abstract.md';
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
			<div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
				<!-- Example content will go here -->
			</div>
		</section>
	</div>
</main>
