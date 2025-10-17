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

  function toggleFullscreen(element: HTMLElement) {
    if (!document.fullscreenElement) {
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
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
            class="group relative block overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:border-gray-800"
          >
            <div
              class="flex h-48 w-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
            >
              <!-- <span class="text-2xl font-bold text-blue-600 dark:text-blue-300">{category.name}</span> -->
            </div>
            <div
              class="bg-opacity-50 absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div class="absolute top-0 left-0 p-4">
              <h3
                class="font-semibold text-blue-600 drop-shadow-[0_0_9px_rgba(0,0,0,0.9)] group-hover:text-white dark:text-blue-300"
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
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {#each exampleScenes as scene}
          <button
            class="group relative block overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:border-gray-800"
          >
            <div
              class="flex h-24 w-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
            >
              <!-- <span class="text-sm font-bold text-blue-600 dark:text-blue-300">{scene.name}</span> -->
            </div>
            <div
              class="bg-opacity-50 absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div class="absolute top-0 left-0 p-2">
              <h3
                class="text-xs font-semibold text-blue-600 drop-shadow-[0_0_9px_rgba(0,0,0,0.9)] group-hover:text-white dark:text-blue-300"
              >
                {scene.name}
              </h3>
            </div>

            {#if scene.tags && scene.tags.length > 0}
              <div
                class="absolute bottom-0 left-0 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div class="flex flex-wrap gap-1">
                  {#each scene.tags as tag}
                    <div
                      class="bg-opacity-70 flex items-center gap-1 rounded-full bg-black px-1 py-0.5 text-xs text-white backdrop-blur-sm"
                    >
                      <span class="text-xs">{tag.name}</span>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </button>
        {/each}
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
