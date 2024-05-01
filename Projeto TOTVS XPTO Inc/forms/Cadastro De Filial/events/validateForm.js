function validateForm(form){	
		
	var nome = form.getValue("nome");
	var endereco = form.getValue("endereco");
	var responsavelAlmoxarifado = form.getValue("responsavelAlmoxarifado");
	
	if(nome == "") {
		throw " Campo Nome não foi preenchido ";
	}
	
	if(endereco == "") {
		throw " Campo Endereço não foi preenchido ";
	}
	
	if(responsavelAlmoxarifado == "" || responsavelAlmoxarifado == null) {
		throw " Campo Responsável do Almoxarifado não foi preenchido ";
	}
	
	var codigo = form.getValue("codigo");

	if (codigo == "") {
		throw " O campo Código não pode estar vazio ";
	} else {
		var dataset = DatasetFactory.getDataset("dsCadastroDeFilialXPTO", null, null, null);
		for (var i = 0; i < dataset.rowsCount; i++) {
			if (codigo == dataset.getValue(i, "codigo")) {
				throw " O código digitado já existe, por favor insira um código diferente. ";
		        break;
		        }
		    }
		}	
}