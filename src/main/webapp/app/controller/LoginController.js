Ext.define('MVC.controller.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'MVC.view.Register',
        'MVC.view.Main'
    ],

    onLoginClick: function () {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.
        Ext.Ajax.request({
            url: 'Login',
            method: 'POST',
            params: {
                loginData: Ext.encode(form.getValues())
            },
            scope: this,
            //method to call when the request is successful
            success: this.onLoginSuccess,
            //method to call when the request is a failure
            failure: this.onLoginFailure
        });
        // Set the localStorage value to true
        //localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'main'
        });

    },

    onRegisterClick: function () {
        this.getView().destroy();

        Ext.create({
            xtype: 'register'
        }).show()
    },

    onLoginFailure: function (err) {
        //Alert the user about communication error
        Ext.MessageBox.alert('Error occured during Login', 'Please try again!');
    },

    onLoginSuccess: function (response, opts) {
        //Received response from the server
        response = Ext.decode(response.responseText);
        if (response.success) {
            Ext.MessageBox.alert('Successful Login', response.message);
        }
        else {
            Ext.MessageBox.alert('Login failed', response.message);
        }
    }
});