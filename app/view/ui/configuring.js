/*
 * File: app/view/ui/configuring.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

	var editor3 = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти Тему'
    });

	editor3.on('afteredit', sendUpdateRequest_objthemes); 

    var editor5 = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти Тему'
    });

    editor5.on('afteredit', sendUpdateRequest_prychyna_spysannia); 





    var editor4 = new Ext.grid.plugin.RowEditing({
        saveText: '&#1047;&#1073;&#1077;&#1088;&#1077;&#1075;&#1090;&#1080;'
    });

    editor4.on('afteredit', sendUpdateRequest_filija); 

	var editor2 = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти Статус'
    });

	editor2.on('afteredit', sendUpdateRequest_status); 
	
	
        var editor1 = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти Статус'
    });

    editor1.on('afteredit', sendUpdateRequest_format); 

Ext.define('Borsuko.view.ui.configuring', {
    extend: 'Ext.panel.Panel',

    height: 724,
    animCollapse: false,
    collapseFirst: false,
    title: 'Головні налаштування',

    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                autoRender: true,
                autoShow: true,
                frame: true,
                height: 699,
                id: 'tabs_mega',
                itemId: 'tabs',
                maintainFlex: true,
                layout: {
                    type: 'column'
                },
                bodyPadding: 10,
                animCollapse: false,
                collapseFirst: false,
                collapsed: false,
                frameHeader: false,
                preventHeader: true,
                title: 'Mega',
                pollForChanges: true,
                paramsAsHash: true,
                standardSubmit: true,
                trackResetOnLoad: true,
                dockedItems: [
                    {
                        xtype: 'container',
                        height: 310,
                        layout: {
                            type: 'column'
                        },
                        dock: 'top',
                        items: [
                            {
                                xtype: 'gridpanel',
                                height: 300,
                                id: 'objthemes_grid',
                                width: 300,
                                animCollapse: false,
                                collapseFirst: false,
                                title: 'Жанри книжок',
                                forceFit: true,
                                store: 'book_theme_store',
                                columnLines: true,
                                columns: [
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 46,
                                        dataIndex: 'id',
                                        text: '№'
                                    },
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 243,
                                        dataIndex: 'book_theme_name',
                                        text: 'Назва жанру',
                                        field: {
                                            xtype: 'textfield'
                                        }
                                    }
                                ],
                                selModel: Ext.create('Ext.selection.RowModel', {

                                }),
                                viewConfig: {
                                    frame: true,
                                    width: 300
                                },
                                dockedItems: [
                                    {
                                        xtype: 'toolbar',
                                        dock: 'bottom',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: 'Додати жанр',
												iconCls: 'add',
												handler : function(){
													sendAddRequest_objthemes()
												}
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Видалити жанр',
												iconCls: 'remove',
												handler : function(){
												Ext.Msg.confirm('Підтвердження', 'Дійсно хочете видалити жанр?', 
														function(btn){
															if(btn == 'yes'){
															sendRemoveRequest_objthemes();
															}
														}
													);
												}
				
                                            }
                                        ]
                                    }
                                ],
                                plugins: [editor3]
                            },

                            {
                                xtype: 'gridpanel',
                                height: 300,
                                id: 'format_grid',
                                width: 300,
                                animCollapse: false,
                                collapseFirst: false,
                                title: '&#1060;&#1086;&#1088;&#1084;&#1072;&#1090;',
                                forceFit: true,
                                store: 'format_store',
                                columnLines: true,
                                columns: [
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 46,
                                        dataIndex: 'id',
                                        text: '№'
                                    },
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 243,
                                        dataIndex: 'format',
                                        text: '&#1092;&#1086;&#1088;&#1084;&#1072;&#1090;',
                                        field: {
                                            xtype: 'textfield'
                                        }
                                    }
                                ],
                                selModel: Ext.create('Ext.selection.RowModel', {

                                }),
                                viewConfig: {
                                    frame: true,
                                    width: 300
                                },
                                dockedItems: [
                                    {
                                        xtype: 'toolbar',
                                        dock: 'bottom',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: '&#1044;&#1086;&#1076;&#1072;&#1090;&#1080; &#1092;&#1086;&#1088;&#1084;&#1072;&#1090;',
                                                iconCls: 'add',
                                                handler : function(){
                                                    sendAddRequest_format()
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                text: '&#1042;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080; &#1092;&#1086;&#1088;&#1084;&#1072;&#1090;',
                                                iconCls: 'remove',
                                                handler : function(){
                                                Ext.Msg.confirm('&#1042;&#1080;&#1076;&#1072;&#1083;&#1077;&#1085;&#1085;&#1103; &#1092;&#1086;&#1088;&#1084;&#1072;&#1090;&#1091;', '&#1042;&#1080; &#1076;&#1110;&#1081;&#1089;&#1085;&#1086; &#1093;&#1086;&#1095;&#1077;&#1090;&#1077; &#1074;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080; &#1092;&#1086;&#1088;&#1084;&#1072;&#1090;?', 
                                                        function(btn){
                                                            if(btn == 'yes'){
                                                            sendRemoveRequest_format();
                                                            }
                                                        }
                                                    );
                                                }
                
                                            }
                                        ]
                                    }
                                ],
                                plugins: [editor1]
                            }

                            
                            
                        ]
                    },
					{
                        xtype: 'container',
                        height: 310,
                        layout: {
                            type: 'column'
                        },
                        dock: 'top',
                        items: [
                            {
                                xtype: 'gridpanel',
                                height: 300,
                                id: 'statuses_grid',
                                width: 300,
                                animCollapse: false,
                                collapseFirst: false,
                                title: 'Статуси книжок',
                                forceFit: true,
                                store: 'statuses_store',
                                columnLines: true,
                                columns: [
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 46,
                                        dataIndex: 'id',
                                        text: '№'
                                    },
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 243,
                                        dataIndex: 'status',
                                        text: 'Статус',
                                        field: {
                                            xtype: 'textfield'
                                        }
                                    }
                                ],
                                selModel: Ext.create('Ext.selection.RowModel', {

                                }),
                                viewConfig: {
                                    frame: true,
                                    width: 300
                                },
                                dockedItems: [
                                    {
                                        xtype: 'toolbar',
                                        dock: 'bottom',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: 'Додати статус',
												iconCls: 'add',
												handler : function(){
													sendAddRequest_status()
												}
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Видалити статус',
												iconCls: 'remove',
												handler : function(){
												Ext.Msg.confirm('Підтвердження', 'Дійсно хочете видалити статус?', 
														function(btn){
															if(btn == 'yes'){
															sendRemoveRequest_status();
															}
														}
													);
												}
				
                                            }
                                        ]
                                    }
                                ],
                                plugins: [editor2]
                            },

                            {
                                xtype: 'gridpanel',
                                height: 300,
                                id: 'filija_grid',
                                width: 300,
                                animCollapse: false,
                                collapseFirst: false,
                                title: '&#1060;&#1110;&#1083;&#1110;&#1111;',
                                forceFit: true,
                                store: 'filija_store',
                                columnLines: true,
                                columns: [
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 46,
                                        dataIndex: 'id',
                                        text: '№'
                                    },
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 243,
                                        dataIndex: 'filija',
                                        text: '&#1060;&#1110;&#1083;&#1110;&#1103;',
                                        field: {
                                            xtype: 'textfield'
                                        }
                                    }
                                ],
                                selModel: Ext.create('Ext.selection.RowModel', {

                                }),
                                viewConfig: {
                                    frame: true,
                                    width: 300
                                },
                                dockedItems: [
                                    {
                                        xtype: 'toolbar',
                                        dock: 'bottom',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: '&#1044;&#1086;&#1076;&#1072;&#1090;&#1080;',
                                                iconCls: 'add',
                                                handler : function(){
                                                    sendAddRequest_filija()
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                text: '&#1042;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080;',
                                                iconCls: 'remove',
                                                handler : function(){
                                                Ext.Msg.confirm('Підтвердження', '&#1042;&#1080; &#1076;&#1110;&#1081;&#1089;&#1085;&#1086; &#1073;&#1072;&#1078;&#1072;&#1108;&#1090;&#1077; &#1074;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080; &#1092;&#1110;&#1083;&#1110;&#1102;?', 
                                                        function(btn){
                                                            if(btn == 'yes'){
                                                            sendRemoveRequest_filija();
                                                            }
                                                        }
                                                    );
                                                }
                
                                            }
                                        ]
                                    }
                                ],
                                plugins: [editor4]
                            },
                            {
                                xtype: 'gridpanel',
                                height: 300,
                                id: 'prychyna_spysannia_grid',
                                width: 300,
                                animCollapse: false,
                                collapseFirst: false,
                                title: '&#1055;&#1088;&#1080;&#1095;&#1080;&#1085;&#1080; &#1076;&#1083;&#1103; &#1089;&#1087;&#1080;&#1089;&#1072;&#1085;&#1085;&#1103;',
                                forceFit: true,
                                store: 'prychyna_spysannia_store',
                                columnLines: true,
                                columns: [
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 46,
                                        dataIndex: 'id',
                                        text: '№'
                                    },
                                    {
                                        xtype: 'gridcolumn', sortable : true,
                                        width: 243,
                                        dataIndex: 'prychyna_spysannia',
                                        text: '&#1055;&#1088;&#1080;&#1095;&#1080;&#1085;&#1072;',
                                        field: {
                                            xtype: 'textfield'
                                        }
                                    }
                                ],
                                selModel: Ext.create('Ext.selection.RowModel', {

                                }),
                                viewConfig: {
                                    frame: true,
                                    width: 300
                                },
                                dockedItems: [
                                    {
                                        xtype: 'toolbar',
                                        dock: 'bottom',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: '&#1044;&#1086;&#1076;&#1072;&#1090;&#1080;',
                                                iconCls: 'add',
                                                handler : function(){
                                                    sendAddRequest_prychyna_spysannia()
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                text: '&#1042;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080;',
                                                iconCls: 'remove',
                                                handler : function(){
                                                Ext.Msg.confirm('Підтвердження', '&#1042;&#1080; &#1076;&#1110;&#1081;&#1089;&#1085;&#1086; &#1073;&#1072;&#1078;&#1108;&#1090;&#1077; &#1074;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080; &#1087;&#1088;&#1080;&#1095;&#1080;&#1085;&#1091; &#1089;&#1087;&#1080;&#1089;&#1072;&#1085;&#1085;&#1103;', 
                                                        function(btn){
                                                            if(btn == 'yes'){
                                                            sendRemoveRequest_prychyna_spysannia();
                                                            }
                                                        }
                                                    );
                                                }
                
                                            }
                                        ]
                                    }
                                ],
                                plugins: [editor5]
                            }

                            
                            
                        ]
                    }
                    
                ]
            }
        ];
        me.callParent(arguments);
    }
 
});

    function sendUpdateRequest_format(){
        var jsonData = new Array();          
        var MyStore = Ext.getCmp('format_grid').getStore();
        var StoreCount = MyStore.getCount();
        
        for(i=0;i<StoreCount;i++) {
        record = MyStore.getAt(i);
        jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData);        
        Ext.Ajax.request({
            url:'/php/format_admin.php?action=saveData', //php function that saves the data
            params:{data2:jsonData},
            success:function(responce, action) {
            },
            failure: function(form, action) {
            }
        });        
    }  

    
        
    function sendRemoveRequest_format(){ 
        var MyStore = Ext.getCmp('format_grid').getStore();
        var StoreCount = MyStore.getCount();
        if(StoreCount<1){
            return;
        }
        var selection = Ext.getCmp('format_grid').getSelectionModel();
        var strNomer = selection.selected.items[0].raw.id;
        Ext.Ajax.request({
           url:'/php/format_admin.php?action=removeRecord', //php function that saves the data
            params:{strNomer:strNomer},
            success:function(responce, action) {
            MyStore.load();
                
            },
            failure: function(form, action) {
            }
        });    
    }  
        


function sendAddRequest_format(){        
    var cr = Ext.getCmp('format_grid').getSelectionModel();
    MyStore = Ext.getCmp('format_grid').getStore();    
    var rowIndex = cr[0];
    Ext.Ajax.request({
       url:'/php/format_admin.php?action=addRecord', //php function that saves the data          
        success:function(responce, action) {
            var MyGrid = Ext.getCmp('format_grid').getView();
            MyGrid.getStore().load();
        },
        failure: function(form, action) {
            
        }
    });        
}   

	
  	
	function sendUpdateRequest_objthemes(){
        var jsonData = new Array();          
		var MyStore = Ext.getCmp('objthemes_grid').getStore();
		var StoreCount = MyStore.getCount();
		
        for(i=0;i<StoreCount;i++) {
        record = MyStore.getAt(i);
        jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData); 		
		Ext.Ajax.request({
		    url:'/php/objthemes_admin.php?action=saveData', //php function that saves the data
		  	params:{data2:jsonData},
            success:function(responce, action) {
            },
            failure: function(form, action) {
            }
		});        
    }  

	
		
	function sendRemoveRequest_objthemes(){ 
		var MyStore = Ext.getCmp('objthemes_grid').getStore();
		var StoreCount = MyStore.getCount();
		if(StoreCount<1){
			return;
		}
		var selection = Ext.getCmp('objthemes_grid').getSelectionModel();
		var strNomer = selection.selected.items[0].raw.id;
		Ext.Ajax.request({
		   url:'/php/objthemes_admin.php?action=removeRecord', //php function that saves the data
		  	params:{strNomer:strNomer},
            success:function(responce, action) {
			MyStore.load();
            	
            },
            failure: function(form, action) {
            }
		});    
    }  
	    


function sendAddRequest_objthemes(){		
	var cr = Ext.getCmp('objthemes_grid').getSelectionModel();
	MyStore = Ext.getCmp('objthemes_grid').getStore();
	
	var rowIndex = cr[0];
	Ext.Ajax.request({
	   url:'/php/objthemes_admin.php?action=addRecord', //php function that saves the data		  	
		success:function(responce, action) {
			var MyGrid = Ext.getCmp('objthemes_grid').getView();
			MyGrid.getStore().load();
			
			/*var Record 		= Ext.data.Record.create(MyStore.fields.items);            	
			var newRecord	= new Record(Ext.decode(responce.responseText));  
			Ext.getCmp('objthemes_grid').stopEditing();
			MyStore.insert(rowIndex, newRecord);
			Ext.getCmp('objthemes_grid').startEditing(rowIndex, 1);   */
		},
		failure: function(form, action) {
			
		}
	});        
}            	

