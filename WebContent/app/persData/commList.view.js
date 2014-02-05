sap.ui.jsview("app.persData.commList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.persData.personalData
	*/ 
	getControllerName : function() {
		return "app.persData.commList";
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
		
		 this.commForm = new sap.ui.layout.form.Form("communicationh",{
             layout: new sap.ui.layout.form.ResponsiveGridLayout("L1",{labelSpanL : 6,labelSpanM : 5,columnsL : 1,columnsM : 1,breakpointL : 800,breakpointM : 400}),
//    			labelSpanS : 4,
//    			emptySpanL : 2,
//    			emptySpanM : 2,
//    			emptySpanS : 1,
             formContainers: [
                     new sap.ui.layout.form.FormContainer("F1C1",{
                             title: new sap.ui.core.Title({text: {
//                            	 layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
                 				parts:[{path: 'Validitybegin', type : this.oTypeDate},
                						{path: 'Validityend', type : this.oTypeDate}     
                				       ],
                				formatter : function( Validitybegin, Validityend) {
                					return "(" + oBundle.getText("BEGDA") +Validitybegin + " " + oBundle.getText("ENDDA") + Validityend + ")";
                				}
                    			},
                             }),
                             formElements: [            
                                     new sap.ui.layout.form.FormElement({label: {
//                                    	 layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
                          				path: 'Subtype',
                         				formatter : function(Subtype) {
                         					
                         						switch(Subtype)
                         						{
                         						case "0001":
                         							Subtype = oBundle.getText("USERID");
                         						  break;
                         						case "0010":
                         							Subtype = oBundle.getText("EMAIL_COMPANY");
                         						  break;
                         						case "0040":
                         							Subtype = oBundle.getText("EMAIL_PRIVATE");
                         						  break;
                         						default:
                         							Subtype = oBundle.getText("NONE");
                         						}
                         						
                       
                         					
                         					return Subtype;
                         				}
                             			},                             	 
                                    	 fields: [new sap.m.Text({text: "{Communicationid}"}),]}),
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("SURNAMEPREFIX"), fields: [new sap.m.Text({text: "{Surnameprefix}"}),]}),
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("LAST_NAME"),fields: [new sap.m.Text({text: "{Lastname}"}),]}),
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("COUNTRYBIRTH"),fields: [new sap.m.Text({text: "{Nameoflandofbirth}"}),]}),
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("PLACEBIRTH"),fields: [new sap.m.Text({text: "{Birthplace}"}),]}),
//                                     new sap.ui.layout.form.FormElement({label: oBundle.getText("NATIONALITY"),fields: [new sap.m.Text({text: "{Nameofnationality}"}),]}),
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

		this.commItemTemplate = new sap.m.CustomListItem({content : [this.commForm,]});
		this.commList = new sap.m.List({});

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
			            this.commList
			            ]
		});
	}

});