sap.ui.controller("myapp.admin", {

	editToDo : function(oEvent) {
//		sap.ui.getCore().getElementById("box0").view = "blocked";
		 var oDialog1 = new sap.ui.core.Popup(sap.ui.getCore().getElementById("editBox"));
		    oDialog1.setModal(true);
			oDialog1.open();
	 },
	
		LogOutDoIt : function() {
			firebase.auth().signOut();
			window.location = 'index.html';
				},
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myapp.admin
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myapp.admin
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myapp.admin
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myapp.admin
*/
//	onExit: function() {
//
//	}

});