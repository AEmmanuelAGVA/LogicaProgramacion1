const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const numero3 = document.getElementById("numero3");
const btnenviar = document.getElementById("btnEnviar");

btnenviar.addEventListener("click", function(event){
    event.preventDefault();
    num1 = numero1.value;
    num2 = numero2.value;
    num3 = numero3.value;

    if(num1 == num2 && num1 == num3){
        console.log("Todos los numeros son iguales");
    
    }else if(num1 >= num2 && num1 >= num3){
        mayor = num1;
        if(num2 >= num3){
            medio = num2;
            menor = num3;
        }else{
            medio = num3;
            menor = num2;
        }
        console.log("Mayor: "+mayor+" Medio: "+medio+" Menor: "+ menor);
        console.log("Menor: "+menor+ " Medio: "+medio+" Mayor: "+mayor);
    }else if (num2 >= num1 && num2 >= num3){
        mayor = num2;
        if(num1 >= num3){
            medio = num1;
            menor = num3;
        }else{
            medio = num3;
            menor = num1;
        }
        console.log("Mayor: "+mayor+" Medio: "+medio+" Menor: "+ menor);
        console.log("Menor: "+menor+ " Medio: "+medio+" Mayor: "+mayor);
    }else if (num3 >= num1 && num3 >= num2){
        mayor = num3;
        if(num1 >= num2){
            medio = num1;
            menor = num2;
        }else{
            medio = num2;
            menor = num1;
        }
        console.log("Mayor: "+mayor+" Medio: "+medio+" Menor: "+ menor);
        console.log("Menor: "+menor+ " Medio: "+medio+" Mayor: "+mayor);
    }    
})