function sendUpdateRequest_status(){
        var jsonData = new Array();          
		var MyStore = Ext.getCmp('statuses_grid').getStore();
		var StoreCount = MyStore.getCount();
		
        for(i=0;i<StoreCount;i++) {
        record = MyStore.getAt(i);
        jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData); 		
		Ext.Ajax.request({
		    url:'/php/statuses_admin.php?action=saveData', //php function that saves the data
		  	params:{data2:jsonData},
            success:function(responce, action) {
            	//store.loadData(Ext.decode(responce.responseText) );
                //alert('Congrats!  Your changes were saved!!!!');
            },
            failure: function(form, action) {
                //alert('Oops the delete did not work out too well!');
            }
		});        
    }  

	
		
	function sendRemoveRequest_status(){ 
		var MyStore = Ext.getCmp('statuses_grid').getStore();
		var StoreCount = MyStore.getCount();
		if(StoreCount<1){
			return;
		}
		var selection = Ext.getCmp('statuses_grid').getSelectionModel();
		var strNomer = selection.selected.items[0].raw.id;
		Ext.Ajax.request({
		   url:'/php/statuses_admin.php?action=removeRecord', //php function that saves the data
		  	params:{strNomer:strNomer},
            success:function(responce, action) {
			MyStore.load();
            	
            },
            failure: function(form, action) {
            }
		});    
    }  
	    


