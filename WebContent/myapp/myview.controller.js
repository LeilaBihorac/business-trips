

sap.ui.controller("myapp.myview", {
	
	onBeforeRendering: function() {
		firebase.auth().signOut();
			},
	
	loginToDo: function(oEvent) {
		var email = sap.ui.getCore().getElementById("e-mail").getValue(); 
		var password = sap.ui.getCore().getElementById("password").getValue(); 
		const auth = firebase.auth();
		//Sign in
		var promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));

	},



	signUpToDo: function(oEvent) {
		var email = sap.ui.getCore().getElementById("e-mail").getValue(); 
		var password = sap.ui.getCore().getElementById("password").getValue(); 
		const auth = firebase.auth();
		//Sign in
		var promise = auth.createUserWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
	},
	
	onAfterRendering: function() {
		firebase.auth().onAuthStateChanged(firebaseUser =>{
			if(firebaseUser){
				console.log(firebaseUser.email);
				if(firebaseUser.email==='nadredjeni@gmail.com')
					window.location = 'superior.html';
				else if(firebaseUser.email==='administrator@gmail.com')
					window.location = 'admin.html';
				else 
					window.location = 'employee.html';
				//sap.m.URLHelper.redirect("http://localhost:39933/MyApp/employee.html");
				//window.location = 'superior.html';
			} else {
				console.log('not logged in');
			}
		})
			},
	
	
//		
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myapp.myview
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myapp.myview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myapp.myview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myapp.myview
*/
//	onExit: function() {
//
//	}

});