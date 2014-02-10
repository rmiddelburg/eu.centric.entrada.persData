sap.ui.controller("app.persData.addressDetailNew", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app.persData.familyDetailEdit
*/
	onInit: function() {
		this.getView().countrySelect.bindItems("/CountryCodesSet", this.getView().countrySelectItems);
		this.getView().addressTypeSelect.bindItems("/AddressSubtypeSet", this.getView().addressTypeSelectItems);
	},
	
//	onBeforeShow : function(oData) {
//	    this.getView().bindElement(oData.bindingContext.getPath());
//   	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.persData.familyDetailEdit
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.persData.familyDetailEdit
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.persData.familyDetailEdit
*/
//	onExit: function() {
//
//	}
	
	onNavButtonTap : function() {		
		sap.m.MessageBox.show(oBundle.getText("CANCEL_EDIT_TEXT"),
				"", oBundle.getText("CANCEL"), [ sap.m.MessageBox.Action.YES,
						sap.m.MessageBox.Action.NO], function(oAction) {
					if (oAction == sap.m.MessageBox.Action.YES) {
						sap.ui.getCore().getEventBus().publish("nav", "back");
					} else {

					}
		});
	},

	onHomeButton : function() {
		sap.m.MessageBox.show(oBundle.getText("CANCEL_EDIT_TEXT"),
				"", oBundle.getText("CANCEL"), [ sap.m.MessageBox.Action.YES,
						sap.m.MessageBox.Action.NO], function(oAction) {
					if (oAction == sap.m.MessageBox.Action.YES) {
						var stype = location.protocol;
						var host = location.host;
						var url = stype + "//" + host + "/sapui5/index.html";
						window.open(url, "_self");
					} else {
						sap.ui.getCore().getEventBus().publish("nav", "back");
					}
		});

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
	handleContinue : function (evt) {

	    // collect input controls
	    var view = this.getView();
	    var inputs = [
	      view.byId("nameInput"),
//	      view.byId("emailInput")
	    ];

	    // check that inputs are not empty
	    // this does not happen during data binding as this is only triggered by changes
	    jQuery.each(inputs, function (i, input) {
	      if (!input.getValue()) {
	        input.setValueState("Error");
	      }
	    });

	    // check states of inputs
	    var canContinue = true;
	    jQuery.each(inputs, function (i, input) {
	      if ("Error" === input.getValueState()) {
	        canContinue = false;
	        return false;
	      }
	    });

	    // output result
	    if (canContinue) {
	      jQuery.sap.require("sap.m.MessageToast");
	      sap.m.MessageToast.show("The input is correct. You could now continue to the next screen.");
	    } else {
	      jQuery.sap.require("sap.m.MessageBox");
	      sap.m.MessageBox.alert("Complete your input first.");
	    }
	  },
	  
	  /**
	   * This is a custom model type for validating email
	   */
	  typeEMail : sap.ui.model.SimpleType.extend("email", {
	    formatValue: function (oValue) {
	      return oValue;
	    },
	    parseValue: function (oValue) {
	      //parsing step takes place before validating step, value can be altered
	      return oValue;
	    },
	    validateValue: function (oValue) {
	      var mailregex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
	      if (!oValue.match(mailregex)) {
	        throw new sap.ui.model.ValidateException("is not a valid email address");
	      }
	    }
	  })

});