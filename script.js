let scene, camera, renderer, planet, light, controls, moons = [], maxMoons = 7;
let rotationSpeed = 0.005;
let orbitSpeed = 0.005; // Base speed for moon orbit
let isRecording = false;
let capturer;
let textures = [
    'images/messenger.png', // Move messenger texture to the first position
    'images/insta.jpg',
    'images/wassap.png',
    'images/oculus.png',
    'images/ctrllab.png',
    'images/threads.jpg',// Add threads texture
    'images/facebook.jpeg' // Add threads texture
];
let currentMoonIndex = 0;

function init() {
    const canvas = document.getElementById('myCanvas'); // Get the canvas element

    scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    loader.load('images/space.jpg', function(texture){
        scene.background = texture;
    });
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 30;
    renderer = new THREE.WebGLRenderer({antialias: true, canvas: canvas}); // Set the renderer to use the canvas element
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    light = new THREE.PointLight(0xffffff, 1, 500);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Planet
    const planetGeometry = new THREE.SphereGeometry(5, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load('images/facebook.jpeg'); // Ensure the path is correct
    const planetMaterial = new THREE.MeshPhongMaterial({map: planetTexture});
    planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Orbit Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    window.addEventListener('resize', onWindowResize, false);

    // Event listeners
    document.getElementById('previousButton').addEventListener('click', removeMoon);
    document.getElementById('nextButton').addEventListener('click', addNextMoon);
    document.getElementById('accelerateButton').addEventListener('click', () => {
        orbitSpeed += 0.005;
    });
    document.getElementById('decreaseButton').addEventListener('click', () => {
        orbitSpeed = Math.max(0.005, orbitSpeed - 0.005); // Prevent negative speed
    });
    document.getElementById('recordButton').addEventListener('click', toggleRecording);

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    planet.rotation.y += rotationSpeed;

    moons.forEach((moon, index) => {
        moon.orbit += orbitSpeed + index * 0.005; // Apply orbitSpeed to each moon
        moon.mesh.position.x = Math.cos(moon.orbit) * (15 + index * 5); // Adjusted orbit distance for clarity
        moon.mesh.position.z = Math.sin(moon.orbit) * (15 + index * 5);
    });

    if (isRecording && capturer) {
        capturer.capture(renderer.domElement);
    }

    renderer.render(scene, camera);
}

function addMoon(textureIndex) {
    if (moons.length < maxMoons) {
        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(textures[textureIndex]);
        const moonGeometry = new THREE.SphereGeometry(2, 32, 32);
        const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        scene.add(moon);
        moons.push({mesh: moon, orbit: 0});
    }
}

function addNextMoon() {
    if (currentMoonIndex < textures.length) {
        addMoon(currentMoonIndex++);
    } else if (currentMoonIndex === textures.length) {
        // Change the planet texture to meta.png
        const textureLoader = new THREE.TextureLoader();
        const metaTexture = textureLoader.load('images/meta.png'); // Ensure the path is correct
        planet.material.map = metaTexture;
        planet.material.needsUpdate = true;

        currentMoonIndex++;
    }
}

function removeMoon() {
    if (moons.length > 0 && currentMoonIndex > 0) {
        const moonToRemove = moons.pop();
        scene.remove(moonToRemove.mesh);
        currentMoonIndex--;
    }
}

function toggleRecording() {
    if (!isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
}

function startRecording() {
    isRecording = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
    capturer.start();
    document.getElementById('recordButton').innerText = 'Stop Recording';
}

function stopRecording() {
    isRecording = false;
    capturer.stop();
    capturer.save();
    capturer = null;
    document.getElementById('recordButton').innerText = 'Record';
}

init();

// Add this to your script.js file or a separate JavaScript file

const header = document.getElementById('stickyHeader');
const showHeaderThreshold = 100; // Show header when the cursor is within this distance from the top
const headerHeight = 50; // The height of the header when it's visible

document.addEventListener('mousemove', (event) => {
  const y = event.clientY;
  if (y < showHeaderThreshold) {
    header.style.height = `${headerHeight}px`;
  } else {
    header.style.height = '0';
  }
});

var timelineSwiper = new Swiper('.vertical-timeline', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });

const timelineSlides = document.querySelectorAll('.swiper-slide');
const tooltip = document.getElementById('tooltip');
const tooltipText = document.getElementById('tooltip-text');

timelineSlides.forEach((slide) => {
  slide.addEventListener('mouseover', (event) => {
    const info = event.target.dataset.info;
    tooltipText.textContent = info;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY - 30}px`;
    tooltip.classList.remove('hidden');
  });

  slide.addEventListener('mouseout', () => {
    tooltip.classList.add('hidden');
  });
});
const swiperFounders = new Swiper('.swiper-container.founders', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
  });
  founderLinks.forEach(link => {
    link.addEventListener('mouseover', e => {
      const linkUrl = e.target.dataset.link;
      iframe.src = linkUrl;
      popup.classList.add('show');
    });

    link.addEventListener('mouseout', e => {
      popup.classList.remove('show');
      iframe.src = '';
    });
  });
