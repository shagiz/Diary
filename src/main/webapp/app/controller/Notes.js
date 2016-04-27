Ext.define('MVC.controller.Notes', {
    extend : 'Ext.app.Controller',
    
    init: function() {
         this.control({
             'notesGrid': {
                 select : this.onGridSelect
             }
         });
     },
    
    onGridSelect : function(grid, record, index, eOpts) {
        // grab a reference to the Detail view... 
        // we could have used a controller "ref", but those can also be problematic
        var detailView = Ext.ComponentQuery.query('editForm')[0];

        //set the form record manually
        detailView.loadRecord(record);
    }
});