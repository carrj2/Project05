const PERSPECTIVE = 0;
const ORTHOGRAPHIC = 1;



class Camera {

    /**
     *
     * @param pos: the position of the camera given as a vec3
     * @param type: the type of the camera (orthographic or perspective)
     */
    constructor(pos,type,dir) {
        this.cam = new THREE.perspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 20000);
        this.pos = pos;
        this.type = type;
        this.dir = dir;
    }


}