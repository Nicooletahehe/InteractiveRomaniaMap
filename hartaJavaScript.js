let judete = document.querySelectorAll("path");
let tabel = document.querySelector("#tabelJudet");
var slider = document.getElementById("rangeAni");
var output = document.getElementById("spanAn");
var descriere = document.getElementById("textDescriereLegenda");

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
    // console.log("mai mic");
    let nouaLocatie = document.querySelector("#tabelResponsive");
    nouaLocatie.appendChild(tabel);
} else {
    let vecheaLocatie = document.querySelector("#tabelPagNormala");
    vecheaLocatie.appendChild(tabel);
}

window.addEventListener('resize', function(event){
    // console.log("ertgfsdad");
    // console.log(window.innerWidth);
    if(window.innerWidth < 774){
        // console.log("mai mic");
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

function incarcDatePeJudetSomaj(e) {
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
                if (procentData < 1 && procentData >= 0) {
                    judete[e].style.fill = "#1A8C17";
                }
                else if (procentData < 2 && procentData >= 1) {
                    judete[e].style.fill = "#4DA345";
                }
                else if (procentData < 3 && procentData >= 2) {
                    judete[e].style.fill = "#B3D2A1";
                }
                else if (procentData < 4 && procentData >= 3) {
                    judete[e].style.fill = "#E6E9CF";
                }
                else if (procentData < 5 && procentData >= 4) {
                    judete[e].style.fill = "#FFDCCF";
                }
                else if (procentData < 6 && procentData >= 5) {
                    judete[e].style.fill = "#FF7B73";
                }
                else if (procentData < 7 && procentData >= 6) {
                    judete[e].style.fill = "#FF4A45";
                }
                else if (procentData >= 7) {
                    judete[e].style.fill = "#FF1917";
                }
            }
            break;
        }
    }
}

function incarcDatePeJudetNatalitate(e) {
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
                console.log(procentData);
                console.log(jsonData[indexJson][j][0]);
                if (procentData > 13) {
                    judete[e].style.fill = "#1A8C17";
                }
                else if (procentData <= 13 && procentData > 12) {
                    judete[e].style.fill = "#4DA345";
                }
                else if (procentData <= 12 && procentData > 11) {
                    judete[e].style.fill = "#B3D2A1";
                }
                else if (procentData <= 11 && procentData > 10.00) {
                    judete[e].style.fill = "#E6E9CF";
                }
                else if (procentData <= 10 && procentData > 9) {
                    judete[e].style.fill = "#FFDCCF";
                }
                else if (procentData <= 9 && procentData > 8) {
                    judete[e].style.fill = "#FF7B73";
                }
                else if (procentData <= 8 && procentData > 7) {
                    judete[e].style.fill = "#FF4A45";
                }
                else if (procentData <= 7) {
                    judete[e].style.fill = "#FF1917";
                }
            }
            break;
        }
    }
}

function incarcDatePeJudetMortalitate(e) {
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
                if (procentData < 10) {
                    judete[e].style.fill = "#1A8C17";
                }
                else if (procentData < 11 && procentData >= 10) {
                    judete[e].style.fill = "#4DA345";
                }
                else if (procentData < 12 && procentData >= 11) {
                    judete[e].style.fill = "#B3D2A1";
                }
                else if (procentData < 13 && procentData >= 12) {
                    judete[e].style.fill = "#E6E9CF";
                }
                else if (procentData < 14 && procentData >= 13) {
                    judete[e].style.fill = "#FFDCCF";
                }
                else if (procentData < 15 && procentData >= 14) {
                    judete[e].style.fill = "#FF7B73";
                }
                else if (procentData < 16 && procentData >= 15) {
                    judete[e].style.fill = "#FF4A45";
                }
                else if (procentData >= 16) {
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
        if(selectie ===0){
            incarcDatePeJudetPop(i);
        } else if(selectie === 1) {
            incarcDatePeJudetSomaj(i);
        } else if(selectie === 2) {
            incarcDatePeJudetNatalitate(i);
        } else if(selectie === 3) {
            incarcDatePeJudetMortalitate(i);
        }
    }
}

document.querySelector("#legendaPop").style.display = "block";
document.querySelector("#legendaSomaj").style.display = "none";
document.querySelector("#legendaNatalitate").style.display = "none";
document.querySelector("#legendaMortalitate").style.display = "none";

