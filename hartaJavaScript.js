let judete = document.querySelectorAll("path");
let tabel = document.querySelector("#tabelJudet");
var slider = document.getElementById("rangeAni");
var output = document.getElementById("spanAn");

let request;
let dataJudet = [];
let dataPopulatie;
let myFiles = [ "dateJudete.json", "datePopulatie.json", "dateProcentuale.json", "somaj.json", "natalitate.json", "mortalitate.json" ];
var jsonData = [];
let indexJson = 2;

//parsam toate jsoanele
let loadFile = function (filePath, done) {
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

if(window.innerWidth < 774){
    console.log("mai mic");
    let nouaLocatie = document.querySelector("#tabelResponsive");
    nouaLocatie.appendChild(tabel);
} else {
    let vecheaLocatie = document.querySelector("#tabelPagNormala");
    vecheaLocatie.appendChild(tabel);
}

window.addEventListener('resize', function(event){
    console.log("ertgfsdad");
    console.log(window.innerWidth);
    if(window.innerWidth < 774){
        console.log("mai mic");
        let nouaLocatie = document.querySelector("#tabelResponsive");
        nouaLocatie.appendChild(tabel);
    } else {
        let vecheaLocatie = document.querySelector("#tabelPagNormala");
        vecheaLocatie.appendChild(tabel);
    }
})
// console.log(jsonData);
// console.log(jsonData[1]);

let selectie = 0;

function incarcDatePeJudetPop(e) {
    let numeJudetSVG = judete[e].attributes[2].value;
    // console.log(myFiles);
    for (let j = 0; j < jsonData[2].length; j++) {
        // console.log("sau aici");
        if (jsonData[2][j][0] === numeJudetSVG) {
            // console.log(jsonData[2][j][0]);
            // console.log("aproape");
            if (slider.value <= 1992) {
                // console.log("coloreaza");
                judete[e].style.fill = 'rgb(' + 124 + ',' + 124 + ',' + 124 + ')';
                document.querySelector("#noData").style.display = 'block';
            }
            else {
                // console.log("al doilea coloreaza");
                document.querySelector("#noData").style.display = 'none';
                let procentData = jsonData[2][j][slider.value - 1992]
                // console.log(procentData);
                if (procentData < -1) {
                    judete[e].style.fill = "#0C1C41";
                }
                else if (procentData < -0.3) {
                    judete[e].style.fill = "#20325E";
                }
                else if (procentData < - 0.2) {
                    judete[e].style.fill = "#364975";
                }
                else if (procentData < -0.1) {
                    judete[e].style.fill = "#566890";
                }
                else if (procentData >= -0.1 && procentData <= 0.1) {
                    judete[e].style.fill = "#AFAF45";
                }
                else if (procentData > 1) {
                    judete[e].style.fill = "#610808";
                }
                else if (procentData > 0.3) {
                    judete[e].style.fill = "#8C2424";
                }
                else if (procentData > 0.2) {
                    judete[e].style.fill = "#AF4545";
                }
                else if (procentData > 0.1) {
                    judete[e].style.fill = "#D77777";
                }
            }
            break;
        }
    }
}

function incarcDatePeJudet(e) {
    let numeJudetSVG = judete[e].attributes[2].value;
    // console.log(myFiles);
    for (let j = 0; j < jsonData[indexJson].length; j++) {
        // console.log("sau aici");
        if (jsonData[indexJson][j][0] === numeJudetSVG) {
            // console.log(jsonData[indexJson][j][0]);
            // console.log("aproape");
            if (slider.value <= 1991 || slider.value == 2020) {
                // console.log("coloreaza");
                judete[e].style.fill = 'rgb(' + 124 + ',' + 124 + ',' + 124 + ')';
                document.querySelector("#noData").style.display = 'block';
            }
            else {
                // console.log("al doilea coloreaza");
                document.querySelector("#noData").style.display = 'none';
                let procentData = jsonData[indexJson][j][slider.value - 1991]
                // console.log(procentData);
                if (procentData < 1 && procentData > 0) {
                    judete[e].style.fill = "#1A8C17";
                }
                else if (procentData < 2 && procentData > 1) {
                    judete[e].style.fill = "#4DA345";
                }
                else if (procentData < 3 && procentData > 2) {
                    judete[e].style.fill = "#B3D2A1";
                }
                else if (procentData < 4 && procentData > 3) {
                    judete[e].style.fill = "#E6E9CF";
                }
                else if (procentData < 5 && procentData > 4) {
                    judete[e].style.fill = "#FFDCCF";
                }
                else if (procentData < 6 && procentData > 5) {
                    judete[e].style.fill = "#FF7B73";
                }
                else if (procentData < 7 && procentData > 6) {
                    judete[e].style.fill = "#FF4A45";
                }
                else if (procentData > 7) {
                    judete[e].style.fill = "#FF1917";
                }
            }
            break;
        }
    }
}

function sliderAction() {
    tabel.style.display = "none";
    judetSelectat = null;
    judetHoverat = null;
    output.innerHTML = slider.value;
    for (let i = 0; i < judete.length; i++) {
        if(selectie ==0){
            incarcDatePeJudetPop(i);
        } else {
            incarcDatePeJudet(i);
        }
        
    }
}

document.querySelector("#legendaPop").style.display = "block";
document.querySelector("#legendaSnm").style.display = "none";

let butonSelectat = document.querySelectorAll("button");
console.log(butonSelectat);
for(let n=0;n<butonSelectat.length;n++){
    
    butonSelectat[n].addEventListener('click', function(){
        // console.log(butonSelectat[n].name);
        for(let m=0;m<butonSelectat.length;m++){
            butonSelectat[m].style.backgroundColor = "#6C757D";
        }
        if(butonSelectat[n].name === "populatie"){
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 0;
            indexJson = 2;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudetPop(i);
            }
            document.querySelector("#legendaPop").style.display = "block";
            document.querySelector("#legendaSnm").style.display = "none";
        } else if(butonSelectat[n].name === "somaj"){
            // console.log();
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 1;
            indexJson = 3;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudet(i);
            }
            document.querySelector("#legendaPop").style.display = "none";
            document.querySelector("#legendaSnm").style.display = "block";
        } else if(butonSelectat[n].name === "natalitate"){
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 1;
            indexJson = 4;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudet(i);
            }
            document.querySelector("#legendaPop").style.display = "none";
            document.querySelector("#legendaSnm").style.display = "block";
        } else if(butonSelectat[n].name === "mortalitate"){
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 1;
            indexJson = 5;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudet(i);
            }
            document.querySelector("#legendaPop").style.display = "none";
            document.querySelector("#legendaSnm").style.display = "block";
        }
    })
}

