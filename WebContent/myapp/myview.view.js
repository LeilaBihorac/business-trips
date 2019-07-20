 sap.ui.jsview("myapp.myview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myapp.myview
	*/
	getControllerName : function() {
		return "myapp.myview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myapp.myview
	*/
	createContent : function(oController) {
	
	       
	 var aControls = [];
	 
	 var box = new sap.m.FlexBox({
         alignItems: sap.m.FlexAlignItems.Stretch,
         alignItems: sap.m.FlexBoxAlignItemsCenter,
         id:"box0",
            items: [
             new sap.m.Label({
            	 id: "title",
                 text: "Business trips",
                 design: sap.m.LabelDesign.Bold
             }),
             new sap.m.Input({
                  id:"e-mail",
                 placeholder: "e-mail",
                
                	 }),
             new sap.m.Input({
                 id: "password",
                 type: sap.m.InputType.Password,
                 placeholder: "password"
             }),
             new sap.m.Button({
                 text: "Login",
                 press: function() {
                  oController.loginToDo();
                 }
             }),
             
             new sap.m.Button({
                 text: "Sign up",
                 press: function() {
                  oController.signUpToDo();
                 }
             })
         ],
         direction: "Column"
     }).setAlignItems("Center").setWidth("100%");

	 aControls.push(box);
     return aControls;
  }
	

}); 
 
 