function sendAddRequest_status(){		
	var cr = Ext.getCmp('statuses_grid').getSelectionModel();
	MyStore = Ext.getCmp('statuses_grid').getStore();
	
	var rowIndex = cr[0];
	Ext.Ajax.request({
	   url:'/php/statuses_admin.php?action=addRecord', //php function that saves the data		  	
		success:function(responce, action) {
			var MyGrid = Ext.getCmp('statuses_grid').getView();
			MyGrid.getStore().load();
			
			/*var Record 		= Ext.data.Record.create(MyStore.fields.items);            	
			var newRecord	= new Record(Ext.decode(responce.responseText));  
			Ext.getCmp('objthemes_grid').stopEditing();
			MyStore.insert(rowIndex, newRecord);
			Ext.getCmp('objthemes_grid').startEditing(rowIndex, 1);   */
		},
		failure: function(form, action) {
			
		}
	});        
}           

















    function sendUpdateRequest_filija(){
        var jsonData = new Array();          
        var MyStore = Ext.getCmp('filija_grid').getStore();
        var StoreCount = MyStore.getCount();
        
        for(i=0;i<StoreCount;i++) {
        record = MyStore.getAt(i);
        jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData);        
        Ext.Ajax.request({
            url:'/php/filija_admin.php?action=saveData', //php function that saves the data
            params:{data2:jsonData},
            success:function(responce, action) {
            },
            failure: function(form, action) {
            }
        });        
    }  

    
        
    function sendRemoveRequest_filija(){ 
        var MyStore = Ext.getCmp('filija_grid').getStore();
        var StoreCount = MyStore.getCount();
        if(StoreCount<1){
            return;
        }
        var selection = Ext.getCmp('filija_grid').getSelectionModel();
        var strNomer = selection.selected.items[0].raw.id;
        Ext.Ajax.request({
           url:'/php/filija_admin.php?action=removeRecord', //php function that saves the data
            params:{strNomer:strNomer},
            success:function(responce, action) {
            MyStore.load();
                
            },
            failure: function(form, action) {
            }
        });    
    }  
        


