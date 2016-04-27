Ext.define('MVC.model.Note', {
    extend : 'Ext.data.Model',
    
    fields : [
        {
            name : 'name',
            type : 'string'
        },
        {
            name : 'createDate',
            type : 'date'
        },
        {
            name : 'modifiedDate',
            type : 'date'
        },
        {
            name : 'noteText',
            type : 'string'
        }
    ]
});