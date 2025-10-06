<script lang="ts">
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera makeDefault position={[10, 10, 10]}>
  <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<T.Mesh>
  <T.BoxGeometry />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>