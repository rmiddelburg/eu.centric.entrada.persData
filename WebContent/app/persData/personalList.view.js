sap.ui.jsview("app.persData.personalList", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app.persData.personalData
	 */
	getControllerName : function() {
		return "app.persData.personalList";
	},
	
	onBeforeShow : function(oEvent) {
	//	this.getController().onBeforeShow(oEvent.data);
    },

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
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

		this.personalForm = new sap.ui.layout.form.Form("personal", {
			layout : new sap.ui.layout.form.ResponsiveGridLayout("L1", {
				labelSpanL : 6,
				labelSpanM : 5,
				columnsL : 1,
				columnsM : 1,
				breakpointL : 800,
				breakpointM : 400
			}),
			// labelSpanS : 4,
			// emptySpanL : 2,
			// emptySpanM : 2,
			// emptySpanS : 1,
			formContainers : [
					new sap.ui.layout.form.FormContainer("F1C1", {
						title : new sap.ui.core.Title({
							text: {
								// layoutdata: new
								// sap.ui.layout.ResponsiveFlowLayoutData({weight
								// : 2,}),
								parts : [ {
									path : 'Nameofmembertype',
									type : new sap.ui.model.type.String()
								}, {
									path : 'Validitybegin',
									type : this.oTypeDate
								}, {
									path : 'Validityend',
									type : this.oTypeDate
								} ],
								formatter : function(Nameofmembertype,
										Validitybegin, Validityend) {
									return "(" + oBundle.getText("BEGDA")
											+ Validitybegin + " "
											+ oBundle.getText("ENDDA")
											+ Validityend + ")";
								}
							},
						}),
						formElements : [ new sap.ui.layout.form.FormElement({
							label : oBundle.getText("FIRST_NAME"),
							fields : [ new sap.m.Text({
								text : "{Firstname}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("SURNAMEPREFIX"),
							fields : [ new sap.m.Text({
								text : "{Surnameprefix}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("LAST_NAME"),
							fields : [ new sap.m.Text({
								text : "{Lastname}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("COUNTRYBIRTH"),
							fields : [ new sap.m.Text({
								text : "{Nameofcountryofbirth}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("PLACEBIRTH"),
							fields : [ new sap.m.Text({
								text : "{Birthplace}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("NATIONALITY"),
							fields : [ new sap.m.Text({
								text : "{Nameofnationality}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("SECONDNATIONALITY"),
							fields : [ new sap.m.Text({
								text : "{Nameofsecondnationality}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("LANGUAGE"),
							fields : [ new sap.m.Text({
								text : "{Nameoflanguage}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("GENDER"),
							fields : [ new sap.m.Text({
								text : "{Nameofgender}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("DATEOFBIRTH"),
							fields : [ new sap.m.Text({
								text : {
									path : 'Dateofbirth',
									type : this.oTypeDate,
								},
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("ACADEMICTITLE"),
							fields : [ new sap.m.Text({
								text : "{Academicgrade}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : oBundle.getText("COUNTRY"),
							fields : [ new sap.m.Text({
								text : "{Upd_button}"
							}), ]
						}), new sap.ui.layout.form.FormElement({
							label : "",
							fields : [ new sap.m.Button({
								icon : "sap-icon://edit",
								layoutData : new sap.ui.layout.GridData({
									span : "L1 M1 S2",
									indent : "L10 M10 S8",
								}),
								press : oController.onEditButton,
								visible : {
									path : 'Upd_button',
									type : new sap.ui.model.type.Boolean(),
									formatter : function(Upd_button) {
										if (Upd_button == "true") {
											return true;
										} else {
											return false;
										}

									}
								}
							}), new sap.m.Button({
								layoutData : new sap.ui.layout.GridData({
									span : "L1 M1 S2",
								}),
								icon : "sap-icon://delete",
								press : oController.onDeleteButton,
								visible : {
									path : 'Del_button',
									type : new sap.ui.model.type.Boolean(),
									formatter : function(Del_button) {
										if (Del_button == "true") {
											return true;
										} else {
											return false;
										}
									}
								}
							}) ]
						}), ]
					}),

			]
		});

		this.pull = new sap.m.PullToRefresh({
			description : "",
			// visible : !jQuery.device.is.desktop,
			refresh : [ oController, oController.onPull ]
		});

		this.personalItemTemplate = new sap.m.CustomListItem({
			content : [ this.personalForm, ]
		});

		this.personalList = new sap.m.List({
		// headerToolbar : new sap.m.Toolbar({
		// content : [ new sap.m.Label({
		// text : oBundle.getText("FAMILY_LIST_HEADER"),
		// }), new sap.m.ToolbarSpacer(), new sap.m.Button({
		// icon : "sap-icon://add",
		// / press :
		// }) ]
		// }),
		});

		return new sap.m.Page({
			title : oBundle.getText("PERSONAL_LIST_HEADER"),
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
			content : [ this.pull, this.personalList ]
		});
	}

});