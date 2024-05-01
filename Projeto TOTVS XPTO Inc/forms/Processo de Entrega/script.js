$(document).ready(function() {
    // Monitora a mudança nos campos de radio
    $("input[name='entregou']").change(function() {
        // Verifica se o radio "Sim" está selecionado
        if ($("#sim").is(":checked")) {
            // Atribui o valor "sim" ao campo escondido
            $("#entregouValor").val("sim");
        } else if ($("#nao").is(":checked")) { // Verifica se o radio "Não" está selecionado
            // Atribui o valor "nao" ao campo escondido
            $("#entregouValor").val("nao");
        }
    });
});



var loginEscondido = $("#valorLogin");

var calendarioNascimento = FLUIGC.calendar("#prazoEntrega");

function setSelectedZoomItem(item) {
    if (item.inputId == "filialDestino") {
        loginEscondido.val(item.valorLogin);
        console.log("VALOR DO CAMPO ESCONDIDO: " + loginEscondido.val());
    }
}





