var myImages = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "charimages");
var imageList = myImages.getDirectoryListing();

var galWin = Ti.UI.createWindow({
		title: "Member's Gallery",
		modal: true,
		backgroundColor: "#595BC2"
});
	
var newPicView = Ti.UI.createView({
	backgroundColor:"#E80505",
	height: viewHeight,
	bottom: 20
});

var newPicLabel = Ti.UI.createLabel({
	text: "New Picture",
	color: "#fff",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: "center"
	});
	
var photo = Ti.UI.createImageView({
	image: "charimages/"+ imageList[0],
	top: 10,
	bottom: (newPicView.bottom + newPicView.height) + 10
		
});	

galleryView.addEventListener("click", function(e){
	
	newPicView.add(newPicLabel);
	galWin.add(newPicView, photo);
	navWin.openWindow(galWin, {animate: true});
});
