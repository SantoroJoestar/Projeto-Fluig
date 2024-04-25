function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

	
	
		
		var ds = DatasetBuilder.newDataset();
		
		ds.addColumn("pontoColeta");
		ds.addColumn("unidadeDestino");
		
		ds.addRow(new Array("Doca", "Unidade A"));
		ds.addRow(new Array("Entrada Principal", "Unidade B"));
		ds.addRow(new Array("Entrada Norte", "Unidade C"));
		ds.addRow(new Array("Entrada Sul", "Unidade D"));
		ds.addRow(new Array("Entrada Leste", "Unidade E"));
		ds.addRow(new Array("Entrada Oeste", "Unidade Alpha"));
		ds.addRow(new Array("Entrada dos Fundos", "Unidade Betha"));
		ds.addRow(new Array("Heliporto"));
		
		return ds;
	

	
	
}function onMobileSync(user) {

}