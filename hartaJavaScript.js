console.log(document.querySelectorAll(".judete"));

let judete = document.querySelectorAll(".judete");
for(let i=0; i<judete.length; i++) {
    judete[i].addEventListener('click',function(){
        console.log("aici");
        alert("Daniel este suparat!");
    });
}