//varables
var myList = ["Vinyl Records", "8 Track", "Cassettes", "Compact Disc", "Downloaded MP3"];
var items = 0;

var mainView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 15,
	height: 150,
	width: 200,
	top: 50
});
			
var mainLabel = Ti.UI.createLabel({
	color: "#1127A6",
	text: myList[items],
	font: {fontSize: 20, fontFamily: "Helvetica"},
	textAlign: "center"
			
});	
	

var nextItem = function(){
		if (items < myList.length){
			mainLabel.text = myList[items];
			items++;
		} else {
			items = 0;
		};
};

var previousItem = function(){
		if (items < myList.length){
			mainLabel.text = myList[items];
			items--;
		} else {
			items = myList.length;
		};
};


mainView.add(mainLabel);
mainWindow.add(mainView);

//events

rightButton.addEventListener("click", nextItem);
leftButton.addEventListener("click", previousItem);


