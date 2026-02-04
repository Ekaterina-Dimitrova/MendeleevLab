// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const mainNav = document.getElementById('mainNav');
    
    if (burgerMenu && mainNav) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links (mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    burgerMenu.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!burgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
        
        // Close menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
});

// Periodic Table Data
const elements = [
    { number: 1, symbol: 'H', name: 'Водород', category: 'nonmetal', mass: 1.008, row: 1, col: 1 },
    { number: 2, symbol: 'He', name: 'Хелий', category: 'noble-gas', mass: 4.003, row: 1, col: 18 },
    { number: 3, symbol: 'Li', name: 'Литий', category: 'alkali-metal', mass: 6.94, row: 2, col: 1 },
    { number: 4, symbol: 'Be', name: 'Берилий', category: 'alkaline-earth', mass: 9.0122, row: 2, col: 2 },
    { number: 5, symbol: 'B', name: 'Бор', category: 'metalloid', mass: 10.81, row: 2, col: 13 },
    { number: 6, symbol: 'C', name: 'Въглерод', category: 'nonmetal', mass: 12.011, row: 2, col: 14 },
    { number: 7, symbol: 'N', name: 'Азот', category: 'nonmetal', mass: 14.007, row: 2, col: 15 },
    { number: 8, symbol: 'O', name: 'Кислород', category: 'nonmetal', mass: 15.999, row: 2, col: 16 },
    { number: 9, symbol: 'F', name: 'Флуор', category: 'halogen', mass: 18.998, row: 2, col: 17 },
    { number: 10, symbol: 'Ne', name: 'Неон', category: 'noble-gas', mass: 20.180, row: 2, col: 18 },
    { number: 11, symbol: 'Na', name: 'Натрий', category: 'alkali-metal', mass: 22.990, row: 3, col: 1 },
    { number: 12, symbol: 'Mg', name: 'Магнезий', category: 'alkaline-earth', mass: 24.305, row: 3, col: 2 },
    { number: 13, symbol: 'Al', name: 'Алуминий', category: 'post-transition', mass: 26.982, row: 3, col: 13 },
    { number: 14, symbol: 'Si', name: 'Силиций', category: 'metalloid', mass: 28.085, row: 3, col: 14 },
    { number: 15, symbol: 'P', name: 'Фосфор', category: 'nonmetal', mass: 30.974, row: 3, col: 15 },
    { number: 16, symbol: 'S', name: 'Сяра', category: 'nonmetal', mass: 32.06, row: 3, col: 16 },
    { number: 17, symbol: 'Cl', name: 'Хлор', category: 'halogen', mass: 35.45, row: 3, col: 17 },
    { number: 18, symbol: 'Ar', name: 'Аргон', category: 'noble-gas', mass: 39.948, row: 3, col: 18 },
    { number: 19, symbol: 'K', name: 'Калий', category: 'alkali-metal', mass: 39.098, row: 4, col: 1 },
    { number: 20, symbol: 'Ca', name: 'Калций', category: 'alkaline-earth', mass: 40.078, row: 4, col: 2 },
    { number: 21, symbol: 'Sc', name: 'Скандий', category: 'transition-metal', mass: 44.956, row: 4, col: 3 },
    { number: 22, symbol: 'Ti', name: 'Титан', category: 'transition-metal', mass: 47.867, row: 4, col: 4 },
    { number: 23, symbol: 'V', name: 'Ванадий', category: 'transition-metal', mass: 50.942, row: 4, col: 5 },
    { number: 24, symbol: 'Cr', name: 'Хром', category: 'transition-metal', mass: 51.996, row: 4, col: 6 },
    { number: 25, symbol: 'Mn', name: 'Манган', category: 'transition-metal', mass: 54.938, row: 4, col: 7 },
    { number: 26, symbol: 'Fe', name: 'Желязо', category: 'transition-metal', mass: 55.845, row: 4, col: 8 },
    { number: 27, symbol: 'Co', name: 'Кобалт', category: 'transition-metal', mass: 58.933, row: 4, col: 9 },
    { number: 28, symbol: 'Ni', name: 'Никел', category: 'transition-metal', mass: 58.693, row: 4, col: 10 },
    { number: 29, symbol: 'Cu', name: 'Мед', category: 'transition-metal', mass: 63.546, row: 4, col: 11 },
    { number: 30, symbol: 'Zn', name: 'Цинк', category: 'transition-metal', mass: 65.38, row: 4, col: 12 },
    { number: 31, symbol: 'Ga', name: 'Галий', category: 'post-transition', mass: 69.723, row: 4, col: 13 },
    { number: 32, symbol: 'Ge', name: 'Германий', category: 'metalloid', mass: 72.630, row: 4, col: 14 },
    { number: 33, symbol: 'As', name: 'Арсен', category: 'metalloid', mass: 74.922, row: 4, col: 15 },
    { number: 34, symbol: 'Se', name: 'Селен', category: 'nonmetal', mass: 78.971, row: 4, col: 16 },
    { number: 35, symbol: 'Br', name: 'Бром', category: 'halogen', mass: 79.904, row: 4, col: 17 },
    { number: 36, symbol: 'Kr', name: 'Криптон', category: 'noble-gas', mass: 83.798, row: 4, col: 18 },
    { number: 37, symbol: 'Rb', name: 'Рубидий', category: 'alkali-metal', mass: 85.468, row: 5, col: 1 },
    { number: 38, symbol: 'Sr', name: 'Стронций', category: 'alkaline-earth', mass: 87.62, row: 5, col: 2 },
    { number: 39, symbol: 'Y', name: 'Итрий', category: 'transition-metal', mass: 88.906, row: 5, col: 3 },
    { number: 40, symbol: 'Zr', name: 'Цирконий', category: 'transition-metal', mass: 91.224, row: 5, col: 4 },
    { number: 41, symbol: 'Nb', name: 'Ниобий', category: 'transition-metal', mass: 92.906, row: 5, col: 5 },
    { number: 42, symbol: 'Mo', name: 'Молибден', category: 'transition-metal', mass: 95.95, row: 5, col: 6 },
    { number: 43, symbol: 'Tc', name: 'Технеций', category: 'transition-metal', mass: 98.91, row: 5, col: 7 },
    { number: 44, symbol: 'Ru', name: 'Рутений', category: 'transition-metal', mass: 101.07, row: 5, col: 8 },
    { number: 45, symbol: 'Rh', name: 'Родий', category: 'transition-metal', mass: 102.91, row: 5, col: 9 },
    { number: 46, symbol: 'Pd', name: 'Паладий', category: 'transition-metal', mass: 106.42, row: 5, col: 10 },
    { number: 47, symbol: 'Ag', name: 'Сребро', category: 'transition-metal', mass: 107.87, row: 5, col: 11 },
    { number: 48, symbol: 'Cd', name: 'Кадмий', category: 'transition-metal', mass: 112.41, row: 5, col: 12 },
    { number: 49, symbol: 'In', name: 'Индий', category: 'post-transition', mass: 114.82, row: 5, col: 13 },
    { number: 50, symbol: 'Sn', name: 'Калай', category: 'post-transition', mass: 118.71, row: 5, col: 14 },
    { number: 51, symbol: 'Sb', name: 'Антимон', category: 'metalloid', mass: 121.76, row: 5, col: 15 },
    { number: 52, symbol: 'Te', name: 'Телур', category: 'metalloid', mass: 127.60, row: 5, col: 16 },
    { number: 53, symbol: 'I', name: 'Йод', category: 'halogen', mass: 126.90, row: 5, col: 17 },
    { number: 54, symbol: 'Xe', name: 'Ксенон', category: 'noble-gas', mass: 131.29, row: 5, col: 18 },
    { number: 55, symbol: 'Cs', name: 'Цезий', category: 'alkali-metal', mass: 132.91, row: 6, col: 1 },
    { number: 56, symbol: 'Ba', name: 'Барий', category: 'alkaline-earth', mass: 137.33, row: 6, col: 2 },
    { number: 57, symbol: 'La', name: 'Лантан', category: 'lanthanide', mass: 138.91, row: 6, col: 3 },
    { number: 58, symbol: 'Ce', name: 'Церий', category: 'lanthanide', mass: 140.12, row: 8, col: 4 },
    { number: 59, symbol: 'Pr', name: 'Празеодим', category: 'lanthanide', mass: 140.91, row: 8, col: 5 },
    { number: 60, symbol: 'Nd', name: 'Неодим', category: 'lanthanide', mass: 144.24, row: 8, col: 6 },
    { number: 61, symbol: 'Pm', name: 'Прометий', category: 'lanthanide', mass: 145, row: 8, col: 7 },
    { number: 62, symbol: 'Sm', name: 'Самарий', category: 'lanthanide', mass: 150.36, row: 8, col: 8 },
    { number: 63, symbol: 'Eu', name: 'Европий', category: 'lanthanide', mass: 151.96, row: 8, col: 9 },
    { number: 64, symbol: 'Gd', name: 'Гадолиний', category: 'lanthanide', mass: 157.25, row: 8, col: 10 },
    { number: 65, symbol: 'Tb', name: 'Тербий', category: 'lanthanide', mass: 158.93, row: 8, col: 11 },
    { number: 66, symbol: 'Dy', name: 'Диспрозий', category: 'lanthanide', mass: 162.50, row: 8, col: 12 },
    { number: 67, symbol: 'Ho', name: 'Холмий', category: 'lanthanide', mass: 164.93, row: 8, col: 13 },
    { number: 68, symbol: 'Er', name: 'Ербий', category: 'lanthanide', mass: 167.26, row: 8, col: 14 },
    { number: 69, symbol: 'Tm', name: 'Тулий', category: 'lanthanide', mass: 168.93, row: 8, col: 15 },
    { number: 70, symbol: 'Yb', name: 'Итербий', category: 'lanthanide', mass: 173.05, row: 8, col: 16 },
    { number: 71, symbol: 'Lu', name: 'Лутеций', category: 'lanthanide', mass: 174.97, row: 6, col: 3 },
    { number: 72, symbol: 'Hf', name: 'Хафний', category: 'transition-metal', mass: 178.49, row: 6, col: 4 },
    { number: 73, symbol: 'Ta', name: 'Тантал', category: 'transition-metal', mass: 180.95, row: 6, col: 5 },
    { number: 74, symbol: 'W', name: 'Волфрам', category: 'transition-metal', mass: 183.84, row: 6, col: 6 },
    { number: 75, symbol: 'Re', name: 'Рений', category: 'transition-metal', mass: 186.21, row: 6, col: 7 },
    { number: 76, symbol: 'Os', name: 'Осмий', category: 'transition-metal', mass: 190.23, row: 6, col: 8 },
    { number: 77, symbol: 'Ir', name: 'Иридий', category: 'transition-metal', mass: 192.22, row: 6, col: 9 },
    { number: 78, symbol: 'Pt', name: 'Платина', category: 'transition-metal', mass: 195.08, row: 6, col: 10 },
    { number: 79, symbol: 'Au', name: 'Злато', category: 'transition-metal', mass: 196.97, row: 6, col: 11 },
    { number: 80, symbol: 'Hg', name: 'Живак', category: 'transition-metal', mass: 200.59, row: 6, col: 12 },
    { number: 81, symbol: 'Tl', name: 'Талий', category: 'post-transition', mass: 204.38, row: 6, col: 13 },
    { number: 82, symbol: 'Pb', name: 'Олово', category: 'post-transition', mass: 207.2, row: 6, col: 14 },
    { number: 83, symbol: 'Bi', name: 'Бисмут', category: 'post-transition', mass: 208.98, row: 6, col: 15 },
    { number: 84, symbol: 'Po', name: 'Полоний', category: 'metalloid', mass: 209, row: 6, col: 16 },
    { number: 85, symbol: 'At', name: 'Астатий', category: 'halogen', mass: 210, row: 6, col: 17 },
    { number: 86, symbol: 'Rn', name: 'Радон', category: 'noble-gas', mass: 222, row: 6, col: 18 },
    { number: 87, symbol: 'Fr', name: 'Франций', category: 'alkali-metal', mass: 223, row: 7, col: 1 },
    { number: 88, symbol: 'Ra', name: 'Радий', category: 'alkaline-earth', mass: 226, row: 7, col: 2 },
    { number: 89, symbol: 'Ac', name: 'Актиний', category: 'actinide', mass: 227, row: 7, col: 3 },
    { number: 90, symbol: 'Th', name: 'Торий', category: 'actinide', mass: 232.04, row: 9, col: 4 },
    { number: 91, symbol: 'Pa', name: 'Протактиний', category: 'actinide', mass: 231.04, row: 9, col: 5 },
    { number: 92, symbol: 'U', name: 'Уран', category: 'actinide', mass: 238.03, row: 9, col: 6 },
    { number: 93, symbol: 'Np', name: 'Нептуний', category: 'actinide', mass: 237, row: 9, col: 7 },
    { number: 94, symbol: 'Pu', name: 'Плутоний', category: 'actinide', mass: 244, row: 9, col: 8 },
    { number: 95, symbol: 'Am', name: 'Америций', category: 'actinide', mass: 243, row: 9, col: 9 },
    { number: 96, symbol: 'Cm', name: 'Кюрий', category: 'actinide', mass: 247, row: 9, col: 10 },
    { number: 97, symbol: 'Bk', name: 'Берклий', category: 'actinide', mass: 247, row: 9, col: 11 },
    { number: 98, symbol: 'Cf', name: 'Калифорний', category: 'actinide', mass: 251, row: 9, col: 12 },
    { number: 99, symbol: 'Es', name: 'Айнщайний', category: 'actinide', mass: 252, row: 9, col: 13 },
    { number: 100, symbol: 'Fm', name: 'Фермий', category: 'actinide', mass: 257, row: 9, col: 14 },
    { number: 101, symbol: 'Md', name: 'Менделевий', category: 'actinide', mass: 258, row: 9, col: 15 },
    { number: 102, symbol: 'No', name: 'Нобелий', category: 'actinide', mass: 259, row: 9, col: 16 },
    { number: 103, symbol: 'Lr', name: 'Лоуренций', category: 'actinide', mass: 266, row: 7, col: 3 },
    { number: 104, symbol: 'Rf', name: 'Резерфордий', category: 'transition-metal', mass: 267, row: 7, col: 4 },
    { number: 105, symbol: 'Db', name: 'Дубний', category: 'transition-metal', mass: 268, row: 7, col: 5 },
    { number: 106, symbol: 'Sg', name: 'Сиборгий', category: 'transition-metal', mass: 269, row: 7, col: 6 },
    { number: 107, symbol: 'Bh', name: 'Борий', category: 'transition-metal', mass: 270, row: 7, col: 7 },
    { number: 108, symbol: 'Hs', name: 'Хасий', category: 'transition-metal', mass: 277, row: 7, col: 8 },
    { number: 109, symbol: 'Mt', name: 'Майтнерий', category: 'transition-metal', mass: 278, row: 7, col: 9 },
    { number: 110, symbol: 'Ds', name: 'Дармщатий', category: 'transition-metal', mass: 281, row: 7, col: 10 },
    { number: 111, symbol: 'Rg', name: 'Рьонтгений', category: 'transition-metal', mass: 282, row: 7, col: 11 },
    { number: 112, symbol: 'Cn', name: 'Коперниций', category: 'transition-metal', mass: 285, row: 7, col: 12 },
    { number: 113, symbol: 'Nh', name: 'Нихоний', category: 'post-transition', mass: 286, row: 7, col: 13 },
    { number: 114, symbol: 'Fl', name: 'Флеровий', category: 'post-transition', mass: 289, row: 7, col: 14 },
    { number: 115, symbol: 'Mc', name: 'Московий', category: 'post-transition', mass: 290, row: 7, col: 15 },
    { number: 116, symbol: 'Lv', name: 'Ливерморий', category: 'post-transition', mass: 293, row: 7, col: 16 },
    { number: 117, symbol: 'Ts', name: 'Тенесин', category: 'halogen', mass: 294, row: 7, col: 17 },
    { number: 118, symbol: 'Og', name: 'Оганесон', category: 'noble-gas', mass: 294, row: 7, col: 18 }
];

