var tabGroup = Ti.UI.createTabGroup();

var winSettings = Ti.UI.createWindow({
});

var tabSettings = Ti.UI.createTab({
	icon: 'KS_nav_views.png',
	title: 'Settings',
	window:winSettings
});

winSettings.add(setupSettings());
tabGroup.addTab(tabSettings);

function setupSettings() {
	
	var view = Ti.UI.createView({});
	return view;
};

winSettings.open();
