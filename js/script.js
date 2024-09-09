function Luas() {
    const a = parseFloat(document.getElementById('input1').value);
    const t = parseFloat(document.getElementById('input2').value);

    if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0) {
        showError('error1', 'Masukan angka yang valid untuk alas dan tinggi.');
        return;
    }

    const luas = 0.5 * a * t;
    displayResult(`Luas = 1/2 x ${a} cm x ${t} cm = ${parseFloat(luas.toFixed(2))} cm²`);
}

function Keliling() {
    const s1 = parseFloat(document.getElementById('input1').value);
    const s2 = parseFloat(document.getElementById('input2').value);
    const s3 = parseFloat(document.getElementById('input3').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
        showError('error1', 'Masukan angka yang valid untuk semua sisi.');
        return;
    }

    const keliling = s1 + s2 + s3;
    displayResult(`Keliling = ${s1} cm + ${s2} cm + ${s3} cm = ${parseFloat(keliling.toFixed(2))} cm`);
}

function calculate(event) {
    event.preventDefault();
    clearErrors();

    const selectedOption = document.getElementById('measurement').value;
    if (selectedOption === 'Luas') {
        Luas();
    } else if (selectedOption === 'Keliling') {
        Keliling();
    }
}

function clearErrors() {
    document.querySelectorAll('.error').forEach((error) => (error.style.display = 'none'));
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function displayResult(result) {
    const answerDiv = document.getElementById('inputAnswer');
    answerDiv.innerHTML = result;
}

function handleMeasurementChange() {
    const selectedOption = document.getElementById('measurement').value;
    const input3 = document.getElementById('input3');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const rumus = document.getElementById('rumus');
    const judul = document.getElementById('titleName')

    if (selectedOption === 'Luas') {
        input1.placeholder = "Masukan Alas (cm)";
        input2.placeholder = "Masukan Tinggi (cm)";
        input3.style.display = 'none'
        judul.innerText = 'Luas Segitiga'
        rumus.innerHTML = `
            Rumus Luas Segitiga adalah:
            <span>L = 1/2 x A x T</span>
            Dimana: <br>
            L = Luas <br>
            A = Alas <br>
            T = Tinggi`;
    } else if (selectedOption === 'Keliling') {
        input1.placeholder = "Masukan Sisi A (cm)";
        input2.placeholder = "Masukan Sisi B (cm)";
        input3.style.display = 'block';
        input3.placeholder = "Masukan Sisi C (cm)";
        judul.innerText = 'Keliling Segitiga'
        rumus.innerHTML = `
            Rumus Keliling Segitiga adalah:
            <span>K = S1 + S2 + S3</span>
            Dimana: <br>
            K = Keliling <br>
            S1 = Sisi A <br>
            S2 = Sisi B <br>
            S3 = Sisi C`;
    }
}

function clearAnswer(event) {
    document.getElementById('inputAnswer').innerHTML = '';
}
