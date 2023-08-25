import * as THREE from 'three'
import GLTFLoader from 'gltfloader'
 
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const geometry = await GLTFLoader.loadGeometry('bibi.glb')

const texture = await GLTFLoader.loadTexture('bibi.png')
const material = new THREE.MeshPhongMaterial({ map:texture,shininess:1 })

const mesh = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xffffff)

scene.add(light)
scene.add(mesh)

camera.position.set(0, 1.5, 4)
light.position.set(0, 4, 4)

const renderer = new THREE.WebGLRenderer({ canvas })

let t = 0
const clock = new THREE.Clock();

loop()

function loop() {
  t += clock.getDelta()
  mesh.morphTargetInfluences[1] = Math.abs(Math.cos(t))
  mesh.rotation.y = Math.cos(t/2)
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
