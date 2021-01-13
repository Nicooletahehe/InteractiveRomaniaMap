// console.log(document.querySelectorAll(".judete"));
let judete = document.querySelectorAll("path");
let tabel = document.querySelector("#tabelJudet");
var slider = document.getElementById("rangeAni");
var output = document.getElementById("spanAn");

// console.log(document.querySelectorAll("path"));
//buton schimbare culoare judete random
function schimbCuloare() {
    for(let i=0; i<judete.length;i++){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        judete[i].style.fill = 'rgb('+r+','+g+","+b+')';
    };
}

let buton = document.querySelector("#butonSchimbCuloare");
buton.addEventListener('click', function(){schimbCuloare()});

let request;
let dataJudet = [];
let dataPopulatie;
let myFiles = [ "dateJudete.json", "datePopulatie.json" ];
var jsonData = [];

//parsam toate jsoanele
let loadFile = function (filePath, done) {
    // var xhr = new XMLHTTPRequest();
    request = new XMLHttpRequest();
    request.onload = function () { return done(this.responseText) }
    request.open("GET", filePath, true);
    request.send();
}

myFiles.forEach(function (file, i) {
    loadFile(file, function (responseText) {
        jsonData[i] = JSON.parse(responseText);
       
    })
})

console.log(jsonData);

//incarcare tabel si colorare judet
for(let i=0; i<judete.length; i++) {
    judete[i].addEventListener('click',function(){
        console.log(jsonData[0]);
        let numeJudetSVG = judete[i].attributes[2].value;
        for(let x=0; x<judete.length; x++) {judete[x].style.fill = '';}
        for(let j=0;j<jsonData.length;j++){
            console.log(jsonData[0][j]);
            if(jsonData[0][j].nume === numeJudetSVG){
                let numeJudetTabel = document.querySelector("#titluJudet");
                let numeMunicipiuTabel = document.querySelector("#numeMunicipiu");
                let nrPopulatieTabel = document.querySelector("#nrPopulatie");
                let suprafataTabel = document.querySelector("#suprafata");
                let densitateTabel = document.querySelector("#densitate");
                let somajTabel = document.querySelector("#somaj");

                numeJudetTabel.innerHTML = jsonData[0][j].nume;
                numeMunicipiuTabel.innerHTML = jsonData[0][j].municipiu;
                nrPopulatieTabel.innerHTML = jsonData[0][j].populatie;
                suprafataTabel.innerHTML = jsonData[0][j].suprafata;
                densitateTabel.innerHTML = jsonData[0][j].densitate;
                somajTabel.innerHTML = jsonData[0][j].somaj;

                judete[i].style.fill = 'rgb('+52+','+41+','+90+')';
                tabel.style.display = "block";
            }
        }
    });
}

//slider
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(slider.value);
    console.log(jsonData[1]);
    for(let j=0;j<jsonData.length;j++) {
        console.log(jsonData[1][j].an);
        if(jsonData[1][j].an === parseInt(slider.value)){
            if(jsonData[1][j].judete[0] < 5562){
                for(let i=0;i<judete.length;i++){
                    judete[i].style.fill = 'red';
                }
            }
        }
    }
}
