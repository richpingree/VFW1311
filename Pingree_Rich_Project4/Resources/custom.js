var formWin = Ti.UI.createWindow({
  	backgroundColor: "#595BC2"
});

var nameTextField = Ti.UI.createTextField({
 	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: 30, 
	left: 10,
	width: 250, 
	height: 30
});

var nameFieldLabel = Ti.UI.createLabel({
	text: "What is your real name?",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: 10,
	left: 10
});

var powerFieldLabel = Ti.UI.createLabel({
	text: "What is your desired superpower?",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: (nameTextField.top + nameTextField.height) + 10,
	left: 10
});

var powerTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: powerFieldLabel.top + 20, 
	left: 10,
	width: 250, 
	height: 30
});

var enterButton = Ti.UI.createButton({
	title: "Enter",
	backgroundColor: "green",
	color: "#000",
	borderRadius: 20,
	top: (powerTextField.top + powerTextField.height) + 15,
	width: 100,
	height: 50
});
enterButton.addEventListener('click',function(e)
{
   alert("Congratulations, " + nameTextField.value + "!" + " You have been rewarded with the power of " + powerTextField.value);
});
	


customView.addEventListener("click", function(e){
	
formWin.add(nameTextField, nameFieldLabel, powerFieldLabel, powerTextField, enterButton);
navWin.openWindow(formWin, {animate: true});
	
});

