sap.ui.jsview("app.persData.assignmentList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.persData.personalData
	*/ 
	getControllerName : function() {
		return "app.persData.assignmentList";
	},

	
	onBeforeShow : function(oEvent) {
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
	
	 this.assignmentForm = new sap.ui.layout.form.Form("assignment",{
         layout: new sap.ui.layout.form.ResponsiveGridLayout("L1",{labelSpanL : 6,labelSpanM : 5,columnsL : 1,columnsM : 1,breakpointL : 800,breakpointM : 400}),
//			labelSpanS : 4,
//			emptySpanL : 2,
//			emptySpanM : 2,
//			emptySpanS : 1,
         formContainers: [
                 new sap.ui.layout.form.FormContainer("F1C1",{
                         title: new sap.ui.core.Title({text: {
//                        	 layoutdata: new sap.ui.layout.ResponsiveFlowLayoutData({weight : 2,}),
             				parts:[
            						{path: 'Validitybegin', type : this.oTypeDate},
            						{path: 'Validityend', type : this.oTypeDate}     
            				       ],
            				formatter : function(Validitybegin, Validityend) {
            					return " (" + oBundle.getText("BEGDA") +Validitybegin + " " + oBundle.getText("ENDDA") + Validityend + ")";
            				}
                			},
                         }),
                         formElements: [            
                                        new sap.ui.layout.form.FormElement({label: oBundle.getText("ORGANISATION"),fields: [new sap.m.Text({text: "{OrganisationUnitStext}"}),]}),
                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("JOB"), fields: [new sap.m.Text({text: "{JobStext}"}),]}),
                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("SUBPERSONALNUMBER"),fields: [new sap.m.Text({text: "{Employeenumber}"}),]}),
//                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("COUNTRYBIRTH"),fields: [new sap.m.Text({text: "{Nameoflandofbirth}"}),]}),
//                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("PLACEBIRTH"),fields: [new sap.m.Text({text: "{Birthplace}"}),]}),
//                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("NATIONALITY"),fields: [new sap.m.Text({text: "{Nameofnationality}"}),]}),
//                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("GENDER"),fields: [new sap.m.Text({text: "{Nameofgender}"}),]}),
//                                 new sap.ui.layout.form.FormElement({label: oBundle.getText("DATEOFBIRTH"),fields: [new sap.m.Text({text: {path : 'Dateofbirth',type : this.oTypeDate,},}),]}),                                     
                                      ]
                 	}),
               
         ]
 });

	this.pull = new sap.m.PullToRefresh({
		description : "",
//		visible : !jQuery.device.is.desktop,
		refresh : [ oController, oController.onPull ]
	});

	this.assignmentItemTemplate = new sap.m.CustomListItem({content : [this.assignmentForm,]});
	this.assignmentList = new sap.m.List({});

	return new sap.m.Page({
		title : oBundle.getText("ASSIGNMENT_LIST_HEADER"),
		headerContent : [ new sap.m.Button({
			icon : "sap-icon://home",
			press : oController.onHomeButton
		}), new sap.m.Button({
			icon : "sap-icon://log",
			press : oController.onLogoutButton
		}) ],
		footer : new sap.m.Bar({
			contentRight : [ 
			    new sap.m.Button({
				text : oBundle.getText("NEW"),
				icon : "sap-icon://add",
				visible: false,
			}), 
			],
		}),
		setShowHeader : true,
		showNavButton : true,
		navButtonTap : [ oController.onNavButtonTap, oController ],
		content : [ this.pull, 
		            this.assignmentList
		            ]
	});
}
});