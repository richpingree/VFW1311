//tab group
var tabGroup = Ti.UI.createTabGroup();


//window
var mainWindow = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#333",
	tabBarHidden: true // to hide the nav buttons for the tabs
});

var tab1 = Ti.UI.createTab({
	
	window:mainWindow
});
//labels

var previousLabel = Ti.UI.createLabel({
	color: "#E3E6E3",
	text: "Previous",
	font: {fontSize: 20, fontFamily: "Ariel"},
	textAlign: "center"
	
});
var nextLabel = Ti.UI.createLabel({
	color: "#E3E6E3",
	text: "Next",
	font: {fontSize: 20, fontFamily: "Ariel"},
	textAlign: "center"	
});

//views
var mainView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 15,
	height: 150,
	width: 200,
	top: 50,
	alignment: "center"
	
});
var leftButton = Ti.UI.createView({
	backgroundColor: "#089C19",
	borderRadius: 30,
	height: 50,
	width: '50%',
	top: (mainView.top + mainView.height)+15,
	left: 0
});

var rightButton = Ti.UI.createView({
	backgroundColor: "#089C19",
	borderRadius: 30,
	height: 50,
	width: '50%',
	top: (mainView.top + mainView.height)+15,
	right: 0
	
});

var mediaFile = require('media');

//outputs
tabGroup.addTab(tab1);
leftButton.add(previousLabel);
rightButton.add(nextLabel);
mainWindow.add(leftButton, rightButton);
tabGroup.open();
mainWindow.open();