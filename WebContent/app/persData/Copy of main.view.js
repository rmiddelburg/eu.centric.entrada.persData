sap.ui.jsview("app.Main.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.Main.main
	*/ 
	getControllerName : function() {
		return "app.Main.main";
	},


	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.Main.main
	*/ 
	createContent : function(oController) {
		
		jQuery.sap.require("sap.m.MessageToast");
        jQuery.sap.require("sap.m.MessageBox");
//        jQuery.sap.initMobile();

        jQuery.sap.require("sap.m.MessageToast");
        jQuery.sap.require("sap.ui.core.format.DateFormat");
		
        var oFacetData = {
                overview: oGeneralFacetGroup,
                controllingDocs: oListControllingDocsGroup,
                orders: oListOrdersFormGroup,
                quotation: oSalesQuotationFormGroup,
                contactsImages: oContactsWithImagesFormGroup,
                attachments: oAttachmentsContent,
                storageLocation: oStorageLocationsContent,
                relatedArticles: oRelatedArticlesContent
            };
        
        function setFacetContent(sKey) {
            oUTI.navigateToDetailWithContent(oFacetData[sKey]);
    }

		
        var oData = {
               title: oBundle.getText("PERSONAL_PROFILE"),
                name: "Frozen Strawberries",
                //name: "FrozenStrawberries FrozenStrawberrie",
                description: "2901972",
/*                kpis: [{
                    value: "In Approval",
                    description: "Status",
                    doubleFontSize: false,
                    valueStatus: sap.suite.ui.commons.ValueStatus.Critical
                }, {
                    value: "32",
                    valueScale: "M",
                    valueUnit: "USD",
                    description: "Gross national program",
                    valueStatus: sap.suite.ui.commons.ValueStatus.Good
                }, {
                    value: "Finished Product",
                    description: "Material Type",
                    doubleFontSize: false
                }], */
                transactions : [
                    {
                        text:"Transaction 1"
                        },
                    {
                        text:"Transaction 2"
                    },
                    {
                        text : "sap.com",
                        href : "http://www.sap.com"
                    }
                ],
                actions : [
                    {
                        icon : "sap-icon://log",
                        text : "Afmelden",
                        press : function (){
                        	sap.m.MessageBox.show(
                                    "Wanneer u OK kiest sluit u het programma af!",
                                    "sap-icon://hint",
                                    "Afmelden?",
                                    [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL ],
                                    function (oAction) {
                                        if (oAction == sap.m.MessageBox.Action.OK) {
                                            var stype = location.protocol;
                                            var host = location.host;
                                             var url = stype + "//"+ host + "/sap/public/bc/icf/logoff";
                                              window.open(url,"_self");
                                      }else{
                                        sap.ui.getCore().getEventBus().publish("nav", "back");                                      }
                                    }
                                  );
                        }
                   },
                   {
                       icon : "sap-icon://home",
                       text : "Start Menu",
                           press : function (){var stype = location.protocol;
                           var host = location.host;
                           var url = stype + "//"+ host + "/sapui5/index.html";	                                    
                            window.open(url,"_self");}
                   },
                 ]
            };
            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(oData);

            var oKpiTemplate = new sap.suite.ui.commons.KpiTile({
                value: "{value}",
                description: "{description}",
                valueScale: "{valueScale}",
                valueUnit: "{valueUnit}",
                doubleFontSize: "{doubleFontSize}",
                valueStatus: "{valueStatus}"
            });
            
            var oButtonTempl = new sap.m.Button({
                icon : "{icon}",
                text : "{text}",
                press: "{press}"
    //            press : function(oE) {
    //                sap.m.MessageToast.show(this.getText() +  " action pressed.")
    //            }
            });
            
            var oLinkTempl = new sap.m.Link({
                text : "{text}",
                href : "{href}",
                press : function(oE) {
                    sap.m.MessageToast.show(this.getText() +  " selected.")
                }
            });
            
            

        
        oUTI = new sap.suite.ui.commons.UnifiedThingInspector({
            id : "unified",
//            icon: "images/strawberries_frozen.jpg",
            icon: "sap-icon://business-one",
            title : "{/title}",
            name : "{/name}",
            description : "{/description}",
            actionsVisible : true,
            transactionsVisible : false,
              kpis : {
                path : "/kpis",
                template : oKpiTemplate
            },
            facets : [ 
                    oPersonalDataFacet,
//                  oGeneralFacet, 
//                    oOrdersFacet, 
//                    oActivityTypesFacet,
//                   oControllingDocsFacet, 
//                    oContactsFacet,
//                    oAttachmentsFacet, oStorageFacet, oSalesFacet, oArticlesFacet, 
//                    oSalesOrgFacet */
                    ],
            backAction : function() {
                sap.m.MessageToast.show("Back action pressed.")
            },
            transactions : {
                path:"/transactions", 
                template : oLinkTempl
            },
            actions : {
                path: "/actions",
                template : oButtonTempl,
            }
        });
          
        oUTI.attachConfigurationButtonPress(function(oE){
//            sap.m.MessageToast.show("Configuration button pressed.");
//        	oActionSheet.setPlacement(sap.m.PlacementType.Vertical);
			oActionSheet.setShowCancelButton(true);
			oActionSheet.openBy(this);
        });

        oUTI.attachTransactionsButtonPress(function(oE){
  
              
        });
            
        
        oUTI.setModel(oModel1);
		
		this.page1 = new sap.m.Page({setShowHeader: true,
                content: []
	  });
	
//		this.page1.setContent(this.oFacet);
//	this.page1.setEnableScrolling(false).setShowHeader(false);
//	return this.page1;
		return oUTI;
	}
	
});


var oActionSheet = new sap.m.ActionSheet("actionSheet1", {
	showCancelButton: false,
	buttons: [
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		})
	],
	placement: sap.m.PlacementType.Top,
	cancelButtonPress: function(){
		jQuery.sap.log.info("sap.m.ActionSheet: cancelButton is pressed");
	}
});