// Химични уравнения за 7 клас
const chemicalEquations = [
    {
        type: 'Синтез (съединяване)',
        equation: '2H₂ + O₂ → 2H₂O',
        name: 'Образуване на вода',
        explanation: 'Два молекула водороден газ реагират с една молекула кислороден газ и образуват две молекули вода.',
        substances: [
            'H₂ - водороден газ (реактант)',
            'O₂ - кислороден газ (реактант)',
            'H₂O - вода (продукт)'
        ]
    },
    {
        type: 'Синтез',
        equation: '2Mg + O₂ → 2MgO',
        name: 'Горене на магнезий',
        explanation: 'Магнезият гори с ярка бяла светлина и образува магнезиев оксид (бял прах).',
        substances: [
            'Mg - магнезий (сребрист метал)',
            'O₂ - кислород (газ)',
            'MgO - магнезиев оксид (бял прах)'
        ]
    },
    {
        type: 'Разлагане',
        equation: '2H₂O → 2H₂ + O₂',
        name: 'Електролиза на вода',
        explanation: 'С електрически ток водата се разлага на водороден и кислороден газ.',
        substances: [
            'H₂O - вода (течност)',
            'H₂ - водороден газ',
            'O₂ - кислороден газ'
        ]
    },
    {
        type: 'Замествателна',
        equation: 'Zn + 2HCl → ZnCl₂ + H₂',
        name: 'Реакция на цинк със солна киселина',
        explanation: 'Цинкът измества водорода от солната киселина и се отделя водороден газ с мехурчета.',
        substances: [
            'Zn - цинк (метал)',
            'HCl - солна киселина',
            'ZnCl₂ - цинков хлорид',
            'H₂ - водороден газ'
        ]
    },
    {
        type: 'Замествателна',
        equation: 'Fe + CuSO₄ → FeSO₄ + Cu',
        name: 'Желязо измества мед',
        explanation: 'Железният пирон се покрива с червена мед, защото желязото е по-активно.',
        substances: [
            'Fe - желязо (сив метал)',
            'CuSO₄ - меден сулфат (син разтвор)',
            'FeSO₄ - железен сулфат (зелен разтвор)',
            'Cu - мед (червен метал)'
        ]
    },
    {
        type: 'Обменна',
        equation: 'NaCl + AgNO₃ → AgCl + NaNO₃',
        name: 'Образуване на бяла утайка',
        explanation: 'При смесване на разтворите се образува бяла утайка от сребърен хлорид.',
        substances: [
            'NaCl - натриев хлорид (готварска сол)',
            'AgNO₃ - сребърен нитрат',
            'AgCl - сребърен хлорид (бяла утайка)',
            'NaNO₃ - натриев нитрат'
        ]
    },
    {
        type: 'Горене',
        equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
        name: 'Горене на метан',
        explanation: 'Метанът (природен газ) гори и образува въглероден диоксид и вода.',
        substances: [
            'CH₄ - метан (природен газ)',
            'O₂ - кислород',
            'CO₂ - въглероден диоксид',
            'H₂O - вода (водна пара)'
        ]
    },
    {
        type: 'Неутрализация',
        equation: 'HCl + NaOH → NaCl + H₂O',
        name: 'Киселина + основа',
        explanation: 'Солната киселина неутрализира натриевата основа и образува сол и вода.',
        substances: [
            'HCl - солна киселина',
            'NaOH - натриева основа (сода каустик)',
            'NaCl - готварска сол',
            'H₂O - вода'
        ]
    }
];

