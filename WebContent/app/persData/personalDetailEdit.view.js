sap.ui.jsview("app.persData.personalDetailEdit", {

  /**
   * Specifies the Controller belonging to this View. In the case that it is
   * not implemented, or that "null" is returned, this View does not have a
   * Controller.
   * 
   * @memberOf app.persData.familyDetailEdit
   */
  getControllerName : function() {
    return "app.persData.personalDetailEdit";
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

    this.titleSelect = new sap.m.Select({});
    this.acadamicSelect = new sap.m.Select({}); 
    this.prefixSelect = new sap.m.Select({});
    this.maritalSelect = new sap.m.Select({});
    this.prefixPartnerSelect = new sap.m.Select({});
    this.nationality = new sap.m.Select({});
    this.nationalitySecond = new sap.m.Select({});
    this.nationalityThird = new sap.m.Select({});
    this.languageSelect = new sap.m.Select({});
    this.titleSelectItems = new sap.ui.core.Item({key: "{Ttout}",text: "{Ttout}"});
    this.nationalitySelectItems = new sap.ui.core.Item({key: "{Land1}",text: "{Land1}"});
    this.maritalSelectItems = new sap.ui.core.Item({key: "{Famst}",text: "{Ftext}"});
    this.languageSelectItems = new sap.ui.core.Item({key: "{Sprsl}", text: "{Sptxt}"});


    var NaamSimpleForm = new sap.ui.layout.form.SimpleForm({
      minWidth : 1024,
      maxContainerCols : 2,
      editable: true,
      content : [
        new sap.ui.core.Title({ // this starts a new group
          text: oBundle.getText("NAME")
        }),
/*        new sap.m.Label({text: oBundle.getText("AANHEF")}),
        new sap.m.Select({
          items: [new sap.ui.core.Item({key: "1",text: oBundle.getText("AANHEF_H")}),
                  new sap.ui.core.Item({key: "2",text: oBundle.getText("AANHEF_V")}),
          ],
        }),*/
        new sap.m.Label({text: oBundle.getText("ACADAMIC_TITLE")}),
        this.titleSelect,
        this.acadamicSelect,
        new sap.m.Label({text: oBundle.getText("FIRST_NAME")}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Firstname}"}),
        new sap.m.Label({text: oBundle.getText("CALL_NAME")}),
        new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Knownas}"}),
        new sap.m.Label({text: oBundle.getText("INITIALS"),required: true}),
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
            new sap.m.Label({text: oBundle.getText("SURNAMEPREFIX")}),
                        this.prefixSelect,
            new sap.m.Label({text: oBundle.getText("NAMEOFBIRTH"),required: true}),
            new sap.m.Input("nameInput",{type: sap.m.InputType.Text,                                     
                           placeholder: 'Enter ...', 
                           valueStateText: "Dit is een test",
                           value: "{path : 'Lastname', type : new sap.ui.model.type.String(), constraints : {minLength: 1}}"}),
            new sap.m.Label({text: oBundle.getText("DATEOFBIRTH"),required: true}),
            new sap.m.DateTimeInput({
              value: "{Dateofbirth}",
                       valueFormat : "yyyy-mm-ddThh:mm:ss",
                       displayFormat : "dd MMMM, yyyy",}),
            new sap.m.Label({text: oBundle.getText("PLACEBIRTH")}),
            new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Birthplace}"}),
//            new sap.m.Label({text: oBundle.getText("COUNTRYBIRTH")}),
//            this.countryBirth,
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
                 new sap.m.Label({text: oBundle.getText("SURNAMEPREFIX")}),
                 this.prefixPartnerSelect,
                 new sap.m.Label({text: oBundle.getText("PARTNERNAME")}),
                 new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Secondname}"}),     
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
                 new sap.m.Label({text: oBundle.getText("MARITALSTATUS")}),
                 this.maritalSelect.setSelectedKey('Famst'),
//              new sap.m.Label({text: oBundle.getText("MARITALDATE")}),
              new sap.m.DateTimeInput({
                         value : "{Maritalstatussince}",
                         valueFormat : "yyyy-mm-ddThh:mm:ss",
                         displayFormat : "dd MMMM, yyyy",}),
              new sap.m.Label({text: oBundle.getText("CHILDERN")}),
              new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Numberofchildren}"}),
              ]
      });

    var furtherSimpleForm = new sap.ui.layout.form.SimpleForm({
      minWidth : 1024,
      maxContainerCols : 2,
      editable: true,
      content : [
            new sap.ui.core.Title({ // this starts a new group
              text: oBundle.getText("GENERALFORM")
            }),
            new sap.m.Label({text: oBundle.getText("LANGUAGE"),required: true}),
            this.languageSelect,
            new sap.m.Label({text: oBundle.getText("NATIONALITY"),required: true}),
            this.nationality.setSelectedKey('Nationality'),
                   new sap.m.Label({text: oBundle.getText("PARTNERNAME")}),
                   new sap.m.Input({type: sap.m.InputType.Text,placeholder: 'Enter Name ...', value: "{Nationality}"}), 
            new sap.m.Label({text: oBundle.getText("SECONDNATIONALITY")}),
            this.nationalitySecond,
            new sap.m.Label({text: oBundle.getText("THIRDNATIONALITY")}),
            this.nationalityThird,
      ]
    });

    return new sap.m.Page({
      title : oBundle.getText("PERSONAL_EDIT_HEADER"),
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