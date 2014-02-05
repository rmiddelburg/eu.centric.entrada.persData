jQuery.sap.declare("util.forms.addressData");

sap.ui.localResources("i18n"); 

var adHeader = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({minwidth: 300}),
		content : [ new sap.m.Text({
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 1,}),
			width : "100%",
			text : "{Nameofaddresstype}",
		  textAlign : "Left"
		}),

		]
	})
   ]
});

var adPeriod = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		content : [ new sap.m.Text({
			text : {
				path : 'Validitybegin',
				type : oTypeDate,
				formatter : function(Dateofbirth) {
					return oBundle.getText("BEGDA") + Dateofbirth;
				}
			},
			textAlign : "Left"
		}),
		new sap.m.Text({
			text : {
				path : 'Validityend',
				type : oTypeDate,
				formatter : function(Dateofbirth) {
					return oBundle.getText("ENDDA") + Dateofbirth;
				}
			},
			textAlign : "Left"
		}),]
	}), ]
});

var adStreet = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({minwidth: 300}),
		content : [ new sap.m.Label({
			text : oBundle.getText("STREET"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Street}"
		}),

		]
	})
   ]
});

var adPostalCode = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("POSTELCODE_CITY"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			text : {
				parts:[
						{path: 'Postalcodecity', type : new sap.ui.model.type.String()},
						{path: 'City', type : new sap.ui.model.type.String()}     
				       ],

				formatter : function(Postalcodecity, City) {
					return Postalcodecity + "  " + City ;
				}
			},
		}),
		]
	})
   ]
});

var adCountry = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({minwidth: 300}),
		content : [ new sap.m.Label({
			text : oBundle.getText("COUNTRY"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Nameofcountry}"
		}),

		]
	})
   ]
});

/**
 * Botton list voor infotypes rows
 */

var adButtonsPD = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.m.Panel({
		content : [ new sap.m.Button({
			icon : "sap-icon://edit",
//			visible : "{Del_button}"
		}), new sap.m.Button({
			icon : "sap-icon://delete",
//			visible : "{Del_button}"
		}) ]
	}), ]
}).addStyleClass("buttonRow");

var adActionSheet = new sap.m.ActionSheet({
    title: "Choose Your Action",
    showCancelButton: true,
    placement: sap.m.PlacementType.Auto,
    buttons: [
      new sap.m.Button({
//        icon: "sap-icon://decline",
        text: oBundle.getText("PERMANENT"),
      }),
      new sap.m.Button({
//        icon: "sap-icon://decline",
        text: oBundle.getText("VERPLEEG"),
      }),
      new sap.m.Button({
//        icon: "sap-icon://decline",
        text: oBundle.getText("TEMP"),
      }),
      new sap.m.Button({
//        icon: "sap-icon://decline",
        text: oBundle.getText("POST"),
      }),
    ]
  });




	
