// this is demo from https://www.npmjs.com/package/three

import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

let camera, scene, renderer
let geometry, material, mesh

export const init = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  camera = new PerspectiveCamera(70, width / height, 0.01, 10)
  camera.position.z = 1

  scene = new Scene()

  geometry = new BoxGeometry(0.2, 0.2, 0.2)
  material = new MeshNormalMaterial()

  mesh = new Mesh(geometry, material)
  scene.add(mesh)

  renderer = new WebGLRenderer({ antialias: false })
  renderer.setSize(width, height)
  renderer.setAnimationLoop(animation)
  document.body.appendChild(renderer.domElement)
}

const animation = (time) => {
  mesh.rotation.x = time / 2000
  mesh.rotation.y = time / 1000
  renderer.render(scene, camera)
}
