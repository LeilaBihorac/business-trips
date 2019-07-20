
//function loadTripList(){
//	 	 const dbRefObject = firebase.database().ref().child('trips');
//	 	 var tripList =[];
//	 
//	
//		  dbRefObject.on('child_added', snap => {
//			console.log(`key:` + snap.key);
//			var oneElement = [] ;
//	
//			oneElement.push(JSON.stringify(snap.val().destination).slice(1, -1), JSON.stringify(snap.val().dateD).slice(1, -1), JSON.stringify(snap.val().dateA).slice(1, -1), JSON.stringify(snap.val().name).slice(1, -1), JSON.stringify(snap.val().surname).slice(1, -1), JSON.stringify(snap.val().email).slice(1, -1), JSON.stringify(snap.val().id).slice(1, -1));
//
//			tripList.push(oneElement);
//			console.log(oneElement);
//		  }); 
//		  return tripList
//  	 }



sap.ui.jsview("myapp.superior", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myapp.superior
	*/ 
	
	getControllerName : function() {
		return "myapp.superior";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myapp.superior
	*/ 
	createContent : function(oController) {
	
	
		
		var aControls = [];
		var title = new sap.m.Label({
			 id: "title",
			 text: "Business trips",
			 textAlign : sap.ui.core.TextAlign.Center,
			 design: sap.m.LabelDesign.Bold
		 });
		
		var desc = new sap.m.Label({
			 id: "description",
			 text: "Select the trip that you want to approve or decline.",
			 textAlign : sap.ui.core.TextAlign.Center,
			
		 });
		
		 var list = new sap.m.List ({
			
			id: "listOfsuggestions",
			width: "50%",
			backgroundDesign: "Transparent",
			mode: "MultiSelect",
			

			});
	
		
		 const dbRefObject = firebase.database().ref().child('trips');
		 var destination
		 var dateD;
		 var dateA;
		 var name;
		 var surname;
		 var approved;
	 
	
		  dbRefObject.on('child_added', snap => {
			  	destination =  JSON.stringify(snap.val().destination).slice(1, -1);
				destination = destination.charAt(0).toUpperCase() + destination.slice(1);
			    dateD =  JSON.stringify(snap.val().dateD).slice(1, -1);
			    dateA = JSON.stringify(snap.val().dateA).slice(1, -1);
			    name = JSON.stringify(snap.val().name).slice(1, -1);
			    surname = JSON.stringify(snap.val().surname).slice(1, -1);
			    approved = JSON.stringify(snap.val().approved);
			    var i=0;
			    console.log(snap.key.substr(1));
			    console.log(approved);
		    
			    if(approved === "0"){
			    	list.addItem(

					new sap.m.StandardListItem({
						id: snap.key.substr(1),
						title : destination + " " + dateD + " - " + dateA,
						description : "Sugested by: " + name + " " + surname,
						type : "Active",
						unread: "{unread}",
						activeIcon: "sap-icon://accept",
					
						
					})   
				);
			 }
		
		  });

		  
			 var box = new sap.m.FlexBox({
//		         alignItems: sap.m.FlexAlignItems.Stretch,
//		         alignItems: sap.m.FlexBoxAlignItemsCenter,
		         id:"box1",
		       // style: "width: 40%",
		            items: [   new sap.m.Button({
		            	 id: "approveBtn",
		                 text: "Approve",
		                 type : sap.m.ButtonType.Accept,
		                 press: function() {
		                  oController.approveToDo();
		                 }
		             }),
		             
		             new sap.m.Button({
		            	 id: "declineBtn",
		                 text: "Decline",
		                 type : sap.m.ButtonType.Reject,
		                 press: function() {
		                  oController.declineToDo();
		                 }
		             }),
		             
		             new sap.m.Button({
		            	 id: 'logOutBtn',
		                 text: "Log out",
		                 press: function() {
		                  oController.LogOutDoIt();
		                 }
		             })
		         ],
		       direction: "Column"
		     }).setAlignItems("Center").setWidth("100%");

	     
	     
		 aControls.push(title);
		 aControls.push(list);
		 aControls.push(box);
		 
	     return aControls;

	    
	}

	
});


