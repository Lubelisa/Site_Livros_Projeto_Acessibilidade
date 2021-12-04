function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");


}

function inicialize(){

    if (typeof(Storage) !== "undefined") {
        if(!localStorage.tamanho)
            localStorage.setItem("tamanho", 16);
        else
            tamanho = localStorage.getItem("tamanho");
            document.body.style.fontSize=tamanho+"px";


      } 
}




function diminuir(){

    tamanho = localStorage.getItem("tamanho");
    tamanho--;
    document.body.style.fontSize=tamanho+"px";
    localStorage.setItem("tamanho", tamanho);

}
function aumentar(){
    tamanho = localStorage.getItem("tamanho");
    tamanho++;
    document.body.style.fontSize=tamanho+"px";
    localStorage.setItem("tamanho", tamanho);

}
    