function sumar(num1,num2){
    return num1+num2;
}
function sumarNumeros(){
    var numero1=convertir('idNum1');
    var numero2=convertir('idNum2');
    document.getElementById('labelResultado').innerHTML="Resultado: "+sumar(numero1,numero2);
}
function restar(num1,num2){
    return num1-num2;
}
function restarNumeros(){
    var numero1=convertir('idNum1');
    var numero2=convertir('idNum2');
    document.getElementById('labelResultado').innerHTML="Resultado: "+restar(numero1,numero2);
}
function mult(num1,num2){
    return num1*num2;
}
function multiplicarNumeros(){
    var numero1=convertir('idNum1');
    var numero2=convertir('idNum2');
    document.getElementById('labelResultado').innerHTML="Resultado: "+mult(numero1,numero2);
}
function div(num1,num2){
    return num1/num2;
}
function dividirNumeros(){
    var numero1=convertir('idNum1');
    var numero2=convertir('idNum2');
    document.getElementById('labelResultado').innerHTML="Resultado: "+div(numero1,numero2);
}
function convertir(idCampo){
    return parseInt(document.getElementById(idCampo).value);
}
function eliminarElemento(){
    document.getElementById('idElemento').remove;
}
function insertarElemento(){
    document.getElementById('elemento').innerHTML="<strong>Importante</strong>";
}