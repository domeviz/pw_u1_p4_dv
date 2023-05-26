const sumar=(num1,num2)=>{
    return num1+num2;
}

const sumarNumeros=()=>{
    var numero1=convertir('idNum1');
    var numero2=convertir('idNum2');
    document.getElementById('labelResultado').innerHTML="Resultado: "+sumar(numero1,numero2);
}

const restar=(num1,num2)=>num1-num2;

const restarNumeros=()=>{
    var numero1=convertir('idNum1');
    var numero2=convertir('idNum2');
    document.getElementById('labelResultado').innerHTML="Resultado: "+restar(numero1,numero2);
}

const convertir=(idCampo)=>{
    console.log('Convertir '+idCampo)
    return parseInt(document.getElementById(idCampo).value);
}

const conceptosJS=()=>{
    //var (ya no es comunmente utilizada)
    //let
    //cons

    var variable1='Domenica';
    var variable2=1;
    let variable3='Domenica';
    let variable4=8;
    const variable5='Domenica';
    const variable6=16;

    console.log(variable3);

    //Declaracion de arreglos
    const diasSemana=['Lunes','Martes','Miercoles']
    console.log(diasSemana);
    console.log(diasSemana[0]);
    diasSemana.push('Jueves');
    diasSemana.push('Viernes');
    console.log(diasSemana);

    const diasFinSemana=['Sabado','Domingo']
    const diasCompleto=diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);

    for(const dia of diasCompleto){
        console.log(dia);
    }

    //Declaracion de objetos
    const persona={
        nombre:"Domenica",
        apellido:"Vizcarra",
        edad:33,
        ciudad:"Quito"
    }

    console.log(persona);

    const persona2={
        nombre:"Daniel",
        apellido:"Cayambe",
        edad:20,
        ciudad:"Quito",
        vehiculo:{
            marca:"Toyota",
            modelo:"Prius",
            anio:1989
        }
    }

    console.log(persona2);

    //Da error porque no es posible modificar un const
    const nombrePrueba='Prueba 1';
    console.log(nombrePrueba);
    //nombrePrueba='Prueba 2';
    //console.log(nombrePrueba)

    diasFinSemana[1]='Lumingo';
    console.log(diasFinSemana)
    //Da error porque al ser un const no puedo modificar
    //diasFinSemana=['Lumingo']
    //console.log(diasFinSemana)
    
    const dias2=['Lunes','Martes','Miercoles','Jueves','Viernes']
    const[dia1,dia2,dia3,dia4]=dias2;
    console.log(dia2);
    console.log(dia4);

    const[d1,d2,d3,d4,d5]=['Lunes','Martes','Miercoles','Jueves','Viernes']
    console.log(d1);
    console.log(d5);

    const persona3={
        nombre:"Domenica",
        apellido:"Vizcarra",
        edad:33,
        ciudad:"Quito"
    }

    const {nombre,ciudad}=persona3;
    console.log(nombre);
    console.log(ciudad);

    const persona4={
        nombre:"Daniel",
        apellido:"Cayambe",
        edad:20,
        ciudad:"Quito",
        vehiculo:{
            marca:"Toyota",
            modelo:"Prius",
            anio:1989
        }
    }

    const {apellido,edad,vehiculo}=persona4;
    console.log(vehiculo);
    console.log(vehiculo.marca);
}