// INI FILE JAVASCRIPT
function Luas(){
    var form = document.forms['mainForm']
    var a = form['input1'].value;
    var t = form['input2'].value;
    if (a == '' || t == ''){
        alert("Masukan input!")
        return false;
    }
    var alas = parseFloat(a)
    var tinggi = parseFloat(t)
    var luas = 1/2 * alas * tinggi
    var luasCalculated = parseFloat(luas.toFixed(2))
    console.log(alas, tinggi, luas, luasCalculated)
    document.getElementById('inputAnswer').innerText =`Luas = 1/2 x A x T
    Luas = 1/2 x ${alas} cm x ${tinggi} cm
    Luas =  ${luasCalculated} cm`
}

function Keliling(){
    var form = document.forms['mainForm']
    var s1 = form['input1'].value;
    var s2 = form['input2'].value;
    var s3 = form['input3'].value;
    if (s1 == '' || s2 == '' || s3 ==''){
        alert("Masukan input!")
        return false;
    }
    var sisi1 = parseFloat(s1)
    var sisi2 = parseFloat(s2)
    var sisi3 = parseFloat(s3)
    var keliling = sisi1 + sisi2 + sisi3
    var kelilingCalculated = parseFloat(keliling.toFixed(2))
    document.getElementById('inputAnswer').innerText =`Keliling = S1 + S2 + S3
    Keliling = ${sisi1} + ${sisi2} + ${sisi3} 
    Keliling =  ${kelilingCalculated} cm`
}


function rumusLuas(){
    var x = document.getElementsByClassName("rumus")
    x[0].innerHTML = `
    Rumus Luas Segitiga adalah:
    <span>L = 1/2 x A x T</span>
    Dimana: <br>
    L = Luas <br>
    A = Alas <br>
    T = Tinggi`
}

function rumusKeliling(){
    var x = document.getElementsByClassName("rumus")
    x[0].innerHTML = `
    Rumus Keliling Segitiga adalah:
    <span>K = S1 + S2 + S3</span>
    Dimana: <br>
    S1 = Sisi 1 <br>
    S2 = Sisi 2 <br>
    S3 = Sisi 3`
}

function calculate(event){
    event.preventDefault()
    console.log("hello world")
    var selectedOption = document.getElementById('measurement').value
    if (selectedOption== 'Luas'){
        Luas()
    } 
    if (selectedOption == 'Keliling'){
        Keliling()
    }
    
}

function clearAnswer() {
  document.getElementById('inputAnswer').innerText = ''; 
}
    
function handleMeasurementChange(){
    var selectedOption = document.getElementById('measurement')
    var input = document.getElementsByClassName('inputSegitiga')
    console.log("hello")
    if (selectedOption.value == 'Luas'){
        input[0].placeholder = "Masukan Alas (Dalam bentuk sentimeter)"
        input[1].placeholder = "Masukan Tinggi (Dalam bentuk sentimeter)"
        if (input[2].style.display == 'block'){
            console.log("test")
            input[2].style.display = 'none'
        }
        rumusLuas()
        clearAnswer()
    }
    if (selectedOption.value == 'Keliling'){
        console.log("wow")
        input[0].placeholder = "Masukan Sisi A (Dalam bentuk sentimeter)"
        input[1].placeholder = "Masukan Sisi B (Dalam bentuk sentimeter)"
        input[2].style.display = 'block'
        input[2].placeholder = "Masukan Sisi C (Dalam bentuk sentimeter)"
        rumusKeliling()
        clearAnswer()
    }
}
