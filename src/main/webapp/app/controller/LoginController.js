Ext.define('MVC.controller.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'MVC.view.Register',
        'MVC.view.Main'
    ],

    views: [
        'MVC.view.Login'
    ],

    store: 'TestStore',

    init: function () {
        this.control({
            'login button[action=login]': {
                click: this.onLoginClick
            }
        });
    },

    /**
     * Получаем данные из формы, отправляем на сервер
     */
    onLoginClick: function (button) {

        var form = button.up('form').getForm();

        Ext.Ajax.request({
            url: 'login',
            method: 'POST',
            params: {
                loginData: Ext.encode(form.getValues())
            },
            scope: this,
            success: this.onLoginSuccess,
            failure: this.onLoginFailure
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

            // Загружаем данные из бд в хранилище
            var store = Ext.create('MVC.store.TestStore');
            store.load();

            this.getView().destroy();

            Ext.create({
                xtype: 'main'
            });
        } else {
            Ext.MessageBox.alert('Login failed', response.message);
        }
    }
});