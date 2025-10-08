<script lang="ts">
  import { T, useThrelte } from '@threlte/core'
  import { GLTF, Sky } from '@threlte/extras'
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
  import { get } from 'svelte/store';

  export let url: string
  export let cameraPosition: [number, number, number] = [0, 1.6, 5]
  export let cameraFov: number = 75
  export let enableShadows: boolean = true
  export let showGround: boolean = true
  export let groundSize: number = 50
  export let lightIntensity: number = 1
  export let ambientIntensity: number = 0.4

  let controls: PointerLockControls;
  let velocity = new THREE.Vector3();
  let direction = new THREE.Vector3();

  const walkSpeed = 300;
  const runSpeed = 600;
  const speedLerpFactor = 8;
  let currentSpeed = walkSpeed;

  const keyState = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false
  };

  function updateKeyState(code: string, pressed: boolean) {
    switch (code) {
      case "ArrowUp":
      case "KeyW":
        keyState.forward = pressed;
        break;
      case "ArrowLeft":
      case "KeyA":
        keyState.left = pressed;
        break;
      case "ArrowDown":
      case "KeyS":
        keyState.backward = pressed;
        break;
      case "ArrowRight":
      case "KeyD":
        keyState.right = pressed;
        break;
      case "ShiftLeft":
      case "ShiftRight":
        keyState.shift = pressed;
        break;
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    updateKeyState(e.code, true);
  }

  function onKeyUp(e: KeyboardEvent) {
    updateKeyState(e.code, false);
  }

  function enableControls() {
    if (controls) {
      controls.lock();
    }
  }

  function onGLTFLoad(gltf: any) {
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
  }

  onMount(() => {
    const { camera, renderer, scene, invalidate } = useThrelte();

    // Set camera to eye-level height
    get(camera).position.copy(new THREE.Vector3(...cameraPosition));

    controls = new PointerLockControls(get(camera), renderer.domElement);
    scene.add(controls.object);

    const clock = new THREE.Clock();

    const update = () => {
      const delta = clock.getDelta();
      velocity.set(0, 0, 0);

      direction.z = Number(keyState.forward) - Number(keyState.backward);
      direction.x = Number(keyState.right) - Number(keyState.left);
      direction.normalize();

      const targetSpeed = keyState.shift ? runSpeed : walkSpeed;
      currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, delta * speedLerpFactor);

      if (keyState.forward || keyState.backward)
        velocity.z -= direction.z * currentSpeed * delta;
      if (keyState.left || keyState.right)
        velocity.x -= direction.x * currentSpeed * delta;

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);

      invalidate();
      requestAnimationFrame(update);
    };

    update();
  });
</script>

<svelte:document
  on:click={enableControls}
  on:keydown={onKeyDown}
  on:keyup={onKeyUp}
/>

<T.PerspectiveCamera makeDefault position={cameraPosition} fov={cameraFov} />

<Sky elevation={0.5} />

<T.DirectionalLight
  position={[10, 10, 5]}
  intensity={lightIntensity}
  castShadow={enableShadows}
  shadow.camera.left={-20}
  shadow.camera.right={20}
  shadow.camera.top={20}
  shadow.camera.bottom={-20}
  shadow.mapSize.width={2048}
  shadow.mapSize.height={2048}
/>
<T.DirectionalLight position={[-5, 8, -5]} intensity={lightIntensity * 0.3} />
<T.AmbientLight intensity={ambientIntensity} />

<GLTF {url} on:load={onGLTFLoad} />

{#if showGround}
  <T.Mesh rotation.x={-Math.PI / 2} position.y={-0.1} receiveShadow={enableShadows}>
    <T.PlaneGeometry args={[groundSize, groundSize]} />
    <T.ShadowMaterial opacity={0.1} />
  </T.Mesh>
{/if}
