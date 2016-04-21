Ext.define('MVC.model.Person', {
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