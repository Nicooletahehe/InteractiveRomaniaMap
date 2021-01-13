// console.log(document.querySelectorAll(".judete"));


let judete = document.querySelectorAll("path");
var slider = document.getElementById("rangeAni");
var output = document.getElementById("spanAn");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

console.log(document.querySelectorAll("path"));
function schimbCuloare() {
    for(let i=0; i<judete.length;i++){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        judete[i].style.fill = 'rgb('+r+','+g+","+b+')';
        // console.log(judete[i].style.fill);
    };
}

// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);

let buton = document.querySelector("#butonSchimbCuloare");
buton.addEventListener('click', function(){schimbCuloare()});

let request = new XMLHttpRequest();
let data;
request.open('GET', 'date.json', true);
request.onload = function(){
    if(request.status >=200 && request.status <400) {
        data = JSON.parse(request.responseText);
        // console.log(data);
    } else {
        console.log("eroare");
    }
}
request.onerror = function() {
    // There was a connection error of some sort
  };
  
request.send();

for(let i=0; i<judete.length; i++) {
    judete[i].addEventListener('click',function(){
        // alert("ceva");
        console.log(data);
        console.log(judete[i].attributes[2].value);
        let numeJudetSVG = judete[i].attributes[2].value;

        for(let j=0;j<data.length;j++){
            console.log(data[j]);
            if(data[j].nume === numeJudetSVG){
                console.log("ai reusit");
                let tabel = document.querySelector("#tabelJudet");
                let numeJudetTabel = document.querySelector("#titluJudet");
                let numeMunicipiuTabel = document.querySelector("#numeMunicipiu");
                let nrPopulatieTabel = document.querySelector("#nrPopulatie");
                let suprafataTabel = document.querySelector("#suprafata");
                let densitateTabel = document.querySelector("#densitate");
                let somajTabel = document.querySelector("#somaj");

                numeJudetTabel.innerHTML = data[j].nume;
                numeMunicipiuTabel.innerHTML = data[j].municipiu;
                nrPopulatieTabel.innerHTML = data[j].populatie;
                suprafataTabel.innerHTML = data[j].suprafata;
                densitateTabel.innerHTML = data[j].densitate;
                somajTabel.innerHTML = data[j].somaj;

                tabel.style.display = "block";
            }
        }
    });
}
