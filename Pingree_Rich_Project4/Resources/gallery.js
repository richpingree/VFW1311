var galWin = Ti.UI.createWindow({
		title: "Member's Gallery",
		modal: true,
		backgroundColor: "#595BC2"
});
var counter = 1;

var myImages = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "charimages");
var imageList = myImages.getDirectoryListing();
	

var button = Ti.UI.createButton({
	bottom: 10,
	title: "Change Image",
	height: 50,
	width: 200,
	backgroundColor: "Red",
	color: "#000",
	borderRadius: 25
});

// var imgList = Array();
	// for(var i=0; i<imageList.length; i++){
		// var index = Math.floor(Math.random()*imageList.length);
		// imgList.push(imageList[index]);
		// imageList.splice(index,1);
// };		


	
var photo = Ti.UI.createImageView({
	image: "charimages/"+ imageList[counter],
	top: 10,
	bottom: (button.bottom + button.height) + 10
		
});	


// button.addEventListener("click", function(){
	// if(counter>=imageList.length){
	// photo.image = "charimages/" + imgList[counter];
	// counter++;
// 		
	// }else{
		// counter = 0;
	// }
// 	
// });

button.addEventListener("click", function(e){
	photo.setImage("charimages/" + imageList[counter]);
	counter++;
	if(counter>=imageList.length){
		counter = 0;
	}
	
});


galleryView.addEventListener("click", function(e){
	
	galWin.add(photo, button);
	navWin.openWindow(galWin, {animate: true});
});

