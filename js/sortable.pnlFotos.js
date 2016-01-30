$('#panelPhoto').sortable({
	revert : true,
	cancel : '#uploadImg',
	placeholder : "sortable-placeholder",
	scrollSensitivity: 100,
	scrollSpeed: 25,
	helper: "clone",
	items : ".panelPhotos",
	containment: "#MpanelPhoto"
})[0].onselectstart = function() { return false; };

$('#galeTags').sortable({
	revert : true,
	scrollSensitivity: 100,
	scrollSpeed: 25,
	containment: "#MpanelPhoto",
	items : ':nth-child(n+4)',
	cancel : '#MisFotosTag, #CertiTag'	
})[0].onselectstart = function() { return false; };