import * as THREE from 'three';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 2 );
const cylinderMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff } )
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
scene.add(cylinder);

const coneGeometry = new THREE.ConeGeometry( 1, 2, 5 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial ); 
scene.add( cone );

cube.position.x = 3
cylinder.position.x = 1
cone.position.x = -1
camera.position.set( 0, 5, 5 );
controls.update();	

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	cylinder.rotation.x += 0.01;

	cone.rotation.y -= 0.01;

	controls.update();

	renderer.render( scene, camera );
}

animate();