function validateForm(form){	
	
    var activityId = getValue("WKNumState");
	var cep = form.getValue("cep");
	var rua = form.getValue("logradouro");
	var cidade = form.getValue("cidade");
	var estado = form.getValue("estado");
	var numero = form.getValue("numero")
	var filialDestino = form.getValue("filialDestino");
	var descricaoMercadoria = form.getValue("descricaoMercadoria");
	
	
	if(cep == "") {
		throw " Campo CEP não foi preenchido ";
	}
	
	if(rua == "") {
		throw " Campo Rua não foi preenchido ";
	}
	
	if(numero == "") {
		throw " Campo Número não foi preenchido ";
	}
	
	if(cidade == "") {
		throw " Campo Cidade não foi preenchido ";
	}
	
	if(estado == "") {
		throw " Campo Estado não foi preenchido ";
	}
	
	if(filialDestino == "" || filialDestino == null) {
		throw " Campo Filial de Destino não foi preenchido ";
	}
	
	if(activityId == 2) {
		if(form.getValue('entregou') == '' || form.getValue('entregou') == null){
			throw " Campo de Confirmação de Entrega, não pode ficar desmarcado ";
		}
	}
	
	
	
	if(descricaoMercadoria == "") {
		throw " Campo Descrição da Mercadoria não foi preenchido ";
	}
	
	
	
	var dataAtual = new Date();

	var formatoData = new java.text.SimpleDateFormat("dd/MM/yyyy");
	var dataInicio = formatoData.parse(form.getValue("prazoEntrega"));

	if(dataInicio == "") {
		throw " Campo Data de Entrega não foi preenchido ";
	}
	
	if (dataInicio.before(dataAtual)) {
	    throw " Data de entrega não pode ser menor que a data atual ";
	}	
}