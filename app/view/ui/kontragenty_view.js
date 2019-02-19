/*
 * File: app/view/ui/kontragenty_view.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
var GridName = "kontragenty_view_grid"; 
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
			{type: 'numeric', name: 'ID'}, 
			{type: 'string', name: 'PIB'}, 
			{type: 'string', name: 'Telefon'}, 
			{type: 'numeric', name: 'Balans'}, 
			{type: 'date', name: 'DateDodanyj'}, 
			{type: 'date', name: 'DateZvilnenyj'}, 
			{type: 'date', name: 'DateZminaBalansu'}, 
			{type: 'string', name: 'Prymitka'}
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
            {type: 'numeric', dataIndex: 'ID'}, 
			{type: 'string', dataIndex: 'PIB'}, 
			{type: 'string', dataIndex: 'Telefon'}, 
			{type: 'numeric', dataIndex: 'Balans'}, 
			{type: 'date', dataIndex: 'DateDodanyj'}, 
			{type: 'date', dataIndex: 'DateZvilnenyj'}, 
			{type: 'date', dataIndex: 'DateZminaBalansu'}, 
			{type: 'string', dataIndex: 'Prymitka'}
        ]
    };
	
 var dialog;
 var win;
 
 

	store_all_kontragenty1 = Ext.create('Ext.data.JsonStore', {
        storeId: 'store_all_kontragenty1',
		pageSize: 20,
		autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './php/view_kontragent_all.php',
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
                    name: 'PIB'
                },
                {
                    name: 'Telefon'
                },
                {
                    type: 'int',
					name: 'Balans'
                },
                {
                    name: 'DateDodanyj'
                },
                {
                    name: 'DateZvilnenyj'
                },
                {
                    name: 'DateZminaBalansu'
                },
                {
                    type: 'int',
					name: 'robochyj_balans'
                },
                {
                    type: 'int',
					name: 'Sklad_balans'
                },
                {
                    type: 'int',
					name: 'Fondy_balans'
                },
                {
                    name: 'Prymitka'
                }
            ]
    });
	store_pracivnyky1 = Ext.create('Ext.data.JsonStore', {
        storeId: 'store_pracivnyky1',
		pageSize: 20,
		autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './php/view_kontragent_pracivnyky.php',
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
                    name: 'PIB'
                },
                {
                    name: 'Telefon'
                },
                {
                    type: 'int',
					name: 'Balans'
                },
                {
                    name: 'DateDodanyj'
                },
                {
                    name: 'DateZvilnenyj'
                },
                {
                    name: 'DateZminaBalansu'
                },
                {
                    type: 'int',
					name: 'robochyj_balans'
                },
                {
                    type: 'int',
					name: 'Sklad_balans'
                },
                {
                    type: 'int',
					name: 'Fondy_balans'
                },
                {
                    name: 'Prymitka'
                }
            ]
    });
	
	store_managers1 = Ext.create('Ext.data.JsonStore', {
        storeId: 'store_managers1',
		pageSize: 20,
		autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './php/view_kontragent_managers.php',
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
                    name: 'PIB'
                },
                {
                    name: 'Telefon'
                },
                {
                    type: 'int',
					name: 'Balans'
                },
                {
                    name: 'DateDodanyj'
                },
                {
                    name: 'DateZvilnenyj'
                },
                {
                    name: 'DateZminaBalansu'
                },
                {
                    type: 'int',
					name: 'robochyj_balans'
                },
                {
                    type: 'int',
					name: 'Sklad_balans'
                },
                {
                    type: 'int',
					name: 'Fondy_balans'
                },
                {
                    name: 'Prymitka'
                }
            ]
    });
	
	store_postachalniky1 = Ext.create('Ext.data.JsonStore', {
        storeId: 'store_postachalniky1',
		pageSize: 20,
		autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './php/view_kontragent_postachalniky.php',
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
                    name: 'PIB'
                },
                {
                    name: 'Telefon'
                },
                {
                    name: 'Balans'
                },
                {
                    name: 'DateDodanyj'
                },
                {
                    name: 'DateZvilnenyj'
                },
                {
                    name: 'DateZminaBalansu'
                },
                {
                    name: 'robochyj_balans'
                },
                {
                    name: 'Sklad_balans'
                },
                {
                    name: 'Fondy_balans'
                },
                {
                    name: 'Prymitka'
                }
            ]
    });
	
	
 
 	var date1 = new Ext.form.DateField({
	allowBlank : false,
	fieldLabel:'Початок періоду',
	format : "d/m/Y",
	name:'date1',
	anchor:'100%',
	emptyText:'Дата початку історії',
	id:"date1"
}); 
	var date2 = new Ext.form.DateField({
	allowBlank : false,
	format : "d/m/Y",
	fieldLabel:'Кінець періоду',
	name:'date2',
	anchor:'100%',
	emptyText:'Дата кінця історії',
	id:"date2"
}); 
	date1.setValue(new Date());
	date2.setValue(new Date());


	var kontr = new Ext.form.ComboBox({
		allowBlank : false,
		id: 'kontr',
		autoSelect : true,
		store: store_all_kontragenty1,
		fieldLabel:'Контрагент',
		displayField: 'PIB',
		valueField:'PIB',
		typeAhead: true,
		editable: false,
		mode: 'remote',
		forceSelection: true,
		triggerAction: 'all',
		name : 'kontr',
		emptyText: 'Вибір ...',
		selectOnFocus: true
	});
 
 function showContactForm() {
        if (!win) {
            var form = Ext.widget('form', {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },
                defaults: {
                    margins: '0 0 10 0'
                },

                items: [date1, date2, kontr],

                buttons: [{
                    text: 'Відмінити',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                }, {
                    text: 'Експорт фінансам',
                    handler: function() {
                        if (this.up('form').getForm().isValid()) {
							
							strkontr = Ext.getCmp("kontr").getValue();
							strdate1 = Ext.getCmp("date1").getValue();
							strdate2 = Ext.getCmp("date2").getValue();

							
							var day = strdate1.getDate().toString();
							var month = (strdate1.getMonth()+1).toString();
							var year = strdate1.getFullYear().toString();

							var day1 = strdate2.getDate().toString();
							var month1 = (strdate2.getMonth()+1).toString();
							var year1 = strdate2.getFullYear().toString();

							
							
							//d1 = Ext.Date.format(strdate1, 'y-m-d');
							//d2 = Ext.Date.format(strdate2, 'y-m-d');

							d1 = year+'-'+month+'-'+day;
							d2 = year1+'-'+month1+'-'+day1;
							strUrl = "/php/Kontragent_export_finances.php"
							strUrlNew = strUrl+"?kontr="+strkontr+"&date1="+d1+"&date2="+d2;
							window.open(strUrlNew);
			
			
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            //Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
                        }
                    }
                },
				{
                    text: 'Експорт по втратам',
                    handler: function() {
                        if (this.up('form').getForm().isValid()) {
							
							strkontr = Ext.getCmp("kontr").getValue();
							strdate1 = Ext.getCmp("date1").getValue();
							strdate2 = Ext.getCmp("date2").getValue();

							d1 = Ext.Date.format(strdate1, 'y-m-d');
							d2 = Ext.Date.format(strdate2, 'y-m-d');

							strUrl = "/php/Kontragent_export_vtraty.php"
							strUrlNew = strUrl+"?kontr="+strkontr+"&date1="+d1+"&date2="+d2;
							window.open(strUrlNew);
			
			
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            //Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
                        }
                    }
                }]
            });

            win = Ext.widget('window', {
                title: 'Експорт',
                closeAction: 'hide',
                width: 400,
                height: 400,
                minHeight: 400,
                layout: 'fit',
                resizable: true,
                modal: true,
                items: form
            });
        }
        win.show();
    }
 
 	
CurrentStore = "store_all_kontragenty1";
Ext.define('Borsuko.view.ui.kontragenty_view', {
    extend: 'Ext.panel.Panel',

    animCollapse: false,
    collapseFirst: false,
    title: 'Перегляд контрагентів',

    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                autoRender: true,
                autoShow: true,
                frame: true,
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
                        //height: 400,
                        id: GridName,
                        width: 800,
                        focusOnToFront: false,
                        animCollapse: false,
                        collapseFirst: false,
                        //forceFit: true,
                        store: CurrentStore,
                        columnLines: true,
                        dock: 'left',
						features: [filters, 
							{
								ftype: 'summary'
							},
							{
								ftype: 'grouping'
							}
						],
						//features: [filters],
                        columns: [
							/*{
                                xtype: 'gridcolumn',
								width: 25,
                                dataIndex: 'type',
								renderer: function(value, summaryData, dataIndex) {
									return "контр.";
								},	
                                text: 'Тип'
                            },*/
                            {
                                xtype: 'gridcolumn',
                                width: 15,
                                dataIndex: 'ID',
                                text: 'Номер'
                            },
                            {
                                xtype: 'gridcolumn',
                                width: 15,
                                dataIndex: 'PIB',
                                text: 'П.І.Б'
                            },
                            {
                                xtype: 'gridcolumn',
                                width: 15,
                                dataIndex: 'Telefon',
                                text: 'Телефон'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'Balans',
								summaryType: "sum", 
                                text: 'Поточний Баланс'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'robochyj_balans',
								summaryType: "sum", 
								/*summaryRenderer: function(value, summaryData, dataIndex) {
									return value;
								},*/	
                                text: 'Роб.Баланс'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'Sklad_balans',
								summaryType: "sum", 
                                text: 'Склад.Баланс'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'Fondy_balans',
								summaryType: "sum", 
                                text: 'Вир.Фонд.Баланс'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'DateDodanyj',
                                text: 'Доданий'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'DateZvilnenyj',
                                text: 'Звільнений'
                            },
                            {
                                xtype: 'gridcolumn',
								width: 15,
                                dataIndex: 'DateZminaBalansu',
                                text: 'Остання зміна балансу'
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
								var strID = records[0].data.ID;
								//alert(records[0].data.ID);
								var el = Ext.get('kontragentPhoto');
								el.set({src: './resources/Kontragenty/'+strID+'.jpg'});
								}
							}
						},
                        viewConfig: {
                            frame: true,
                            width: 700
                        },
                        selModel: Ext.create('Ext.selection.RowModel', {
                            allowDeselect: true
                        }),
                        dockedItems: [
                            {
                                xtype: 'pagingtoolbar',
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
								editable: false,
                                id: 'TypKontragenta_toolbar',
                                name: 'TypKontragenta_toolbar',
                                emptyText: 'Тип контрагентів',
                                displayField: 'type',
                                queryMode: 'local',
                                store: 'TypKontragenta_store',
                                valueField: 'type',
								 listeners: {
								select: {
									fn:function(combo, value) 
									{
									switch (combo.value)
									{
									
								case 'Всі':
								CurrentStore = 	store_all_kontragenty1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind(CurrentStore);
									Ext.getCmp("pagingtoolbar").doRefresh();
									break;
								case 'Працівники':
								CurrentStore = store_pracivnyky1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind(CurrentStore);
									Ext.getCmp("pagingtoolbar").doRefresh();
									break;
								case 'Менеджери':
								CurrentStore = store_managers1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									Ext.getCmp("pagingtoolbar").doRefresh();
									break;
								case 'Постачальники':
								CurrentStore = store_postachalniky1;
									Ext.getCmp(GridName).view.store = CurrentStore;
									Ext.getCmp(GridName).view.refresh();
									//Ext.getCmp("pagingtoolbar").bind(CurrentStore);
									Ext.getCmp("pagingtoolbar").doRefresh();
									break;
									};
									}
								}
							}
                            },
                            {
                                xtype: 'button',
                                id: 'show',
                                text: 'Додати контрагента',
								iconCls: 'add16',
								handler : function()
								{
								window.location = "kontragenty_add.php";
								}
                            },
		                    {
                                xtype: 'button',
                                id: 'del',
                                text: 'Історія по контрагенту',
								iconCls: 'export',
								 handler: showContactForm
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
                        height: 655,
                        id: 'form',
                        itemId: 'form',
                        width: 384,
                        maintainFlex: true,
                        layout: {
                            type: 'column'
                        },
                        items: [
                            {
                                xtype: 'container',
                                border: 0,
                                height: 220,
                                id: 'Container1',
                                padding: 10,
                                width: 338,
                                items: [
									{
										xtype: 'box',
										margins: '5 5 5 5',
										region: 'west',
										width: 200,
										id: 'kontragentPhoto',
										height: 300,
										autoEl: {tag: 'img', src: 'resources/Kontragenty/Test.jpg', width: 200, height: 280 }
									},
                                    {
                                        xtype: 'textfield',
                                        id: 'robochyj_balans',
                                        width: 300,
                                        toFrontOnShow: false,
										readOnly: true,
                                        name: 'robochyj_balans',
                                        fieldLabel: 'Роб. Баланс',
                                        preventMark: true
                                    },
                                    {
                                        xtype: 'textfield',
										readOnly: true,
                                        id: 'Sklad_balans',
                                        width: 300,
                                        name: 'Sklad_balans',
                                        fieldLabel: 'Баланс по складу'
                                    },
                                    {
                                        xtype: 'textfield',
										readOnly: true,
                                        id: 'Fondy_balans',
                                        width: 300,
                                        name: 'Fondy_balans',
                                        fieldLabel: 'Баланс по вир. фондам'
                                    },
                                    {
                                        xtype: 'textareafield',
										readOnly: true,
                                        id: 'Prymitka',
                                        width: 300,
                                        name: 'Prymitka',
                                        fieldLabel: 'Примітка'
                                    }
                                ]
                            }
                        ]
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

 