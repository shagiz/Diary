Ext.define('MVC.Application', {
    extend: 'Ext.app.Application',

    name: 'MVC',
    views : [
        'Master',
        'Detail'
    ],

    controllers : [
        'Master',
        'Detail'
    ],

    stores : [
        'People'
    ],

    launch: function () {
        // TODO - Launch the application
        Ext.create('MVC.view.Login', {
            renderTo: document.body
        });
    }
});