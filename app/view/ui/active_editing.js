/*
 * File: app/view/ui/active_editing.js
 * Date: Tue Sep 06 2011 17:35:38 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
var GridName = "active_editing_grid";
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '/ext-4.0.2a/examples/ux');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging'
]);
 
 Ext.define('Product', {
    extend: 'Ext.data.Model',
    fields: [ 
				{ type: 'string', name: 'ThemeId'}, 
				{ type: 'numeric', name: 'TypeID'}, 
				{ type: 'numeric', name: 'ModelId'}, 
				{type: 'string', name: 'CategoryName'}, 
				{type: 'numeric', name: 'Price'}, 
				{type: 'numeric', name: 'Time'}, 
				{type: 'string', name: 'CategoryId'}, 
				{type: 'string', name: 'SubCategoryName'}, 
				{type: 'string', name: 'Description'}, 
				{type: 'string', name: 'OdVymir'}, 
				{type: 'numeric', name: 'SubCategoryId'}, 
				{type: 'string', name: 'Model'},
				{type: 'string', name: 'Vendor'},
				{type: 'string', name: 'Valiuta'}
				]
});

var url = {
        local:  'grid-filter.json',  
        remote: 'grid-filter.php'
    };

    var encode = false;
    var local = false;
	
	
    var filters = {
        ftype: 'filters',
        encode: encode, 
        local: local,   

        filters: [
				{ type: 'string', dataIndex: 'ThemeId'}, 
				{ type: 'numeric', dataIndex: 'TypeID'}, 
				{ type: 'numeric', dataIndex: 'ModelId'}, 
				{type: 'string', dataIndex: 'CategoryName'}, 
				{type: 'numeric', dataIndex: 'Price'}, 
				{type: 'numeric', dataIndex: 'Time'}, 
				{type: 'string', dataIndex: 'CategoryId'}, 
				{type: 'string', dataIndex: 'SubCategoryName'}, 
				{type: 'string', dataIndex: 'Description'}, 
				{type: 'string', dataIndex: 'OdVymir'}, 
				{type: 'numeric', dataIndex: 'SubCategoryId'}, 
				{type: 'string', dataIndex: 'Model'},
				{type: 'string', dataIndex: 'Vendor'},
				{type: 'string', dataIndex: 'Valiuta'}
        ]
    };
	
function pctChange(val){ return '<span style="color:blue;">' + val + '</span>';}
    var editor = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти'
    });
	editor.on('afteredit', sendUpdateRequest_active); 
	
Ext.define('Borsuko.view.ui.active_editing', {
    extend: 'Ext.panel.Panel',

    height: 710,
    autoScroll: true,

	
    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'gridpanel',
                height: 700,
				
                id: GridName,
                title: 'Редагування актинник купованих комплектуючих',
                store: 'Active_Store',
                columnLines: true,
                columns: [
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'ThemeId',
                        text: 'Тема',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
                        hidden: true,
                        width: 15,
                        layout: {
                            type: 'fit'
                        },
                        dataIndex: 'TypeID',
                        text: 'TypeID'
                    },
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'CategoryId',
                        text: 'КІ'
                    },
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'CategoryName',
                        text: 'Категорія',
                        field: {
                            xtype: 'combobox',
                            id: 'Category_grid',
                            displayField: 'CategoryName',
                            queryMode: 'local',
                            store: 'CategoryStore',
                            valueField: 'CategoryName'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'SubCategoryId',
                        text: 'СКІ'
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'SubCategoryName',
                        text: 'СубКатегорія',
                        field: {
                            xtype: 'combobox',
                            displayField: 'SubCategoryName',
                            queryMode: 'local',
                            store: 'SubCategoryStore',
                            valueField: 'SubCategoryName'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'ModelId',
                        text: 'МІ'
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Model',
                        text: 'Модель',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Vendor',
                        text: 'Виробник',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Description',
                        text: 'Опис',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'OdVymir',
                        text: 'Од. Вим.',
                        field: {
                            xtype: 'combobox',
                            displayField: 'OdVymiru',
                            queryMode: 'local',
                            store: 'store_OdVymiru',
                            valueField: 'OdVymiru'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Price',
                        text: 'Ціна',
						renderer: pctChange, dataIndex: 'Price',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Nacinka',
						renderer: function(v, params, record) 	{ return v + ' %'},
                        text: 'Націнка',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Time',
                        text: 'Час',
						renderer: function(v, params, record) 	{ return v + ' хв'},
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Valiuta',
                        text: 'Валюта',
                        field: {
                            xtype: 'combobox',
                            displayField: 'name',
							store: 'ValiutaStore',
                            queryMode: 'local',
                            valueField: 'abbr'
                        }
                    }
                ],
                viewConfig: {
                    height: 700,
                    width: 2000
                },
                features: [filters],
				plugins: [editor],
                selModel: Ext.create('Ext.selection.RowModel', {
                    allowDeselect: true
                }),
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
							{
							xtype: 'button',
							iconCls: 'save_columns', tooltip: 'Зберегти параметри колонок',
							handler : function()
							{
							getCount();
							}
							},
                            {
                                xtype: 'button',
                                text: 'Добавити Запис',
								iconCls: 'add',
								handler : function(){
									strUrl = "/add_to_price.php";  
									window.location = strUrl;
								}
                            },
                            {
                                xtype: 'button',
                                text: 'Видалити Запис',
								iconCls: 'remove',
								handler : function(){
				
									Ext.Msg.confirm('Підтвердження', 'Дійсно хочете видалити запис?', 
										function(btn){
											if(btn == 'yes'){
											sendRemoveRequest_active();
											}
										}
									);
								}
                            }
                        ]
                    },
                    {
                        xtype: 'pagingtoolbar',
						pageSize: 20,
                        afterPageText: 'із {0}',
                        beforePageText: 'Сторінка',
                        displayInfo: true,
                        displayMsg: 'Показано {0} - {1} із {2}',
                        emptyMsg: 'Записи відсутні',
                        firstText: 'Перша сторінка',
                        lastText: 'Остання сторінка',
                        nextText: 'Наступна сторінка',
                        prependButtons: true,
                        prevText: 'Попередня сторінка',
                        refreshText: 'Оновити',
                        store: 'Active_Store',
                        dock: 'bottom'
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
});

	function sendUpdateRequest_active(){
	var MyStore = Ext.getCmp(GridName).getStore();
	var StoreCount = MyStore.getCount();
        var jsonData = new Array();                        
        for(i=0;i<StoreCount;i++) {
            record = MyStore.getAt(i);
			//alert(record.data.Valiuta)
            jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData); 		
		Ext.Ajax.request({
		    url:'./php/edit.php?action=saveData_active', //php function that saves the data
		  	params:{data:jsonData},
            success:function(responce, action) {
            },
            failure: function(form, action) {
                alert('Oops the delete did not work out too well!');
            }
		});       
    }  
	
	function sendRemoveRequest_active(){ 
		var MyStore = Ext.getCmp(GridName).getStore();
		var StoreCount = MyStore.getCount();
		
		if(StoreCount<1){
			return;
		}
		var jsonData = new Array();       
		
		var selection = Ext.getCmp(GridName).getSelectionModel();
		var strNomer = selection.selected.items[0].raw.ModelId;
		
		Ext.Ajax.request({
		   url:'./php/edit.php?action=removeRecord_active', //php function that saves the data
		  	params:{data:strNomer},
            success:function(responce, action) {
            	var MyGrid = Ext.getCmp(GridName).getView();
				MyGrid.getStore().load();
            },
            failure: function(form, action) {
                //alert('Oops the delete did not work out too well!');
            }
		});        

    }  

		
	function getCount(){
	var jsonObj = { };
	  var MyGrid = Ext.getCmp(GridName).getView();
	  var ColumnSizeArray=new Array(); 
	  var ColumnVisibleArray=new Array(); 
	  var columns = MyGrid.getGridColumns();
	  var columnsLength = MyGrid.getGridColumns().length;
	  var columnsState = MyGrid.getHeaderCt().getGridColumns();
	  for(var i = 0; i < columnsLength; i++){
			ColumnSizeArray[i]=MyGrid.getHeaderAtIndex(i).el.dom.firstChild.scrollWidth;
			jsonObj[ColumnSizeArray[i].id] = ColumnSizeArray[i].value;
			ColumnVisibleArray[i]=columnsState[i].hidden;
	  }	

		var JsonColumnSize = array1dToJson(ColumnSizeArray, 'data', 'size');
		var JsonColumnVisible = array1dToJson(ColumnVisibleArray, 'data', 'hidden');
  
		Ext.Ajax.request(
				{
					url: './php/SaveColumnSize.php',
					params: {
						GridName: GridName,
						JsonColumnSize: JsonColumnSize,
						JsonColumnVisible: JsonColumnVisible
						
					},
					success: function()
					{
					Ext.MessageBox.alert('Виконано', 'Стан колонок успішно збережений');
					},
					failure: function(response)
					{
						Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
					}
				})
		
		/*function array2dToJson(a, p, nl) {
		  var i, j, s = '{"' + p + '":[';
		  nl = nl || '';
		  for (i = 0; i < a.length; ++i) {
			s += nl + array1dToJson(a[i]);
			if (i < a.length - 1) {
			  s += ',';
			}
		  }
		  s += nl + ']}';
		  return s;
		}*/
		
		function array1dToJson(a, p, value) {
		  var i, s = '[';
		  for (i = 0; i < a.length; ++i) {
			if (typeof a[i] == 'string') {
			  s += '"' + a[i] + '"';
			}
			else { // assume number type
			  s += "{\""+value+"\": "+a[i]+"}";
			}
			if (i < a.length - 1) {
			  s += ',';
			}
		  }
		  s += ']';
		  if (p) {
			return '{"' + p + '":' + s + '}';
		  }
		  return s;
		}
}

 ColumnSizeStore = Ext.create('Ext.data.JsonStore', {
	autoLoad: true,
	autoSync: true,
	storeId: 'ColumnSizeStore',
	proxy: {
		type: 'ajax',
		url: './php/SelectColumnSize.php?GridName='+GridName,
		reader: {
			type: 'json',
			root: 'data'
		}
	},
	fields: [
		{
			name: 'size'
		}
	],
	listeners: {
				load: function() {
					
					var StoreLength = ColumnSizeStore.data.length;
					for(var i = 0; i < StoreLength; i++){
					//ColumnSizes[i] = ColumnSizeStore.data.items[i].data.size;
					Ext.getCmp(GridName).columns[i].setWidth(ColumnSizeStore.data.items[i].data.size);
					};
				}
			}
});	

ColumnStateStore = Ext.create('Ext.data.JsonStore', {

	autoLoad: true,
	autoSync: true,
	storeId: 'ColumnStateStore',
	proxy: {
		type: 'ajax',
		url: './php/SelectColumnState.php?GridName='+GridName,
		reader: {
			type: 'json',
			root: 'data'
		}
	},
	fields: [
		{
			name: 'hidden'
		}
	],
	listeners: {
				load: function() {
					var StoreLength1 = ColumnStateStore.data.length;
					for(var i = 0; i < StoreLength1; i++){
					//ColumnSizes[i] = ColumnStateStore.data.items[i].data.hidden;
					Ext.getCmp(GridName).columns[i].setVisible(!(ColumnStateStore.data.items[i].data.hidden));//працює на FF, але не на IE
					};
				}
			}
});
