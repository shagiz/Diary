Ext.define('MVC.controller.Notes', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'notesGrid': {
                select: this.onGridSelect
            }
        });
    },

    /**
     *   Обновляем данные в форме редактирования
     */
    onGridSelect: function (grid, record, index, eOpts) {
        var detailView = Ext.ComponentQuery.query('editForm')[0];

        detailView.loadRecord(record);
    }
});