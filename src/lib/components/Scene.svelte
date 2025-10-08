<script lang="ts">
  import { T } from '@threlte/core';
  import { GLTF, OrbitControls, Sky } from '@threlte/extras';
  import { useFirstPersonControls } from '$lib/hooks/useFirstPersonControls';

  export let url: string;
  export let mode: 'orbit' | 'firstPerson' = 'orbit';
  export let cameraPosition: [number, number, number] = [10, 8, 10];
  export let cameraFov: number = 45;
  export let enableShadows: boolean = true;
  export let showGround: boolean = true;
  export let groundSize: number = 50;
  export let lightIntensity: number = 1;
  export let ambientIntensity: number = 0.4;

  // Adjust default camera settings based on control type
  $: finalCameraPosition =
    mode === 'firstPerson' ? ([0, 1.6, 5] as [number, number, number]) : cameraPosition;
  $: finalCameraFov = mode === 'firstPerson' ? 75 : cameraFov;

  // Initialize first-person controls
  const firstPersonControls = useFirstPersonControls(mode, {
    cameraPosition: finalCameraPosition
  });

  function onGLTFLoad(gltf: any) {
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
  }
</script>

<T.PerspectiveCamera makeDefault position={finalCameraPosition} fov={finalCameraFov}>
  {#if mode === 'orbit'}
    <OrbitControls enableDamping dampingFactor={0.05} autoRotate />
  {/if}
</T.PerspectiveCamera>

<Sky elevation={0.5} />

<T.DirectionalLight position={[10, 10, 5]} intensity={lightIntensity} castShadow={enableShadows} />
<T.DirectionalLight position={[-5, 8, -5]} intensity={lightIntensity * 0.3} />
<T.AmbientLight intensity={ambientIntensity} />

<GLTF {url} on:load={onGLTFLoad} />

{#if showGround}
  <T.Mesh rotation.x={-Math.PI / 2} position.y={-0.1} receiveShadow={enableShadows}>
    <T.PlaneGeometry args={[groundSize, groundSize]} />
    <T.ShadowMaterial opacity={0.1} />
  </T.Mesh>
{/if}