function sendAddRequest_filija(){        
    var cr = Ext.getCmp('filija_grid').getSelectionModel();
    MyStore = Ext.getCmp('filija_grid').getStore();
    
    var rowIndex = cr[0];
    Ext.Ajax.request({
       url:'/php/filija_admin.php?action=addRecord', //php function that saves the data          
        success:function(responce, action) {
            var MyGrid = Ext.getCmp('filija_grid').getView();
            MyGrid.getStore().load();
        },
        failure: function(form, action) {
            
        }
    });        
}   



//////////////////////prychyna_spysannia
   function sendUpdateRequest_prychyna_spysannia(){
        var jsonData = new Array();          
        var MyStore = Ext.getCmp('prychyna_spysannia_grid').getStore();
        var StoreCount = MyStore.getCount();
        
        for(i=0;i<StoreCount;i++) {
        record = MyStore.getAt(i);
        jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData);        
        Ext.Ajax.request({
            url:'/php/prychyna_spysannia_admin.php?action=saveData', //php function that saves the data
            params:{data2:jsonData},
            success:function(responce, action) {
            },
            failure: function(form, action) {
            }
        });        
    }  

    
        
    function sendRemoveRequest_prychyna_spysannia(){ 
        var MyStore = Ext.getCmp('prychyna_spysannia_grid').getStore();
        var StoreCount = MyStore.getCount();
        if(StoreCount<1){
            return;
        }
        var selection = Ext.getCmp('prychyna_spysannia_grid').getSelectionModel();
        var strNomer = selection.selected.items[0].raw.id;
        Ext.Ajax.request({
           url:'/php/prychyna_spysannia_admin.php?action=removeRecord', //php function that saves the data
            params:{strNomer:strNomer},
            success:function(responce, action) {
            MyStore.load();
                
            },
            failure: function(form, action) {
            }
        });    
    }  
        


function sendAddRequest_filija(){        
    var cr = Ext.getCmp('prychyna_spysannia_grid').getSelectionModel();
    MyStore = Ext.getCmp('prychyna_spysannia_grid').getStore();
    
    var rowIndex = cr[0];
    Ext.Ajax.request({
       url:'/php/prychyna_spysannia_admin.php?action=addRecord', //php function that saves the data          
        success:function(responce, action) {
            var MyGrid = Ext.getCmp('prychyna_spysannia_grid').getView();
            MyGrid.getStore().load();
        },
        failure: function(form, action) {
            
        }
    });        
}  
 
    
