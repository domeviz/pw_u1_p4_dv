function agregarNumero(numero){
    document.getElementById("consola").value +=numero;
}

function agregarOperacion(operacion){
    document.getElementById("consola").value +=operacion;
}

function calcularResultado(){
    let resultado=document.getElementById("consola").value;
    let total=eval(resultado);
    document.getElementById("resultado").innerHTML="Resultado: "+total;
}

function limpiar(){
    document.getElementById("consola").value="";
    document.getElementById("resultado").innerHTML="Resultado: ";
}