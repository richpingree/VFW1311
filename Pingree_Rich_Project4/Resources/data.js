var characters = {
	"superheroes": {
		headTitle: "Justice League Members",
		footTitle: "Guardians of the Galaxy",
		"identity": [
			{"name": "Superman", "alias": "Real Name: Clark Kent", "photo": "logoimgs/Superman_logo.png"},
			{"name": "Batman", "alias": "Real Name: Bruce Wayne", "photo": "logoimgs/batman-logo.gif"},
			{"name": "Green Arrow", "alias": "Real Name: Oliver Queen", "photo": "logoimgs/green_arrow_logo.png"},
			{"name": "The Flash", "alias": "Real Name: Barry Allen", "photo": "logoimgs/The_Flash_Logo.jpg"},
			{"name": "Green Lantern", "alias": "Real Name: Hal Jordan", "photo": "logoimgs/Green_Lantern_Corps_Logo.jpg"}
		]		
	}
};

var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
	
});

var sections = [];
for(n in characters){
	var tableSecs = Ti.UI.createTableViewSection({
		headerTitle: characters[n].headTitle,
		footerTitle: characters[n].footTitle
	});
	for(var i = 0; i<characters[n].identity.length; i++){
		var theRow = Ti.UI.createTableViewRow({
			title: characters[n].identity[i].name,
			state: characters[n].identity[i].alias,
			photo: characters[n].identity[i].photo,
			hasChild: true
		});
		tableSecs.add(theRow);

	};
	sections.push(tableSecs);
};

dataView.addEventListener("click", function(e){
	var dataWin = Ti.UI.createWindow({
		title: "Justice League Members",
		modal: true,
		backgroundColor: "#595BC2"
	});
		dataWin.add(table);
		navWin.openWindow(dataWin, {animate: true});
});

table.addEventListener("click", function(event){
	var aliasWin = Ti.UI.createWindow({
		backgroundColor: "#595BC2",
		title: event.source.title,
		modal: true
	});
	var logoImage = Ti.UI.createImageView({
		image: event.source.photo,
		borderRadius: 20,
		height: 200,
		top: 15,
		left: 20,
		right: 20
		
	});
	var statementText = Ti.UI.createLabel({
		text: event.source.state,
		color: "#fff",
		top: (logoImage.top + logoImage.height) + 15,
		font: {fontSize: 20, fontFamily: "Times New Roman"}
	});
	aliasWin.add(statementText, logoImage);
	navWin.openWindow(aliasWin, {animate: true});
	
});
table.setData(sections);
