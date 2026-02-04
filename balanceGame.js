class BalanceGameEquation {
    constructor(left, right, coefficients) {
        this.left = left;
        this.right = right;
        this.coefficients = coefficients;
        this.currentCoefficients = new Array(left.length + right.length).fill(1);
    }
}

const balanceGameEquations = {
    simple: [
        new BalanceGameEquation(
            [{formula: 'H₂', atoms: {H: 2}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [2, 1, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'Na', atoms: {Na: 1}}, {formula: 'Cl₂', atoms: {Cl: 2}}],
            [{formula: 'NaCl', atoms: {Na: 1, Cl: 1}}],
            [2, 1, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'Mg', atoms: {Mg: 1}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'MgO', atoms: {Mg: 1, O: 1}}],
            [2, 1, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'Ca', atoms: {Ca: 1}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'CaO', atoms: {Ca: 1, O: 1}}],
            [2, 1, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'Zn', atoms: {Zn: 1}}, {formula: 'HCl', atoms: {H: 1, Cl: 1}}],
            [{formula: 'ZnCl₂', atoms: {Zn: 1, Cl: 2}}, {formula: 'H₂', atoms: {H: 2}}],
            [1, 2, 1, 1]
        ),
        new BalanceGameEquation(
            [{formula: 'CaCO₃', atoms: {Ca: 1, C: 1, O: 3}}],
            [{formula: 'CaO', atoms: {Ca: 1, O: 1}}, {formula: 'CO₂', atoms: {C: 1, O: 2}}],
            [1, 1, 1]
        ),
    ],
    medium: [
        new BalanceGameEquation(
            [{formula: 'Fe', atoms: {Fe: 1}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'Fe₂O₃', atoms: {Fe: 2, O: 3}}],
            [4, 3, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'CH₄', atoms: {C: 1, H: 4}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'CO₂', atoms: {C: 1, O: 2}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [1, 2, 1, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'Al', atoms: {Al: 1}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'Al₂O₃', atoms: {Al: 2, O: 3}}],
            [4, 3, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'Ca(OH)₂', atoms: {Ca: 1, O: 2, H: 2}}, {formula: 'H₂SO₄', atoms: {H: 2, S: 1, O: 4}}],
            [{formula: 'CaSO₄', atoms: {Ca: 1, S: 1, O: 4}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [1, 1, 1, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'P', atoms: {P: 1}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'P₂O₅', atoms: {P: 2, O: 5}}],
            [4, 5, 2]
        ),
        new BalanceGameEquation(
            [{formula: 'C₃H₈', atoms: {C: 3, H: 8}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'CO₂', atoms: {C: 1, O: 2}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [1, 5, 3, 4]
        ),
    ],
    hard: [
        new BalanceGameEquation(
            [{formula: 'C₆H₁₂O₆', atoms: {C: 6, H: 12, O: 6}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'CO₂', atoms: {C: 1, O: 2}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [1, 6, 6, 6]
        ),
        new BalanceGameEquation(
            [{formula: 'K₂Cr₂O₇', atoms: {K: 2, Cr: 2, O: 7}}, {formula: 'FeSO₄', atoms: {Fe: 1, S: 1, O: 4}}, {formula: 'H₂SO₄', atoms: {H: 2, S: 1, O: 4}}],
            [{formula: 'K₂SO₄', atoms: {K: 2, S: 1, O: 4}}, {formula: 'Cr₂(SO₄)₃', atoms: {Cr: 2, S: 3, O: 12}}, {formula: 'Fe₂(SO₄)₃', atoms: {Fe: 2, S: 3, O: 12}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [1, 6, 7, 1, 2, 3, 7]
        ),
        new BalanceGameEquation(
            [{formula: 'C₈H₁₈', atoms: {C: 8, H: 18}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'CO₂', atoms: {C: 1, O: 2}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [2, 25, 16, 18]
        ),
        new BalanceGameEquation(
            [{formula: 'KMnO₄', atoms: {K: 1, Mn: 1, O: 4}}, {formula: 'HCl', atoms: {H: 1, Cl: 1}}],
            [{formula: 'KCl', atoms: {K: 1, Cl: 1}}, {formula: 'MnCl₂', atoms: {Mn: 1, Cl: 2}}, {formula: 'Cl₂', atoms: {Cl: 2}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [2, 16, 2, 5, 5, 8]
        ),
        new BalanceGameEquation(
            [{formula: 'Cu', atoms: {Cu: 1}}, {formula: 'HNO₃', atoms: {H: 1, N: 1, O: 3}}],
            [{formula: 'Cu(NO₃)₂', atoms: {Cu: 1, N: 2, O: 6}}, {formula: 'NO', atoms: {N: 1, O: 1}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [3, 8, 3, 2, 4]
        ),
        new BalanceGameEquation(
            [{formula: 'C₂H₆', atoms: {C: 2, H: 6}}, {formula: 'O₂', atoms: {O: 2}}],
            [{formula: 'CO₂', atoms: {C: 1, O: 2}}, {formula: 'H₂O', atoms: {H: 2, O: 1}}],
            [2, 7, 4, 6]
        ),
    ]
};

class BalanceGameManager {
    constructor() {
        this.currentMode = 'simple';
        this.currentEquationIndex = 0;
        this.currentEquation = null;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.equations = [];
        this.gameActive = false;
        
        // Мапиране на химични формули към 3D модели
        this.formulaTo3DMap = {
            'H₂O': { key: 'water', name: 'Вода (H₂O)' },
            'CO₂': { key: 'carbonDioxide', name: 'Въглероден диоксид (CO₂)' },
            'O₂': { key: 'oxygen', name: 'Кислород (O₂)' },
            'H₂': { key: 'hydrogen', name: 'Водород (H₂)' },
            'CH₄': { key: 'methane', name: 'Метан (CH₄)' },
            'NH₃': { key: 'ammonia', name: 'Амоняк (NH₃)' },
            'NaCl': { key: 'sodiumChloride', name: 'Натриев хлорид (NaCl)' },
            'Cl₂': { key: 'chlorine', name: 'Хлор (Cl₂)' },
            'Na': { key: 'sodium', name: 'Натрий (Na)' },
            'Mg': { key: 'magnesium', name: 'Магнезий (Mg)' },
            'MgO': { key: 'magnesiumOxide', name: 'Магнезиев оксид (MgO)' },
            'Ca': { key: 'calcium', name: 'Калций (Ca)' },
            'CaO': { key: 'calciumOxide', name: 'Калциев оксид (CaO)' },
            'Fe': { key: 'iron', name: 'Желязо (Fe)' },
            'Fe₂O₃': { key: 'ironOxide', name: 'Железен оксид (Fe₂O₃)' },
            'Al': { key: 'aluminum', name: 'Алуминий (Al)' },
            'Al₂O₃': { key: 'aluminumOxide', name: 'Алуминиев оксид (Al₂O₃)' },
            'C₃H₈': { key: 'propane', name: 'Пропан (C₃H₈)' },
            'C₂H₆': { key: 'ethane', name: 'Етан (C₂H₆)' },
            'C₆H₁₂O₆': { key: 'glucose', name: 'Глюкоза (C₆H₁₂O₆)' }
        };
    }

    startGame(mode) {
        this.currentMode = mode;
        this.equations = [...balanceGameEquations[mode]];
        this.currentEquationIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.gameActive = true;

        const gameContainer = document.getElementById('balanceGameContainer');
        gameContainer.classList.remove('hidden');
        
        this.displayEquation();
    }

    setupEventListeners() {
        const handleCoefficientChange = (event) => {
            const button = event.target.closest('.coef-btn');
            if (!button) return;

            const control = button.closest('.coefficient-control');
            const index = parseInt(control.dataset.index, 10);
            const delta = button.classList.contains('plus-btn') ? 1 : -1;
            
            this.updateCoefficient(index, delta);
        };

        document.getElementById('equationLeft').addEventListener('click', handleCoefficientChange);
        document.getElementById('equationRight').addEventListener('click', handleCoefficientChange);

        // Event listener за 3D молекула dropdown
        const moleculeSelect = document.getElementById('balanceMoleculeSelect');
        if (moleculeSelect) {
            moleculeSelect.addEventListener('change', (event) => {
                const selectedMolecule = event.target.value;
                if (selectedMolecule && typeof window.show3DMolecule === 'function') {
                    window.show3DMolecule(selectedMolecule);
                }
            });
        }
    }

    displayEquation() {
        if (this.currentEquationIndex >= this.equations.length) {
            this.endGame();
            return;
        }

        this.currentEquation = this.equations[this.currentEquationIndex];
        this.currentEquation.currentCoefficients = new Array(
            this.currentEquation.left.length + this.currentEquation.right.length
        ).fill(1);

        this.renderEquation();
        this.updateStats();
        this.updateAtomCounter();
        this.update3DMolecules();
        document.getElementById('balanceGameFeedback').classList.add('hidden');
        document.getElementById('balanceGameResults').classList.add('hidden');
    }

    renderEquation() {
        const leftSide = document.getElementById('equationLeft');
        const rightSide = document.getElementById('equationRight');

        leftSide.innerHTML = this.renderMoleculeSide(
            this.currentEquation.left,
            0
        );

        rightSide.innerHTML = this.renderMoleculeSide(
            this.currentEquation.right,
            this.currentEquation.left.length
        );
    }

    renderMoleculeSide(molecules, startIndex) {
        return molecules
            .map((mol, idx) => {
                const coefIndex = startIndex + idx;
                const coef = this.currentEquation.currentCoefficients[coefIndex];

                return `
                    <div class="molecule-item">
                        <div class="coefficient-control" data-index="${coefIndex}">
                            <button class="coef-btn minus-btn" type="button">-</button>
                            <span class="coef-value">${coef}</span>
                            <button class="coef-btn plus-btn" type="button">+</button>
                        </div>
                        <div class="molecule-formula">${mol.formula}</div>
                    </div>
                `;
            })
            .join('');
    }

    updateAtomCounter() {
        const leftAtoms = this.countAtoms(
            this.currentEquation.left,
            0
        );

        const rightAtoms = this.countAtoms(
            this.currentEquation.right,
            this.currentEquation.left.length
        );

        this.renderAtomCounts(leftAtoms, rightAtoms);
        this.updateBalanceStatus(leftAtoms, rightAtoms);
    }

    countAtoms(molecules, startIndex) {
        const atoms = {};

        molecules.forEach((mol, idx) => {
            const coef = this.currentEquation.currentCoefficients[startIndex + idx];

            Object.entries(mol.atoms).forEach(([atom, count]) => {
                atoms[atom] = (atoms[atom] || 0) + coef * count;
            });
        });

        return atoms;
    }

    renderAtomCounts(leftAtoms, rightAtoms) {
        const leftPanel = document.getElementById('leftAtoms');
        const rightPanel = document.getElementById('rightAtoms');

        const allAtoms = new Set([...Object.keys(leftAtoms), ...Object.keys(rightAtoms)]);

        leftPanel.innerHTML = Array.from(allAtoms)
            .map(atom => {
                const count = leftAtoms[atom] || 0;
                const balanced = count === (rightAtoms[atom] || 0);

                return `
                    <div class="atom-item">
                        <span class="atom-symbol">${atom}</span>
                        <span class="atom-count ${balanced ? 'balanced' : 'unbalanced'}">
                            ${count}
                        </span>
                    </div>
                `;
            })
            .join('');

        rightPanel.innerHTML = Array.from(allAtoms)
            .map(atom => {
                const count = rightAtoms[atom] || 0;
                const balanced = count === (leftAtoms[atom] || 0);

                return `
                    <div class="atom-item">
                        <span class="atom-symbol">${atom}</span>
                        <span class="atom-count ${balanced ? 'balanced' : 'unbalanced'}">
                            ${count}
                        </span>
                    </div>
                `;
            })
            .join('');
    }

    updateBalanceStatus(leftAtoms, rightAtoms) {
        const isBalanced = this.isBalanced(leftAtoms, rightAtoms);
        const statusEl = document.querySelector('.status-message');

        if (isBalanced) {
            statusEl.textContent = '✅ Уравнението е изравнено!';
            statusEl.className = 'status-message balanced';
        } else {
            statusEl.textContent = '❌ Уравнението не е изравнено';
            statusEl.className = 'status-message unbalanced';
        }
    }

    isBalanced(leftAtoms, rightAtoms) {
        const allAtoms = new Set([...Object.keys(leftAtoms), ...Object.keys(rightAtoms)]);

        return Array.from(allAtoms).every(
            atom => (leftAtoms[atom] || 0) === (rightAtoms[atom] || 0)
        );
    }

    checkBalance() {
        const leftAtoms = this.countAtoms(
            this.currentEquation.left,
            0
        );

        const rightAtoms = this.countAtoms(
            this.currentEquation.right,
            this.currentEquation.left.length
        );

        if (this.isBalanced(leftAtoms, rightAtoms)) {
            this.showFeedback(true);
            this.correctCount++;
        } else {
            this.showFeedback(false);
            this.incorrectCount++;
        }

        this.updateStats();
    }

    showFeedback(isCorrect) {
        const feedbackEl = document.getElementById('balanceGameFeedback');
        const messageEl = document.getElementById('feedbackMessage');

        if (isCorrect) {
            messageEl.textContent = '✅ Браво! Уравнението е правилно изравнено!';
            messageEl.className = 'feedback-message correct';
        } else {
            messageEl.textContent = '❌ Опитай отново. Атомите не са правилно изравнени.';
            messageEl.className = 'feedback-message incorrect';
        }

        feedbackEl.classList.remove('hidden');
    }

    nextEquation() {
        this.currentEquationIndex++;
        this.displayEquation();
    }

    skipEquation() {
        this.nextEquation();
    }

    showHint() {
        const coeffs = this.currentEquation.coefficients;
        alert(`Подсказка: Коефициентите са: ${coeffs.join(', ')}`);
    }

    updateStats() {
        document.getElementById('balanceGameScore').textContent = 
            `${this.currentEquationIndex + 1}/${this.equations.length}`;
        document.getElementById('balanceCorrect').textContent = this.correctCount;
        document.getElementById('balanceIncorrect').textContent = this.incorrectCount;
    }

    endGame() {
        const resultsEl = document.getElementById('balanceGameResults');
        const percentage = Math.round((this.correctCount / this.equations.length) * 100);

        document.getElementById('finalCorrect').textContent = this.correctCount;
        document.getElementById('finalIncorrect').textContent = this.incorrectCount;
        document.getElementById('finalPercentage').textContent = `${percentage}%`;

        document.querySelector('.balance-equation-container').style.display = 'none';
        document.querySelector('.game-actions').style.display = 'none';
        resultsEl.classList.remove('hidden');

        this.gameActive = false;
    }

    quitGame() {
        if (confirm('Сигурен ли си, че искаш да спреш играта?')) {
            document.getElementById('balanceGameContainer').classList.add('hidden');
            document.getElementById('balanceGameResults').classList.add('hidden');
            document.querySelector('.balance-equation-container').style.display = 'block';
            document.querySelector('.game-actions').style.display = 'flex';
            this.gameActive = false;
        }
    }

    updateCoefficient(index, delta) {
        const currentValue = this.currentEquation.currentCoefficients[index];
        const newValue = currentValue + delta;

        if (newValue >= 1 && newValue <= 10) {
            this.currentEquation.currentCoefficients[index] = newValue;
            this.renderEquation();
            this.updateAtomCounter();
        }
    }

    update3DMolecules() {
        const select = document.getElementById('balanceMoleculeSelect');
        if (!select) return;

        // Събиране на всички уникални молекули от текущото уравнение
        const allMolecules = [...this.currentEquation.left, ...this.currentEquation.right];
        const uniqueMolecules = new Set();
        
        allMolecules.forEach(mol => {
            if (this.formulaTo3DMap[mol.formula]) {
                uniqueMolecules.add(mol.formula);
            }
        });

        // Почистване и обновяване на dropdown-а
        select.innerHTML = '';
        
        if (uniqueMolecules.size === 0) {
            select.innerHTML = '<option value="">Няма налични 3D модели</option>';
            return;
        }

        // Добавяне на молекулите от текущото уравнение
        Array.from(uniqueMolecules).forEach((formula, index) => {
            const moleculeData = this.formulaTo3DMap[formula];
            const option = document.createElement('option');
            option.value = moleculeData.key;
            option.textContent = moleculeData.name;
            
            if (index === 0) {
                option.selected = true;
            }
            
            select.appendChild(option);
        });

        // Задействане на 3D визуализация ако има функция
        if (typeof window.show3DMolecule === 'function') {
            const firstMolecule = Array.from(uniqueMolecules)[0];
            const moleculeKey = this.formulaTo3DMap[firstMolecule].key;
            window.show3DMolecule(moleculeKey);
        }
    }
}

let balanceManager = new BalanceGameManager();

document.addEventListener('DOMContentLoaded', () => {
    balanceManager.setupEventListeners();
    
    // Mode buttons
    document.querySelectorAll('.balance-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.balance-mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            balanceManager.currentMode = btn.dataset.mode;
        });
    });

    // Start game button
    const startBtn = document.getElementById('startBalanceGameBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            balanceManager.startGame(balanceManager.currentMode);
        });
    }

    // Game buttons
    const checkBtn = document.getElementById('checkBalanceBtn');
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            balanceManager.checkBalance();
        });
    }

    const nextBtn = document.getElementById('nextBalanceBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            balanceManager.nextEquation();
        });
    }

    const skipBtn = document.getElementById('skipBalanceBtn');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            balanceManager.skipEquation();
        });
    }

    const hintBtn = document.getElementById('hintBalanceBtn');
    if (hintBtn) {
        hintBtn.addEventListener('click', () => {
            balanceManager.showHint();
        });
    }

    const quitBtn = document.getElementById('quitGameBtn');
    if (quitBtn) {
        quitBtn.addEventListener('click', () => {
            balanceManager.quitGame();
        });
    }

    const restartBtn = document.getElementById('restartBalanceGameBtn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            balanceManager = new BalanceGameManager();
            balanceManager.setupEventListeners();
            balanceManager.startGame('simple');
        });
    }
});
