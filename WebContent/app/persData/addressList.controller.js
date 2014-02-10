sap.ui.controller("app.persData.addressList", {

/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf app.persData.personalData
 */
	onInit: function() {
	  	this.loadContent();
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf app.persData.personalData
 */
// onBeforeRendering: function() {
//
// },

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf app.persData.personalData
 */
// onAfterRendering: function() {
//
// },

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf app.persData.personalData
 */
// onExit: function() {
//
// }
	
	
    loadContent: function(){
   	var view = this.getView();
    	view.addressList.bindItems("/AddressSet",view.addressItemTemplate);
},   
	
	onNavButtonTap : function() {
        sap.ui.getCore().getEventBus().publish("nav", "back");   
	},
	
	onHomeButton : function() {
        var stype = location.protocol;
        var host = location.host;
         var url = stype + "//"+ host + "/sapui5/index.html";	                                    
          window.open(url,"_self");
    },	

    onLogoutButton : function(){
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
                                   }
              }
            );
          },
          
          onDeleteButton : function() {
      		sap.m.MessageBox.show(oBundle.getText("DELETE_FAMILY"),
      				"", oBundle.getText("DELETE_ROW_DEL"), [ sap.m.MessageBox.Action.YES,
      						sap.m.MessageBox.Action.NO], function(oAction) {
      					if (oAction == sap.m.MessageBox.Action.YES) {
      						oController.deleteAddress(oEvent);
      					} else {

      					}
      				});
      	},
      	
      	onAddressEdit : function(oEvent) {
      	
      		 var oBindingContext = oEvent.oSource.getBindingContext();
      		sap.ui.getCore().getEventBus().publish("nav", "to", {
      			viewId : "app.persData.addressDetailEdit",
      		 data : { bindingContext : oBindingContext
      		 }
      		});
      	},
      	
      	onAddressNew : function(oEvent) {
      		sap.ui.getCore().getEventBus().publish("nav", "to", {
        		viewId : "app.persData.addressDetailNew",
        		data : ""
            });
     	},
      	
    	onPull : function(oEvent, oController) {
    		oController.loadContent(oController.oBindingContext);
    		this.hide();
    	},
    	
    	
    	deleteAddress: function(oEvent){
    		BusyDialog.open;
			var oBindingContext = oEvent.oSource.getBindingContext();
//type + "//" + host +
//			var DeleteConnetion = "https://ecd.centriconderwijs.eu/sap/opu/odata/CTR/ENTRADA_PERSOON_ODTA_SRV/" + oBindingContext.getPath();
			var serviceUrl = "/sap/opu/odata/CTR/ENTRADA_PERSOON_ODTA_SRV/";
			var deleteConnection = location.protocol + "//"+ location.hostname + serviceUrl + oBindingContext.getPath();

		    
		    OData.request({  requestUri: deleteConnection ,  
                   method: "GET",  
                   headers:  
                       {       
  "X-Requested-With": "XMLHttpRequest", 
   "Content-Type": "application/atom+xml", 
  "DataServiceVersion": "2.0",          
  "X-CSRF-Token":"Fetch"  
                         }                    
                },
                function (data, response) 
                {  
                       header_xcsrf_token = response.headers['x-csrf-token']; 
           OData.request 
           ({ 
            requestUri: deleteConnection,
            	method: "DELETE",  
            	headers: {  
                    "X-Requested-With": "XMLHttpRequest",                        
                    "Content-Type": "application/atom+xml", 
                    "DataServiceVersion": "2.0",  
                    "X-CSRF-Token": header_xcsrf_token  
                         } 
                   },  
                     function (data, request) 
                     { 
                    document.location.reload(true);
                          BusyDialog.close; 
                      },  
                    function (err)  
                    { 
                    	  BusyDialog.close;                              
                     } 
           ); 
       }, 
         function (err)  
             { 
    	              BusyDialog.close; 
    	              var request     = err.request;  
                      var response = err.response;  
                      alert("Error in Get -- Request "+request+" Response "+response); 
             } 
       ); 
        }   	
});