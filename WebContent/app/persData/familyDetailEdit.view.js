sap.ui.jsview("app.persData.familyDetailEdit", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app.persData.familyDetailEdit
	 */
	getControllerName : function() {
		return "app.persData.familyDetailEdit";
	},
	
    onBeforeShow : function(oEvent) {
		this.getController().onBeforeShow(oEvent.data);
    },
	

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app.persData.familyDetailEdit
	 */
	createContent : function(oController) {
		
		var NaamSimpleForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 2,
			editable: true,
			content : [
				new sap.ui.core.Title({ // this starts a new group
					text: "Naam"
				}),
				new sap.m.Label({text: oBundle.getText("NAAMTYPE")}),
				new sap.m.Select("select_nameType",{name: "select-name0",
					items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
					        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
					        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
					        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
						})
					],
				}),
				new sap.m.Label({text: oBundle.getText("TITLE")}),
				new sap.m.Select("title",{name: "select-title",
					items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
					        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
					        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
					        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
						})
					],
				}),
				new sap.m.Label({text: oBundle.getText("ACADAMIC")}),
				new sap.m.Select("Academic",{name: "select-academic",
					items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
					        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
					        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
					        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
						})
					],
				}),
				new sap.m.Label({text: oBundle.getText("FIRSTNAME")}),
				new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
				new sap.m.Label({text: oBundle.getText("CALLNAME")}),
				new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
				new sap.m.Label({text: oBundle.getText("INITIALS")}),
				new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Initials}"}),
			]
		});
		
		var birthSimpleForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 2,
			editable: true,
			content : [
						new sap.ui.core.Title({ // this starts a new group
							text: oBundle.getText("BIRTHDATA")
						}),
						new sap.m.Label({text: oBundle.getText("VOORVOEGSEL")}),
						new sap.m.Select({name: "select-voorvoegsel",
							items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
							        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
							        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
							        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
								})
							],
						}),
						new sap.m.Label({text: oBundle.getText("BIRTHNAME")}),
						new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
						new sap.m.Label({text: oBundle.getText("BIRTHDATE")}),
						new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
						new sap.m.Label({text: oBundle.getText("BIRTHPLACE")}),
						new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),						
						new sap.m.Label({text: oBundle.getText("BIRTHCOUNTY")}),
						new sap.m.Select({name: "select-nationality",
							items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
							        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
							        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
							        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
								})
							],
						}),
			]
		});
		
		var partnerSimpleForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 2,
			editable: true,
			content : [
			           new sap.ui.core.Title({ // this starts a new group
			        	   text: oBundle.getText("PARTNERDATA")
			           }),
			           new sap.m.Label({text: oBundle.getText("VOORVOEGSEL")}),
			           new sap.m.Select({name: "select-voorvoegsel2",
			        	   items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
			        	           oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
			        	           oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
			        	           oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
			        	           })
			        	   ],
			           }),
			           new sap.m.Label({text: oBundle.getText("PARTNERNAME")}),
			           new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),     
			]
		});
		
		var marigeSimpleForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 2,
			editable: true,
			content : [
			           new sap.ui.core.Title({ // this starts a new group
			        	   text: oBundle.getText("MARIGEDATA")
			           }),
			           new sap.m.Label({text: oBundle.getText("MARIGESTATE")}),
			           new sap.m.Select({name: "select-huwlijk",
			        	   items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
			        	           oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
			        	           oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
			        	           oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
			        	           })
			        	   ],
			           }),
							new sap.m.Label({text: oBundle.getText("BIRTHDATE")}),
							new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
							new sap.m.Label({text: oBundle.getText("CHILDERN")}),
							new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
							]
			});
		
		var furtherSimpleForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 2,
			editable: true,
			content : [
						new sap.ui.core.Title({ // this starts a new group
							text: oBundle.getText("NAME")
						}),
						new sap.m.Label({text: oBundle.getText("LANGUAGE")}),
						new sap.m.Select({name: "select-language",
							items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
							        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
							        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
							        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
							        })
							],
						}),
						new sap.m.Label({text: oBundle.getText("NATIONALITY")}),
						new sap.m.Select({name: "select-nationality",
							items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
							        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
							        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
							        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
							        })
							],
						}),
						new sap.m.Label({text: oBundle.getText("SECONDNATIONALITY")}),
						new sap.m.Select({name: "select-second_nationality",
							items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
							        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
							        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
							        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
							        })
							],
						}),
						new sap.m.Label({text: oBundle.getText("THIRDNATIONALITY")}),
						new sap.m.Select({name: "select-third_nationality",
							items: [oItem20 = new sap.ui.core.Item({key: "0",text: "item 0"}),
							        oItem21 = new sap.ui.core.Item({key: "1",text: "item 1"}),
							        oItem22 = new sap.ui.core.Item({key: "2",text: "item 2 is a little long"}),
							        oItem23 = new sap.ui.core.Item({key: "3",text: "item 3"
							        })
							],
						}),
			]
		});
		
		return new sap.m.Page({
			title : oBundle.getText("FAMILY_EDIT_HEADER"),
			headerContent : [ new sap.m.Button({
				icon : "sap-icon://home",
				press : oController.onHomeButton
			}), new sap.m.Button({
				icon : "sap-icon://log",
				press : oController.onLogoutButton
			}) ],
			footer : new sap.m.Bar({
				contentRight : [ new sap.m.Button({
					text : oBundle.getText("SAVE"),
					icon : "sap-icon://save"
				}), ],
				contentLeft : [ new sap.m.Button({
					text : oBundle.getText("CANCEL"),
					icon : "sap-icon://decline",
				    press: oController.onNavButtonTap,
				}) ]
			}),
			setShowHeader : true,
			showNavButton : true,
			navButtonTap : [ oController.onNavButtonTap, oController ],
			content : [NaamSimpleForm,birthSimpleForm,furtherSimpleForm,partnerSimpleForm,marigeSimpleForm,furtherSimpleForm]

		});
	}

});