Ext.define('MVC.view.NotesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'notesGrid',

    title: 'Note-list',

    //  store: 'Notes',
    store: 'TestStore',

    /*initComponent: function(){
        this.callParent();
        this.on('render', this.loadStore, this);
    },

    loadStore: function() {
        this.getStore().load({
            params:{login:'shagi'}
        });
    },*/

    columns: [
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