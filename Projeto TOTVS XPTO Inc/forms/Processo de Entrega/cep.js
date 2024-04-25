$("#cep").blur(function(){
	$.getJSON("//viacep.com.br/ws/" + $("#cep").val() + "/json/", function(dados) {
		$("#logradouro").val(dados.logradouro);
		$("#cidade").val(dados.localidade);
		$("#estado").val(dados.uf);
	})
});