Ext.define('MVC.view.Detail', {
    extend : 'Ext.form.Panel',
    xtype  : 'edit',
    
    title   : 'Detail Panel',
    frame   : true,
    padding : 10,
    
    items : [
        {
            xtype      : 'textfield',
            name       : 'name',
            fieldLabel : 'Name'
        },
		{
            xtype      : 'textfield',
            name       : 'email',
            fieldLabel : 'Email'
        },
        {
            xtype      : 'textfield',
            name       : 'phone',
            fieldLabel : 'Phone'
        },
        {
            xtype : 'hiddenfield',
            name  : 'id'
        },
        {
            xtype  : 'button',
            text   : 'Save',
            itemId : 'SaveRecord'
        }
    ]
});