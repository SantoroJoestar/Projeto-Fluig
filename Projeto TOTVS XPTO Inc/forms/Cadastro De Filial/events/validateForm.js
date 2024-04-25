function validateForm(form){	
		
	var msg = "";
		
	var nome = form.getValue("nome");
	var endereco = form.getValue("endereco");
	var responsavelAlmoxarifado = form.getValue("responsavel");
	
	if(nome == "") {
		msg += " Campo Nome não foi preenchido ";
	}
	
	if(endereco == "") {
		msg += " Campo Endereço não foi preenchido ";
	}
	
	if(responsavelAlmoxarifado == "") {
		msg += " Campo Responsável do Almoxarifado não foi preenchido ";
	}
	
	var codigo = form.getValue("codigo");

	if (codigo == "") {
		msg += " O campo Código não pode estar vazio ";
	} else {
		var dataset = DatasetFactory.getDataset("dsCadastroDeFilialXPTO", null, null, null);
		for (var i = 0; i < dataset.rowsCount; i++) {
			if (codigo == dataset.getValue(i, "codigo")) {
				msg += " O código digitado já existe, por favor insira um código diferente. ";
		        break;
		        }
		    }
		}

		if(msg != "") {
			throw msg;
		}
		


	
}