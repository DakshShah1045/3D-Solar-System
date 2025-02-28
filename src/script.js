import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

// initialize pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

// add textureLoader
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader()
cubeTextureLoader.setPath('/textures/cubeMap/')

// adding textures
const sunTexture = textureLoader.load("/textures/2k_sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace  
const ringTexture = textureLoader.load("/textures/2k_saturn_ring.png")
ringTexture.colorSpace = THREE.SRGBColorSpace

const mercuryTexture = textureLoader.load("/textures/2k_mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace
const venusTexture = textureLoader.load("/textures/2k_venus_surface.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace
const earthTexture = textureLoader.load("/textures/2k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace
const marsTexture = textureLoader.load("/textures/2k_mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const moonTexture = textureLoader.load("/textures/2k_moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace

const jupiterTexture = textureLoader.load("/textures/2k_jupiter.jpg");
jupiterTexture.colorSpace = THREE.SRGBColorSpace

const saturnTexture = textureLoader.load("/textures/2k_saturn.jpg");
saturnTexture.colorSpace = THREE.SRGBColorSpace

const uranusTexture = textureLoader.load("/textures/2k_uranus.jpg");
uranusTexture.colorSpace = THREE.SRGBColorSpace

const neptuneTexture = textureLoader.load("/textures/2k_neptune.jpg");
neptuneTexture.colorSpace = THREE.SRGBColorSpace
const backgroundCubemap = cubeTextureLoader
.load( [
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
] );

scene.background = backgroundCubemap

// add materials
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
});
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,
});
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
});
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
});
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
});

const IoMaterial = new THREE.MeshStandardMaterial({
  color: 'orange'
})

const EuropaMaterial = new THREE.MeshStandardMaterial({
  color: 'blue'
})

const GanymedeMaterial = new THREE.MeshStandardMaterial({
  color: '#968C82'
})

const CallistoMaterial = new THREE.MeshStandardMaterial({
  color: '#6E645A'
})

const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: jupiterTexture,
});
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: saturnTexture,
});
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: uranusTexture,
});
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: neptuneTexture,
});

// add stuff here
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,
});

const sun = new THREE.Mesh(sphereGeometry, sunMaterial);
sun.addEventListener('click' , ()=>{
  console.log('clicked')
})
sun.scale.setScalar(15);
scene.add(sun);

const planets = [
  {
    name: "Mercury",
    radius: 1.5,
    distance: 20,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: "Venus",
    radius: 2.8,
    distance: 25,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: "Earth",
    radius: 3,
    distance: 40,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 2.7,
    distance: 45,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
    {
    name: 'Jupiter',
    radius: 7.2,
    distance: 80,
    speed: 0.002,
    material: jupiterMaterial,
    moons: [
      {
        name: 'Io',
        radius: 0.2,
        distance: 2,
        speed: 0.04
      },
      {
        name: 'Europa',
        radius: 0.15,
        distance: 1.5,
        speed: 0.03
      },
      {
        name: 'Ganymede',
        radius: 0.25,
        distance: 3,
        speed: 0.02
      },
      {
        name: 'Callisto',
        radius: 0.2,
        distance: 4,
        speed: 0.015
      }
    ]
  },
  {
    name: 'Saturn',
    radius: 6.45,
    distance: 120,
    speed: 0.0018,
    material: saturnMaterial,
    moons: [
     /* {
        name: 'Titan',
        radius: 0.4,
        distance: 20,
        speed: 0.012
      },
      {
        name: 'Enceladus',
        radius: 0.1,
        distance: 5,
        speed: 0.02
      },
      {
        name: 'Rhea',
        radius: 0.15,
        distance: 12,
        speed: 0.014
      }*/
    ]
  },
  {
    name: 'Uranus',
    radius: 4,
    distance: 160,
    speed: 0.0013,
    material: uranusMaterial,
    moons: [
    /*  {
        name: 'Titania',
        radius: 0.2,
        distance: 10,
        speed: 0.01
      },
     
      {
        name: 'Ariel',
        radius: 0.15,
        distance: 8,
        speed: 0.012
      }*/
      
    ]
  },
  {
    name: 'Neptune',
    radius: 3.88,
    distance: 200,
    speed: 0.001,
    material: neptuneMaterial,
    moons: [
      /*{
        name: 'Triton',
        radius: 0.27,
        distance: 14,
        speed: 0.01
      },
      {
        name: 'Proteus',
        radius: 0.08,
        distance: 7,
        speed: 0.015
      }*/
      
    ]
  }
];

const createPlanet = (planet) =>{
  const planetMesh = new THREE.Mesh(
    sphereGeometry,
    planet.material
  )
  planetMesh.scale.setScalar(planet.radius)
  planetMesh.position.x = planet.distance
  

  if (planet.name == "Saturn") {
    
    const ringGeometry = new THREE.RingGeometry(1.3, 2, 128);
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      map: ringTexture, // Use a texture for realism
      color: 'white',
      side: THREE.DoubleSide,
      transparent: false
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);

    ringMesh.rotation.x = Math.PI / 2; // Tilt the rings

    planetMesh.add(ringMesh); // Attach rings to planet
  }

  return planetMesh
}

