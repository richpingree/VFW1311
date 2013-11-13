var characters = {
	"superheroes": {
		headTitle: "Superheroes",
		footTitle: "Heroes fight for justice!",
		"identity": [
			{"name": "Superman", "statement": "Superman is the Man of Steel!"},
			{"name": "Batman", "statement": "Batman is The Dark Knight!"},
			{"name": "Green Arrow", "statement": "Also known as Billionaire Oliver Queen."}
		]		
		
	},
	"supervillians": {
		headTitle: "Supervillians",
		footTitle: "Villians are crime lords.",
		"identity": [
			{"name": "Lex Luther", "statement": "Thinks he can out smart Superman."},
			{"name": "The Joker", "statement": "Everything is a joke to this guy."},
			{"name": "Deathstroke", "statement": "This masked mercenary puts fear in all he encounters."}
		]		
	}
};

var getInfo = function(){
	var statementWin = Ti.UI.createWindow({
		backgroundColor: "#595BC2",
		title: this.title,
		modal: true
	});
	var statementText = Ti.UI.createLabel({
		text: this.state,
		color: "#fff",
		font: {fontSize: 20, fontFamily: "Times New Roman"}
	});
	statementWin.add(statementText);
	navWin.openWindow(statementWin, {animate: true});
};

var sections = [];
for(n in characters){
	var tableSecs = Ti.UI.createTableViewSection({
		headerTitle: characters[n].headTitle,
		footerTitle: characters[n].footTitle
	});
	for(var i = 0; i<characters[n].identity.length; i++){
		var theRow = Ti.UI.createTableViewRow({
			title: characters[n].identity[i].name,
			state: characters[n].identity[i].statement,
			hasChild: true
		});
		tableSecs.add(theRow);
		theRow.addEventListener("click", getInfo);
	};
	sections.push(tableSecs);
};

table.setData(sections);
