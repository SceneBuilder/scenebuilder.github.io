<script lang="ts">
  import Abstract from '$lib/content/abstract.md';
  import { Canvas } from '@threlte/core';
  import Scene from '$lib/components/Scene.svelte';
  import { Pane, Checkbox, Button } from 'svelte-tweakpane-ui';
  import { exampleCategories, exampleScenes } from '$lib/data/examples';

  let scenes = $state([
    {
      title: 'Classroom',
      url: '/scenes/single_room/classroom.glb',
      mode: 'firstPerson' as 'orbit' | 'firstPerson',
      canvasContainer: undefined as HTMLElement | undefined
    },
    {
      title: 'Bar',
      url: '/scenes/single_room/bar.glb',
      mode: 'orbit' as 'orbit' | 'firstPerson',
      canvasContainer: undefined as HTMLElement | undefined
    }
  ]);

  let activeCategory = $state(exampleCategories[0]);
  let activeScene = $state(
    exampleScenes.find((scene) => scene.category === activeCategory?.name) ?? exampleScenes[0]
  );
  const filteredScenes = $derived(
    exampleScenes.filter((scene) => scene.category === activeCategory?.name)
  );

  function toggleFullscreen(element: HTMLElement) {
    if (!document.fullscreenElement) {
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  function selectCategory(category: (typeof exampleCategories)[number]) {
    activeCategory = category;
    const firstSceneInCategory =
      exampleScenes.find((scene) => scene.category === category.name) ?? activeScene;
    activeScene = firstSceneInCategory;
  }

  function selectScene(scene: (typeof exampleScenes)[number]) {
    activeScene = scene;
    const relatedCategory = exampleCategories.find((category) => category.name === scene.category);
    if (relatedCategory) {
      activeCategory = relatedCategory;
    }
  }
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

  <div class="col-start-2 px-4">
    <section class="space-y-6">
      <h2 class="text-center text-2xl font-bold tracking-tighter sm:text-3xl">Examples</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#each exampleCategories as category}
          <button
            class={`group relative block overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:border-gray-800 ${activeCategory?.name === category.name ? 'ring-2 ring-blue-500' : ''}`}
            on:click={() => selectCategory(category)}
            aria-pressed={activeCategory?.name === category.name}
          >
            <div class="relative h-48 w-full overflow-hidden">
              <img
                src={category.thumbnail}
                alt={`${category.name} category thumbnail`}
                loading="lazy"
                class="block h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            </div>
            <div
              class="bg-opacity-50 absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div class="absolute top-0 left-0 p-4">
              <h3
                class="font-semibold text-white drop-shadow-[0_0_12px_rgba(0,0,0,1)]"
              >
                {category.name}
              </h3>
            </div>

            {#if category.tags && category.tags.length > 0}
              <div
                class="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div class="flex flex-wrap gap-2">
                  {#each category.tags as tag}
                    <div
                      class="bg-opacity-70 flex items-center gap-1 rounded-full bg-black px-2 py-1 text-xs text-white backdrop-blur-sm"
                    >
                      <span>{tag.name}</span>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </button>
        {/each}
      </div>
    </section>
    <div class="m-3"></div>
    <section class="space-y-6">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#if filteredScenes.length === 0}
          <p class="col-span-full text-center text-sm text-muted-foreground">
            No scenes available for this category yet.
          </p>
        {:else}
          {#each filteredScenes as scene}
            <button
              class={`group relative block overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:border-gray-800 ${activeScene?.name === scene.name ? 'ring-2 ring-blue-500' : ''}`}
              on:click={() => selectScene(scene)}
              aria-pressed={activeScene?.name === scene.name}
            >
              <div class="relative h-48 w-full overflow-hidden">
                <img
                  src={scene.thumbnail}
                  alt={`${scene.name} scene thumbnail`}
                  loading="lazy"
                  class="block h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              </div>
              <div
                class="bg-opacity-50 absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div class="absolute top-0 left-0 p-4">
                <h3
                  class="font-semibold text-white drop-shadow-[0_0_12px_rgba(0,0,0,1)]"
                >
                  {scene.name}
                </h3>
              </div>

              {#if scene.tags && scene.tags.length > 0}
                <div
                  class="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div class="flex flex-wrap gap-2">
                    {#each scene.tags as tag}
                      <div
                        class="bg-opacity-70 flex items-center gap-1 rounded-full bg-black px-2 py-1 text-xs text-white backdrop-blur-sm"
                      >
                        <span>{tag.name}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              {/if}
            </button>
          {/each}
        {/if}
      </div>
    </section>
  </div>

  <div class="col-span-3 px-4">
    <section class="space-y-6">
      <div class="mx-auto max-w-6xl space-y-8">
        {#each scenes as scene, index}
          {@const isWalkMode = scene.mode === 'firstPerson'}
          <div class="space-y-4">
            <h3 class="text-center text-xl font-semibold">{scene.title}</h3>
            <div
              class="relative mx-auto h-96 w-full max-w-4xl rounded-lg border bg-background"
              bind:this={scenes[index].canvasContainer}
            >
              <Canvas>
                <Scene url={scene.url} bind:mode={scene.mode} />
              </Canvas>
              <div class="absolute top-2 right-2 z-10">
                <Pane position="inline" title="Controls">
                  <Checkbox
                    value={isWalkMode}
                    on:change={(e) => (scene.mode = e.detail.value ? 'firstPerson' : 'orbit')}
                    label="Walk Mode"
                  />
                  <Button
                    on:click={() =>
                      scenes[index].canvasContainer &&
                      toggleFullscreen(scenes[index].canvasContainer)}
                    title="Fullscreen"
                  />
                </Pane>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</main>
