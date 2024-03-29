var viewHeight = 100;
var labelColor = "#fff";
var textFont = {fontSize: 20, fontFamily: "Times New Roman"};

var mainWin = Ti.UI.createWindow({
	title: "Justice League Roster",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	modal: true,
	backgroundColor: "#3C7502"
	
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var galleryView = Ti.UI.createView({
	backgroundColor: "#3605E8",
	height: viewHeight,
	top: 10
	
});

var dataView = Ti.UI.createView({
	backgroundColor:"#E80505",
	height: viewHeight,
	top: (galleryView.top + galleryView.height) + 10
	
});

var customView = Ti.UI.createView({
	backgroundColor: "#6C00C4",
	height: viewHeight,
	top: (dataView.top + dataView.height) + 10
	
});

var galleryLabel = Ti.UI.createLabel({
	text: "Gallery",
	color: labelColor,
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: "center"
	
});

var dataLabel = Ti.UI.createLabel({
	text: "Members List",
	color: labelColor,
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: "center"
	
});

var customLabel = Ti.UI.createLabel({
	text: "Get Superpowers Here!",
	color: labelColor,
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: "center"
	
});

var courseLabel = Ti.UI.createLabel({
	text: "VFW 1311 Rich Pingree",
	color: labelColor,
	font: {fontSize: 12, fontFamily: "Times New Roman"},
	textAlign: "center",
	bottom: 15
	
});

var mediaFile = require('data');
var mediaFile1 = require('gallery');
var mediaFile2 = require('custom');

customView.add(customLabel);
dataView.add(dataLabel);
galleryView.add(galleryLabel);
mainWin.add(galleryView, dataView, customView, courseLabel);
navWin.open();