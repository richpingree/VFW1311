


//window
var mainWindow = Ti.UI.createWindow({
	title: "Timer",
	backgroundColor: "#333",
	tabBarHidden: true // to hide the nav buttons for the tabs
});

var theCounter, counter = 10;

var mainLabel = Ti.UI.createLabel({
	text: counter,
	color: "#fff",
	font: {fontSize: 36, fontFamily: "Time New Roman"}
	
});

var nextLabel = Ti.UI.createLabel({
	color: "#E3E6E3",
	text: "Start",
	font: {fontSize: 20, fontFamily: "Ariel"},
	textAlign: "center"	
});

var rightButton = Ti.UI.createView({
	backgroundColor: "#089C19",
	borderRadius: 30,
	height: 50,
	bottom: 20,
	right: 20,
	left: 20
	
});
var endCount = function(){
	clearInterval(TheCounter);
	alert("Time has expired!");
	
};


var countDown = function(){
	if(counter |=0){
		counter--;
		mainLabel.text = counter;
	}else{
		mainLabel.fireEvent("end");
	}
};

var startCount = function(){
	mainLabel.addEventListener("end", endCount);
	theCounter = setInterval(countDown, 1000);
};


//outputs
mainWindow.add(mainLabel);
rightButton.addEventListener("click", startCount);
rightButton.add(nextLabel);
mainWindow.add(rightButton);
mainWindow.open();