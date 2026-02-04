document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("balanceMoleculeCanvas");
    const select = document.getElementById("balanceMoleculeSelect");

    if (!canvas) return;

    const viewerContainer = canvas.parentElement;

    function showViewerMessage(message) {
        if (!viewerContainer) return;
        viewerContainer.innerHTML = "";
        const messageBox = document.createElement("div");
        messageBox.style.display = "flex";
        messageBox.style.alignItems = "center";
        messageBox.style.justifyContent = "center";
        messageBox.style.height = "100%";
        messageBox.style.color = "#475569";
        messageBox.style.fontWeight = "600";
        messageBox.textContent = message;
        viewerContainer.appendChild(messageBox);
    }

    if (!window.THREE) {
        showViewerMessage("Неуспешно зареждане на 3D библиотеката.");
        return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f7fb);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 2.5, 6);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-4, -2, 6);
    scene.add(fillLight);

    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);

    const atomStyles = {
        H: { color: 0xffffff, radius: 0.25 },
        O: { color: 0xe63946, radius: 0.45 },
        C: { color: 0x2f3e46, radius: 0.45 },
        N: { color: 0x3a86ff, radius: 0.42 },
        Na: { color: 0x9b5de5, radius: 0.55 },
        Cl: { color: 0x2d6a4f, radius: 0.55 }
    };

    const molecules = {
        water: {
            atoms: [
                { element: "O", position: [0, 0, 0] },
                { element: "H", position: [0.95, 0.1, 0] },
                { element: "H", position: [-0.3, 0.9, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1]
            ]
        },
        carbonDioxide: {
            atoms: [
                { element: "O", position: [-1.4, 0, 0] },
                { element: "C", position: [0, 0, 0] },
                { element: "O", position: [1.4, 0, 0] }
            ],
            bonds: [
                [0, 1, 2],
                [1, 2, 2]
            ]
        },
        oxygen: {
            atoms: [
                { element: "O", position: [-0.8, 0, 0] },
                { element: "O", position: [0.8, 0, 0] }
            ],
            bonds: [[0, 1, 2]]
        },
        methane: {
            atoms: [
                { element: "C", position: [0, 0, 0] },
                { element: "H", position: [1, 1, 1] },
                { element: "H", position: [-1, -1, 1] },
                { element: "H", position: [-1, 1, -1] },
                { element: "H", position: [1, -1, -1] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1],
                [0, 3, 1],
                [0, 4, 1]
            ]
        },
        ammonia: {
            atoms: [
                { element: "N", position: [0, 0.2, 0] },
                { element: "H", position: [0.9, -0.6, 0.2] },
                { element: "H", position: [-0.6, -0.6, 0.8] },
                { element: "H", position: [-0.4, -0.6, -0.8] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1],
                [0, 3, 1]
            ]
        },
        sodiumChloride: {
            atoms: [
                { element: "Na", position: [-0.8, 0, 0] },
                { element: "Cl", position: [0.8, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        }
    };

    function clearGroup() {
        while (moleculeGroup.children.length > 0) {
            const child = moleculeGroup.children[0];
            moleculeGroup.remove(child);
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
        }
    }

    function createAtomMesh(atom) {
        const style = atomStyles[atom.element];
        const geometry = new THREE.SphereGeometry(style.radius, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: style.color, roughness: 0.3, metalness: 0.1 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...atom.position);
        return mesh;
    }

    function createBondMesh(start, end, order) {
        const bondGroup = new THREE.Group();
        const startVec = new THREE.Vector3(...start);
        const endVec = new THREE.Vector3(...end);
        const direction = new THREE.Vector3().subVectors(endVec, startVec);
        const length = direction.length();
        const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
        const bondMaterial = new THREE.MeshStandardMaterial({ color: 0xadb5bd, roughness: 0.3, metalness: 0.2 });
        const cylinderGeometry = new THREE.CylinderGeometry(0.08, 0.08, length, 16);

        const createCylinder = (offset) => {
            const cylinder = new THREE.Mesh(cylinderGeometry, bondMaterial);
            cylinder.position.copy(midPoint);
            cylinder.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
            if (offset) {
                cylinder.position.add(offset);
            }
            bondGroup.add(cylinder);
        };

        if (order === 2) {
            const perpendicular = new THREE.Vector3(0, 0, 1).cross(direction).normalize().multiplyScalar(0.12);
            createCylinder(perpendicular);
            createCylinder(perpendicular.clone().multiplyScalar(-1));
        } else {
            createCylinder();
        }

        return bondGroup;
    }

    function setMolecule(key) {
        const data = molecules[key] || molecules.water;
        clearGroup();

        data.atoms.forEach(atom => moleculeGroup.add(createAtomMesh(atom)));
        data.bonds.forEach(([startIndex, endIndex, order]) => {
            const start = data.atoms[startIndex].position;
            const end = data.atoms[endIndex].position;
            moleculeGroup.add(createBondMesh(start, end, order));
        });

        const bounds = new THREE.Box3().setFromObject(moleculeGroup);
        const center = bounds.getCenter(new THREE.Vector3());
        moleculeGroup.position.sub(center);
        camera.lookAt(0, 0, 0);
    }

    function resizeRenderer() {
        const width = viewerContainer.clientWidth || 1;
        const height = viewerContainer.clientHeight || 1;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    function animate() {
        requestAnimationFrame(animate);
        moleculeGroup.rotation.y += 0.003;
        renderer.render(scene, camera);
    }

    if (select) {
        select.addEventListener("change", () => setMolecule(select.value));
    }

    window.addEventListener("resize", resizeRenderer);

    setMolecule(select ? select.value : "water");
    resizeRenderer();
    animate();
});
