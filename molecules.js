document.addEventListener("DOMContentLoaded", function() {
    // Wait for THREE.js to be loaded
    function initializeMolecules() {
        const canvas = document.getElementById("moleculeCanvas");
        const titleEl = document.getElementById("moleculeTitle");
        const formulaEl = document.getElementById("moleculeFormula");
        const factsEl = document.getElementById("moleculeFacts");
        const buttons = document.querySelectorAll(".molecule-btn");

        const viewerContainer = canvas ? canvas.parentElement : null;

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

        if (!canvas) {
            console.error("Missing canvas element.");
            return;
        }

        if (!window.THREE) {
            showViewerMessage("Неуспешно зареждане на three.js. Проверете интернет връзката.");
            console.error("three.js not loaded");
            return;
        }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f7fb);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 3, 7);

    const controlState = {
        isDragging: false,
        lastX: 0,
        lastY: 0,
        rotationSpeed: 0.005,
        zoomSpeed: 0.6,
        minDistance: 3,
        maxDistance: 12
    };

    canvas.style.cursor = "grab";

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    canvas.addEventListener("pointerdown", (event) => {
        controlState.isDragging = true;
        controlState.lastX = event.clientX;
        controlState.lastY = event.clientY;
        canvas.setPointerCapture(event.pointerId);
        canvas.style.cursor = "grabbing";
    });

    const stopDragging = () => {
        controlState.isDragging = false;
        canvas.style.cursor = "grab";
    };

    canvas.addEventListener("pointerup", stopDragging);
    canvas.addEventListener("pointerleave", stopDragging);
    canvas.addEventListener("pointercancel", stopDragging);

    canvas.addEventListener("pointermove", (event) => {
        if (!controlState.isDragging) return;
        const deltaX = event.clientX - controlState.lastX;
        const deltaY = event.clientY - controlState.lastY;
        moleculeGroup.rotation.y += deltaX * controlState.rotationSpeed;
        moleculeGroup.rotation.x += deltaY * controlState.rotationSpeed;
        moleculeGroup.rotation.x = clamp(moleculeGroup.rotation.x, -Math.PI / 2, Math.PI / 2);
        controlState.lastX = event.clientX;
        controlState.lastY = event.clientY;
    });

    canvas.addEventListener("wheel", (event) => {
        event.preventDefault();
        const direction = Math.sign(event.deltaY);
        const currentDistance = camera.position.length();
        const nextDistance = clamp(
            currentDistance + direction * controlState.zoomSpeed,
            controlState.minDistance,
            controlState.maxDistance
        );
        camera.position.setLength(nextDistance);
    }, { passive: false });

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
            title: "Вода (H₂O)",
            formula: "H₂O",
            facts: [
                "Жизненоважна за всички живи организми.",
                "Молекулата е с ъглова форма (около 104.5°).",
                "Кислородът прави два ковалентни връзки с водороди."
            ],
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
            title: "Въглероден диоксид (CO₂)",
            formula: "CO₂",
            facts: [
                "Газ, който отделяме при дишане.",
                "Молекулата е линейна.",
                "Има две двойни връзки между C и O."
            ],
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
            title: "Кислород (O₂)",
            formula: "O₂",
            facts: [
                "Основен газ за дишането.",
                "Съдържа двойна връзка между двата кислородни атома.",
                "Молекулата е линейна."
            ],
            atoms: [
                { element: "O", position: [-0.8, 0, 0] },
                { element: "O", position: [0.8, 0, 0] }
            ],
            bonds: [[0, 1, 2]]
        },
        methane: {
            title: "Метан (CH₄)",
            formula: "CH₄",
            facts: [
                "Най-простият въглеводород.",
                "Тетраедрична форма.",
                "Четири единични връзки между C и H."
            ],
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
            title: "Амоняк (NH₃)",
            formula: "NH₃",
            facts: [
                "Използва се при производство на торове.",
                "Тригонална пирамидална форма.",
                "Има три единични връзки между N и H."
            ],
            atoms: [
                { element: "N", position: [0, 0.2, 0] },
                { element: "H", position: [1, -0.8, 0] },
                { element: "H", position: [-0.7, -0.8, 0.6] },
                { element: "H", position: [-0.7, -0.8, -0.6] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1],
                [0, 3, 1]
            ]
        },
        sodiumChloride: {
            title: "Натриев хлорид (NaCl)",
            formula: "NaCl",
            facts: [
                "Познат като готварска сол.",
                "Йонна връзка между Na⁺ и Cl⁻.",
                "Изгражда кристална решетка."
            ],
            atoms: [
                { element: "Na", position: [-0.9, 0, 0] },
                { element: "Cl", position: [0.9, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        }
    };

    function clearGroup() {
        while (moleculeGroup.children.length) {
            const child = moleculeGroup.children.pop();
            child.geometry?.dispose?.();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(mat => mat.dispose?.());
                } else {
                    child.material.dispose?.();
                }
            }
        }
    }

    function createAtomMesh(atom) {
        const style = atomStyles[atom.element] || { color: 0x94a3b8, radius: 0.35 };
        const geometry = new THREE.SphereGeometry(style.radius, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: style.color, roughness: 0.4, metalness: 0.1 });
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
        const data = molecules[key];
        if (!data) return;

        clearGroup();
        moleculeGroup.rotation.set(0, 0, 0);
        moleculeGroup.position.set(0, 0, 0);

        data.atoms.forEach(atom => {
            const atomMesh = createAtomMesh(atom);
            moleculeGroup.add(atomMesh);
        });

        data.bonds.forEach(([startIndex, endIndex, order]) => {
            const start = data.atoms[startIndex].position;
            const end = data.atoms[endIndex].position;
            const bondMesh = createBondMesh(start, end, order);
            moleculeGroup.add(bondMesh);
        });

        const bounds = new THREE.Box3().setFromObject(moleculeGroup);
        const center = bounds.getCenter(new THREE.Vector3());
        moleculeGroup.position.sub(center);
        camera.position.set(0, 0, 7);
        camera.lookAt(0, 0, 0);

        titleEl.textContent = data.title;
        formulaEl.textContent = data.formula;
        factsEl.innerHTML = "";
        data.facts.forEach(fact => {
            const item = document.createElement("li");
            item.textContent = fact;
            factsEl.appendChild(item);
        });
    }

    function resizeRenderer() {
        const canvasContainer = canvas.parentElement;
        if (!canvasContainer) return;
        const width = canvasContainer.clientWidth || canvasContainer.getBoundingClientRect().width;
        const height = canvasContainer.clientHeight || 400;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const key = button.dataset.molecule;
            setMolecule(key);
        });
    });

    function animate() {
        requestAnimationFrame(animate);
        moleculeGroup.rotation.y += 0.003;
        renderer.render(scene, camera);
    }

    window.addEventListener("resize", resizeRenderer);

    setMolecule("water");
    resizeRenderer();
    animate();
    }
    
    // Check if THREE is already loaded
    if (window.THREE) {
        initializeMolecules();
    } else {
        // Wait for THREE.js to load
        let checkCount = 0;
        const checkThree = setInterval(() => {
            if (window.THREE || checkCount > 50) {
                clearInterval(checkThree);
                if (window.THREE) {
                    initializeMolecules();
                }
            }
            checkCount++;
        }, 100);
    }
});
