import { onMount } from 'svelte';
import { useThrelte } from '@threlte/core';
import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { get } from 'svelte/store';

interface FirstPersonControlsOptions {
  walkSpeed?: number;
  runSpeed?: number;
  speedLerpFactor?: number;
  accelerationFactor?: number;
  decelerationFactor?: number;
  cameraPosition?: [number, number, number];
}

export function useFirstPersonControls(
  mode: 'orbit' | 'firstPerson',
  options: FirstPersonControlsOptions = {}
) {
  const {
    walkSpeed = 5,
    runSpeed = 10,
    speedLerpFactor = 8,
    accelerationFactor = 5,
    decelerationFactor = 8,
    cameraPosition = [0, 1.6, 5],
  } = options;

  let controls: PointerLockControls;
  let velocity = new THREE.Vector3();
  let currentVelocity = new THREE.Vector3();
  let direction = new THREE.Vector3();
  let currentSpeed = walkSpeed;

  const keyState = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
  };

  function updateKeyState(code: string, pressed: boolean) {
    switch (code) {
      case 'ArrowUp':
      case 'KeyW':
        keyState.forward = pressed;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        keyState.left = pressed;
        break;
      case 'ArrowDown':
      case 'KeyS':
        keyState.backward = pressed;
        break;
      case 'ArrowRight':
      case 'KeyD':
        keyState.right = pressed;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
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

  onMount(() => {
    if (mode === 'firstPerson') {
      const { camera, renderer, scene, invalidate } = useThrelte();

      // Set camera position
      get(camera).position.copy(new THREE.Vector3(...cameraPosition));

      // Initialize pointer lock controls
      controls = new PointerLockControls(get(camera), renderer.domElement);
      scene.add(controls.object);

      // Add event listeners
      document.addEventListener('click', enableControls);
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);

      const clock = new THREE.Clock();

      // Movement update loop
      const update = () => {
        const delta = clock.getDelta();

        // Calculate movement direction
        direction.z = Number(keyState.forward) - Number(keyState.backward);
        direction.x = Number(keyState.right) - Number(keyState.left);
        direction.normalize();

        // Lerp between walk and run speeds
        const targetSpeed = keyState.shift ? runSpeed : walkSpeed;
        currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, delta * speedLerpFactor);

        // Calculate target velocity
        velocity.set(0, 0, 0);
        if (keyState.forward || keyState.backward) {
          velocity.z = direction.z * currentSpeed;
        }
        if (keyState.left || keyState.right) {
          velocity.x = direction.x * currentSpeed;
        }

        // Smooth acceleration/deceleration
        const hasInput = keyState.forward || keyState.backward || keyState.left || keyState.right;
        const lerpFactor = hasInput ? accelerationFactor : decelerationFactor;

        currentVelocity.x += (velocity.x - currentVelocity.x) * Math.min(1, delta * lerpFactor);
        currentVelocity.z += (velocity.z - currentVelocity.z) * Math.min(1, delta * lerpFactor);

        // Apply movement
        controls.moveRight(currentVelocity.x * delta);
        controls.moveForward(currentVelocity.z * delta);

        invalidate();
        requestAnimationFrame(update);
      };

      update();

      // Cleanup function
      return () => {
        document.removeEventListener('click', enableControls);
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
      };
    }
  });

  return {
    controls,
    keyState,
  };
}
