jQuery.sap.declare("util.forms.personalData");
jQuery.sap.require("sap.ui.core.format.DateFormat");
sap.ui.localResources("i18n");


var oTypeDate = new sap.ui.model.type.Date({
	// source: {pattern: "yyyy-MM-ddT00:00:00"},
	source : {
		pattern : "yyyy-MM-ddTHH:mm:ss"
	},
	style : "long"
});

var pdPeriod = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		// layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({minwidth:
		// 300}),
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

var firstname = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
			minwidth : 300
		}),
		content : [ new sap.m.Label({
			text : oBundle.getText("FIRST_NAME"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Firstname}"
		}),

		]
	}) ]
});

var lastname = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("LAST_NAME"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Lastname}"
		}),

		]
	}) ]
});

var surnamePrefix = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("SURNAMEPREFIX"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Surnameprefix}"
		}),

		]
	}) ]
});

var countryBirth = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("COUNTRYBIRTH"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Nameofcountryofbirth}"
		}),

		]
	}) ]
});

var placeBirth = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("PLACEBIRTH"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Birthplace}"
		}),

		]
	}) ]
});

var gender = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("GENDER"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Nameofgender}"
		}),

		]
	}) ]
});

var spokenLanguage = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("LANGUAGE"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Nameoflanguage}"
		}),

		]
	}) ]
});

var Nationality = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("NATIONALITY"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Nameofnationality}"
		}),

		]
	}) ]
});

var secondNationality = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("SECONDNATIONALITY"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Nameofsecondnationality}"
		}),

		]
	}) ]
});

var dateOfBirth = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("DATEOFBIRTH"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : {
				path : 'Dateofbirth',
				type : oTypeDate,
			},
		}),

		]
	}), ]
});

var academicGrade = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.ui.layout.ResponsiveFlowLayout({
		layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({}),
		content : [ new sap.m.Label({
			text : oBundle.getText("ACADEMICTITLE"),
			width : "100%",
			textAlign : "Right"
		}), new sap.m.Text({
			layoutdata : new sap.ui.layout.ResponsiveFlowLayoutData({
				weight : 2,
			}),
			width : "100%",
			text : "{Academicgrade}"
		}),

		]
	}) ]
});

/**
 * Botton list voor infotypes rows
 */

var buttonsPD = new sap.ui.layout.ResponsiveFlowLayout({
	content : [ new sap.m.Panel({
		content : [ new sap.m.Button({
			icon : "sap-icon://edit",
//			visible : "{Del_button}"
		}), new sap.m.Button({
			icon : "sap-icon://delete",
			visible : "{Del_button}"
		}) ]
	}), ]
}).addStyleClass("buttonRow");




