function enableFields(form) {
    var formMode = form.getFormMode();
    var activityId = getValue("WKNumState");

    
    if(formMode == 'ADD' || activityId == '8') {
    	form.setEnabled("cep", true); 
        form.setEnabled("responsavel", true); 
        form.setEnabled("pontoColeta", true); 
        form.setEnabled("mercadoria", true); 
        form.setEnabled("prazoEntrega", true); 
        form.setEnabled("descricaoMercadoria", true); 
    }else{
    	  form.setEnhancedSecurityHiddenInputs(true);
          form.setEnabled("cep", false); 
          form.setEnabled("responsavel", false); 
          form.setEnabled("pontoColeta", false); 
          form.setEnabled("mercadoria", false); 
          form.setEnabled("prazoEntrega", false); 
          form.setEnabled("descricaoMercadoria", false); 
    }
}
