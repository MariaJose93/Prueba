

let titulo = document.getElementById("encabezado");
let parra= document.getElementsByTagName("p") 
let otro = document.getElementsByName("parrafito")

function calcular(){
    nombre = document.getElementById("nombre").value;
    renta = Number(prompt("Ingrese su renta: "))
    let radios = document.getElementsByName("contrato"); 
    let valorRadio=""; 
     for (let a=0 ; a < radios.length ; a++ ){ 
        if (radios[a].checked){ 
            valorRadio = radios[a].value; }
    } 
    console.log(valorRadio); 
    console.log("Nombre: "+ nombre +"\nSituación Laboral: " + valorRadio ); 
    resultados();
}
function resultado(){
    if (valorRadio = '#rhonorarios'){
        let resultado = document.querySelector('.valor-total')
        total = renta * 0.9
        resultado.innerHTML = total.toLocaleString()
    }
    else {
        let resultado = document.querySelector('.valor-total');
        total = cuenta * 0.2
        resultado.innerHTML = total.toLocaleString()
    }
        
}
function limpiar(){ 
    document.getElementById("nombre").value =""; 
    document.getElementById("renta").value ="";
    let radios = document.getElementsByName("contrato"); 
    for (let a=0;a<radios.length;a++){ 
        if (radios[a].checked){ 
            radios[a].value =false;
        }
   }
   resultados(); 
}
    