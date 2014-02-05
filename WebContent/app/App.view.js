
sap.ui.jsview("app.App", {

	getControllerName: function() {
		return "app.App";
	},
	
	createContent : function(oController) {
//		this.app = sap.suite.ui.commons.UnifiedThingInspector();
		this.App = new sap.m.App({initialPage:"idSelection"});
		this.App.addPage(sap.ui.jsview("app.persData.selection", "app.persData.selection"));
//		this.App.addPage(sap.ui.jsview("app.persData.personalData", "app.persData.personalData"));
         
		return new sap.m.Shell({
			title :  oBundle.getText("SHELL_TITLE"),
			showLogout : false,
			app : this.App			
		});

	}
});