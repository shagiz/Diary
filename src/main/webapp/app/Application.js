Ext.define('MVC.Application', {
    extend: 'Ext.app.Application',

    name: 'MVC',

    requires: [
        'MVC.view.Login'
    ],

    controllers: [
        'MVC.controller.Notes',
        'MVC.controller.Edit'
    ],

    stores: [
        'MVC.store.Notes'
    ],

    launch: function () {
        // TODO - Launch the application
        Ext.create('MVC.view.Login', {
            renderTo: document.body
        });
    }
});