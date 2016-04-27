Ext.define("MVC.controller.RegisterController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',


    onCancelClick: function(){
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        })
    },

    onRegistrationComplete: function(){
        var pass1 = Ext.getCmp('pass1').getValue();
        var pass2 = Ext.getCmp('pass2').getValue();
        if (pass1 === pass2) {
           var login = Ext.getCmp('username').getValue();
            Ext.Ajax.request({
                url: 'register',
                method: 'POST',
                params: {
                    login: login,
                    password: pass1
                },
                scope: this,
                //method to call when the request is a failure
                failure: this.onRegisterFailure,
                //method to call when the request is successful
                success: this.onRegisterSuccess
            });
           // Ext.MessageBox.alert('Успешно', 'Регистрация завршена.'+login);
        } else {
            Ext.MessageBox.alert('Ошибка', 'Пароли должны совпадать.')
        }
    },

    onRegisterSuccess : function(response){
        response = Ext.decode(response.responseText);
        if (response.success) {
            this.getView().destroy();

            Ext.create({
                xtype: 'login'
            }).show();

            Ext.MessageBox.alert("Success", "Регистрация завершена!")
        }else {
            Ext.MessageBox.alert("Fail","Такой пользователь существует!")
        }
    },

    onRegisterFailure : function(){
        Ext.MessageBox.alert("Ошибка","Ошибка!")
    }
});