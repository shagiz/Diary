Ext.define("MVC.controller.RegisterController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',


    onCancelClick: function(){
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        })
    },

    onRegistrationComplete: function(){var pass1 = Ext.getCmp('pass1').getValue();
        var pass2 = Ext.getCmp('pass2').getValue();
        if (pass1 === pass2) {
            Ext.MessageBox.alert('Успешно', 'Регистрация завршена.');
        } else {
            Ext.MessageBox.alert('Ошибка', 'Пароли должны совпадать.')
        }
    }


});