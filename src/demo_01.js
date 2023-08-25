import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({ color:0xffffff })

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

camera.position.set(0, 0, 2)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.render(scene, camera)
