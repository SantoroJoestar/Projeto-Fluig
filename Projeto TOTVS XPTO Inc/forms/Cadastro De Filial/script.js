var loginEscondido = $("#valorLogin")

function setSelectedZoomItem(item) {
    if (item.inputId == "responsavelAlmoxarifado") {
        loginEscondido.val(item.login);
        console.log("VALOR DO CAMPO ESCONDIDO: " + loginEscondido.val());
    }
}