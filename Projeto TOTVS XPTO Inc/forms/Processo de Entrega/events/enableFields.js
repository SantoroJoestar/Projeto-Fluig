function enableFields(form) {
    var formMode = form.getFormMode();
    var activityId = getValue("WKNumState");

    form.setVisibleById("confirmaEntrega", false);
    
    if(activityId == 2) {
    	form.setVisibleById("confirmaEntrega", true);
    }
    
    if(formMode == 'ADD' || activityId == '4') {
    	form.setEnabled("cep", true); 
        form.setEnabled("filialDestino", true); 
        form.setEnabled("prazoEntrega", true); 
        form.setEnabled("descricaoMercadoria", true); 
        form.setEnabled("numero", true); 
    }else{
    	  form.setEnhancedSecurityHiddenInputs(true);
          form.setEnabled("cep", false); 
          form.setEnabled("filialDestino", false); 
          form.setEnabled("prazoEntrega", false); 
          form.setEnabled("numero", false); 
          form.setEnabled("descricaoMercadoria", false); 
    }
    
    
    
}
