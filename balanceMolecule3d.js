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
        Cl: { color: 0x2d6a4f, radius: 0.55 },
        S: { color: 0xf4d35e, radius: 0.5 },
        Mg: { color: 0x43aa8b, radius: 0.55 },
        Ca: { color: 0xf77f00, radius: 0.58 },
        Fe: { color: 0xb56576, radius: 0.58 },
        Al: { color: 0xadb5bd, radius: 0.52 },
        P: { color: 0xff7b54, radius: 0.48 },
        K: { color: 0x6a4c93, radius: 0.6 },
        Cr: { color: 0x2a9d8f, radius: 0.58 },
        Mn: { color: 0xe56b6f, radius: 0.58 },
        Zn: { color: 0x4ea8de, radius: 0.56 },
        Cu: { color: 0xb87333, radius: 0.56 },
        Ag: { color: 0xc0c0c0, radius: 0.58 }
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
        },
        hydrogen: {
            atoms: [
                { element: "H", position: [-0.5, 0, 0] },
                { element: "H", position: [0.5, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        chlorine: {
            atoms: [
                { element: "Cl", position: [-0.9, 0, 0] },
                { element: "Cl", position: [0.9, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        hydrogenChloride: {
            atoms: [
                { element: "H", position: [-0.6, 0, 0] },
                { element: "Cl", position: [0.8, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        sodiumHydroxide: {
            atoms: [
                { element: "Na", position: [-1.2, 0, 0] },
                { element: "O", position: [0, 0, 0] },
                { element: "H", position: [0.9, 0.2, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [1, 2, 1]
            ]
        },
        sulfuricAcid: {
            atoms: [
                { element: "S", position: [0, 0, 0] },
                { element: "O", position: [1.2, 0, 0] },
                { element: "O", position: [-1.2, 0, 0] },
                { element: "O", position: [0, 1.2, 0] },
                { element: "O", position: [0, -1.2, 0] },
                { element: "H", position: [1.8, 0.4, 0] },
                { element: "H", position: [-1.8, -0.4, 0] }
            ],
            bonds: [
                [0, 1, 2],
                [0, 2, 2],
                [0, 3, 1],
                [0, 4, 1],
                [1, 5, 1],
                [2, 6, 1]
            ]
        },
        magnesiumOxide: {
            atoms: [
                { element: "Mg", position: [-0.8, 0, 0] },
                { element: "O", position: [0.8, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        calciumOxide: {
            atoms: [
                { element: "Ca", position: [-0.9, 0, 0] },
                { element: "O", position: [0.9, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        calciumCarbonate: {
            atoms: [
                { element: "Ca", position: [-1.4, 0, 0] },
                { element: "C", position: [0.2, 0, 0] },
                { element: "O", position: [1.3, 0, 0] },
                { element: "O", position: [-0.3, 1.0, 0] },
                { element: "O", position: [-0.3, -1.0, 0] }
            ],
            bonds: [
                [1, 2, 2],
                [1, 3, 1],
                [1, 4, 1],
                [0, 1, 1]
            ]
        },
        ironOxide: {
            atoms: [
                { element: "Fe", position: [-1.1, 0, 0] },
                { element: "Fe", position: [1.1, 0, 0] },
                { element: "O", position: [0, 1.1, 0] },
                { element: "O", position: [0, -1.1, 0] },
                { element: "O", position: [0, 0, 1.1] }
            ],
            bonds: [
                [0, 2, 1],
                [0, 3, 1],
                [0, 4, 1],
                [1, 2, 1],
                [1, 3, 1],
                [1, 4, 1]
            ]
        },
        aluminumOxide: {
            atoms: [
                { element: "Al", position: [-1.1, 0, 0] },
                { element: "Al", position: [1.1, 0, 0] },
                { element: "O", position: [0, 1.1, 0] },
                { element: "O", position: [0, -1.1, 0] },
                { element: "O", position: [0, 0, 1.1] }
            ],
            bonds: [
                [0, 2, 1],
                [0, 3, 1],
                [0, 4, 1],
                [1, 2, 1],
                [1, 3, 1],
                [1, 4, 1]
            ]
        },
        propane: {
            atoms: [
                { element: "C", position: [-1.2, 0, 0] },
                { element: "C", position: [0, 0, 0] },
                { element: "C", position: [1.2, 0, 0] },
                { element: "H", position: [-1.8, 0.9, 0] },
                { element: "H", position: [-1.8, -0.9, 0] },
                { element: "H", position: [-1.2, 0, 1.0] },
                { element: "H", position: [0, 1.0, 0.8] },
                { element: "H", position: [0, -1.0, -0.8] },
                { element: "H", position: [1.8, 0.9, 0] },
                { element: "H", position: [1.8, -0.9, 0] },
                { element: "H", position: [1.2, 0, -1.0] }
            ],
            bonds: [
                [0, 1, 1],
                [1, 2, 1],
                [0, 3, 1],
                [0, 4, 1],
                [0, 5, 1],
                [1, 6, 1],
                [1, 7, 1],
                [2, 8, 1],
                [2, 9, 1],
                [2, 10, 1]
            ]
        },
        ethane: {
            atoms: [
                { element: "C", position: [-0.8, 0, 0] },
                { element: "C", position: [0.8, 0, 0] },
                { element: "H", position: [-1.4, 0.9, 0] },
                { element: "H", position: [-1.4, -0.9, 0] },
                { element: "H", position: [-0.8, 0, 1.0] },
                { element: "H", position: [1.4, 0.9, 0] },
                { element: "H", position: [1.4, -0.9, 0] },
                { element: "H", position: [0.8, 0, -1.0] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1],
                [0, 3, 1],
                [0, 4, 1],
                [1, 5, 1],
                [1, 6, 1],
                [1, 7, 1]
            ]
        },
        glucose: {
            atoms: [
                { element: "C", position: [0, 1.2, 0] },
                { element: "C", position: [1.0, 0.6, 0] },
                { element: "C", position: [1.0, -0.6, 0] },
                { element: "C", position: [0, -1.2, 0] },
                { element: "C", position: [-1.0, -0.6, 0] },
                { element: "C", position: [-1.0, 0.6, 0] },
                { element: "O", position: [0, 2.0, 0] },
                { element: "O", position: [1.8, 1.1, 0] },
                { element: "O", position: [1.8, -1.1, 0] },
                { element: "O", position: [0, -2.0, 0] },
                { element: "O", position: [-1.8, -1.1, 0] },
                { element: "O", position: [-1.8, 1.1, 0] },
                { element: "H", position: [0, 2.6, 0] },
                { element: "H", position: [2.4, 1.4, 0] },
                { element: "H", position: [2.4, -1.4, 0] },
                { element: "H", position: [0, -2.6, 0] },
                { element: "H", position: [-2.4, -1.4, 0] },
                { element: "H", position: [-2.4, 1.4, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [1, 2, 1],
                [2, 3, 1],
                [3, 4, 1],
                [4, 5, 1],
                [5, 0, 1],
                [0, 6, 1],
                [1, 7, 1],
                [2, 8, 1],
                [3, 9, 1],
                [4, 10, 1],
                [5, 11, 1],
                [6, 12, 1],
                [7, 13, 1],
                [8, 14, 1],
                [9, 15, 1],
                [10, 16, 1],
                [11, 17, 1]
            ]
        },
        sodium: {
            atoms: [{ element: "Na", position: [0, 0, 0] }],
            bonds: []
        },
        magnesium: {
            atoms: [{ element: "Mg", position: [0, 0, 0] }],
            bonds: []
        },
        calcium: {
            atoms: [{ element: "Ca", position: [0, 0, 0] }],
            bonds: []
        },
        iron: {
            atoms: [{ element: "Fe", position: [0, 0, 0] }],
            bonds: []
        },
        aluminum: {
            atoms: [{ element: "Al", position: [0, 0, 0] }],
            bonds: []
        },
        phosphorus: {
            atoms: [{ element: "P", position: [0, 0, 0] }],
            bonds: []
        },
        phosphorusPentoxide: {
            atoms: [
                { element: "P", position: [-0.8, 0, 0] },
                { element: "P", position: [0.8, 0, 0] },
                { element: "O", position: [0, 1.2, 0] },
                { element: "O", position: [0, -1.2, 0] },
                { element: "O", position: [-1.6, 0.6, 0] },
                { element: "O", position: [1.6, -0.6, 0] },
                { element: "O", position: [0, 0, 1.2] }
            ],
            bonds: [
                [0, 2, 1],
                [0, 3, 1],
                [0, 4, 2],
                [1, 2, 1],
                [1, 3, 1],
                [1, 5, 2],
                [0, 6, 1],
                [1, 6, 1]
            ]
        },
        potassium: {
            atoms: [{ element: "K", position: [0, 0, 0] }],
            bonds: []
        },
        chromium: {
            atoms: [{ element: "Cr", position: [0, 0, 0] }],
            bonds: []
        },
        manganese: {
            atoms: [{ element: "Mn", position: [0, 0, 0] }],
            bonds: []
        },
        zinc: {
            atoms: [{ element: "Zn", position: [0, 0, 0] }],
            bonds: []
        },
        copper: {
            atoms: [{ element: "Cu", position: [0, 0, 0] }],
            bonds: []
        },
        silver: {
            atoms: [{ element: "Ag", position: [0, 0, 0] }],
            bonds: []
        },
        magnesiumOxideCompound: {
            atoms: [
                { element: "Mg", position: [-0.8, 0, 0] },
                { element: "O", position: [0.8, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        calciumHydroxide: {
            atoms: [
                { element: "Ca", position: [0, 0, 0] },
                { element: "O", position: [1.1, 0.4, 0] },
                { element: "O", position: [-1.1, -0.4, 0] },
                { element: "H", position: [1.8, 0.8, 0] },
                { element: "H", position: [-1.8, -0.8, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1],
                [1, 3, 1],
                [2, 4, 1]
            ]
        },
        calciumSulfate: {
            atoms: [
                { element: "Ca", position: [-1.2, 0, 0] },
                { element: "S", position: [0, 0, 0] },
                { element: "O", position: [1.1, 0, 0] },
                { element: "O", position: [-0.4, 1.1, 0] },
                { element: "O", position: [-0.4, -1.1, 0] },
                { element: "O", position: [0, 0, 1.1] }
            ],
            bonds: [
                [1, 2, 2],
                [1, 3, 1],
                [1, 4, 1],
                [1, 5, 1],
                [0, 1, 1]
            ]
        },
        potassiumDichromate: {
            atoms: [
                { element: "K", position: [-2.0, 0, 0] },
                { element: "K", position: [2.0, 0, 0] },
                { element: "Cr", position: [-0.6, 0, 0] },
                { element: "Cr", position: [0.6, 0, 0] },
                { element: "O", position: [-1.1, 1.1, 0] },
                { element: "O", position: [-1.1, -1.1, 0] },
                { element: "O", position: [1.1, 1.1, 0] },
                { element: "O", position: [1.1, -1.1, 0] },
                { element: "O", position: [0, 1.6, 0] },
                { element: "O", position: [0, -1.6, 0] },
                { element: "O", position: [0, 0, 1.2] }
            ],
            bonds: [
                [2, 4, 1],
                [2, 5, 1],
                [3, 6, 1],
                [3, 7, 1],
                [2, 8, 1],
                [3, 8, 1],
                [2, 9, 1],
                [3, 9, 1],
                [2, 10, 1],
                [3, 10, 1]
            ]
        },
        ironSulfate: {
            atoms: [
                { element: "Fe", position: [-1.2, 0, 0] },
                { element: "S", position: [0, 0, 0] },
                { element: "O", position: [1.1, 0, 0] },
                { element: "O", position: [-0.4, 1.1, 0] },
                { element: "O", position: [-0.4, -1.1, 0] },
                { element: "O", position: [0, 0, 1.1] }
            ],
            bonds: [
                [1, 2, 2],
                [1, 3, 1],
                [1, 4, 1],
                [1, 5, 1],
                [0, 1, 1]
            ]
        },
        potassiumSulfate: {
            atoms: [
                { element: "K", position: [-1.8, 0.6, 0] },
                { element: "K", position: [-1.8, -0.6, 0] },
                { element: "S", position: [0, 0, 0] },
                { element: "O", position: [1.1, 0, 0] },
                { element: "O", position: [-0.4, 1.1, 0] },
                { element: "O", position: [-0.4, -1.1, 0] },
                { element: "O", position: [0, 0, 1.1] }
            ],
            bonds: [
                [2, 3, 2],
                [2, 4, 1],
                [2, 5, 1],
                [2, 6, 1],
                [0, 2, 1],
                [1, 2, 1]
            ]
        },
        chromiumSulfate: {
            atoms: [
                { element: "Cr", position: [-1.6, 0, 0] },
                { element: "Cr", position: [1.6, 0, 0] },
                { element: "S", position: [0, 0, 0] },
                { element: "S", position: [0, 1.6, 0] },
                { element: "S", position: [0, -1.6, 0] },
                { element: "O", position: [1.1, 0, 0] },
                { element: "O", position: [-1.1, 0, 0] },
                { element: "O", position: [0.6, 1.1, 0] },
                { element: "O", position: [-0.6, 1.1, 0] },
                { element: "O", position: [0.6, -1.1, 0] },
                { element: "O", position: [-0.6, -1.1, 0] },
                { element: "O", position: [0, 2.2, 0] },
                { element: "O", position: [0, -2.2, 0] }
            ],
            bonds: [
                [2, 5, 2],
                [2, 6, 2],
                [3, 7, 1],
                [3, 8, 1],
                [4, 9, 1],
                [4, 10, 1],
                [3, 11, 1],
                [4, 12, 1],
                [0, 2, 1],
                [1, 2, 1]
            ]
        },
        ironSulfateComplex: {
            atoms: [
                { element: "Fe", position: [-1.6, 0, 0] },
                { element: "Fe", position: [1.6, 0, 0] },
                { element: "S", position: [0, 0, 0] },
                { element: "S", position: [0, 1.6, 0] },
                { element: "S", position: [0, -1.6, 0] },
                { element: "O", position: [1.1, 0, 0] },
                { element: "O", position: [-1.1, 0, 0] },
                { element: "O", position: [0.6, 1.1, 0] },
                { element: "O", position: [-0.6, 1.1, 0] },
                { element: "O", position: [0.6, -1.1, 0] },
                { element: "O", position: [-0.6, -1.1, 0] },
                { element: "O", position: [0, 2.2, 0] },
                { element: "O", position: [0, -2.2, 0] }
            ],
            bonds: [
                [2, 5, 2],
                [2, 6, 2],
                [3, 7, 1],
                [3, 8, 1],
                [4, 9, 1],
                [4, 10, 1],
                [3, 11, 1],
                [4, 12, 1],
                [0, 2, 1],
                [1, 2, 1]
            ]
        },
        potassiumPermanganate: {
            atoms: [
                { element: "K", position: [-1.6, 0, 0] },
                { element: "Mn", position: [0, 0, 0] },
                { element: "O", position: [1.2, 0, 0] },
                { element: "O", position: [0, 1.2, 0] },
                { element: "O", position: [0, -1.2, 0] },
                { element: "O", position: [0, 0, 1.2] }
            ],
            bonds: [
                [1, 2, 2],
                [1, 3, 1],
                [1, 4, 1],
                [1, 5, 1],
                [0, 1, 1]
            ]
        },
        potassiumChloride: {
            atoms: [
                { element: "K", position: [-0.9, 0, 0] },
                { element: "Cl", position: [0.9, 0, 0] }
            ],
            bonds: [[0, 1, 1]]
        },
        manganeseChloride: {
            atoms: [
                { element: "Mn", position: [0, 0, 0] },
                { element: "Cl", position: [1.2, 0.6, 0] },
                { element: "Cl", position: [-1.2, -0.6, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1]
            ]
        },
        zincChloride: {
            atoms: [
                { element: "Zn", position: [0, 0, 0] },
                { element: "Cl", position: [1.2, 0.6, 0] },
                { element: "Cl", position: [-1.2, -0.6, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1]
            ]
        },
        nitricAcid: {
            atoms: [
                { element: "N", position: [0, 0, 0] },
                { element: "O", position: [1.1, 0, 0] },
                { element: "O", position: [-0.6, 1.0, 0] },
                { element: "O", position: [-0.6, -1.0, 0] },
                { element: "H", position: [1.8, 0.2, 0] }
            ],
            bonds: [
                [0, 1, 2],
                [0, 2, 1],
                [0, 3, 1],
                [1, 4, 1]
            ]
        },
        copperNitrate: {
            atoms: [
                { element: "Cu", position: [0, 0, 0] },
                { element: "N", position: [1.4, 0.6, 0] },
                { element: "N", position: [1.4, -0.6, 0] },
                { element: "O", position: [2.2, 0.6, 0] },
                { element: "O", position: [1.4, 1.4, 0] },
                { element: "O", position: [0.6, 0.6, 0] },
                { element: "O", position: [2.2, -0.6, 0] },
                { element: "O", position: [1.4, -1.4, 0] },
                { element: "O", position: [0.6, -0.6, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [0, 2, 1],
                [1, 3, 2],
                [1, 4, 1],
                [1, 5, 1],
                [2, 6, 2],
                [2, 7, 1],
                [2, 8, 1]
            ]
        },
        nitricOxide: {
            atoms: [
                { element: "N", position: [-0.6, 0, 0] },
                { element: "O", position: [0.6, 0, 0] }
            ],
            bonds: [[0, 1, 2]]
        },
        octane: {
            atoms: [
                { element: "C", position: [-3.5, 0, 0] },
                { element: "C", position: [-2.5, 0, 0] },
                { element: "C", position: [-1.5, 0, 0] },
                { element: "C", position: [-0.5, 0, 0] },
                { element: "C", position: [0.5, 0, 0] },
                { element: "C", position: [1.5, 0, 0] },
                { element: "C", position: [2.5, 0, 0] },
                { element: "C", position: [3.5, 0, 0] },
                { element: "H", position: [-4.0, 0.9, 0] },
                { element: "H", position: [-4.0, -0.9, 0] },
                { element: "H", position: [-3.5, 0, 1.0] },
                { element: "H", position: [-2.5, 1.0, 0] },
                { element: "H", position: [-2.5, -1.0, 0] },
                { element: "H", position: [-1.5, 1.0, 0] },
                { element: "H", position: [-1.5, -1.0, 0] },
                { element: "H", position: [-0.5, 1.0, 0] },
                { element: "H", position: [-0.5, -1.0, 0] },
                { element: "H", position: [0.5, 1.0, 0] },
                { element: "H", position: [0.5, -1.0, 0] },
                { element: "H", position: [1.5, 1.0, 0] },
                { element: "H", position: [1.5, -1.0, 0] },
                { element: "H", position: [2.5, 1.0, 0] },
                { element: "H", position: [2.5, -1.0, 0] },
                { element: "H", position: [3.5, 0, -1.0] },
                { element: "H", position: [4.0, 0.9, 0] },
                { element: "H", position: [4.0, -0.9, 0] }
            ],
            bonds: [
                [0, 1, 1],
                [1, 2, 1],
                [2, 3, 1],
                [3, 4, 1],
                [4, 5, 1],
                [5, 6, 1],
                [6, 7, 1],
                [0, 8, 1],
                [0, 9, 1],
                [0, 10, 1],
                [1, 11, 1],
                [1, 12, 1],
                [2, 13, 1],
                [2, 14, 1],
                [3, 15, 1],
                [3, 16, 1],
                [4, 17, 1],
                [4, 18, 1],
                [5, 19, 1],
                [5, 20, 1],
                [6, 21, 1],
                [6, 22, 1],
                [7, 23, 1],
                [7, 24, 1],
                [7, 25, 1]
            ]
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
        const style = atomStyles[atom.element] || { color: 0x94a3b8, radius: 0.35 };
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

    window.show3DMolecule = (key) => {
        setMolecule(key);
    };

    window.addEventListener("resize", resizeRenderer);

    setMolecule(select ? select.value : "water");
    resizeRenderer();
    animate();
});
