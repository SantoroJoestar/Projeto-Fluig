function validateForm(form){	
	
	var msg = "";
	
	var cep = form.getValue("cep");
	var rua = form.getValue("logradouro");
	var cidade = form.getValue("cidade");
	var estado = form.getValue("estado");
	var filialDestino = form.getValue("responsavel");
	var pontoColeta = form.getValue("pontoColeta");
	var mercadoria = form.getValue("mercadoria");
	var descricaoMercadoria = form.getValue("descricaoMercadoria");
	
	
	if(cep == "") {
		msg += " Campo CEP não foi preenchido ";
	}
	
	if(rua == "") {
		msg += " Campo Rua não foi preenchido ";
	}
	
	if(cidade == "") {
		msg += " Campo Cidade não foi preenchido ";
	}
	
	if(estado == "") {
		msg += " Campo Estado não foi preenchido ";
	}
	
	if(filialDestino == "") {
		msg += " Campo Filial de Destino não foi preenchido ";
	}
	
	if(pontoColeta == "") {
		msg += " Campo Ponto de Coleta não foi preenchido ";
	}
	
	if(mercadoria == "") {
		msg += " Campo Mercadoria não foi preenchido ";
	}
	
	if(descricaoMercadoria == "") {
		msg += " Campo Descrição da Mercadoria não foi preenchido ";
	}
	
	
	
	var dataAtual = new Date();

	var formatoData = new java.text.SimpleDateFormat("dd/MM/yyyy");
	var dataInicio = formatoData.parse(form.getValue("prazoEntrega"));

	if(dataInicio == "") {
		msg += " Campo Data de Entrega não foi preenchido ";
	}
	
	if (dataInicio.before(dataAtual)) {
	    msg += " Data de entrega não pode ser menor que a data atual ";
	}

	if(msg != "") {
		throw msg;
	}
	
}