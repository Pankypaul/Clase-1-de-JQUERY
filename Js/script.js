$("document").ready(function(){

    /*Con "val" se accede a la input" */
    /*label accedo con un    ".text"*/

    //Creamos las variables.
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;


    //Verificamos la la funcion que no este vacia:
    
    $("#BtnSumar").click (function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        //Ver que numero1 no este vacia
        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer numero"),
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        //Ver que numero2 no este vacia
        if(numero2 === ""){
            $("#error2").text("Debe agregar el segundo numero"),
            $("#error2").css("color","red");
            return;
        }

        //Calculamos las suma entre el numero1 y el numero2
        resultado = parseInt(numero1) + parseInt(numero2);

        //El resultado
        $("#resultado").text(resultado);
        limpiar();        

    })

    function limpiar (){
        $("#numero1").text("");
        $("#numero2").text("");
    }
});

console.log("Hola mundo");