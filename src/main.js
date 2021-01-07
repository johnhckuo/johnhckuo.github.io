
import * as THREE from 'three';
import { WEBGL } from 'three/examples/jsm/WebGL.js';
import cube from "./objects/cube.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add( cube.obj );

camera.position.z = 5;

function animate() {
    //pauses when the user navigates to another browser tab
    requestAnimationFrame( animate );
    cube.animate();
	renderer.render( scene, camera );
}

if ( WEBGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}