// Упражнения за изравняване
const balanceExercises = [
    {
        equation: 'H₂ + O₂ → H₂O',
        coefficients: [2, 1, 2],
        balanced: '2H₂ + O₂ → 2H₂O',
        hint: 'Брой атоми: H: 2 вляво, 2 вдясно | O: 2 вляво, 1 вдясно',
        explanation: 'Имаме 2 атома кислород вляво, но само 1 вдясно. Затова поставяме коефициент 2 пред H₂O. Сега имаме 4 атома водород вдясно, затова поставяме 2 пред H₂.'
    },
    {
        equation: 'Na + Cl₂ → NaCl',
        coefficients: [2, 1, 2],
        balanced: '2Na + Cl₂ → 2NaCl',
        hint: 'Хлорът идва по 2 атома в молекулата Cl₂',
        explanation: 'Молекулата Cl₂ има 2 атома хлор. Затова трябва да образуваме 2 молекули NaCl, което изисква 2 атома натрий.'
    },
    {
        equation: 'Al + O₂ → Al₂O₃',
        coefficients: [4, 3, 2],
        balanced: '4Al + 3O₂ → 2Al₂O₃',
        hint: 'Започни от алуминия - трябват 2 атома за една молекула продукт',
        explanation: 'Във всяка молекула Al₂O₃ има 2 атома Al и 3 атома O. За да изравним: 4Al дават 2Al₂O₃, което изисква 6 атома O или 3O₂.'
    },
    {
        equation: 'Fe + HCl → FeCl₂ + H₂',
        coefficients: [1, 2, 1, 1],
        balanced: 'Fe + 2HCl → FeCl₂ + H₂',
        hint: 'FeCl₂ съдържа 2 атома хлор',
        explanation: 'FeCl₂ има 2 атома Cl, затова трябват 2 молекули HCl. Така получаваме и 2 атома H, които образуват H₂.'
    },
    {
        equation: 'C₃H₈ + O₂ → CO₂ + H₂O',
        coefficients: [1, 5, 3, 4],
        balanced: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
        hint: 'Започни от въглерода (3 атома) и водорода (8 атома)',
        explanation: '3 атома C дават 3CO₂. 8 атома H дават 4H₂O. Общо кислород вдясно: 3×2 + 4×1 = 10 атома или 5O₂.'
    },
    {
        equation: 'Mg + N₂ → Mg₃N₂',
        coefficients: [3, 1, 1],
        balanced: '3Mg + N₂ → Mg₃N₂',
        hint: 'Mg₃N₂ показва че трябват 3 атома магнезий',
        explanation: 'Една молекула Mg₃N₂ съдържа 3 атома Mg и 2 атома N. N₂ вече дава 2 атома азот, затова трябват 3 атома Mg.'
    }
];

let currentFilter = 'all';
let quizScore = 0;
let quizTotal = 0;
let currentQuizQuestion = null;
let currentBalanceIndex = 0;
let balanceScore = 0;
let balanceAttempts = 0;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize parts that exist on the current page to avoid errors
    if (document.getElementById('periodicTable')) {
        renderElements();
    }

    if (document.getElementById('equationsGrid')) {
        renderEquations();
    }

    setupEventListeners();
    setupThemeToggle();
    setupNavigation();
});

// Позиции на елементите в стандартната периодична таблица (ред, колона)
const elementPositions = {
    // Ред 1
    1: [1, 1], 2: [1, 18],
    // Ред 2
    3: [2, 1], 4: [2, 2], 5: [2, 13], 6: [2, 14], 7: [2, 15], 8: [2, 16], 9: [2, 17], 10: [2, 18],
    // Ред 3
    11: [3, 1], 12: [3, 2], 13: [3, 13], 14: [3, 14], 15: [3, 15], 16: [3, 16], 17: [3, 17], 18: [3, 18],
    // Ред 4
    19: [4, 1], 20: [4, 2], 21: [4, 3], 22: [4, 4], 23: [4, 5], 24: [4, 6], 25: [4, 7], 26: [4, 8], 27: [4, 9], 28: [4, 10], 29: [4, 11], 30: [4, 12], 31: [4, 13], 32: [4, 14], 33: [4, 15], 34: [4, 16], 35: [4, 17], 36: [4, 18],
    // Ред 5
    37: [5, 1], 38: [5, 2], 39: [5, 3], 40: [5, 4], 41: [5, 5], 42: [5, 6], 43: [5, 7], 44: [5, 8], 45: [5, 9], 46: [5, 10], 47: [5, 11], 48: [5, 12], 49: [5, 13], 50: [5, 14], 51: [5, 15], 52: [5, 16], 53: [5, 17], 54: [5, 18],
    // Ред 6
    55: [6, 1], 56: [6, 2], 72: [6, 4], 73: [6, 5], 74: [6, 6], 75: [6, 7], 76: [6, 8], 77: [6, 9], 78: [6, 10], 79: [6, 11], 80: [6, 12], 81: [6, 13], 82: [6, 14], 83: [6, 15], 84: [6, 16], 85: [6, 17], 86: [6, 18],
    // Ред 7
    87: [7, 1], 88: [7, 2], 104: [7, 4], 105: [7, 5], 106: [7, 6], 107: [7, 7], 108: [7, 8], 109: [7, 9], 110: [7, 10], 111: [7, 11], 112: [7, 12], 113: [7, 13], 114: [7, 14], 115: [7, 15], 116: [7, 16], 117: [7, 17], 118: [7, 18],
    // Лантаноиди (ред 9)
    57: [9, 4], 58: [9, 5], 59: [9, 6], 60: [9, 7], 61: [9, 8], 62: [9, 9], 63: [9, 10], 64: [9, 11], 65: [9, 12], 66: [9, 13], 67: [9, 14], 68: [9, 15], 69: [9, 16], 70: [9, 17], 71: [9, 18],
    // Актиноиди (ред 10)
    89: [10, 4], 90: [10, 5], 91: [10, 6], 92: [10, 7], 93: [10, 8], 94: [10, 9], 95: [10, 10], 96: [10, 11], 97: [10, 12], 98: [10, 13], 99: [10, 14], 100: [10, 15], 101: [10, 16], 102: [10, 17], 103: [10, 18]
};

