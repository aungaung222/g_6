var THREE = require("three");
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class FrameCSS {
    constructor(container_id) {
        var view_3d = document.getElementById(container_id);

        var position_info = view_3d.getBoundingClientRect();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.canvas = view_3d;
        this.renderer.setSize(position_info.width, position_info.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0xf9f9f9);
        view_3d.appendChild(this.renderer.domElement);

        this.perspective_camera = new THREE.PerspectiveCamera(45, position_info.width / position_info.height, 1, 1000);
        this.orthographicCamera = new THREE.OrthographicCamera( position_info.width / - 2, position_info.width / 2, position_info.height / 2, position_info.height / - 2, 1, 1000 );
        this.orthographicCamera.zoom = 50;

        this.camera = this.orthographicCamera;
        this.camera.position.set(10, 4, 10)
        this.camera.lookAt(new THREE.Vector3(-4, 0, 0))
        
        this.scene = new THREE.Scene();
        //this.scene.add(new THREE.AxesHelper(4))

        this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbit.addEventListener("change", () => {
            this.render()
        })
        this.orbit.saveState();

        this.dirLight = new THREE.DirectionalLight(0xffffff, 1);
        this.dirLight.position.copy(this.camera.position);
      //  this.scene.add(this.dirLight);
    
        this.dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
        this.dirLight1.position.set(-this.camera.position.x, this.camera.position.y, -this.camera.position.z);
       // this.scene.add(this.dirLight1);
    
        this.camera.updateProjectionMatrix();

        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize( position_info.width,position_info.height );
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = (position_info.top + window.scrollY) + "px";
        this.labelRenderer.domElement.style.left = (position_info.left + window.scrollX) + "px";
        
        document.body.appendChild( this.labelRenderer.domElement );
    
        this.css2d_control = new OrbitControls( this.camera, this.labelRenderer.domElement );
        this.css2d_control.addEventListener("change", () => {
            this.render()
        })

        this.lightHolder = new THREE.Group();
        this.lightHolder.add(this.dirLight);
        this.lightHolder.add(this.dirLight1);

        this.scene.add(this.lightHolder)
    }

    render() {
        
        this.lightHolder.quaternion.copy(this.camera.quaternion); // in the animation loop

        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render( this.scene, this.camera );
    }
}

