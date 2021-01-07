import * as THREE from 'three';

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const cube = {
    obj: new THREE.Mesh( geometry, material ),
    animate: function(){
        this.obj.rotation.x += 0.01;
        this.obj.rotation.y += 0.01;
    }
}


export default cube;
