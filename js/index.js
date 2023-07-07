import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const controls = new OrbitControls( camera, renderer.domElement ); //creamos controles de camara
const loader = new GLTFLoader();

const scene = new THREE.Scene(); //Creamos la escena
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / windows.innerHeight, 0.1, 1000); //Configuramos la cámara. Le damos el Fov, aspectratio, near and far clipping plane

const renderer = new THREE.WebGLRenderer(); //Creamos el renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Creamos una forma geometrica
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh( geometry, material)
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}