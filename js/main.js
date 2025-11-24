const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const numero3 = document.getElementById("numero3");
const btnenviar = document.getElementById("btnEnviar");

btnenviar.addEventListener("click", function(event){
    event.preventDefault();
    console.log(numero1.value,numero2.value,numero3.value);
})
