
window.onload = sky;

var scene;
var camera;
var renderer;

function sky() {
    init();
    animate();
}


function init() {

    // creates a new scene
    scene = new THREE.Scene();

    // define the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.set(0, 100, 200);
    camera.lookAt(scene.position);

    // var camera = new Camera(vec3(0,100,200), PERSPECTIVE, scene.position);
    // camera.cam.lookAt(scene.position);

    // creates the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize ( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //  creates axes seen on screen
    var axes = new THREE.AxisHelper(100);
    scene.add(axes);

    // Create a new skybox
    var skybox = new Skybox();

    skybox.applySkybox();

    //  cube
    var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/crate.jpg') });
    var geometry = new THREE.CubeGeometry(50, 50, 50);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 25, 0);
    scene.add(cube);

}

function animate() {
    requestAnimationFrame( animate );
    render();
}

// function init_listiners() {
//
//     var left_arrow = document.getElementById("left");
//     left_arrow.addEventListener("click", update);
//
// }
//
// function update() {
//
// }

function render() {
    renderer.render(scene, camera);
}