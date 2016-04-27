Ext.define('MVC.model.Note', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'string'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'created',
            type: 'date'
        },
        {
            name: 'updated',
            type: 'date'
        },
        {
            name: 'text',
            type: 'string'
        }
    ]
});