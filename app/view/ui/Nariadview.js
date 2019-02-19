/*
 * File: app/view/ui/Nariadview.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
var GridName = "Nariad_View_grid";
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
		{ name: 'ID', 		type: 'int'},
		{ name: 'P_kontragent', 	type: 'string'},
		{ name: 'S_kontragent', 	type: 'string'},
		{ name: 'Date', 		type: 'date'},
		{ name: 'Object', 	type: 'string'},
		{ name: 'Prymitka', 	type: 'string'}
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
           { dataIndex: 'ID', 		type: 'int'},
		{ dataIndex: 'P_kontragent', 	type: 'string'},
		{ dataIndex: 'S_kontragent', 	type: 'string'},
		{ dataIndex: 'Date', 		type: 'date'},
		{ dataIndex: 'Object', 	type: 'string'},
		{ dataIndex: 'Prymitka', 	type: 'string'}
        ]
    };

	
NariadView_All1 = Ext.create('Ext.data.JsonStore', {

       autoLoad: true,
	   //pageSize: 20,
            storeId: 'NariadView_All1',
            proxy: {
                type: 'ajax',
                url: './php/view_nariady_all.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    type: 'int',
					name: 'ID'
                },
                {
                    name: 'P_kontragent'
                },
                {
                    name: 'S_kontragent'
                },
                {
                    name: 'Prymitka'
                },
                {
                    //type: 'date',
					name: 'Date'
                },
                {
                    name: 'Object'
                }
            ]
    });
NariadView_Open1 = Ext.create('Ext.data.JsonStore', {

       autoLoad: true,
	   //pageSize: 20,
            storeId: 'NariadView_Open1',
            proxy: {
                type: 'ajax',
                url: './php/view_nariady_open.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    type: 'int',
					name: 'ID'
                },
                {
                    name: 'P_kontragent'
                },
                {
                    name: 'S_kontragent'
                },
                {
                    name: 'Prymitka'
                },
                {
                    //type: 'date',
					name: 'Date'
                },
                {
                    name: 'Object'
                }
            ]
    });
NariadView_Closed1 = Ext.create('Ext.data.JsonStore', {
		//pageSize: 20,
        autoLoad: true,
            storeId: 'NariadView_Closed1',
            proxy: {
                type: 'ajax',
                url: './php/view_nariady_close.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    type: 'int',
					name: 'ID'
                },
                {
                    name: 'P_kontragent'
                },
                {
                    name: 'S_kontragent'
                },
                {
                    name: 'Prymitka'
                },
                {
                    //type: 'date',
					name: 'Date'
                },
                {
                    name: 'Object'
                }
            ]
    });
NariadView_Finalized1 = Ext.create('Ext.data.JsonStore', {
		//pageSize: 20,
        autoLoad: true,
            storeId: 'NariadView_Finalized1',
            proxy: {
                type: 'ajax',
                url: './php/view_nariady_finalized.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    type: 'int',
					name: 'ID'
                },
                {
                    name: 'P_kontragent'
                },
                {
                    name: 'S_kontragent'
                },
                {
                    name: 'Prymitka'
                },
                {
                    //type: 'date',
					name: 'Date'
                },
                {
                    name: 'Object'
                }
            ]
    });

CurrentStore = "NariadView_Open1";	
	
Ext.define('Borsuko.view.ui.Nariadview', {
    extend: 'Ext.panel.Panel',

    //height: 625,
    animCollapse: false,
    collapseFirst: false,
    title: 'Збережені Наряди',

    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                autoRender: true,
                autoShow: true,
                frame: true,
                //height: 600,
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
                        xtype: 'gridpanel',
                        frame: true,
                        //height: 500,
                        id: GridName,
                        width: 800,
                        focusOnToFront: false,
                        animCollapse: false,
                        collapseFirst: false,
                        //forceFit: true,
                        store: CurrentStore,
                        columnLines: true,
                        dock: 'left',
						features: [filters],
                        columns: [
                            {
                                xtype: 'gridcolumn',
                                autoRender: true,
                                width: 15,
                                dataIndex: 'ID',
                                text: 'Номер'
                            },
                            {
                                xtype: 'gridcolumn',
                                width: 15,
                                dataIndex: 'Object',
                                text: 'Об\'єкт'
                            },
                            {
                                xtype: 'gridcolumn',
                                width: 15,
                                dataIndex: 'P_kontragent',
                                text: 'Головний контрагент'
                            },
                            {
                                xtype: 'gridcolumn',
								 width: 15,
                                dataIndex: 'S_kontragent',
                                text: 'Помічник'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'Date',
								renderer: dateFunction,
                                text: 'Дата'
                            },
                            {
                                xtype: 'gridcolumn',
								 width: 15,
                                dataIndex: 'Prymitka',
                                text: 'Примітка'
                            }
                        ],
						listeners: {
							selectionchange: function(model, records) {
								if (records[0]) {
								this.up('form').getForm().loadRecord(records[0]);
								Ext.getCmp('del').setDisabled(false)
								Ext.getCmp('show').setDisabled(false)
								Ext.getCmp('Close_Nariad').setDisabled(false)
								Ext.getCmp('Prolongation').setDisabled(false)
								}
							}
						},
			
                        viewConfig: {
                            frame: true,
                            height: 600
                        },
						

                        selModel: Ext.create('Ext.selection.RowModel', {
                            allowDeselect: true
                        }),
                        dockedItems: [
                            {
                                xtype: 'pagingtoolbar',
								//pageSize: 20,
								id: 'pagingtoolbar',
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
                                //store: 'NariadView_Open1',
								store: CurrentStore,
                                dock: 'bottom'
                            }
                        ]
                    },
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
                                xtype: 'combobox',
                                id: 'Stan_objektu_toolbar',
                                name: 'Stan_objektu_toolbar',
                                emptyText: 'Стан наряду',
								editable: false,
                                displayField: 'status',
                                queryMode: 'local',
                                store: 'statuses_store',
                                valueField: 'status',
								listeners: {
								

								select: {
									fn:function(combo, value) 
									{
									switch (combo.value)
									{
									
								case 'Всі':
								CurrentStore = 	NariadView_All1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind("NariadView_All1");
									Ext.getCmp("pagingtoolbar").doRefresh();
									
									Ext.getCmp('del').setDisabled(false)
									Ext.getCmp('Close_Nariad').setDisabled(false)
									Ext.getCmp('Prolongation').setDisabled(false)
										
									break;
								case 'Відкриті':
								CurrentStore = NariadView_Open1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind("NariadView_Open1");
									Ext.getCmp("pagingtoolbar").doRefresh();
									
									Ext.getCmp('del').setDisabled(false)
									Ext.getCmp('Close_Nariad').setDisabled(false)
									Ext.getCmp('Prolongation').setDisabled(false)
									break;
								case 'Закриті':
								CurrentStore = NariadView_Closed1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind("NariadView_Closed1");
									Ext.getCmp("pagingtoolbar").doRefresh();
										Ext.getCmp('del').setDisabled(true)
										Ext.getCmp('Close_Nariad').setDisabled(true)
										Ext.getCmp('Prolongation').setDisabled(true)
									break;
								case 'Фіналізовані':
								CurrentStore = NariadView_Finalized1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind("NariadView_Finalized1");
									Ext.getCmp("pagingtoolbar").doRefresh();
									Ext.getCmp('del').setDisabled(true)
									Ext.getCmp('Close_Nariad').setDisabled(false)
									Ext.getCmp('Prolongation').setDisabled(false)
									
									break;
									};
									}
								}
							}
                            },
                            {
                                xtype: 'button',
                                id: 'show',
								disabled: true,
                                text: 'Перегляд наряду',
								iconCls: 'view',
								handler : function()
								{
								var strnomer = Ext.getCmp('ID').getValue();
								strUrl = "/Nariad.php?objid="+strnomer;
								window.location = strUrl;
								},
								style: {marginLeft: '25px'}
			
                            },
                            {
                                xtype: 'button',
                                id: 'del',
								disabled: true,
                                text: 'Фіналізація наряду',
								iconCls: 'flag',
								handler : function(){
									Ext.Msg.confirm('Підтвердження', 'Фіналізовані наряди неможливо редагувати. Ви дійсно хочете Фіналізувати наряд?',
									function(btn){
										if(btn == 'yes'){
										finalization();
										}
									}
									);
								}
                            },
                            {
                                xtype: 'button',
                                id: 'Close_Nariad',
								iconCls: 'Turn_off',
								disabled: true,
                                text: 'Закрити наряд',
								handler : function(){
									var strnomer = Ext.getCmp('ID').getValue();
									strUrl = "/Nariad_spys.php?objid="+strnomer;
									window.location = strUrl;
								},
								style: {marginLeft: '25px'}
                            },
                            {
                                xtype: 'button',
                                id: 'Prolongation',
								iconCls: 'go-to-post',
								disabled: true,
								style: {marginLeft: '25px'},
                                text: 'Пролонгація наряду',
								handler : function(){
									Prolongation()
								}
                            }
                        ]
                    }
                ],
                items: [
                    {
                        xtype: 'container',
                        autoRender: true,
                        autoShow: true,
                        border: 0,
                        frame: true,
                        height: 600,
                        id: 'form',
                        itemId: 'form',
                        width: 384,
                        maintainFlex: true,
                        layout: {
                            type: 'column'
                        }

                    }
                ]
            }
        ];
        me.callParent(arguments);
		
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
					Ext.getCmp(GridName).columns[i].setWidth(ColumnSizeStore.data.items[i].data.size);
					//alert(ColumnSizeStore.data.items[i].data.size);
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


    }
	
	
	
});

		function finalization(){
		var strnomer = Ext.getCmp('ID').getValue();
		Ext.Ajax.request({
			url:'/php/finalization.php', //php function that saves the data
			params: {strnomer: strnomer},
			success:function(responce, action) {
			//strUrl = "/Nariadview.php"
			//window.location = strUrl;
			},
			failure: function(form, action) {
			alert('Помилка при виделенні об*єкту');
			}
		});
    }
		function Prolongation(){
			var strnomer = Ext.getCmp('ID').getValue();
		Ext.Ajax.request({
			url:'/php/prolongation.php', //php function that saves the data
			params: {nomer: strnomer},
			success:function(responce, action) 
			{
				strUrl = "/prolongation.php?OldNariadId="+strnomer;
				window.location = strUrl;
			},
			failure: function(form, action) {
			alert('Помилка при виделенні об*єкту');
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
	function dateFunction(val){ 

		var dateArray = val.split("-");
		MyDate = dateArray[2]+"/"+dateArray[1]+"/"+dateArray[0];
		return MyDate;
	}




