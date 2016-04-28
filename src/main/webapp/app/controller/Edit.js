// Форма редактирования и просмотра записи
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
    /**
     * Получаем данные с полей ввода, проверяем на валидность.
     * Если информация о записи не найдена - создаем новую (POST),
     * иначе - обновляем (PUT).
     */
    onSaveButtonClick: function (btn) {
        //get reference to the form
        var detailView = btn.up('editForm');

        //get the form inputs
        var data = detailView.getValues();
        if (data.title===""){
            Ext.MessageBox.alert("Ошибка!", "Enter note title");
            return;
        }
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
            Ext.MessageBox.alert('Created', data.title + " - " + data.text);
            store.insert(0, record);
            store.sync({
                success: function (response) {
                    store.load();
                }
            });
            return;
        }

        record.set(data);
        store.sync();
        //manually update the record
        detailView.updateRecord();
    },
    /**
     * Пока не работает удаление т.к. Proxy посылает payload вместе с DELETE - запросом
     * на сервере такой запрос не обрабатывается
     */
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