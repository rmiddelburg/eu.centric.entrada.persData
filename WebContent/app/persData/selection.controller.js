sap.ui.controller("app.persData.selection", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf app.Main.main
	 */
	onInit : function() {
		this.loadContent();
	},
	
onBeforeShow : function(oData) {
        
     
       
    },
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf app.Main.main
	 */
	 onBeforeRendering: function() {
	
	 },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf app.Main.main
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf app.Main.main
	 */
	// onExit: function() {
	//
	// }
	loadContent : function() {
//		var view = this.getView();
		// view.personalDataList.bindItems("/PersoonSet",view.personalDataItemTemplate);
		// view.addressList.bindItems("/AddressSet",view.addressItemTemplate);
		// view.familyList.bindItems("/FamilySet",view.familyItemTemplate);
		// view.assignmentList.bindItems("/AssignmentSet",view.assignmentItemTemplate);
		// view.bankList.bindItems("/BankSet",view.bankItemTemplate);
		// view.communicationList.bindItems("/CommunicationSet",view.communicatonItemTemplate);
	},

	onDropDown : function() {
		sap.m.ActionSheet({
			title : "Maak uw keuze",
			showCancelButton : true,
			placement : sap.m.PlacementType.Bottom,
			buttons : [ new sap.m.Button({
				icon : "sap-icon://log",
				text : "Uitloggen",
				press : oController.onLogoutButton,
			}), new sap.m.Button({
				icon : "sap-icon://home",
				text : "Hoofdmenu",
				press : oController.onHomeButton,
			}), ]
		});
	},

	onHomeButton : function() {
		var stype = location.protocol;
		var host = location.host;
		var url = stype + "//" + host + "/sapui5/index.html";
		window.open(url, "_self");
	},

	onLogoutButton : function() {
		sap.m.MessageBox.show("Wanneer u OK kiest sluit u het programma af!",
				"sap-icon://hint", "Afmelden?", [ sap.m.MessageBox.Action.OK,
						sap.m.MessageBox.Action.CANCEL ], function(oAction) {
					if (oAction == sap.m.MessageBox.Action.OK) {
						var stype = location.protocol;
						var host = location.host;
						var url = stype + "//" + host
								+ "/sap/public/bc/icf/logoff";
						window.open(url, "_self");
					} else {
						sap.ui.getCore().getEventBus().publish("nav", "back");
					}
				});
	},

	onTest : function(oEvent, oController) {
		oController.loadContent(oController.oBindingContext);
		this.hide();
	},

	onPersonalList : function(oEvent) {
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			viewId : "app.persData.personalList",
		    data : {}
		});	
	},

	onAddressList : function(oEvent) {
		// var oBindingContext = oEvent.oSource.getBindingContext();
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			viewId : "app.persData.addressList",
		 data : {}
		});

	},

/*	onFamilyList : function(oEvent) {
		// var oBindingContext = oEvent.oSource.getBindingContext();

		sap.ui.getCore().getEventBus().publish("nav", "to", {

			viewId : "app.persData.familyList",
		// data : { bindingContext : oBindingContext
		// }
		});
	},

	onBankList : function(oEvent) {
		// var oBindingContext = oEvent.oSource.getBindingContext();

		sap.ui.getCore().getEventBus().publish("nav", "to", {

			viewId : "app.persData.bankList",
		// data : { bindingContext : oBindingContext
		// }
		});
	},

	onAssignmentList : function(oEvent) {
		// var oBindingContext = oEvent.oSource.getBindingContext();

		sap.ui.getCore().getEventBus().publish("nav", "to", {

			viewId : "app.persData.assignmentList",
		// data : { bindingContext : oBindingContext
		// }
		});
	},

	onCommunicationList : function(oEvent) {
		// var oBindingContext = oEvent.oSource.getBindingContext();

		sap.ui.getCore().getEventBus().publish("nav", "to", {

			viewId : "app.persData.commList",
		// data : { bindingContext : oBindingContext
		// }
		});
	},
*/
});
