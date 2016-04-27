Ext.define('MVC.store.TestStore', {
    extend  : 'Ext.data.Store',

    requires : [
        'MVC.model.Note'
    ],

    storeId : 'TestStore',
    model   : 'MVC.model.Note',
    autoLoad: false,
    proxy: {
        type: 'rest',
        url: 'rest/notes',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});