// Рендериране на елементите
function renderElements() {
    const table = document.getElementById('periodicTable');
    if (!table) return; // nothing to render on pages without the table
    table.innerHTML = '';
    
    // Създаваме grid с правилна структура
    table.style.gridTemplateRows = 'repeat(7, 1fr) 0.5fr repeat(2, 1fr)';
    
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        
        const position = elementPositions[element.number];
        if (position) {
            elementDiv.style.gridRow = position[0];
            elementDiv.style.gridColumn = position[1];
        }
        
        elementDiv.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            <div class="element-mass">${element.mass}</div>
        `;
        
        elementDiv.addEventListener('click', () => showElementDetails(element));
        table.appendChild(elementDiv);
    });
}

// Показване на детайли за елемент
function showElementDetails(element) {
    const details = document.getElementById('elementDetails');
    if (!details) return; // ако няма контейнер за детайли
    
    const wikiUrl = `https://bg.wikipedia.org/wiki/${encodeURIComponent(element.name)}`;
    
    details.innerHTML = `
        <h2>🔬 ${element.name} (${element.symbol}) <a href="${wikiUrl}" class="wiki-link" title="Отвори в Wikipedia">🔗</a></h2>
        
        <div class="element-info-card">
            <p><strong>⚛️ Атомен номер:</strong> ${element.number}</p>
            <p><strong>⚖️ Атомна маса:</strong> ${element.mass}</p>
            <p><strong>📊 Категория:</strong> ${getCategoryName(element.category)}</p>
        </div>
        
        <div class="element-about-card">
            <h3>💡 За елемента ${element.name}</h3>
            <p style="font-size: 14px; line-height: 1.6;">
                ${element.name} е химичен елемент с атомен номер ${element.number} и символ ${element.symbol}. 
                Той принадлежи към групата на ${getCategoryName(element.category)}.
            </p>
        </div>
        
        <div class="element-more-card">
            <p><strong>📖 Научете повече:</strong> <a href="${wikiUrl}" target="_blank">Wikipedia статия за ${element.name}</a></p>
        </div>
    `;
}

// Получаване на име на категория
function getCategoryName(category) {
    const names = {
        'alkali-metal': 'Алкален метал',
        'alkaline-earth': 'Алкалоземен метал',
        'transition-metal': 'Преходен метал',
        'metalloid': 'Металоид',
        'nonmetal': 'Неметал',
        'halogen': 'Халоген',
        'noble-gas': 'Инертен газ'
    };
    return names[category] || category;
}

// Навигация между секции
function setupNavigation() {
    // Превключване чрез .nav-btn бутони (за index.html)
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Премахване на active от всички бутони и секции
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            
            // Добавяне на active към кликнатия бутон
            e.target.classList.add('active');
            
            // Показване на съответната секция
            const section = e.target.dataset.section;
            document.getElementById(`${section}-section`).classList.add('active');
        });
    });

    // Превключване чрез feature-items (за laboratory.html) - директен подход
    const featureItems = document.querySelectorAll('.feature-item[data-section]');
    featureItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const section = item.dataset.section;
            console.log('Clicked on section:', section); // Debug
            
            // Премахване на active от всички секции
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            
            // Показване на съответната секция
            const targetSection = document.getElementById(`${section}-section`);
            if (targetSection) {
                targetSection.classList.add('active');
                console.log('Section activated:', section); // Debug
                
                // Инициализирай игрите ако е необходимо
                if (section === 'quiz') {
                    if (!window.gameInstance && document.getElementById('startGameBtn')) {
                        window.gameInstance = new PeriodicTableGame();
                    }
                }
                
                // Инициализирай упражненията за изравняване ако е необходимо
                if (section === 'balance') {
                    if (!window.balanceExerciseInstance && document.getElementById('balanceExercise')) {
                        window.balanceExerciseInstance = new BalanceExercise();
                    }
                }
                
                // Плавен скрол до началото на секцията
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Section not found:', `${section}-section`); // Debug
            }
        });
    });
    
    console.log('Found feature items:', featureItems.length); // Debug
}

