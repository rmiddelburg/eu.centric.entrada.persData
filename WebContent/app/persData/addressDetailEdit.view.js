sap.ui.jsview("app.persData.addressDetailEdit", {

  /**
   * Specifies the Controller belonging to this View. In the case that it is
   * not implemented, or that "null" is returned, this View does not have a
   * Controller.
   * 
   * @memberOf app.persData.familyDetailEdit
   */
  getControllerName : function() {
    return "app.persData.addressDetailEdit";
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
	    sap.ui.getCore().attachValidationError(function (evt) {
		      var control = evt.getParameter("element");
		      if (control && control.setValueState) {
		        control.setValueState("Error");
		      }
		    });
		    sap.ui.getCore().attachValidationSuccess(function (evt) {
		      var control = evt.getParameter("element");
		      if (control && control.setValueState) {
		        control.setValueState("None");
		      }
		    });

		    this.nationality = new sap.m.Select({selectedKey:{
				path : '/Country',
				type : new sap.ui.model.type.String(),
				formatter : function(Country) {
						return Country;
				}}});
		    
		    this.nationalitySelectItems = new sap.ui.core.Item({key: "{Land1}",text: "{Landx50}"});
		    
		    
		    this.countrySelect = new sap.m.Select({selectedKey:{
				path : '/Country',
				}});
		    this.coutrySelectItems = new sap.ui.core.Item({key: "{Land1}",text: "{Landx50}"});
     var addressPeriodSimpleForm = new sap.ui.layout.form.SimpleForm({
    	        
		        minWidth : 1024,
		        maxContainerCols : 2,
		        editable: true,
		        content : [
		                   new sap.ui.core.Title({ // this starts a new group
		                       text:"Periode"
		                     }), 
		                     new sap.m.Label({text: oBundle.getText("BEGDA")}),                
		                   new sap.m.DateTimeInput({
		        	enabled: false,
		            value: "{Validitybegin}",
		                     valueFormat : "yyyy-mm-ddThh:mm:ss",
		                     displayFormat : "dd MMMM, yyyy",}),
		                     new sap.m.Label({text: oBundle.getText("ENDDA")}), 
		                     new sap.m.DateTimeInput({
		                  	   enabled: false,
		                         value: "{Validityend}",
		                                  valueFormat : "yyyy-mm-ddThh:mm:ss",
		                                  displayFormat : "dd MMMM, yyyy",}),   
		          
		                   ]});	    

    var addressSimpleForm = new sap.ui.layout.form.SimpleForm({
      minWidth : 1024,
      maxContainerCols : 2,
      editable: true,
      content : [
        new sap.ui.core.Title({ // this starts a new group
          text:"{Nameofaddresstype}"
        }),         
        new sap.m.Label({text: oBundle.getText("STREET"),required: true}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter street', value: "{Street}"}),
        new sap.m.Label({text: oBundle.getText("HOUSENUMBER"),required: true}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter housenumber', value: "{Housenumber}"}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter appartmentid', value: "{Apartmentid}"}),
        new sap.m.Label({text: oBundle.getText("POSTELCODE_CITY"),required: true}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter postalcode', value: "{Postalcodecity}"}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Cite', value: "{City}"}),
        new sap.m.Label({text: oBundle.getText("COUNTRY")}),
       this.nationality
      ]
    });

    return new sap.m.Page({
      title : oBundle.getText("ADDRESS_EDIT_HEADER"),
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
      content : [addressPeriodSimpleForm, addressSimpleForm,]

    });
  }

});