//slider
output.innerHTML = slider.value;
slider.oninput = function () {
    sliderAction();
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
                // console.log(jsonData[0][z].date[j].nume);
                if(jsonData[0][z].date[j].nume === numeJudetSVG){
                    console.log(jsonData[0][z].date[j].nume);
                    let numeJudetTabel = document.querySelector("#titluJudet");
                    let numeMunicipiuTabel = document.querySelector("#numeMunicipiu");
                    let nrPopulatieTabel = document.querySelector("#nrPopulatie");
                    let suprafataTabel = document.querySelector("#suprafata");
                    let densitateTabel = document.querySelector("#densitate");
                    let somajTabel = document.querySelector("#somaj");
                    let anTabel = document.querySelector("#anTabel");
                    // console.log(jsonData[0][z].an);
                    let jsonPopSeparator = jsonData[0][z].date[j].populatie.toLocaleString('en-US').replace(',', ' ');
                    let jsonSupSeparator = jsonData[0][z].date[j].suprafata.toLocaleString('en-US').replace(',', ' ');
                    let jsonSomSeparator = jsonData[0][z].date[j].somaj.toLocaleString('en-US').replace(',', ' ');
                    numeJudetTabel.innerHTML = jsonData[0][z].date[j].nume;
                    numeMunicipiuTabel.innerHTML = jsonData[0][z].date[j].municipiu;
                    nrPopulatieTabel.innerHTML = jsonPopSeparator;
                    suprafataTabel.innerHTML = jsonSupSeparator + ' km2';
                    console.log(jsonData[0][z].date[j].densitate);
                    if(jsonData[0][z].date[j].densitate === 0){
                        densitateTabel.innerHTML = jsonData[0][z].date[j].densitate + '/km2';
                    } else {
                        let jsonSuprafataZecimal = parseFloat(jsonData[0][z].date[j].densitate.replace(/,/g, '.')).toFixed(2);
                        densitateTabel.innerHTML = jsonSuprafataZecimal + '/km2';
                    }
                    somajTabel.innerHTML = jsonSomSeparator;
                    anTabel.innerHTML = jsonData[0][z].an;
                }
            }
        }
    }
}

// function highlightPath(x){
//     x.style.fill = "#000000"
// }
let judetSelectat;
let culoareSelectata;

let judetHoverat;
let culoareHoverata;

//incarcare tabel si colorare judet
function clickJudet() {
    for(let i=0; i<judete.length; i++) {
        //la click pe judet imi caut datele din anul selectat din slider pentru a le incarca
        judete[i].addEventListener('click',function(){
            //console.log(judete[i].style.fill);
            if(judetSelectat != null){
                //judete[judetHoverat].style.fill = culoareHoverata;
                judete[judetSelectat].style.fill = culoareSelectata;
            }
            culoareSelectata = culoareHoverata;
            judetSelectat = i;
            //decoloreaza ce era selectat inainte
            // for(let x=0; x<judete.length; x++) {judete[x].style.fill = '';}
            //parcurg datele din json
            loadTable(i);
            judete[i].style.fill = 'rgb('+52+','+41+','+90+')';
            tabel.style.display = "block";
        });
        judete[i].addEventListener('mouseover',function(){
            if(judetHoverat != null && judetHoverat != judetSelectat){
                judete[judetHoverat].style.fill = culoareHoverata;
            }
            culoareHoverata = judete[i].style.fill;
            judetHoverat = i;
            judete[i].style.fill = 'rgb('+52+','+41+','+90+')';
        });
        // judete[i].addEventListener('mouseleave',function(){
        //     if(judete[judetSelectat] === judete[judetHoverat]){
        //         judete[i].style.fill = 'rgb('+52+','+41+','+90+')'
        //     }
        //      //judete[judetHoverat].style.fill = culoareHoverata;
        // });
    }
}

clickJudet();


