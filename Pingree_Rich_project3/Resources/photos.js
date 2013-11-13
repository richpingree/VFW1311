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

var closeButtonView = Ti.UI.createView({
	backgroundColor: "#B00707",
	height: 50,
	bottom: 0
	
});

var closeButtonLabel = Ti.UI.createLabel({
	text: "Close",
	color: "#E3E6E3",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Times New Roman"}
	
});

viewPhotoButton.addEventListener("click", function(){
	galWin.open(thumbsContainer);
	closeButtonView.add(closeButtonLabel);
	galWin.add(closeButtonView);
});

closeButtonView.addEventListener("click", function(){
	galWin.close();
	
});	

var thumbsContainer = Ti.UI.createScrollView({
	contentWidth: platformWidth,
	contentHeight: platformHeight,
	layout: "horizontal",
	
});

var makeThumb = function(){
	for(var i=0; i<imageList.length; i++){
		var galView = Ti.UI.createView({
			top: 5,
			left: 5,
			width: 75,
			height: 75,
			borderRadius: 5,
			
		});
		var photo = Ti.UI.createImageView({
			image: "imageList[i]"
			
		});
		galView.add(photo);
		thumbsContainer.add(galView);
		
	}
	galWin.add(thumbsContainer);
};

makeThumb();

galWin.addEventListener("click", function(event){
	var imageWin = Ti.UI.createWindow({
		title: imageList[i],
		backgroundColor: "#fff"
	});
	var photoView = Ti.UI.createImageView({
		image: "imageList[i]",
		borderRadius: 5
	});
	imageWin.add(photoView);
	imageWin.open();
});

