Ext.define('MVC.view.Master', {
    extend: 'Ext.grid.Panel',
    xtype: 'notes',

    title: 'Note-list',

    store: 'People',

    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Creation Date',
            xtype: 'datecolumn',
            format: 'd-m-Y',
            dataIndex: 'createDate',
            flex: 1
        },{
            text: 'Last Modified',
            xtype: 'datecolumn',
            format: 'd-m-Y',
            dataIndex: 'modifiedDate',
            flex:1
        }, {
            text: 'Text',
            dataIndex: 'noteText',
            flex: 3
        }
    ]
});