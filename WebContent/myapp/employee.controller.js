function writeNewTrip(name, surname, destination, dateD, dateA, approved, email) {
  // A post entry.
  var postData = {
    name: name,
    surname: surname,
    destination: destination,
    dateD: dateD,
    dateA: dateA,
    approved: approved,
    email: email
  };

  // Get a key for a new Post.
  var newTripKey = firebase.database().ref().child("trips").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/trips/' + newTripKey] = postData;
 // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

sap.ui.controller("myapp.employee", {

	submit : function(oEvent) {
		var name = sap.ui.getCore().getElementById("name").getValue(); 
		var surname = sap.ui.getCore().getElementById("surname").getValue(); 
		var destination = sap.ui.getCore().getElementById("place").getValue(); 
		var dateD = sap.ui.getCore().getElementById("dateD").getValue(); 
		var dateA = sap.ui.getCore().getElementById("dateA").getValue(); 
		var approved = 0;
		var email = firebase.auth().currentUser.email;
		
		writeNewTrip(name, surname, destination, dateD, dateA, approved, email);
		window.location = 'employee.html';
		
	},
	
	LogOutDoIt : function() {
		firebase.auth().signOut();
		window.location = 'index.html';
			},
			
	 onAfterRendering: function() {
		firebase.auth().onAuthStateChanged(firebaseUser =>{
			if(firebaseUser){
				console.log(firebaseUser);
						
			} else {	
				console.log('not logged in');
					}
				})
			},

		
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myapp.employee
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myapp.employee
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myapp.employee
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myapp.employee
*/
//	onExit: function() {
//
//	}

});