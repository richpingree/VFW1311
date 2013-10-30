//tab group
var tabGroup = Ti.UI.createTabGroup();

//varables
var myList = ["Vinyl Records", "8 Track", "Cassettes", "Compact Disc", "Downloaded MP3"];

//window
var window1 = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#fff",
	
});

var tab1 = Ti.UI.createTab({
	window:window1
	
});
//labels
var label1 = Ti.UI.createLabel({
	color: "#999",
	text: "Hello World!",
	font: {fontSize: 20, fontFamily: "Helvetica"},
	textAlign: "center",
	width: "auto"
	
});

//views
var view1 = Ti.UI.createView({
	backgroundColor: "D1D629",
	height: 100,
	width: '50%',
	bottom: 0,
	left: 0
});

var view2 = Ti.UI.createView({
	backgroundColor: "D1D629",
	height: 100,
	width: '50%',
	bottom: 0,
	right: 0
	
});
tabGroup.addTab(tab1);

//outputs
window1.open();
tabGroup.open();
