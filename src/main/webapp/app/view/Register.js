Ext.define("MVC.view.Register", {
    extend: 'Ext.window.Window',
    xtype: 'register',

    requires: [
        'MVC.controller.RegisterController',
        'Ext.form.Panel'
    ],

    controller: 'register',
    bodyPadding: 10,
    title: 'Registration',
    closable: false,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            emptyText: 'Username',
            allowBlank: false,
            id: 'username'
        }, {
            xtype: 'textfield',
            id: 'pass1',
            name: 'password1',
            inputType: 'password',
            emptyText: 'Password',
            allowBlank: false
        }, {
            xtype: 'textfield',
            id: 'pass2',
            name: 'password2',
            inputType: 'password',
            emptyText: 'Password',
            allowBlank: false
        }
        ],
        buttons: [{
            text: 'Submit',
            formBind: true,
            listeners: {
                click: 'onRegistrationComplete'
            }
        },
            {
                text: 'Cancel',
                listeners: {
                    click: 'onCancelClick'
                }
            }]
    }
});