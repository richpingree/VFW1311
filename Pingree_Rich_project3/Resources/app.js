


var mainWin = Ti.UI.createWindow({
	title: "Project 3",
	backgroundColor: "#0202Cf",
	modal: true
});

var tab1 = Ti.UI.createTab({
	
	window:mainWin
});

var viewPhotoButton = Ti.UI.createView({
	backgroundColor: "#089C19",
	height: 50,
	width: 150,
	borderRadius: 10,
	alignment: "center"
});

var photoButtonLabel = Ti.UI.createLabel({
	text: "View Photos",
	color: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Times New Roman"}
	
});




viewPhotoButton.add(photoButtonLabel);
mainWin.add(viewPhotoButton);

var mediafile = require("photos");

mainWin.open();