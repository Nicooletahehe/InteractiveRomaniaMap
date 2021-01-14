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
console.log(jsonData[1]);


output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}

let valoareSlider = document.querySelectorAll("#rangeAni")[0].value;
function loadTable(e){
    for(let z=0;z<jsonData[0].length;z++){
        // console.log(slider.value);
        // console.log(jsonData[0][z].an);
        //imi aduca datele de pe anul selectat in slider
        if(jsonData[0][z].an === parseInt(slider.value)) {
            console.log("vedefg");
            //verific numele judetului selectat, si incarc doar acele date
            let numeJudetSVG = judete[e].attributes[2].value;
            for(let j=0;j<jsonData[0][z].date.length;j++){
                console.log(jsonData[0][z].date[j].nume);
                if(jsonData[0][z].date[j].nume === numeJudetSVG){
                    console.log(jsonData[0][z].date[j].nume);
                    let numeJudetTabel = document.querySelector("#titluJudet");
                    let numeMunicipiuTabel = document.querySelector("#numeMunicipiu");
                    let nrPopulatieTabel = document.querySelector("#nrPopulatie");
                    let suprafataTabel = document.querySelector("#suprafata");
                    let densitateTabel = document.querySelector("#densitate");
                    let somajTabel = document.querySelector("#somaj");
                    let anTabel = document.querySelector("#anTabel");
                    console.log(jsonData[0][z].an);
                    numeJudetTabel.innerHTML = jsonData[0][z].date[j].nume;
                    numeMunicipiuTabel.innerHTML = jsonData[0][z].date[j].municipiu;
                    nrPopulatieTabel.innerHTML = jsonData[0][z].date[j].populatie;
                    suprafataTabel.innerHTML = jsonData[0][z].date[j].suprafata;
                    densitateTabel.innerHTML = jsonData[0][z].date[j].densitate;
                    somajTabel.innerHTML = jsonData[0][z].date[j].somaj;
                    anTabel.innerHTML = jsonData[0][z].an;
                }
            }
        }
    }
}

//incarcare tabel si colorare judet
function clickJudet() {
    for(let i=0; i<judete.length; i++) {
        //la click pe judet imi caut datele din anul selectat din slider pentru a le incarca
        judete[i].addEventListener('click',function(){
            console.log(judete[i].style.fill);
            //decoloreaza ce era selectat inainte
            // for(let x=0; x<judete.length; x++) {judete[x].style.fill = '';}
            //parcurg datele din json
            loadTable(i);
            judete[i].style.fill = 'rgb('+52+','+41+','+90+')';
            tabel.style.display = "block";
        });
    }
}

clickJudet();


