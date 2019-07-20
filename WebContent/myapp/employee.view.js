sap.ui.jsview("myapp.employee", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myapp.employee
	*/ 
	getControllerName : function() {
		return "myapp.employee";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myapp.employee
	*/ 
	createContent : function(oController) {
		
		 var aControls = [];
		 var box = new sap.m.FlexBox({
	         alignItems: sap.m.FlexAlignItems.Stretch,
	         alignItems: sap.m.FlexBoxAlignItemsCenter,
	         id:"box1",
	            items: [
	              new sap.m.Label({
	               	 id: "title",
	                 text: "Business trips",
	                 design: sap.m.LabelDesign.Bold
	                  }),
	                  
	             new sap.m.Label({
	            	 id: "personalInfo",
	                 text: "Personal info",
	                // design: sap.m.LabelDesign.Bold
	             }),
	             
	             new sap.m.Input({
	                  id:"name",
	                 placeholder: "Name",
	              }),
	              
	          	 new sap.m.Input({
	                   id:"surname",  
	                   placeholder: "Surname",
	          	 }),
	          	 
	          	 new sap.m.Label({
	            	 id: "tripInfo",
	                 text: "Info about the trip",
	                // design: sap.m.LabelDesign.Bold
	             }),
	             
	             new sap.m.Input({
	                  id:"place",
	                 placeholder: "Destination that you want to visit",
	              }),
	              
	          	 new sap.m.FlexBox({
	    	         alignItems: sap.m.FlexAlignItems.Stretch,
	    	         alignItems: sap.m.FlexBoxAlignItemsCenter,
	    	         id:"dateBox",    
	    	         items: [
	    	        	 new sap.m.Input({
	  	                   id:"dateD",  
	  	                   placeholder: "Date od departure",
	    	        	 }),
	  	                
	  	                 new sap.m.Input({
	  	                   id:"dateA",  
	  	                   placeholder: "Date od arrival",
	  	          	    }),	 
	    	         ],
	          	 direction: "Row"
	            }),
	           
	             new sap.m.Button({
	                 text: "Submit",
	                 press: function() {
	                  oController.submit();
	                 }
	             }),
	             
	             new sap.m.Button({
	            	 
	                 text: "Log out",
	                 press: function() {
	                  oController.LogOutDoIt();
	                 }
	             })
	         ],
	         direction: "Column"
	     }).setAlignItems("Center").setWidth("100%");
		
		 aControls.push(box);
	     return aControls;

	}

});
