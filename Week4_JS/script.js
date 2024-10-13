// Variabel untuk menyimpan input
let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('hasil');

// Fungsi untuk mengupdate display
function updateDisplay(value) {
    display.value = value;
}

// Fungsi untuk menangani klik tombol angka
function handleNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

// Fungsi untuk menangani klik operator
function handleOperator(op) {
    if (currentInput === '') return; // Jika belum ada input, jangan lakukan apa-apa
    if (previousInput !== '') {
        calculate(); // Jika ada input sebelumnya, lakukan perhitungan dulu
    }
    operator = op;
    previousInput = currentInput;
    currentInput = ''; // Reset current input
}

// Fungsi untuk menghitung hasil operasi
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case 'x':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay(currentInput);
}

// Fungsi untuk mereset kalkulator
function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('');
}

// Event listener untuk tombol angka
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

// Event listener untuk tombol operator
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

// Event listener untuk tombol sama dengan
document.getElementById('equals').addEventListener('click', () => {
    calculate();
});

// Event listener untuk tombol clear (reset)
document.getElementById('clear').addEventListener('click', () => {
    clearCalculator();
});