// Рендериране на химични уравнения
function renderEquations() {
    const grid = document.getElementById('equationsGrid');
    if (!grid) return; // only render where the container exists
    grid.innerHTML = '';
    
    chemicalEquations.forEach(eq => {
        const card = document.createElement('div');
        card.className = 'equation-card';
        
        const substancesHTML = eq.substances.map(s => `<li>${s}</li>`).join('');
        
        card.innerHTML = `
            <span class="equation-type">${eq.type}</span>
            <h3>${eq.name}</h3>
            <div class="equation-formula">${eq.equation}</div>
            <div class="equation-explanation">
                <strong>Обяснение:</strong> ${eq.explanation}
            </div>
            <div class="substance-list">
                <strong>Вещества в реакцията:</strong>
                <ul>${substancesHTML}</ul>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Настройка на event listeners
function setupEventListeners() {
    // Търсене (само ако полето съществува на страницата)
    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.addEventListener('input', handleSearch);

    // Филтри (querySelectorAll е безопасен — ако няма бутони, forEach просто няма да се изпълни)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Викторина (само ако има бутон на страницата)
    const startQuizBtn = document.getElementById('startQuiz');
    if (startQuizBtn) startQuizBtn.addEventListener('click', startQuiz);

    // Упражнения за изравняване (само ако има бутон на страницата)
    const startBalanceBtn = document.getElementById('startBalance');
    if (startBalanceBtn) startBalanceBtn.addEventListener('click', startBalanceExercise);
}

// Търсене
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.element').forEach((el, index) => {
        const element = elements[index];
        const matches = element.name.toLowerCase().includes(searchTerm) ||
                       element.symbol.toLowerCase().includes(searchTerm);
        
        if (currentFilter === 'all' || element.category === currentFilter) {
            el.classList.toggle('hidden', !matches);
        }
    });
}

// Филтриране
function handleFilter(e) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.category;
    
    document.querySelectorAll('.element').forEach((el, index) => {
        const element = elements[index];
        el.classList.toggle('hidden', currentFilter !== 'all' && element.category !== currentFilter);
    });
}

// Стартиране на викторина
function startQuiz() {
    quizScore = 0;
    quizTotal = 0;
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('startQuiz').style.display = 'none';
    updateQuizScore();
    nextQuestion();
}

// Следващ въпрос
function nextQuestion() {
    const questionTypes = ['symbol', 'name', 'category'];
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    currentQuizQuestion = elements[Math.floor(Math.random() * elements.length)];
    const options = generateOptions(currentQuizQuestion, type);
    
    let question = '';
    switch(type) {
        case 'symbol':
            question = `Какъв е символът на ${currentQuizQuestion.name}?`;
            break;
        case 'name':
            question = `Как се казва елементът ${currentQuizQuestion.symbol}?`;
            break;
        case 'category':
            question = `Към каква категория принадлежи ${currentQuizQuestion.name}?`;
            break;
    }
    
    document.getElementById('quizQuestion').textContent = question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => checkAnswer(option.correct, btn, type));
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quizResult').textContent = '';
}

// Генериране на опции
function generateOptions(correctElement, type) {
    const options = [];
    let correctAnswer = '';
    
    switch(type) {
        case 'symbol':
            correctAnswer = correctElement.symbol;
            break;
        case 'name':
            correctAnswer = correctElement.name;
            break;
        case 'category':
            correctAnswer = getCategoryName(correctElement.category);
            break;
    }
    
    options.push({ text: correctAnswer, correct: true });
    
    while(options.length < 4) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        let answer = '';
        
        switch(type) {
            case 'symbol':
                answer = randomElement.symbol;
                break;
            case 'name':
                answer = randomElement.name;
                break;
            case 'category':
                answer = getCategoryName(randomElement.category);
                break;
        }
        
        if (!options.find(o => o.text === answer)) {
            options.push({ text: answer, correct: false });
        }
    }
    
    return options.sort(() => Math.random() - 0.5);
}

// Проверка на отговор
function checkAnswer(correct, btn, type) {
    quizTotal++;
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

    const quizResultEl = document.getElementById('quizResult');

    if (correct) {
        btn.classList.add('correct');
        if (quizResultEl) quizResultEl.textContent = '✅ Правилно!';
        quizScore++;
    } else {
        btn.classList.add('incorrect');
        if (quizResultEl) quizResultEl.textContent = '❌ Грешно!';
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent === (type === 'symbol' ? currentQuizQuestion.symbol : 
                                   type === 'name' ? currentQuizQuestion.name : 
                                   getCategoryName(currentQuizQuestion.category))) {
                b.classList.add('correct');
            }
        });
    }
    
    updateQuizScore();
    
    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

// Актуализиране на резултат
function updateQuizScore() {
    const scoreEl = document.getElementById('quizScore');
    const totalEl = document.getElementById('quizTotal');
    if (scoreEl) scoreEl.textContent = quizScore;
    if (totalEl) totalEl.textContent = quizTotal;
}

// Упражнения за изравняване
function startBalanceExercise() {
    currentBalanceIndex = 0;
    balanceScore = 0;
    balanceAttempts = 0;
    showBalanceQuestion();
}

function showBalanceQuestion() {
    if (currentBalanceIndex >= balanceExercises.length) {
        showBalanceResults();
        return;
    }
    
    const exercise = balanceExercises[currentBalanceIndex];
    const container = document.getElementById('balanceExercise');
    if (!container) return; // nothing to do on pages without the balance container
    
    // Разделяне на уравнението на части
    const parts = exercise.equation.split('→');
    const reactants = parts[0].trim().split('+').map(r => r.trim());
    const products = parts[1].trim().split('+').map(p => p.trim());
    
    let inputsHTML = '<div class="coefficient-inputs">';
    
    // Входове за реактанти
    reactants.forEach((reactant, i) => {
        inputsHTML += `
            <div class="coefficient-group">
                <input type="number" min="1" max="10" value="1" id="coef-${i}" class="coef-input">
                <label>${reactant}</label>
            </div>
        `;
        if (i < reactants.length - 1) inputsHTML += '<span style="font-size: 24px; font-weight: bold;">+</span>';
    });
    
    inputsHTML += '<span style="font-size: 28px; margin: 0 15px;">→</span>';
    
    // Входове за продукти
    products.forEach((product, i) => {
        const inputId = reactants.length + i;
        inputsHTML += `
            <div class="coefficient-group">
                <input type="number" min="1" max="10" value="1" id="coef-${inputId}" class="coef-input">
                <label>${product}</label>
            </div>
        `;
        if (i < products.length - 1) inputsHTML += '<span style="font-size: 24px; font-weight: bold;">+</span>';
    });
    
    inputsHTML += '</div>';
    
    container.innerHTML = `
        <div class="balance-question">
            <h3>Упражнение ${currentBalanceIndex + 1} от ${balanceExercises.length}</h3>
            <p style="text-align: center; margin: 15px 0; font-size: 16px;">
                Изравни следното химично уравнение, като въведеш правилните коефициенти:
            </p>
            <div class="balance-equation">${exercise.equation}</div>
            ${inputsHTML}
            <div class="balance-buttons">
                <button class="hint-btn" onclick="showHint()">💡 Подсказка</button>
                <button class="check-btn" onclick="checkBalance()">✓ Провери</button>
            </div>
            <div id="balanceResult"></div>
            <div id="balanceHint"></div>
        </div>
        <div class="balance-stats">
            <div class="stat-item">
                <div class="stat-value">${currentBalanceIndex + 1}/${balanceExercises.length}</div>
                <div class="stat-label">Упражнение</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${balanceScore}</div>
                <div class="stat-label">Правилни</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${balanceAttempts}</div>
                <div class="stat-label">Опити</div>
            </div>
        </div>
    `;
}

function showHint() {
    const exercise = balanceExercises[currentBalanceIndex];
    const hintDiv = document.getElementById('balanceHint');
    hintDiv.innerHTML = `
        <div class="balance-hint">
            <strong>💡 Подсказка:</strong> ${exercise.hint}
        </div>
    `;
}

function checkBalance() {
    balanceAttempts++;
    const exercise = balanceExercises[currentBalanceIndex];
    const inputs = document.querySelectorAll('.coef-input');
    const userCoefficients = Array.from(inputs).map(input => parseInt(input.value) || 1);
    
    const isCorrect = JSON.stringify(userCoefficients) === JSON.stringify(exercise.coefficients);
    const resultDiv = document.getElementById('balanceResult');
    
    if (isCorrect) {
        balanceScore++;
        resultDiv.innerHTML = `
            <div class="balance-result correct">
                ✅ Браво! Правилно изравнено уравнение!
            </div>
            <div class="balance-explanation">
                <strong>📖 Обяснение:</strong><br>
                Правилно изравнено уравнение: <strong>${exercise.balanced}</strong><br>
                ${exercise.explanation}
            </div>
            <div class="balance-buttons">
                <button class="next-btn" onclick="nextBalanceQuestion()">Следващо упражнение →</button>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="balance-result incorrect">
                ❌ Опитай отново! Провери броя на атомите от двете страни.
            </div>
        `;
    }
    
    // Актуализиране на статистиката
    showBalanceQuestion();
}

function nextBalanceQuestion() {
    currentBalanceIndex++;
    document.getElementById('balanceHint').innerHTML = '';
    showBalanceQuestion();
}

function showBalanceResults() {
    const container = document.getElementById('balanceExercise');
    const percentage = Math.round((balanceScore / balanceExercises.length) * 100);
    
    let message = '';
    if (percentage === 100) message = '🏆 Перфектно! Ти си химик-майстор!';
    else if (percentage >= 70) message = '🎉 Много добре! Продължавай така!';
    else if (percentage >= 50) message = '👍 Добра работа! Упражнявай още!';
    else message = '💪 Не се отказвай! Опитай отново!';
    
    container.innerHTML = `
        <div class="balance-question">
            <h2 style="text-align: center; color: #667eea;">🎓 Завършено!</h2>
            <div style="text-align: center; font-size: 48px; margin: 30px 0;">${percentage}%</div>
            <h3 style="text-align: center;">${message}</h3>
            <div class="balance-stats" style="margin-top: 30px;">
                <div class="stat-item">
                    <div class="stat-value">${balanceScore}</div>
                    <div class="stat-label">Правилни отговори</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${balanceExercises.length}</div>
                    <div class="stat-label">Общо упражнения</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${balanceAttempts}</div>
                    <div class="stat-label">Общо опити</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="quiz-btn" onclick="startBalanceExercise()">🔄 Започни отново</button>
            </div>
        </div>
    `;
}

// Функция за скролване към навигацията в laboratory.html
function scrollToNavigation() {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Функция за управление на липкавия бутон "назад към горе"
function setupScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return;

    // Показване/скриване на бутона при скролване
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Скролване към горе при клик на бутона
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Инициализирай липкавия бутон когато страницата се зареди
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollToTopButton);
} else {
    setupScrollToTopButton();
}

// Тъмна тема за всички страници
function setupThemeToggle() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn || !document.body) return;

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        applyTheme(isDark ? 'light' : 'dark');
    });

    function applyTheme(theme) {
        const useDark = theme === 'dark';
        document.body.classList.toggle('dark-theme', useDark);
        toggleBtn.setAttribute('aria-label', useDark ? 'Светла тема' : 'Тъмна тема');
        toggleBtn.innerHTML = useDark
            ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        localStorage.setItem('theme', useDark ? 'dark' : 'light');
    }
}

// ===========================
// ПЕРИОДИЧНА ТАБЛИЦА ВИКТОРИНА ИГРА
// ===========================

class PeriodicTableGame {
    constructor() {
        this.currentMode = 'element-name';
        this.currentDifficulty = 'easy';
        this.gameActive = false;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.questions = [];
        this.currentQuestionData = null;
        this.gameStartTime = null;
        this.timerInterval = null;
        
        this.initializeElements();
        this.setupEventListeners();
    }
    
    initializeElements() {
        this.modeButtons = document.querySelectorAll('.mode-btn');
        this.difficultyButtons = document.querySelectorAll('.difficulty-btn');
        this.startGameBtn = document.getElementById('startGameBtn');
        this.endGameBtn = document.getElementById('endGameBtn');
        this.restartGameBtn = document.getElementById('restartGameBtn');
        this.gameContainer = document.getElementById('gameContainer');
        this.gameResults = document.getElementById('gameResults');
        this.gameOptions = document.getElementById('gameOptions');
        this.gameQuestionText = document.getElementById('gameQuestionText');
        this.gameScore = document.getElementById('gameScore');
        this.wrongScore = document.getElementById('wrongScore');
        this.currentQuestion = document.getElementById('currentQuestion');
        this.totalQuestions = document.getElementById('totalQuestions');
        this.progressBar = document.getElementById('progressBar');
        this.answerFeedback = document.getElementById('answerFeedback');
        this.feedbackText = document.getElementById('feedbackText');
        this.gameTimer = document.getElementById('gameTimer');
        this.periodicTableMode = document.getElementById('periodicTableMode');
        this.periodicTable = document.getElementById('periodicTable');
    }
    
    setupEventListeners() {
        this.modeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.setMode(e.target.closest('.mode-btn')));
        });
        
        this.difficultyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.setDifficulty(e.target.closest('.difficulty-btn')));
        });
        
        this.startGameBtn.addEventListener('click', () => this.startGame());
        this.endGameBtn.addEventListener('click', () => this.endGame());
        this.restartGameBtn.addEventListener('click', () => this.restartGame());
        
        document.getElementById('continueBtn').addEventListener('click', () => this.showNextQuestion());
    }
    
    setMode(button) {
        this.modeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.currentMode = button.dataset.mode;
    }
    
    setDifficulty(button) {
        this.difficultyButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.currentDifficulty = button.dataset.difficulty;
    }
    
    getGameElements() {
        let elementsList = elements;
        
        if (this.currentDifficulty === 'easy') {
            elementsList = elements.slice(0, 20);
        } else if (this.currentDifficulty === 'medium') {
            elementsList = elements.slice(0, 40);
        }
        
        return elementsList;
    }
    
    generateQuestions(count = 10) {
        const gameElements = this.getGameElements();
        const questions = [];
        
        for (let i = 0; i < Math.min(count, gameElements.length); i++) {
            const element = gameElements[Math.floor(Math.random() * gameElements.length)];
            let question = {};
            
            switch(this.currentMode) {
                case 'element-name':
                    question = {
                        question: `Кой химичен елемент има символ <strong>${element.symbol}</strong>?`,
                        correctAnswer: element.number,
                        type: 'periodic-table',
                        element: element
                    };
                    break;
                case 'symbol':
                    question = {
                        question: `Какъв е символът на елемента <strong>${element.name}</strong>?`,
                        correctAnswer: element.number,
                        type: 'periodic-table',
                        element: element
                    };
                    break;
                case 'atomic-number':
                    question = {
                        question: `Кой е атомния номер на елемента <strong>${element.name}</strong>?`,
                        correctAnswer: element.number.toString(),
                        type: 'multiple-choice',
                        element: element
                    };
                    break;
                case 'atomic-mass':
                    question = {
                        question: `Близо каква е атомната маса на елемента <strong>${element.symbol}</strong>?`,
                        correctAnswer: Math.round(element.mass).toString(),
                        type: 'multiple-choice',
                        element: element
                    };
                    break;
            }
            
            questions.push(question);
        }
        
        return questions;
    }
    
    getAnswerOptions(correctAnswer, element) {
        const gameElements = this.getGameElements();
        const options = [correctAnswer];
        
        if (this.currentMode === 'symbol') {
            while (options.length < 4) {
                const randomElement = gameElements[Math.floor(Math.random() * gameElements.length)];
                if (!options.includes(randomElement.symbol)) {
                    options.push(randomElement.symbol);
                }
            }
        } else if (this.currentMode === 'atomic-number') {
            while (options.length < 4) {
                const randomElement = gameElements[Math.floor(Math.random() * gameElements.length)];
                const num = randomElement.number.toString();
                if (!options.includes(num)) {
                    options.push(num);
                }
            }
        } else if (this.currentMode === 'atomic-mass') {
            while (options.length < 4) {
                const randomElement = gameElements[Math.floor(Math.random() * gameElements.length)];
                const mass = Math.round(randomElement.mass).toString();
                if (!options.includes(mass)) {
                    options.push(mass);
                }
            }
        }
        
        return options.sort(() => Math.random() - 0.5);
    }
    
    displayElementCard(element, mode = null) {
        const categoryNames = {
            'alkali-metal': 'Алкален метал',
            'alkaline-earth': 'Алкален земен метал',
            'transition-metal': 'Преходен метал',
            'post-transition': 'Постпреходен метал',
            'metalloid': 'Металоид',
            'nonmetal': 'Неметал',
            'halogen': 'Халоген',
            'noble-gas': 'Инертен газ',
            'lanthanide': 'Лантанид',
            'actinide': 'Актинид'
        };
        
        document.querySelector('.element-card-symbol').textContent = element.symbol;
        document.querySelector('.element-card-name').textContent = element.name;
        
        // Hide mass and category for atomic-number and atomic-mass modes
        const massElement = document.querySelector('.element-card-mass');
        const categoryElement = document.querySelector('.element-card-category');
        
        if (mode === 'atomic-number' || mode === 'atomic-mass') {
            massElement.classList.add('hidden');
            categoryElement.classList.add('hidden');
        } else {
            massElement.classList.remove('hidden');
            categoryElement.classList.remove('hidden');
            massElement.textContent = `Атомна маса: ${element.mass.toFixed(3)}`;
            categoryElement.textContent = categoryNames[element.category] || element.category;
        }
        
        // Set card background color based on category
        const card = document.getElementById('elementCard');
        const categoryColors = {
            'alkali-metal': '#FCD34D',
            'alkaline-earth': '#FBBF24',
            'transition-metal': '#F87171',
            'post-transition': '#A78BFA',
            'metalloid': '#93C5FD',
            'nonmetal': '#86EFAC',
            'halogen': '#67E8F9',
            'noble-gas': '#F0ABFC',
            'lanthanide': '#E879F9',
            'actinide': '#FB923C'
        };
        
        card.style.borderTopColor = categoryColors[element.category] || '#8B5CF6';
    }
    
    startGame() {
        this.gameActive = true;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.questions = this.generateQuestions(10);
        this.gameStartTime = Date.now();
        
        document.querySelector('.game-selection').classList.add('hidden');
        this.gameContainer.classList.remove('hidden');
        this.gameResults.classList.add('hidden');
        this.answerFeedback.classList.add('hidden');
        
        this.totalQuestions.textContent = this.questions.length;
        
        this.startTimer();
        this.showNextQuestion();
    }
    
    startTimer() {
        let seconds = 0;
        this.timerInterval = setInterval(() => {
            seconds++;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            this.gameTimer.textContent = 
                `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }, 1000);
    }
    
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }
    
    showNextQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endGame();
            return;
        }
        
        this.currentQuestionData = this.questions[this.currentQuestionIndex];
        this.currentQuestionIndex++;
        
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex;
        const progress = (this.currentQuestionIndex / this.questions.length) * 100;
        this.progressBar.style.width = progress + '%';
        
        this.gameQuestionText.innerHTML = this.currentQuestionData.question;
        
        // Show element card for atomic-number and atomic-mass modes
        const elementCard = document.getElementById('elementCard');
        if (this.currentMode === 'atomic-number' || this.currentMode === 'atomic-mass') {
            elementCard.classList.remove('hidden');
            this.displayElementCard(this.currentQuestionData.element, this.currentMode);
        } else {
            elementCard.classList.add('hidden');
        }
        
        if (this.currentQuestionData.type === 'periodic-table') {
            this.displayPeriodicTable();
        } else {
            this.periodicTableMode.classList.add('hidden');
            document.getElementById('gameOptionsContainer').classList.remove('hidden');
            const options = this.getAnswerOptions(this.currentQuestionData.correctAnswer, this.currentQuestionData.element);
            this.displayOptions(options);
        }
        
        this.answerFeedback.classList.add('hidden');
    }
    
    displayPeriodicTable() {
        this.periodicTableMode.classList.remove('hidden');
        document.getElementById('gameOptionsContainer').classList.add('hidden');
        this.periodicTable.innerHTML = '';
        
        const gameElements = this.getGameElements();
        
        gameElements.forEach(element => {
            const btn = document.createElement('button');
            btn.className = 'periodic-element';
            btn.dataset.number = element.number;
            btn.dataset.category = element.category;
            
            // Позиция на елемента в таблицата
            btn.style.gridColumn = element.col;
            btn.style.gridRow = element.row;
            
            // Съдържание
            const showNames = this.currentMode === 'element-name';
            btn.innerHTML = showNames
                ? `<div class="element-name-only">${element.name}</div>`
                : `<div class="element-symbol-only">${element.symbol}</div>`;
            
            btn.addEventListener('click', () => this.checkPeriodicAnswer(element.number));
            this.periodicTable.appendChild(btn);
        });
    }
    
    checkPeriodicAnswer(selectedNumber) {
        const isCorrect = selectedNumber === this.currentQuestionData.correctAnswer;
        
        // Деактивирай всички бутони
        document.querySelectorAll('.periodic-element').forEach(btn => {
            btn.disabled = true;
            if (parseInt(btn.dataset.number) === this.currentQuestionData.correctAnswer) {
                btn.classList.add('correct-answer');
            }
            if (parseInt(btn.dataset.number) === selectedNumber && !isCorrect) {
                btn.classList.add('wrong-answer');
            }
        });
        
        if (isCorrect) {
            this.correctAnswers++;
            this.gameScore.textContent = this.correctAnswers;
            this.feedbackText.innerHTML = '✅ Правилно!';
            this.feedbackText.className = 'feedback-text correct';
        } else {
            this.wrongAnswers++;
            this.wrongScore.textContent = this.wrongAnswers;
            const correctElement = elements.find(el => el.number === this.currentQuestionData.correctAnswer);
            this.feedbackText.innerHTML = `❌ Неправилно! Правилния отговор е: <strong>${correctElement.symbol}</strong>`;
            this.feedbackText.className = 'feedback-text wrong';
        }
        
        this.answerFeedback.classList.remove('hidden');
    }
    
    displayOptions(options) {
        this.gameOptions.innerHTML = '';
        
        options.forEach((option) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.checkAnswer(option));
            this.gameOptions.appendChild(btn);
        });
    }
    
    checkAnswer(selectedAnswer) {
        const isCorrect = selectedAnswer === this.currentQuestionData.correctAnswer;
        
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === this.currentQuestionData.correctAnswer) {
                btn.classList.add('correct-answer');
            }
            if (btn.textContent === selectedAnswer && !isCorrect) {
                btn.classList.add('wrong-answer');
            }
        });
        
        if (isCorrect) {
            this.correctAnswers++;
            this.gameScore.textContent = this.correctAnswers;
            this.feedbackText.innerHTML = '✅ Правилно!';
            this.feedbackText.className = 'feedback-text correct';
        } else {
            this.wrongAnswers++;
            this.wrongScore.textContent = this.wrongAnswers;
            this.feedbackText.innerHTML = `❌ Неправилно! Правилния отговор е: <strong>${this.currentQuestionData.correctAnswer}</strong>`;
            this.feedbackText.className = 'feedback-text wrong';
        }
        
        this.answerFeedback.classList.remove('hidden');
    }
    
    endGame() {
        this.gameActive = false;
        this.stopTimer();
        this.gameContainer.classList.add('hidden');
        this.gameResults.classList.remove('hidden');
        this.displayResults();
    }
    
    displayResults() {
        const total = this.correctAnswers + this.wrongAnswers;
        const percentage = Math.round((this.correctAnswers / total) * 100);
        
        document.getElementById('finalScoreValue').textContent = this.correctAnswers;
        document.getElementById('finalScoreTotal').textContent = total;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('wrongAnswers').textContent = this.wrongAnswers;
        document.getElementById('accuracy').textContent = percentage + '%';
        
        const percentageDiv = document.getElementById('resultPercentage');
        percentageDiv.innerHTML = `${percentage}%`;
        percentageDiv.style.color = percentage >= 80 ? '#10b981' : percentage >= 60 ? '#f59e0b' : '#ef4444';
        
        let message = '';
        if (percentage >= 90) {
            message = '🌟 Отличен резултат! Ти си експерт в периодичната таблица!';
        } else if (percentage >= 80) {
            message = '🎉 Чудесен резултат! Отличан е твоят прогрес!';
        } else if (percentage >= 70) {
            message = '👍 Добър резултат! Продължавай да се учиш!';
        } else if (percentage >= 60) {
            message = '📚 Можеш да правиш лучше! Опитай отново!';
        } else {
            message = '💪 Трябва да си преговориш някои елементи. Не се отказвай!';
        }
        
        document.getElementById('resultMessage').textContent = message;
    }
    
    restartGame() {
        document.querySelector('.game-selection').classList.remove('hidden');
        this.gameResults.classList.add('hidden');
    }
}

