win = Ti.UI.createWindow({
	title: "Project Week 2",
	modal: true,
	backgroundColor: "#595BC2"
});


var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win
});

var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
	
});

var mediaFile = require('char');

win.add(table);
navWin.open();
