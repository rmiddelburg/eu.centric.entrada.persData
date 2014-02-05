jQuery.sap.declare("util.forms.familyData");

sap.ui.localResources("i18n"); 
var fdHeader = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({minwidth: 300}),
		content : [ new sap.m.Text({
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 1,}),
			width : "100%",
			text : "{Nameofmembertype}",
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

var fdFirstname = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({minwidth: 300}),
		content : [ new sap.m.Label({
			text : oBundle.getText("FIRST_NAME"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Firstname}"
		}),

		]
	})
   ]
});

var fdLastname = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("LAST_NAME"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Lastname}"
		}),

		]
	})
   ]
});

var fdSurnamePrefix = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("SURNAMEPREFIX"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Surnameprefix}"
		}),

		]
	})
   ]
});

var fdCountryBirth = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("COUNTRYBIRTH"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Nameoflandofbirth}"
		}),

		]
	})
   ]
});

var fdPlaceBirth = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("PLACEBIRTH"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Birthplace}"
		}),

		]
	})
   ]
});

var fdGender = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("GENDER"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Nameofgender}"
		}),

		]
	})
   ]
});

var fdNationality = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("NATIONALITY"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			text : "{Nameofnationality}"
		}),

		]
	})
   ]
});

var fdDateOfBirth = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("DATEOFBIRTH"),
			width : "100%",
			textAlign : "Right"
		}), 
		new sap.m.Text({			
			layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
			width : "100%",
			   text: {  
				    path: 'Dateofbirth',  
				    type: oTypeDate,  
				    }, 
		}),

		]
	})
   ]
});

/**
 * Botton list voor infotypes rows
 */

var fdButtonsPD = new sap.ui.layout.ResponsiveFlowLayout({
	content : [
	           new sap.m.Panel({content: [
	                                      new sap.m.Button({
	                                          icon: "sap-icon://edit",    
	                                      }),
	                                      new sap.m.Button({
	                                          icon: "sap-icon://delete",
	                                        })                              
	                                      ]}),         
   ]
}).addStyleClass("buttonRow");

var fdActionSheet = new sap.m.ActionSheet({
    title: "Choose Your Action",
    showCancelButton: true,
    placement: sap.m.PlacementType.Auto,
    buttons: [
      new sap.m.Button({
//        icon: "sap-icon://decline",
        text: oBundle.getText("PARTNER"),
      }),
      new sap.m.Button({
//        icon: "sap-icon://decline",
        text: oBundle.getText("KIND"),
      }),
    ]
  });




	
