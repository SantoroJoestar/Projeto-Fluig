function enableFields(form){ 
	    var formMode = form.getFormMode();
	    var activityId = getValue("WKNumState");
	    
	    if(formMode == 'ADD' || activityId == '8') {
	        form.setEnabled("codigo", true); 
	        form.setEnabled("nome", true); 
	        form.setEnabled("endereco", true); 
	        form.setEnabled("responsavel", true);  
	    }else{
	    	form.setEnhancedSecurityHiddenInputs(true);
	        form.setEnabled("codigo", false); 
	        form.setEnabled("nome", false); 
	        form.setEnabled("endereco", false); 
	        form.setEnabled("responsavel", false); 
	    }
	    
	    
	    if (formMode != 'ADD' && formMode != 'EDIT') {
	        
	    }
}