sap.ui.jsview("app.persData.addressDetailNew", {

  /**
   * Specifies the Controller belonging to this View. In the case that it is
   * not implemented, or that "null" is returned, this View does not have a
   * Controller.
   * 
   * @memberOf app.persData.familyDetailEdit
   */
  getControllerName : function() {
    return "app.persData.addressDetailNew";
  },

   onBeforeShow : function(oEvent) {
 //   this.getController().onBeforeShow(oEvent.data);
   },


  /**
   * Is initially called once after the Controller has been instantiated. It
   * is the place where the UI is constructed. Since the Controller is given
   * to this method, its event handlers can be attached right away.
   * 
   * @memberOf app.persData.familyDetailEdit
   */
  createContent : function(oController) {
	    var today = new Date();
	    var dd = today.getDate();
	    var mm = today.getMonth(); //January is 0!

	    var yyyy = today.getFullYear();
	    if(dd<10){dd = '0' + dd } if(mm<10){mm ='0'+ mm } var today = yyyy+'-'+mm+'-'+dd+'T00:00:00';
	    
	    
	    this.countrySelect = new sap.m.Select("countrySelectId");
	    this.countrySelectItems = new sap.ui.core.Item("countrySelectItemId",{key: "{Land1}", text: "{Landx50}"});
	    this.addressTypeSelect = new sap.m.Select("addressTypeSelectId");
	    this.addressTypeSelectItems = new sap.ui.core.Item({key: "{Subtype}",text: "{SubtypeText}"});
	    
	    var addressTypeSimpleForm = new sap.ui.layout.form.SimpleForm({
	        minWidth : 1024,
	        maxContainerCols : 2,
	        editable: true,
	        content : [
	          new sap.ui.core.Title({ // this starts a new group
	            text:"Adrestype"
	          }),         
	          new sap.m.Label({text: oBundle.getText("ADDRESSTYPE"),required: true}),
	          this.addressTypeSelect,
	        ]
	      });    
	    

	    
	
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
		        	enabled: true,
		            value : today,
		                     valueFormat : "yyyy-mm-ddThh:mm:ss",
		                     displayFormat : "dd MMMM, yyyy",}),
		                     new sap.m.Label({text: oBundle.getText("ENDDA")}), 
		                     new sap.m.DateTimeInput({
		                  	   enabled: true,
		                         value: "9999-07-31T00:00:00",
		                                  valueFormat : "yyyy-mm-ddThh:mm:ss",
		                                  displayFormat : "dd MMMM, yyyy",}),   
		          
		                   ]});	    

    var addressSimpleForm = new sap.ui.layout.form.SimpleForm({
      minWidth : 1024,
      maxContainerCols : 2,
      editable: true,
      content : [
        new sap.ui.core.Title({ // this starts a new group
          text:"Adres"
        }),         
        new sap.m.Label({text: oBundle.getText("STREET"),required: true}),
 //       new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter street', value: "{Street}"}),
        new sap.m.Input("streetId",{type: sap.m.InputType.Text,placeholder: oBundle.getText("STREET_PLACEHOLDER"), value: "{Street}"}),
        new sap.m.Label({text: oBundle.getText("HOUSENUMBER"),required: true}),
        new sap.m.Input("houseNumberId",{type: sap.m.InputType.Text,placeholder: oBundle.getText("HOUSENUMBER_PLACEHOLDER"), value: "{Housenumber}"}),
        new sap.m.Input("apartmentId",{type: sap.m.InputType.Text,placeholder: oBundle.getText("APARTMENT_PLACEHOLDER"), value: "{Apartmentid}"}),
        new sap.m.Label({text: oBundle.getText("POSTELCODE_CITY"),required: true}),
        new sap.m.Input("postalCodeId",{type: sap.m.InputType.Text,placeholder:oBundle.getText("POSTALCODE_PLACEHOLDER"), value: "{Postalcodecity}"}),
        new sap.m.Input("cityId",{type: sap.m.InputType.Text,placeholder: oBundle.getText("CITY_PLACEHOLDER"), value: "{City}"}),
        new sap.m.Label({text: oBundle.getText("COUNTRY"),required: true}),
        this.countrySelect,
        new sap.m.Label({text: oBundle.getText("DISTANCE")}),
        new sap.m.Input("distanceId",{type: sap.m.InputType.Text,placeholder: oBundle.getText("DISTANCE_PLACEHOLDER"), value: "{Distanceinkm}"}),
        new sap.m.Label({text: oBundle.getText("PHONE")}),
        new sap.m.Input("phoneNumberId",{type: sap.m.InputType.Text,placeholder: oBundle.getText("PHONE_PLACEHOLDER"), value: "{Telephonenumber}"}),
 //       this.countrySelect,
      ]
    });

    return new sap.m.Page({
      title : oBundle.getText("ADDRESS_NEW_HEADER"),
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
      content : [addressTypeSimpleForm, addressPeriodSimpleForm, addressSimpleForm,]

    });
  }

});