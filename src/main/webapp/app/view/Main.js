Ext.define('MVC.view.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',

    requires: [
        'MVC.view.NotesGrid',
        'MVC.view.Edit'
    ],

    layout : {
        type  : 'hbox',
        align : 'stretch'
    },

    items: [{
        xtype: 'notesGrid',
        flex: 2
    },{
        xtype: 'editForm',
        flex: 1
    }

    ]
});