$(document).ready(function(){
    $(".mode_button").click(function(){
        $(".mode_buttonInterno").toggleClass("ativo");
        $("#login_form").toggleClass("dark");
    })

    $("#telefone").mask("(00 00000-0000)",{
        placeholder: "Favor inserir o DDD",
    })
    $("#cpf").mask("000.000.000-00",{
        placeholder: "Insira seu CPF"
    })
    $("#cep").mask("00000-000",{
        placeholder: "Insira seu CEP"
    })

    $("form").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: true
            },
            cep: {
                required: true
            },           
        },
        messages:{
            name: "Por favor, insira o seu nome corretamente",
            email: "Por favor, insira o seu e-mail corretamente",
            telefone:"Por favor, insira o seu celular corretamente",
            cpf: "Por favor, insira o seu CPF corretamente",
            address: "Por favor, insira o seu endereço corretamente",
            cep: "Por favor, insira o seu CEP corretamente",
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos, favor corrigi-los.`)
            }
        }
    })
})