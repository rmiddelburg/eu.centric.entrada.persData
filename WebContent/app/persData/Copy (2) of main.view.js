sap.ui.jsview("app.Main.main", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app.Main.main
	 */
	getControllerName : function() {
		return "app.Main.main";
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

		jQuery.sap.require("sap.m.MessageToast");
		jQuery.sap.require("sap.ui.core.format.DateFormat");

//	    var oTypeDate = new sap.ui.model.type.Date(  
//	      {  
//	       source: {pattern: "yyyy-MM-ddT00:00:00"},  
//	       style:"long"  
//	      });  

	     
		// Personal Data
		this.personalDataList = new sap.m.List({
			headerToolbar : new sap.m.Toolbar({
				content : [ 
				new sap.m.Label({
					text : oBundle.getText("PERSONALDATA_LIST_HEADER"),					    
				}), 
				new sap.m.ToolbarSpacer(),
				new sap.m.Button({
					  icon: "sap-icon://add",
				      press : function (evt) {
		
				      }
				})
				]
			}),
		});

		this.personalDataItemTemplate = new sap.m.CustomListItem({
			// type : "Navigation",
			// tap : oController.onListItemTap,
			content : [
/*			           new sap.m.DateTimeInput({
			        	   value:'{Dateofbirth}',
			        	   valueFormat:"yyyy-MM-ddThh:mm:ss",
			        	   displayFormat: "dd MMMM, yyyy",
			           }),*/
			           pdPeriod,
firstname,
surnamePrefix,
lastname,
dateOfBirth,
gender,
countryBirth,
placeBirth,
Nationality,
spokenLanguage,
secondNationality,
academicGrade,
buttonsPD
			 ]
		}),

		// Address
		this.addressList = new sap.m.List({
			headerToolbar : new sap.m.Toolbar({
				content : [ new sap.m.Label({
					text : oBundle.getText("ADDRESS_LIST_HEADER"),
				}),
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						  icon: "sap-icon://add",
					      press : function (evt) {
					        adActionSheet.openBy(evt.getSource());
					      }
					})
				 ]
			}),
		});

		this.addressItemTemplate = new sap.m.CustomListItem({
			content : [ adHeader, adPeriod, adStreet, adPostalCode, adCountry, adButtonsPD ]
		});

		// Family
		this.familyList = new sap.m.List({
			headerToolbar : new sap.m.Toolbar({
				content : [ new sap.m.Label({
					text : oBundle.getText("FAMILY_LIST_HEADER"),
				}),
				new sap.m.ToolbarSpacer(),
				new sap.m.Button({
					  icon: "sap-icon://add",
				      press : function (evt) {
				        fdActionSheet.openBy(evt.getSource());
				      }
				})]
			}),
		});

		this.familyItemTemplate = new sap.m.CustomListItem({
			// type : "Navigation",
			// tap : oController.onListItemTap,
			content : [ fdHeader,
			            adPeriod,
			            fdFirstname,
			            fdSurnamePrefix,
			            fdLastname,
			            fdDateOfBirth,
			            fdGender,
			            fdCountryBirth,
			            fdPlaceBirth,
			            fdNationality,
			            fdButtonsPD ]
		});

		// assignments
		this.assignmentList = new sap.m.List({
			headerToolbar : new sap.m.Toolbar({
				content : [ new sap.m.Label({
					text : oBundle.getText("ASSIGNMENT_LIST_HEADER"),
				}), ]
			}),
		});

		this.assignmentItemTemplate = new sap.m.CustomListItem({
			// type : "Navigation",
			// tap : oController.onListItemTap,
			content : [ new sap.m.VBox({
				items : [ new sap.m.Label({
					text : "{OrganisationUnitStext}",
					design : "Bold"
				}), new sap.m.Label({
					text : "{PositionStext}"
				}), ]
			}).addStyleClass("mobile-list-item") ]
		});

		// Bank details
		this.bankList = new sap.m.List({
			headerToolbar : new sap.m.Toolbar({
				content : [ new sap.m.Label({
					text : oBundle.getText("BANK_LIST_HEADER"),
				}), ]
			}),
		});

		this.bankItemTemplate = new sap.m.CustomListItem({
			// type : "Navigation",
			// tap : oController.onListItemTap,
			content : [ new sap.m.VBox({
				items : [ new sap.m.Label({
					text : "{Nameofbanktype}",
					design : "Bold"
				}), new sap.m.Label({
					text : "{Nameofbankkey}"
				}), ]
			}).addStyleClass("mobile-list-item") ]
		});

		// Communication
		this.communicationList = new sap.m.List({
			headerToolbar : new sap.m.Toolbar({
				content : [ new sap.m.Label({
					text : oBundle.getText("COMMUNICATION_LIST_HEADER"),
				}), ]
			}),
		});

		this.communicatonItemTemplate = new sap.m.CustomListItem({
			// type : "Navigation",
			// tap : oController.onListItemTap,
			content : [ new sap.m.VBox({
				items : [ new sap.m.Label({
					text : "{Communicationid}",
					design : "Bold"
				}),
				// new sap.m.Label({ text :
				// "{PositionStext}" }),
				]
			}).addStyleClass("mobile-list-item") ]
		});

		this.oGrid = new sap.ui.layout.Grid({
			hSpacing : 1, // in rem; default half of the value
			// for gutter,
			// adds to left and right, for corrections
			vSpacing : 1, // in rem; together with
			// horizontalSpacing it
			// generates the .gridSpacingNone,
			// .gridSpacingHalfFull class
			width : "100%",
			defaultSpan : "L6 M6 S12",
		
			content : [ this.personalDataList, this.addressList,
					this.familyList, this.assignmentList, this.bankList,
					this.communicationList, ]
		});
		
		var pull = new sap.m.PullToRefresh({
		    description : "",
		    visible:!jQuery.device.is.desktop,
		    refresh : [oController, oController.onPull]
		});	

		this.page1 = new sap.m.Page({
			setShowHeader : true,
			title : oBundle.getText("MAIN"),
			headerContent : [ new sap.m.Button({
				icon : "sap-icon://home",
				press : oController.onHomeButton
			}), new sap.m.Button({
				icon : "sap-icon://log",
				press : oController.onLogoutButton
			}) ],
			content : [ pull, this.oGrid ]
		});

		// this.page1.setContent(this.oFacet);
		this.page1.setEnableScrolling(true).setShowHeader(true);
		return this.page1;
	}

});

var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout("L1", {
	defaultSpan : "L6 M6 S12"
});





