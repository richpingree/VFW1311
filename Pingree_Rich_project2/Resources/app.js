win = Ti.UI.createWindow({
	title: "Comicbook Heroes and Villians",
	modal: true,
	backgroundColor: "#595BC2"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win
});


navWin.open();
