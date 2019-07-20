sap.ui.jsview("myapp.admin", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myapp.admin
	*/ 
	getControllerName : function() {
		return "myapp.admin";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myapp.admin
	*/ 
	createContent : function(oController) {

		var aControls = [];
		
		 var titleBox = new sap.m.FlexBox({
			 id:"box0",
		    
		            items: [  
		 
			 new sap.m.Label({
				 id: "title",
				 text: "Business trips",
				 textAlign : sap.ui.core.TextAlign.Center,
				 design: sap.m.LabelDesign.Bold
			 }),
	
			 new sap.m.Label({
				 id: "description",
				 text: "The approved trips: ",
				 textAlign : sap.ui.core.TextAlign.Center,
				
			 	}),
			 ],
		 direction: "Column"
		 }).setAlignItems("Center").setWidth("100%");
		
		
		 var listApproved = new sap.m.List ({
			id: "listOfApproved",
			width: "50%",
			backgroundDesign: "Transparent",
			mode: "SingleSelect",
			

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
			  //  console.log(approved);
		    
			    if(approved !== "0"){
			    	listApproved.addItem(

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
		  
		  var buttonBox = new sap.m.FlexBox({
//		        
		         id:"box1",
		            items: [   new sap.m.Button({
		            	 id: "editBtn",
		                 text: "Edit",
		                 type : sap.m.ButtonType.Accept,
		                 press: function() {
		                  oController.editToDo();
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
		  

		  var editBox = new sap.m.FlexBox({
		         alignItems: sap.m.FlexAlignItems.Stretch,
		         alignItems: sap.m.FlexBoxAlignItemsCenter,
		         id:"editBox",
		       
		            items: [
		              
		                  
		             new sap.m.Label({
		            	 id: "Info",
		                 text: "Info about the Hotel and transportation: ",
		                // design: sap.m.LabelDesign.Bold
		             }),
		             
		             new sap.m.Input({
		                  id:"hotelName",
		                 placeholder: "Hotel name",
		              }),
		              
		          	 new sap.m.Input({
		                   id:"transport",  
		                   placeholder: "Type of transport (car, bus,..)",
		          	 }),
		          
		             new sap.m.Input({
		                  id:"insurance",
		                 placeholder: "Insurance",
		              }),
		              
		              new sap.m.Input({
		                  id:"documentation",
		                 placeholder: "Documentation",
		              }),
		            
		           
		             new sap.m.Button({
		            	 id: "submitBtn",
		                 text: "Submit",
		                 press: function() {
		                  oController.submit();
		                 }
		             }),
		             
		           
		         ],
		         direction: "Column"
		     }).setAlignItems("Center").setWidth("100%");
		  
			 aControls.push(titleBox);
			 aControls.push(listApproved);
			 aControls.push(buttonBox);
			// aControls.push(editBox);
			 
		     return aControls;


	}

});
