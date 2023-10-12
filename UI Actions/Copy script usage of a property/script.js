function copyScriptUsageToClipboard(){
	var name = g_form.getValue('name');
	var base = 'gs.getProperty("'+name+'")';
	copyToClipboard(base);
}
