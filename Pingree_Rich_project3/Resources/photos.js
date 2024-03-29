var platformWidth = Ti.Platform.displayCaps.platformWidth;
var platformHeight = Ti.Platform.displayCaps.platformHeight;


var photoList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "myImages");
var imageList = photoList.getDirectoryListing();

var galWin = Ti.UI.createWindow({
	title: "Gallery",
	backgroundColor: "#030303",
	modal: true,
	tabBarHidden: true
});

var tab2 = Ti.UI.createTab({
	
	window:galWin
});
	
var closeButtonView = Ti.UI.createView({
	backgroundColor: "#B00707",
	height: 50,
	bottom: 0
	
});

var closeButtonLabel = Ti.UI.createLabel({
	text: "Close Window",
	color: "#E3E6E3",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Times New Roman"}
	
});

viewPhotoButton.addEventListener("click", function(){
	closeButtonView.add(closeButtonLabel);
	galWin.add(closeButtonView);
	galWin.open();
});

closeButtonView.addEventListener("click", function(){
	galWin.close();
	
});	

var thumbsContainer = Ti.UI.createScrollView({
	contentWidth: platformWidth,
	contentHeight: platformHeight,
	layout: "horizontal"
	
});


for(var i=0; i<imageList.length; i++){
	var galView = Ti.UI.createView({
		top: 5,
		left: 5,
		width: 75,
		height: 75,
		borderRadius: 5,
		
	});
	var photo = Ti.UI.createImageView({
		image: imageList[i]
			
	});
	galView.add(photo);
	thumbsContainer.add(galView);
		
}
galWin.add(thumbsContainer);


galWin.addEventListener("click", function(event){
	var imageWin = Ti.UI.createWindow({
		title: event.source.image,
		backgroundColor: "#fff"
	});
	var photoView = Ti.UI.createImageView({
		image: "myImages/" + event.source.image,
		borderRadius: 5
	});
	imageWin.add(photoView);
	imageWin.open();
});

tabGroup.addTab(tab1,tab2);
tabGroup.open();
