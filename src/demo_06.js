import * as THREE from 'three'
import GLTFLoader from 'gltfloader'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const geometry = await GLTFLoader.loadGeometry('bibi.glb')

const texture = new THREE.TextureLoader().load('bibi.png')
const material = new THREE.MeshPhongMaterial({ map:texture,shininess:0})

const mesh = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xffffff)
const lightAmbient = new THREE.AmbientLight(0x555555)

scene.add(light)
scene.add(lightAmbient)
scene.add(mesh)

camera.position.set(0, 1.5, 4)
light.position.set(0, 4, 4)

const renderer = new THREE.WebGLRenderer({ canvas })




loop()

function loop() {
  requestAnimationFrame(loop)
  mesh.rotation.y += 0.01
  renderer.render(scene, camera)
}
