Ext.define('MVC.Application', {
    extend: 'Ext.app.Application',

    name: 'MVC',

    requires: [
        'MVC.view.Login'
    ],

    controllers: [
        'MVC.controller.Master',
        'MVC.controller.Detail'
    ],

    stores: [
        'MVC.store.People'
    ],

    launch: function () {
        // TODO - Launch the application
        Ext.create('MVC.view.Login', {
            renderTo: document.body
        });
    }
});