Ext.define('MVC.view.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'edit',

    title: 'Note',
    frame: true,
    padding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            emptyText: 'New note'
        },
        {
            xtype: 'datefield',
            name: 'createDate',
            fieldLabel: 'Creation date',
            emptyText: 'Will be current date',
            format: 'd-m-Y',
            readOnly: true
        },
        {
            xtype: 'datefield',
            name: 'modifiedDate',
            fieldLabel: 'Current date',
            readOnly: true,
            format: 'd-m-Y',
            value: new Date()
        }, {
            xtype: 'textarea',
            name: 'noteText',
            fieldLabel: 'Note text',
            width: '100%'
        },
        {
            xtype: 'button',
            text: 'Delete',
            itemId: 'DeleteButton',
            margin: '0 10 0 0'
        },
        {
            xtype: 'button',
            text: 'Clear',
            margin: '0 10 0 0',
            itemId: 'ClearButton',
            handler: function () {
                this.up('edit').getForm().reset();
            }
        },
        {
            xtype: 'button',
            text: 'Save',
            itemId: 'SaveRecord'
        }
    ]

});