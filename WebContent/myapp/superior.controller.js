sap.ui.controller("myapp.superior", {

	declineToDo : function(oEvent) {
		var declinedTrips = sap.ui.getCore().getElementById("listOfsuggestions").getSelectedItems(); 
		for (var i=0; i<declinedTrips.length; i++){
			var itemId = "-" + declinedTrips[i].getId();
			let itemRef = firebase.database().ref('trips/' + itemId);
			    itemRef.remove();

			
		}

		window.location = 'superior.html';
	  
	   },
	   
	   approveToDo : function(oEvent) {
			var approvedTrips = sap.ui.getCore().getElementById("listOfsuggestions").getSelectedItems(); 
			for (var i=0; i<approvedTrips.length; i++){
				var itemId ="-" + approvedTrips[i].getId();
			//	let itemRef = firebase.database().ref();
//				console.log(itemRef);
//				itemRef.child('approved').update(1);
				 firebase.database().ref('trips/' + itemId).update({
					   approved: "1"
				 });
			
//				
				}

			window.location = 'superior.html';
		  
		   },


	LogOutDoIt : function() {
		firebase.auth().signOut();
		window.location = 'index.html';
			},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myapp.superior
*/
//	onInit: function() {
//	
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myapp.superior
*/
//	
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myapp.superior
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myapp.superior
*/
//	onExit: function() {
//
//	}

});