//varables
var myList = ["Vinyl Records", "8 Track", "Cassettes", "Compact Disc", "Downloaded MP3"];


var mainView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 15,
	height: 150,
	width: 200,
	top: 50,
	alignment: "center"
});
			
var mainLabel = Ti.UI.createLabel({
	color: "#999",
	text: myList[0],
	font: {fontSize: 20, fontFamily: "Helvetica"},
	textAlign: "center",
			
});	
	

var nextItem = function(){
		for (var i = 0; i < myList.length; i++){
			if (i < myList.length){
				mainLabel.text = myList[i];
			} else {
				i = 0;
			};
			
		};
};



mainView.add(mainLabel);
mainWindow.add(mainView);

//events

rightButton.addEventListener("click", nextItem);
//leftButton.addEventListener("click", previousItem);