// Инициализирай игра когато страницата се зареди
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('startGameBtn')) {
            window.gameInstance = new PeriodicTableGame();
        }
    });
} else {
    if (document.getElementById('startGameBtn')) {
        window.gameInstance = new PeriodicTableGame();
    }
}

// Упражнения за изравняване на уравнения (класа BalanceExercise)
const balanceExercisesExtra = [
    {
        unbalanced: 'C + O₂ → CO₂',
        balanced: 'C + O₂ → CO₂',
        coefficients: [1, 1, 1],
        elements: ['C', 'O'],
        leftUnbalanced: { C: 1, O: 2 },
        rightUnbalanced: { C: 1, O: 2 },
        leftBalanced: { C: 1, O: 2 },
        rightBalanced: { C: 1, O: 2 },
        explanation: 'Това уравнение е вече балансирано! Имаме 1 въглерод и 2 кислорода от двете страни.'
    },
    {
        unbalanced: 'Na + Cl₂ → NaCl',
        balanced: '2Na + Cl₂ → 2NaCl',
        coefficients: [2, 1, 2],
        elements: ['Na', 'Cl'],
        leftUnbalanced: { Na: 1, Cl: 2 },
        rightUnbalanced: { Na: 1, Cl: 1 },
        leftBalanced: { Na: 2, Cl: 2 },
        rightBalanced: { Na: 2, Cl: 2 },
        explanation: 'Натрият е 1 вляво и 1 вдясно (без коефициент). Хлорът е 2 вляво и трябва 2 вдясно. Трябват коефициенти 2 пред Na и NaCl.'
    },
    {
        unbalanced: 'Fe + O₂ → Fe₂O₃',
        balanced: '4Fe + 3O₂ → 2Fe₂O₃',
        coefficients: [4, 3, 2],
        elements: ['Fe', 'O'],
        leftUnbalanced: { Fe: 1, O: 2 },
        rightUnbalanced: { Fe: 2, O: 3 },
        leftBalanced: { Fe: 4, O: 6 },
        rightBalanced: { Fe: 4, O: 6 },
        explanation: 'Желязото: 1 вляво, 2 вдясно (в Fe₂O₃). Кислородът: 2 вляво, 3 вдясно. Балансирането изисква коефициенти 4, 3 и 2.'
    },
    {
        unbalanced: 'CH₄ + O₂ → CO₂ + H₂O',
        balanced: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
        coefficients: [1, 2, 1, 2],
        elements: ['C', 'H', 'O'],
        leftUnbalanced: { C: 1, H: 4, O: 2 },
        rightUnbalanced: { C: 1, H: 2, O: 4 },
        leftBalanced: { C: 1, H: 4, O: 4 },
        rightBalanced: { C: 1, H: 4, O: 4 },
        explanation: 'Въглеродът е вече балансиран. Водородът е 4 вляво и трябва 4 вдясно (2×2 от H₂O). Кислородът е 4 вляво и 4 вдясно.'
    },
    {
        unbalanced: 'Ca(OH)₂ + HCl → CaCl₂ + H₂O',
        balanced: 'Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O',
        coefficients: [1, 2, 1, 2],
        elements: ['Ca', 'Cl', 'O', 'H'],
        leftUnbalanced: { Ca: 1, Cl: 1, O: 2, H: 3 },
        rightUnbalanced: { Ca: 1, Cl: 2, O: 1, H: 2 },
        leftBalanced: { Ca: 1, Cl: 2, O: 4, H: 6 },
        rightBalanced: { Ca: 1, Cl: 2, O: 4, H: 6 },
        explanation: 'Калцият е балансиран. Хлорът: 1 вляво, 2 вдясно - трябва коефициент 2 пред HCl. Кислородът и водородът се балансират автоматично.'
    }
];

