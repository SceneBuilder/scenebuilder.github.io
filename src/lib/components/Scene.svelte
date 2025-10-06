<script lang="ts">
  import { T } from '@threlte/core'
  import { GLTF, OrbitControls } from '@threlte/extras'

  export let url: string
  export let cameraPosition: [number, number, number] = [10, 8, 10]
  export let cameraFov: number = 45
  export let enableShadows: boolean = true
  export let showGround: boolean = true
  export let groundSize: number = 50
  export let lightIntensity: number = 1
  export let ambientIntensity: number = 0.4
</script>

<T.PerspectiveCamera makeDefault position={cameraPosition} fov={cameraFov}>
  <OrbitControls enableDamping dampingFactor={0.05} />
</T.PerspectiveCamera>

<T.DirectionalLight
  position={[10, 10, 5]}
  intensity={lightIntensity}
  castShadow={enableShadows}
/>
<T.DirectionalLight position={[-5, 8, -5]} intensity={lightIntensity * 0.3} />
<T.AmbientLight intensity={ambientIntensity} />

<GLTF {url} />

{#if showGround}
  <T.Mesh rotation.x={-Math.PI / 2} position.y={-0.1} receiveShadow={enableShadows}>
    <T.PlaneGeometry args={[groundSize, groundSize]} />
    <T.ShadowMaterial opacity={0.1} />
  </T.Mesh>
{/if}