const createMoon = (moon) =>{
  const moonMesh = new THREE.Mesh(
    sphereGeometry,
    moonMaterial
  )
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
}

const createJupiterMoon = (moon , name) =>{
  console.log(moon , name)
  if(name == 'Io'){
    const moonMesh = new THREE.Mesh(
    sphereGeometry,
    IoMaterial
  )
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
  }

    else if(name == 'Ganymede'){
    const moonMesh = new THREE.Mesh(
    sphereGeometry,
    GanymedeMaterial
  )
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
  }

  else if(name == 'Europa'){
    const moonMesh = new THREE.Mesh(
    sphereGeometry,
    EuropaMaterial
  )
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
  }

    else if(name == 'Callisto'){
    const moonMesh = new THREE.Mesh(
    sphereGeometry,
    CallistoMaterial
  )
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
  }
}


const planetMeshes = planets.map((planet) =>{
  const planetMesh = createPlanet(planet)
  scene.add(planetMesh)

  planet.moons.forEach((moon) => {
    if(planet.name == 'Jupiter'){
      const moonMesh = createJupiterMoon(moon , moon.name)
      planetMesh.add(moonMesh)
    }
    else{
    const moonMesh = createMoon(moon)
    planetMesh.add(moonMesh)
    }
    
  })
  return planetMesh
})

console.log(planetMeshes)




// add lights
const ambientLight = new THREE.AmbientLight(
  0xffffff,
  0.3
)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(
  0xffffff,
  1000
)
scene.add(pointLight)
 
// initialize the camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 250;
camera.position.y = 10;

document.addEventListener('keydown', (event) => {
    const speed = 10; // Adjust movement speed
    switch (event.key) {
        case 'ArrowUp':    // Move forward
            camera.position.z -= speed;
            break;
        case 'ArrowDown':  // Move backward
            camera.position.z += speed;
            break;
        case 'ArrowLeft':  // Move left
            camera.position.x -= speed;
            break;
        case 'ArrowRight': // Move right
            camera.position.x += speed;
            break;
    }
});

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20;

// add resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render loop
const renderloop = () => {
  planetMeshes.forEach((planet, planetIndex)=>{
    planet.rotation.y +=  planets[planetIndex].speed
    planet.position.x = Math.sin(planet.rotation.y) * planets[planetIndex].distance
    planet.position.z = Math.cos(planet.rotation.y) * planets[planetIndex].distance
    if(planetIndex != 5){
      planet.children.forEach((moon, moonIndex) =>{
      moon.rotation.y += planets[planetIndex].moons[moonIndex].speed
      moon.position.x = Math.sin(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance
      moon.position.z = Math.cos(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance
    })
    }
    
  })

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