class BalanceExercise {
    constructor() {
        this.currentExerciseIndex = 0;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        const startBtn = document.getElementById('startBalance');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startExercise());
        }
        
        const checkBtn = document.getElementById('checkEquationBtn');
        if (checkBtn) {
            checkBtn.addEventListener('click', () => this.checkAnswer());
        }
        
        const nextBtn = document.getElementById('nextExerciseBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextExercise());
        }
        
        const restartBtn = document.getElementById('restartExerciseBtn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restartExercise());
        }
        
        const input = document.getElementById('equationInput');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.checkAnswer();
            });
        }
    }
    
    startExercise() {
        this.currentExerciseIndex = 0;
        document.getElementById('exerciseSelection').classList.add('hidden');
        document.getElementById('exerciseContainer').classList.remove('hidden');
        this.loadExercise();
    }
    
    loadExercise() {
        const exercise = balanceExercises[this.currentExerciseIndex];
        document.getElementById('currentExercise').textContent = this.currentExerciseIndex + 1;
        
        const progress = ((this.currentExerciseIndex + 1) / balanceExercises.length) * 100;
        document.getElementById('exerciseProgressBar').style.width = progress + '%';
        
        const question = `Изравни следното химично уравнение, като въведеш правилните коефициенти:`;
        document.getElementById('exerciseQuestion').textContent = question;
        
        // Покази неизравненото уравнение
        const content = `
            <div class="exercise-unbalanced">${exercise.unbalanced}</div>
            <div class="exercise-input-group" id="coefficientInputs"></div>
        `;
        document.getElementById('exerciseContent').innerHTML = content;
        
        // Създай input полета за коефициенти
        const parts = exercise.unbalanced.split('→');
        const left = parts[0].split('+').map(p => p.trim());
        const right = parts[1].split('+').map(p => p.trim());
        
        const inputsDiv = document.getElementById('coefficientInputs');
        let inputCount = 0;
        
        left.forEach((compound, idx) => {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '1';
            input.max = '20';
            input.value = '1';
            input.className = 'exercise-input';
            input.placeholder = compound;
            input.style.width = '60px';
            inputsDiv.appendChild(input);
            inputCount++;
            
            if (idx < left.length - 1) {
                const plus = document.createElement('span');
                plus.textContent = ' + ';
                plus.style.alignSelf = 'center';
                inputsDiv.appendChild(plus);
            }
        });
        
        const arrow = document.createElement('span');
        arrow.textContent = ' → ';
        arrow.style.alignSelf = 'center';
        inputsDiv.appendChild(arrow);
        
        right.forEach((compound, idx) => {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '1';
            input.max = '20';
            input.value = '1';
            input.className = 'exercise-input';
            input.placeholder = compound;
            input.style.width = '60px';
            inputsDiv.appendChild(input);
            inputCount++;
            
            if (idx < right.length - 1) {
                const plus = document.createElement('span');
                plus.textContent = ' + ';
                plus.style.alignSelf = 'center';
                inputsDiv.appendChild(plus);
            }
        });
        
        document.getElementById('exerciseFeedback').classList.add('hidden');
    }
    
    checkAnswer() {
        const exercise = balanceExercises[this.currentExerciseIndex];
        const inputs = document.querySelectorAll('.exercise-input');
        const userCoefficients = Array.from(inputs).map(inp => parseInt(inp.value) || 1);
        
        const isCorrect = JSON.stringify(userCoefficients) === JSON.stringify(exercise.coefficients);
        
        const feedbackDiv = document.getElementById('exerciseFeedback');
        let feedbackHTML = '';
        
        if (isCorrect) {
            feedbackHTML = `
                <div class="feedback-content">
                    <div class="feedback-correct">
                        <h4>✅ Правилно!</h4>
                        <p>Балансираното уравнение е: <strong>${exercise.balanced}</strong></p>
                        <div class="equation-explanation">
                            <h5>Обяснение:</h5>
                            <p>${exercise.explanation}</p>
                            <table class="equation-check-table">
                                <tr>
                                    <th>Елемент</th>
                                    <th>Вляво</th>
                                    <th>Вдясно</th>
                                    <th>Статус</th>
                                </tr>
        `;
            
            exercise.elements.forEach(element => {
                const left = exercise.leftBalanced[element] || 0;
                const right = exercise.rightBalanced[element] || 0;
                feedbackHTML += `
                    <tr>
                        <td><strong>${element}</strong></td>
                        <td><span class="atom-count-correct">${left}</span></td>
                        <td><span class="atom-count-correct">${right}</span></td>
                        <td>✅ Балансирано</td>
                    </tr>
                `;
            });
            
            feedbackHTML += `
                            </table>
                        </div>
                    </div>
                </div>
            `;
        } else {
            feedbackHTML = `
                <div class="feedback-content">
                    <div class="feedback-incorrect">
                        <h4>❌ Не е правилно</h4>
                        <p>Твоето уравнение: ${userCoefficients.join(' ')} (коефициентите)</p>
                        <p>Правилното уравнение е: <strong>${exercise.balanced}</strong></p>
                        <p style="margin-top: 15px;">Правилните коефициенти са: <strong>${exercise.coefficients.join(', ')}</strong></p>
                    </div>
                </div>
            `;
        }
        
        document.getElementById('feedbackContent').innerHTML = feedbackHTML;
        document.getElementById('exerciseFeedback').classList.remove('hidden');
        document.getElementById('exerciseContent').classList.add('hidden');
    }
    
    nextExercise() {
        this.currentExerciseIndex++;
        
        if (this.currentExerciseIndex >= balanceExercises.length) {
            // Край на упражненията
            document.getElementById('exerciseContent').classList.add('hidden');
            document.getElementById('exerciseFeedback').classList.add('hidden');
            document.getElementById('exerciseResults').classList.remove('hidden');
        } else {
            document.getElementById('exerciseContent').classList.remove('hidden');
            document.getElementById('exerciseFeedback').classList.add('hidden');
            this.loadExercise();
        }
    }
    
    restartExercise() {
        document.getElementById('exerciseSelection').classList.remove('hidden');
        document.getElementById('exerciseContainer').classList.add('hidden');
        document.getElementById('exerciseResults').classList.add('hidden');
        this.currentExerciseIndex = 0;
    }
}

// Инициализирай упражненията
if (document.getElementById('balanceExercise')) {
    window.balanceExerciseInstance = new BalanceExercise();
}
