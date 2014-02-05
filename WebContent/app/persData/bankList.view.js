sap.ui.jsview("app.persData.bankList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.persData.personalData
	*/ 
	getControllerName : function() {
		return "app.persData.bankList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.persData.personalData
	*/ 
	createContent : function(oController) {
		
		jQuery.sap.require("sap.m.MessageToast");
		jQuery.sap.require("sap.m.MessageBox");

		jQuery.sap.require("sap.m.MessageToast");
		jQuery.sap.require("sap.ui.core.format.DateFormat");

		this.oTypeDate = new sap.ui.model.type.Date({
			// source: {pattern: "yyyy-MM-ddT00:00:00"},
			source : {
				pattern : "yyyy-MM-ddTHH:mm:ss"
			},
			style : (jQuery.device.is.phone) ? "short" : "long",
		});
		
		 this.bankForm = new sap.ui.layout.form.Form("bank",{
             layout: new sap.ui.layout.form.ResponsiveGridLayout("L1",{labelSpanL : 6,labelSpanM : 5,columnsL : 1,columnsM : 1,breakpointL : 800,breakpointM : 400}),
//    			labelSpanS : 4,
//    			emptySpanL : 2,
//    			emptySpanM : 2,
//    			emptySpanS : 1,
             formContainers: [
                     new sap.ui.layout.form.FormContainer("F1C1",{
                             title: new sap.ui.core.Title({text: {
//                            	 layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
                 				parts:[ {path: 'Nameofbanktype', type : new sap.ui.model.type.String()},
                						{path: 'Validitybegin', type : this.oTypeDate},
                						{path: 'Validityend', type : this.oTypeDate}     
                				       ],
                				formatter : function(Nameofbanktype, Validitybegin, Validityend) {
                					return Nameofbanktype + " (" + oBundle.getText("BEGDA") +Validitybegin + " " + oBundle.getText("ENDDA") + Validityend + ")";
                				}
                    			},
                             }),
                             formElements: [            
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("PAYEE"),fields: [new sap.m.Text({text: "{Payee}"}),]}),
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("POSTELCODE_CITY"), fields: [new sap.m.Text({text: "{Payeepostalcodecity}",layoutData: new sap.ui.layout.GridData({span: "L1 M1 S12",})}),
                                                                                                                             new sap.m.Text({text: "{Payeecity}"})  ]}),
                                     
                                     new sap.ui.layout.form.FormElement({fields: [new sap.m.Text({text: ""}),]}),
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("PAYMENTMETHOD"), fields: [new sap.m.Text({text: "{Nameofpaymentmethod}"}),]}),
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("BANKKEY"),fields: [new sap.m.Text({text: "{Nameofbankkey}"}),]}),
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("ACCOUNTNO"),fields: [new sap.m.Text({text: "{Accountno}"}),]}),
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("BANKCOUNTY"),fields: [new sap.m.Text({text: "{Nameofbankcountry}"}),]}),
                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("CURRENCY"),fields: [new sap.m.Text({text: "{Currency}"}),]}),
                                     
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("GENDER"),fields: [new sap.m.Text({text: "{Nameofgender}"}),]}),
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("DATEOFBIRTH"),fields: [new sap.m.Text({text: {path : 'Dateofbirth',type : this.oTypeDate,},}),]}),                                     

                                     new sap.ui.layout.form.FormElement({
                                         label: "",
                                         fields: [new sap.m.Button({icon : "sap-icon://edit",layoutData: new sap.ui.layout.GridData({span: "L1 M1 S2", indent: "L10 M10 S8",}),press: oController.onEdit}), 
                         				          new sap.m.Button({layoutData: new sap.ui.layout.GridData({span: "L1 M1 S2",}),icon : "sap-icon://delete", press: oController.onDeleteButton})
                                                 ]
                                          	}),
                                          ]
                     	}),
                   
             ]
     });

		this.pull = new sap.m.PullToRefresh({
			description : "",
//			visible : !jQuery.device.is.desktop,
			refresh : [ oController, oController.onPull ]
		});

		this.bankItemTemplate = new sap.m.CustomListItem({content : [this.bankForm,]});
		this.bankList = new sap.m.List({});

		return new sap.m.Page({
			title : oBundle.getText("FAMILY_LIST_HEADER"),
			headerContent : [ new sap.m.Button({
				icon : "sap-icon://home",
				press : oController.onHomeButton
			}), new sap.m.Button({
				icon : "sap-icon://log",
				press : oController.onLogoutButton
			}) ],
			footer : new sap.m.Bar({
				contentRight : [ new sap.m.Button({
					text : oBundle.getText("NEW"),
					icon : "sap-icon://add",
				}), ],
			}),
			setShowHeader : true,
			showNavButton : true,
			navButtonTap : [ oController.onNavButtonTap, oController ],
			content : [ this.pull, 
			            this.bankList
			            ]
		});
	}

});