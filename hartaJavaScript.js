// console.log(document.querySelectorAll(".judete"));

// let judete = document.querySelectorAll(".judete");
// for(let i=0; i<judete.length; i++) {
//     judete[i].addEventListener('click',function(){
//         alert("ceva");
//         let x = document.querySelectorAll("#tabelJudet");
//         if (x.style.display === "none") {
//             x.style.display = "block";
//           } else {
//             x.style.display = "none";
//           }
//     });
// }

var slider = document.getElementById("rangeAni");
var output = document.getElementById("spanAn");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

console.log(document.querySelectorAll("path"));
function schimbCuloare() {
    let judete = document.querySelectorAll("path");
    for(let i=0; i<judete.length;i++){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        judete[i].style.fill = 'rgb('+r+','+g+","+b+')';
        // console.log(judete[i].style.fill);
    };
}

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

let buton = document.querySelector("#butonSchimbCuloare");
buton.addEventListener('click', function(){schimbCuloare()});
