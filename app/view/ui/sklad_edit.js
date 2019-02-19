/*
 * File: app/view/ui/sklad_edit.js
 * Date: Tue Sep 06 2011 20:43:53 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
 var GridName = "sklad_edit_grid";
 Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '/ext-4.0.2a/examples/ux');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging'
]);

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
    { dataIndex: 'Type', 		type: 'string'},
	{ dataIndex: 'CategoryName', 	type: 'string'},
	{ dataIndex: 'ModelId', 	type: 'string'},
	{ dataIndex: 'Model', 	type: 'string'},
	{ dataIndex: 'Description', 		type: 'string'},
	{ dataIndex: 'Vendor', 		type: 'string'},
	{ dataIndex: 'Valiuta', 	type: 'string'},
	{ dataIndex: 'CinaVvaliuti', 	type: 'string'},
	{ dataIndex: 'Price', 		type: 'string'},
	{ dataIndex: 'count', 	type: 'int'},
	{ dataIndex: 'OdVym', 	type: 'string'}
        ]
    };
	
 function valiuta(val){ 
		switch(val)
		{
		case 'dollar':
		  var ItemValiuta = '<span style="color:green;"> долари </span>';
		  break;
		case 'grivna':
		  var ItemValiuta = '<span style="color:blue;"> гривні </span>';
		  break;
		case 'euro':
		  var ItemValiuta = '<span style="color:orange;"> євро </span>';
		  break;
		default:
		  var ItemValiuta = '<span style="color:red;"> Невизначено</span>';
		}
	return ItemValiuta;
	}
	
 SkladStore1 = Ext.create('Ext.data.JsonStore', {

			autoLoad: true,
            autoSync: true,
            storeId: 'SkladStore1',
			pageSize: 20,
            proxy: {
                type: 'ajax',
                url: './php/view_sklad.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    type: 'int',
					name: 'ThemeId'
                },
                {
                    name: 'Type'
                },
                {
                    name: 'count'
                },
                {
                    name: 'CategoryId'
                },
                {
                    name: 'CategoryName'
                },
                {
                    name: 'OtrymanoVid'
                },
                {
                    name: 'SubCategoryId'
                },
                {
                    name: 'SubCategoryName'
                },
                {
                    name: 'ModelId'
                },
                {
                    name: 'Model'
                },
                {
                    name: 'Vendor'
                },
                {
                    name: 'Description'
                },
                {
                    name: 'OdVym'
                },
                {
                    name: 'Price',
                    type: 'float'
                },
                {
                    name: 'Time',
                    type: 'float'
                },
                {
                    name: 'Valiuta'
                },
                {
                    name: 'euro'
                },
                {
                    name: 'dollar'
                },
                {
                    name: 'grivna'
                }
            ]
		
    });
	
	
      var editor = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти'
    });
	
	 var grivna = Ext.create('Ext.form.TextField', {
	allowBlank : true,
	//padding: 10,
    labelAlign: 'right',
	fieldLabel:'Курс гривні',
	//maxLength: 100,
	width: 150,
	 labelWidth: 70,
	name:'grivna',
	//anchor:'90%',
	id:"grivna"
}); 
var dollar = Ext.create('Ext.form.TextField', {
	allowBlank : true,
	//padding: 10,
    labelAlign: 'right',
	fieldLabel:'Курс долару',
	//maxLength: 100,
	width: 150,
	 labelWidth: 70,
	name:'nazva',
	//anchor:'90%',
	id:"dollar"
}); 
var euro = Ext.create('Ext.form.TextField', {
	allowBlank : true,
	//padding: 10,
    labelAlign: 'right',
	fieldLabel:'Курс євро',
	//maxLength: 50,
	width: 150,
	 labelWidth: 70,
	name:'dollar',
	
	id:"euro"
}); 

var reader2 = new Ext.data.JsonReader({
        //idProperty: 'ModelId',
		root: 'results',
        totalProperty: 'total',
        fields: [
			{name: 'euro', type: 'float'},
			{name: 'grivna', type: 'float'},
			{name: 'dollar', type: 'float'},
			{name: 'pdv', type: 'float'},
        ]
    });

	var SettingsForm =  Ext.create('Ext.FormPanel', {
		id: "SettingsForm",
		layout: 'table',
		
		frame: true,
		border: false,
		reader: reader2,
		width: 600,
		//title:'Поточний курс валют',
		//hidden:false,
		draggable:false,
		resizible:false,
		collapsible: false,
		collapsed: false,
		maximizable : false,
		animCollapse: false,
		items:[dollar, euro, grivna]
			
    });

	
Ext.define('Borsuko.view.ui.sklad_edit', {
    extend: 'Ext.panel.Panel',

    height: 660,
    animCollapse: false,
    collapseFirst: false,
    title: 'Редагування складу',

    initComponent: function() {
        var me = this;
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
						{
							xtype: 'button',
							iconCls: 'save_columns', tooltip: 'Зберегти параметри колонок',
								handler : function(){
								getCount();
								}
						},
                    {
                        xtype: 'button',
                        text: 'Добавити на склад',
						iconCls: 'add',
						handler : function(){
									strUrl = "/add_to_price.php";  
									window.location = strUrl;
								}
                    },
                    SettingsForm
                ]
            }
        ];
        me.items = [
            {
                xtype: 'gridpanel',
                frame: true,
                height: 600,
                id: GridName,
                focusOnToFront: false,
                animCollapse: false,
                collapseFirst: false,
                //forceFit: true,
                store: 'SkladStore1',
                columnLines: true,
                viewConfig: {
                    frame: true,
                    width: 2000
                },
                plugins: [editor],
				features: [filters],
                selModel: Ext.create('Ext.selection.RowModel', {
                    allowDeselect: true
                }),
                dockedItems: [
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
                        store: 'SkladStore1',
                        dock: 'bottom'
                    }
                ],
                columns: [
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
                        dataIndex: 'Model',
                        text: 'Модель',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'count',
                        text: 'Кількість',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'OdVym',
                        text: 'Од. Вим',
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
                        hidden: true,
                        width: 15,
                        dataIndex: 'ModelId',
                        text: 'МІ'
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
                        dataIndex: 'Vendor',
                        text: 'Виробник',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Price',
                        text: 'Ціна в грн',
                        field: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'Valiuta',
                        text: 'Валюта',
						renderer: valiuta,
                         field: {
                            xtype: 'combobox',
                            displayField: 'name',
							store: 'ValiutaStore',
                            queryMode: 'local',
                            valueField: 'abbr'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'OtrymanoVid',
                        text: 'Отримано від',
                        field: {
                            xtype: 'textfield'
                        }
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
});

editor.on('afteredit', sendUpdateSkladRequest); 

	function sendUpdateSkladRequest(){
        var jsonData = new Array();                        
        for(i=0;i<SkladStore1.getCount();i++) {
            record = SkladStore1.getAt(i);
            jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData); 		
		Ext.Ajax.request({
		    url:'./php/edit.php?action=saveData_sklad', //php function that saves the data
		  	params:{data:jsonData},
            success:function(responce, action) {
				var MyGrid = Ext.getCmp(GridName).getView();
				MyGrid.getStore().load();
			
            },
            failure: function(form, action) {
                alert('Oops the delete did not work out too well!');
            }
		});        
    }  
	
/*
editor.on('afteredit', function (rowEditor, changes, record, rowIndex) {
        var record = rowEditor.grid.getStore().getAt(rowIndex);
		alert(record.data.Valiuta)
	
		Ext.Ajax.request({
		    url:'./php/edit.php?action=saveData_sklad', //php function that saves the data
		  	params: {
				CategoryId : record.data.CategoryId,
				CategoryName : record.data.CategoryName,
				Model : record.data.Model,
				count : record.data.count,
				OdVym : record.data.OdVym,
				ModelId : record.data.ModelId,
				Description : record.data.Description,
				Vendor : record.data.Vendor,
				Price : record.data.Price,
				Valiuta : record.data.Valiuta,
				OtrymanoVid : record.data.OtrymanoVid
			},
            success: function()
			{
				Ext.MessageBox.alert('Збережено', 'Збережено');
			},
			failure: function(response)
			{
				Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
			}
		}); 
		
		
    });
	*/
	
	store_money = Ext.create('Ext.data.JsonStore', {

        storeId: 'store_money',
		autoLoad: true,
            proxy: {
                type: 'ajax',
				url:'/php/settings.php?action=showData', 
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'dollar'
                },
                {
                    name: 'euro'
                },
                {
                    name: 'grivna'
                }
            ],
			listeners: {
						load: function() {
						
						Ext.getCmp("dollar").setValue(store_money.data.items[0].data.dollar);
						Ext.getCmp("euro").setValue(store_money.data.items[0].data.euro);
						Ext.getCmp("grivna").setValue(store_money.data.items[0].data.grivna);
						}
					}
    });
	
		
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

