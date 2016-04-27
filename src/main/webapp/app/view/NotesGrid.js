Ext.define('MVC.view.NotesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'notesGrid',

    title: 'Note-list',

    store: 'Notes',

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