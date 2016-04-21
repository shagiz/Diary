Ext.define('MVC.view.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    requires: [
        'MVC.view.Master',
        'MVC.view.Detail'
    ],

    layout : {
        type  : 'hbox',
        align : 'stretch'
    },

    items: [{
        xtype: 'notes',
        flex: 2
    },{
        xtype: 'edit',
        flex: 1
    }

    ]
});