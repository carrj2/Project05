class Skybox {

    constructor() {
        var materialArray = [];
        materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/dawnmountain-xpos.png' ) }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/dawnmountain-xneg.png' ) }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/dawnmountain-ypos.png' ) }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/dawnmountain-yneg.png' ) }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/dawnmountain-zpos.png' ) }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/dawnmountain-zneg.png' ) }));

        for (var i = 0; i < 6; i++)
            materialArray[i].side = THREE.BackSide;

        this.skyboxMaterial = new THREE.MeshFaceMaterial( materialArray );
        this.skyboxGeom = new THREE.CubeGeometry( 5000, 5000, 5000, 1, 1, 1 );

        this.skybox = new THREE.Mesh( this.skyboxGeom, this.skyboxMaterial );
    }

    applySkybox() {
        scene.add( this.skybox);
    }
}