let butonSelectat = document.querySelectorAll("button");
// console.log(butonSelectat);
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
            descriere.innerHTML = "*Diferența % a populației față de anul anterior";
            document.querySelector("#legendaPop").style.display = "block";
            document.querySelector("#legendaSomaj").style.display = "none";
            document.querySelector("#legendaNatalitate").style.display = "none";
            document.querySelector("#legendaMortalitate").style.display = "none";
        } else if(butonSelectat[n].name === "somaj"){
            // console.log();
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 1;
            indexJson = 3;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudetSomaj(i);
            }
            descriere.innerHTML = "*Rata șomajului la 100 de locuitori";
            document.querySelector("#legendaPop").style.display = "none";
            document.querySelector("#legendaSomaj").style.display = "block";
            document.querySelector("#legendaNatalitate").style.display = "none";
            document.querySelector("#legendaMortalitate").style.display = "none";
        } else if(butonSelectat[n].name === "natalitate"){
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 2;
            indexJson = 4;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudetNatalitate(i);
            }
            descriere.innerHTML = "*Rata natalității la 1000 de locuitori";
            document.querySelector("#legendaPop").style.display = "none";
            document.querySelector("#legendaSomaj").style.display = "none";
            document.querySelector("#legendaNatalitate").style.display = "block";
            document.querySelector("#legendaMortalitate").style.display = "none";
        } else if(butonSelectat[n].name === "mortalitate"){
            butonSelectat[n].style.backgroundColor = "#34295A";
            selectie = 3;
            indexJson = 5;
            for (let i = 0; i < judete.length; i++) {
                incarcDatePeJudetMortalitate(i);
            }
            descriere.innerHTML = "*Rata mortalității la 1000 de locuitori";
            document.querySelector("#legendaPop").style.display = "none";
            document.querySelector("#legendaSomaj").style.display = "none";
            document.querySelector("#legendaNatalitate").style.display = "none";
            document.querySelector("#legendaMortalitate").style.display = "block";
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
                    let natalitateTabel = document.querySelector("#natalitate");
                    let mortalitateTabel = document.querySelector("#mortalitate");
                    let anTabel = document.querySelector("#anTabel");
                    // console.log(jsonData[0][z].an);
                    let jsonPopSeparator = jsonData[0][z].date[j].populatie.toLocaleString('en-US').replace(',', ' ');
                    let jsonSupSeparator = jsonData[0][z].date[j].suprafata.toLocaleString('en-US').replace(',', ' ');
                    // let jsonSomSeparator = jsonData[0][z].date[j].somaj.toLocaleString('en-US').replace(',', ' ');
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
                    if(jsonData[0][z].date[j].somaj === 0 || jsonData[0][z].date[j].populatie === 0){
                        somajTabel.innerHTML = "Nu avem date de referință.";
                    } else {
                        somajTabel.innerHTML = parseFloat(jsonData[0][z].date[j].somaj/jsonData[0][z].date[j].populatie*100).toFixed(2) + "%";
                    }
                    if(jsonData[0][z].date[j].natalitate === 0 || jsonData[0][z].date[j].populatie === 0){
                        natalitateTabel.innerHTML = "Nu avem date de referință.";
                    } else {
                        natalitateTabel.innerHTML = parseFloat(jsonData[0][z].date[j].natalitate/jsonData[0][z].date[j].populatie*1000).toFixed(2) + "%";
                    }
                    if(jsonData[0][z].date[j].mortalitate === 0 || jsonData[0][z].date[j].populatie === 0){
                        mortalitateTabel.innerHTML = "Nu avem date de referință.";
                    } else {
                        mortalitateTabel.innerHTML = parseFloat(jsonData[0][z].date[j].mortalitate/jsonData[0][z].date[j].populatie*1000).toFixed(2) + "%";
                    }
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
        judete[i].addEventListener('mouseleave',function(){
            console.log("aci");
            if(judete[judetSelectat] === judete[judetHoverat]){
                console.log("aici");
                judete[i].style.fill = 'rgb('+52+','+41+','+90+')'
            } else {
                judete[judetHoverat].style.fill = culoareHoverata;
            }
             
        });
    }
}

clickJudet();


