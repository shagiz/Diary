Ext.define('MVC.controller.Edit', {
    extend: 'Ext.app.Controller',


    init: function () {
        this.control({
            'editForm > button#SaveRecord': {
                click: this.onSaveButtonClick
            },
            'editForm > button#DeleteButton': {
                click: this.onDeleteButtonClick
            }
        });
    },

    onSaveButtonClick: function (btn) {
        //get reference to the form
        var detailView = btn.up('editForm');

        //get the form inputs
        var data = detailView.getValues();

        //see if the record exists
        var store = Ext.getStore('TestStore');
        console.log(data.id);
        var record = store.getById(data.id);

        if (!record) {
            record = Ext.create('MVC.model.Note', {
                title: data.title,
                created: new Date(),
                updated: new Date(),
                text: data.text
            });
            Ext.MessageBox.alert('Created', data.title);

            store.insert(0, record);
            store.sync();
            return;
        }

        record.set(data);

        store.sync();
        //manually update the record
        detailView.updateRecord();
    },

    onDeleteButtonClick: function (btn) {

        //get reference to the form
        var detailView = btn.up('editForm');

        //get the form inputs
        var data = detailView.getValues();

        var store = Ext.getStore('TestStore');
        var record = store.getById(data.id);
        store.remove(record);
        store.sync();
    }
});