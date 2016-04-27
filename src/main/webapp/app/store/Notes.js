Ext.define('MVC.store.Notes', {
    extend  : 'Ext.data.Store',

    requires : [
        'MVC.model.Note'
    ],
    
    storeId : 'Notes',
    model   : 'MVC.model.Note',
    
    data : [
        { 
            'name'  : 'Lisa',  
            'createDate' : '10-23-1234',
            'modifiedDate' : '04-21-2016',
            'noteText' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere odio leo, at mollis libero porta ut. Etiam mauris ipsum, iaculis a imperdiet sit amet, bibendum id urna. Proin tempus lectus nisl, a tristique est tempor quis. Etiam interdum urna dolor, non gravida nulla laoreet a. Donec id velit metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu purus sed nisl commodo malesuada et ut velit. Quisque ut lorem magna. Nulla eget odio est. Sed ultrices turpis quam. Aliquam quis sollicitudin dolor.'
        },
        { 
            'name'  : 'Bart',  
            'createDate' : '10-24-1234',
            'modifiedDate' : '04-3-2016',
            'noteText' : 't, bibendum id urna. Proin tempus lectus nisl, non gicitudin dolor.'
        },
        { 
            'name'  : 'Homer', 
            'createDate' : '10-25-1234',
            'modifiedDate' : '12-13-2416',
            'noteText' : 'qwerty'
        },
        { 
            'name'  : 'Marge', 
            'createDate' : '10-26-1234',
            'modifiedDate' : '04-21-2016',
            'noteText' : 'qwerty123123'
        }
    ]
});