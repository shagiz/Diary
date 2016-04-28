Ext.define('MVC.view.NotesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'notesGrid',

    title: 'Note-list',

    //  store: 'Notes',
    store: 'TestStore',

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            hidden: true
        },
        {
            text: 'Title',
            dataIndex: 'title',
            flex: 1
        },
        {
            text: 'Creation Date',
            xtype: 'datecolumn',
            format: 'd-m-Y H:i',
            dataIndex: 'created',
            flex: 1
        }, {
            text: 'Last Modified',
            xtype: 'datecolumn',
            format: 'd-m-Y H:i',
            dataIndex: 'updated',
            flex: 1
        }, {
            text: 'Text',
            dataIndex: 'text',
            flex: 3
        }
    ]
});