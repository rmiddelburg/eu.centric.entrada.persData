sap.ui.jsview("app.persData.selection", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app.Main.main
	 */
	getControllerName : function() {
		return "app.persData.selection";
	},

	
	onBeforeShow : function(oEvent) {
    },
    
	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app.Main.main
	 */
	createContent : function(oController) {
		jQuery.sap.require("sap.m.MessageToast");
		jQuery.sap.require("sap.m.MessageBox");
		jQuery.sap.require("sap.ui.core.format.DateFormat");
		
		var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout("L2", {
			labelSpanL: 3,
			labelSpanM: 1,
			labelSpanS: 2,
			emptySpanL: 2,
			emptySpanM: 2,
			emptySpanS: 2,
			columnsL: 3,
			columnsM: 2,
			breakpointL: 800,
			breakpointM: 400
		});

		var oh7 = new sap.m.ObjectHeader("oh7", {
			title : "Medewerker",
			titleActive : true,
			titlePress : oController.onPersonalList,
//			number : "3,00",
//			numberUnit : "EUR",
//			numberState : sap.ui.core.ValueState.Success,
			icon : serviceUrl + "/PersoonPhotoSet('00000000')/$value", tooltip: "Title tooltip",
			iconActive : true,
			iconPress : oController.onPersonalList,
//			markFlagged : false,
//			showMarkers : false
		});
		
		var oForm2 = new sap.ui.layout.form.Form("F2",{
//			title: new sap.ui.core.Title({text: oBundle.getText("PERSONAL_PROFILE"), icon: serviceUrl + "/PersoonPhotoSet('00000000')/$value", tooltip: "Title tooltip"}),
			layout: oLayout2,
			formContainers: [			new sap.ui.layout.form.FormContainer("F2C1",{
//				title: "Person data",
				formElements: [
								new sap.ui.layout.form.FormElement("test1",{
									fields: [new sap.ui.core.Icon("icon1",{
									      src: "sap-icon://employee",
									      size: (jQuery.device.is.phone) ? "4em" : "5.5em",
									      color: "#1C4C98",
									      decorative: false,
									      layoutData: new sap.m.FlexItemData({growFactor: 1}),
									      press: oController.onPersonalList
									 //     press:fnPress,
									    }).addStyleClass("icon")
									]
								}),
								new sap.ui.layout.form.FormElement({
									fields: [
									    new sap.m.Text({text: oBundle.getText("PERSONAL_LIST_HEADER"), textAlign: sap.ui.core.TextAlign.Center})
									]
								}),
							],						
			}),
			new sap.ui.layout.form.FormContainer("F2C2",{
				formElements: [
								new sap.ui.layout.form.FormElement("test2",{
									fields: [new sap.ui.core.Icon("icon2",{
									      src: "sap-icon://addresses",
									      size: (jQuery.device.is.phone) ? "4em" : "5.5em",
									      color: "#1C4C98",
									      decorative: false,
									      layoutData: new sap.m.FlexItemData({growFactor: 1}),
									      press: oController.onAddressList
							//		      press:fnPress,
									    }).addStyleClass("icon"),
									]
								}),
								new sap.ui.layout.form.FormElement({
									fields: [
									    new sap.m.Text({text: oBundle.getText("ADDRESS_LIST_HEADER"), textAlign: sap.ui.core.TextAlign.Center})
									]
								}),
							]
			}),
	/*					new sap.ui.layout.form.FormContainer("F2C3",{
				formElements: [
								new sap.ui.layout.form.FormElement({
									fields: [new sap.ui.core.Icon({
									      src: "sap-icon://family-care",
									      size: (jQuery.device.is.phone) ? "4em" : "5.5em",
									      color: "#1C4C98",
									      decorative: false,
									      layoutData: new sap.m.FlexItemData({growFactor: 1}),
									      press: oController.onFamilyList
									    }).addStyleClass("icon"),
									]
								}),
								new sap.ui.layout.form.FormElement({
									fields: [

									    new sap.m.Text({text: oBundle.getText("FAMILY_LIST_HEADER"), textAlign: sap.ui.core.TextAlign.Center})
									]
								}),
							]
			}),
			
						new sap.ui.layout.form.FormContainer("F2C4",{
				formElements: [
								new sap.ui.layout.form.FormElement({
									fields: [new sap.ui.core.Icon({
									      src: "sap-icon://factory",
									      size: (jQuery.device.is.phone) ? "4em" : "5.5em",
									      color: "#1C4C98",
									      decorative: false,
									      press: oController.onAssignmentList,
									      layoutData: new sap.m.FlexItemData({growFactor: 1})
									    }).addStyleClass("icon"),
									]
								}),
								new sap.ui.layout.form.FormElement({
									fields: [

									    new sap.m.Text({text: oBundle.getText("ASSIGNMENT_LIST_HEADER"), textAlign: sap.ui.core.TextAlign.Center})
									]
								}),
							]
			}),
				new sap.ui.layout.form.FormContainer("F2C5",{
				formElements: [
								new sap.ui.layout.form.FormElement({
									fields: [new sap.ui.core.Icon({
									      src: "sap-icon://monitor-payments",
									      size: (jQuery.device.is.phone) ? "4em" : "5.5em",
									      color: "#1C4C98",
									      decorative: false,
									      press: oController.onBankList,
									      layoutData: new sap.m.FlexItemData({growFactor: 1})
									    }).addStyleClass("icon"),
									]
								}),
								new sap.ui.layout.form.FormElement({
									fields: [

									    new sap.m.Text({text: oBundle.getText("BANK_LIST_HEADER"), textAlign: sap.ui.core.TextAlign.Center})
									]
								}),
							]
			}),
			new sap.ui.layout.form.FormContainer("F2C6",{
				formElements: [
								new sap.ui.layout.form.FormElement({
									fields: [new sap.ui.core.Icon({
									      src: "sap-icon://phone",
									      size: (jQuery.device.is.phone) ? "4em" : "5.5em",
									      color: "#1C4C98",
									      decorative: false,
									      press: oController.onCommunicationList,
									      layoutData: new sap.m.FlexItemData({growFactor: 1})
									    }).addStyleClass("icon"),
									]
								}),
								new sap.ui.layout.form.FormElement({
									fields: [

									    new sap.m.Text({text: oBundle.getText("COMMUNICATION_LIST_HEADER"), textAlign: sap.ui.core.TextAlign.Center})
									]
								}),
							]
			}),*/
	]
		});
		

		this.page1 = new sap.m.Page({
			setShowHeader : true,
			showNavButton : true,
			navButtonTap : oController.onHomeButton,
			title : oBundle.getText("MAIN"),
			headerContent : [ new sap.m.Button({
				icon : "sap-icon://home",
				press : oController.onHomeButton
			}), new sap.m.Button({
				icon : "sap-icon://log",
				press : oController.onLogoutButton
			}) ],
			content : [
			           oh7, 
			           oForm2
			           ]
		});

		// this.page1.setContent(this.oFacet);
		this.page1.setEnableScrolling(true).setShowHeader(true);
		return this.page1;
	}

});

//var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout("L1", {
//	defaultSpan : "L6 M6 S12"
//});





