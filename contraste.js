function changeTheme() {

    console.log("Setar");
    console.log(localStorage.getItem("darkmode"));

    var element = document.body;
    element.classList.toggle("dark-mode");

    const c = ['form-select','card-body','form-control','btn btn-outline-success btn-light','btn-roxo','cinza','branco','txt-roxo','col-md-8','col-md-4','progress','navbar-toggler'];


    for(var i=0;i<c.length;i++){

        var len = document.getElementsByClassName(c[i]).length;
        var element = document.getElementsByClassName(c[i]);

        if(len>0){
            for (var j=0; j<len; j++) {            
                element[j].classList.toggle("dark-mode");
            }
        }
    }





   
}
function handleClickChangeTheme(){

    changeTheme();  

    console.log("Mudar");
    console.log(localStorage.getItem("darkmode"));

    if(localStorage.getItem("darkmode")==="1"){
        localStorage.setItem("darkmode", 0);
    }
    else{
        localStorage.setItem("darkmode", 1);
    }
   
}

function inicialize(){
    inicializeFontSize();
    inicializeMode();

}

function inicializeFontSize(){


    if (typeof(Storage) !== "undefined") {
        if(!localStorage.tamanho)
            localStorage.setItem("tamanho", 16);
        else{
            tamanho = localStorage.getItem("tamanho");
            document.body.style.fontSize=tamanho+"px";
        }

      } 
}

function inicializeMode(){


    if (typeof(Storage) !== "undefined") {
        if(!localStorage.darkmode){
            localStorage.setItem("darkmode", 0);
            console.log('aqui');

        }
            
        else{
            darkmode = localStorage.getItem("darkmode");
            
            if(darkmode==="1"){
                changeTheme();
            }


        }
           
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
