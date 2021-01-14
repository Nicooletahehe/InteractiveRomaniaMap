// console.log(document.querySelectorAll(".judete"));
let judete = document.querySelectorAll("path");
let tabel = document.querySelector("#tabelJudet");
var slider = document.getElementById("rangeAni");
var output = document.getElementById("spanAn");

// console.log(document.querySelectorAll("path"));
//buton schimbare culoare judete random
function schimbCuloare() {
    for (let i = 0; i < judete.length; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        judete[i].style.fill = 'rgb(' + r + ',' + g + "," + b + ')';
    };
}

let buton = document.querySelector("#butonSchimbCuloare");
buton.addEventListener('click', function () { schimbCuloare() });

let request;
let dataJudet = [];
let dataPopulatie;
let myFiles = ["dateJudete.json", "datePopulatie.json", "dateProcentuale.json"];
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

//console.log(jsonData);

//incarcare tabel si colorare judet
for (let i = 0; i < judete.length; i++) {
    judete[i].addEventListener('click', function () {
        //console.log(jsonData[0]);
        let numeJudetSVG = judete[i].attributes[2].value;
        //for (let x = 0; x < judete.length; x++) { judete[x].style.fill = ''; }
        for (let j = 0; j < jsonData.length; j++) {
            //console.log(jsonData[0][i]);
            if (jsonData[0][j].nume === numeJudetSVG) {
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

                judete[i].style.fill = 'rgb(' + 52 + ',' + 41 + ',' + 90 + ')';
                tabel.style.display = "block";
            }
        }
    });
}

// //functie custom de sortare dupa numele judetului
// function compare(a, b) {
//     if (a.attributes[2].value < b.attributes[2].value)
//         return -1;
//     if (a.attributes[2].value > b.attributes[2].value)
//         return 1;
//     return 0;
// }

// //array de pathuri inainte era nodelist
// var judeteArray = Array.prototype.slice.call(judete, 0);

// //judeteHTML alfabetic
// judeteArray.sort(compare);

// judeteArray.forEach(element => {
//     console.log(element.attributes[2].value)
// });


// //functie pentru returnat json dupa index
// Object.prototype.getByIndex = function (index) {
//     return this[Object.keys(this)[index]];
// };








//  for (let i = 0; i < Object.keys(jsonData[1]).length; i++) {
//     let judetTempProcentual = [];
//     for (let j = 0; j < Object.keys(jsonData[1].getByIndex(i)).length; j++) {
//         judetTempProcentual.push(jsonData[1].getByIndex(i).getByIndex(j));

//     }
//     procentualRise.push(judetTempProcentual);

// }

//console.log(procentualRise);





//slider
output.innerHTML = slider.value;
slider.oninput = function () {
    //depastrat
    var procentualArray = []
    output.innerHTML = this.value;

   // console.log(this.value)


    for (let i = 0; i < judete.length; i++) {

        //console.log(jsonData[0]);
        let numeJudetSVG = judete[i].attributes[2].value;
        //for (let x = 0; x < judete.length; x++) { judete[x].style.fill = ''; }
        for (let j = 0; j < jsonData[2].length; j++) {
            //console.log(jsonData[0][i]);
            // console.log(numeJudetSVG)
            // console.log(jsonData[2][j][0])
            if (jsonData[2][j][0] === numeJudetSVG) {
                
                if (this.value <= 1992) {
                    judete[i].style.fill = 'rgb(' + 124 + ',' + 124 + ',' + 124 + ')';
                }
                else {
                    let procentData = jsonData[2][j][this.value - 1992]
                    //console.log(procentData)
                    if (procentData < -1) {
                        judete[i].style.fill = "#0C1C41";
                    }
                    else if (procentData < -0.3) {
                        judete[i].style.fill = "#20325E";
                    }
                    else if (procentData < - 0.2) {
                        judete[i].style.fill = "#364975";
                    }
                    else if (procentData < -0.1) {
                        judete[i].style.fill = "#566890";
                    }
                    else if (procentData >= -0.1 && procentData <= 0.1) {
                        judete[i].style.fill = "#AFAF45";
                    }
                    else if (procentData > 1) {
                        judete[i].style.fill = "#610808";
                    }
                    else if (procentData > 0.3) {
                        judete[i].style.fill = "#8C2424";
                    }
                    else if (procentData > 0.2) {
                        judete[i].style.fill = "#AF4545";
                    }
                    else if (procentData > 0.1) {
                        judete[i].style.fill = "#D77777";
                    }
                }
                break;
            }
        }

    }
}
