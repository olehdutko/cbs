/*
 * File: app/view/ui/users.js
 * Date: Tue Sep 06 2011 21:15:53 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
 var GridName = "grid_users";
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
		{type: 'numeric', dataIndex: 'id'}, 
		{type: 'string', dataIndex: 'login'}, 
		{type: 'string', dataIndex: 'role'}, 
		{type: 'string', dataIndex: 'Prymitka'},
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
		{type: 'numeric', dataIndex: 'id'}, 
		{type: 'string', dataIndex: 'login'}, 
		{type: 'string', dataIndex: 'role'}, 
		{type: 'string', dataIndex: 'Prymitka'},
        ]
    };
	
	
    var editor = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти'
    });
	
Ext.define('Borsuko.view.ui.users', {
    extend: 'Ext.panel.Panel',

    height: 600,
    frameHeader: false,

    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'gridpanel',
                height: 600,
                id: GridName,
                toFrontOnShow: false,
                bodyBorder: true,
                animCollapse: false,
                collapseFirst: false,
                frameHeader: false,
                title: 'Користувачі',
                //forceFit: true,
                store: 'store_users',
                columnLines: true,
				//features: [filters],
                columns: [
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'id',
                        groupable: true,
                        text: '№'
                    },
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'role',
                        text: 'Роль',
						field: {
                            xtype: 'combobox',
                            id: 'role',
                            displayField: 'type',
                            queryMode: 'local',
							editable: false,
                            store: 'roles_store',
                            valueField: 'type'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'login',
                        text: 'Логін',
						field: {
							id: 'login',
							xtype: 'textfield'
						}
                    },
                    {
                        xtype: 'gridcolumn',
						width: 15,
                        dataIndex: 'password',
                        text: 'Пароль',
						field: {
							id: 'password',
							xtype: 'textfield'
						}

                    },
                    {
                        xtype: 'gridcolumn',
                        width: 15,
                        dataIndex: 'Prymitka',
                        text: 'Примітка',
						field: {
							id: 'prymitka',
							xtype: 'textfield'
						}

                    }
                ],
                viewConfig: {
                    height: 600,
                    width: 2000
                },
                features: [filters,
                    {
                        ftype: 'grouping'
                    }
                ],
                selModel: Ext.create('Ext.selection.RowModel', {

                }),
                plugins: [editor],
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
                        store: 'store_users',
                        dock: 'bottom',
                        dockedItems: [
                            {
                                xtype: 'pagingtoolbar',
                                afterPageText: 'із {0}',
                                beforePageText: 'Сторінка',
                                displayInfo: true,
                                emptyMsg: 'Записи відсутні',
                                firstText: 'Перша сторінка',
                                lastText: 'Остання сторінка',
                                nextText: 'Наступна сторінка',
                                prependButtons: true,
                                prevText: 'Попередня сторінка',
                                refreshText: 'Оновити',
                                store: 'Vyplaty_store',
                                flex: 1
                            },
                            {
                                xtype: 'pagingtoolbar',
                                afterPageText: 'із {0}',
                                beforePageText: 'Сторінка',
                                displayInfo: true,
                                emptyMsg: 'Записи відсутні',
                                firstText: 'Перша сторінка',
                                lastText: 'Остання сторінка',
                                nextText: 'Наступна сторінка',
                                prependButtons: true,
                                prevText: 'Попередня сторінка',
                                refreshText: 'Оновити',
                                store: 'Vyplaty_store',
                                flex: 1
                            },
                            {
                                xtype: 'pagingtoolbar',
                                afterPageText: 'із {0}',
                                beforePageText: 'Сторінка',
                                displayInfo: true,
                                emptyMsg: 'Записи відсутні',
                                firstText: 'Перша сторінка',
                                lastText: 'Остання сторінка',
                                nextText: 'Наступна сторінка',
                                prependButtons: true,
                                prevText: 'Попередня сторінка',
                                refreshText: 'Оновити',
                                store: 'Vyplaty_store',
                                flex: 1
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
								handler : function()
								{
								getCount();
								}
							},
							
                            {
                                xtype: 'button',
								iconCls: 'add16',
                                text: 'Добавити користувача',
								handler : function()
								{
								window.location = "user_add.php";
								}
                            },
                            {
                                xtype: 'button',
                                text: 'Видалити користувача',
								iconCls: 'kontr_rem',
						handler : function(){
							Ext.Msg.confirm('Підтвердження', 'Ви дійсно хочите видалити цього користувача?',
							function(btn){
								if(btn == 'yes'){
								RemoveRequest();
								}
							}
							);
						}
                            }
                        ]
                    }
                ]
            }
        ];
        me.callParent(arguments);
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

	function RemoveRequest(){
		var MyStore = Ext.getCmp(GridName).getStore();
		var StoreCount = MyStore.getCount();
		if(StoreCount<1){
			return;
		}
		
		var selection = Ext.getCmp(GridName).getSelectionModel();
		var strNomer = selection.selected.items[0].raw.id;
		Ext.Ajax.request({
		   //url:'./php/remove_users.php',
		  	params: {nomer: strNomer},
            success:function(responce, action) {
				var MyGrid = Ext.getCmp(GridName).getView();
				MyGrid.getStore().load();
			
            },
            failure: function(form, action) {
                //alert('Oops the delete did not work out too well!');
            }
		});
	
    }  
	
	function UpdateRequest(){
		var selection = Ext.getCmp(GridName).getSelectionModel();
		var index = selection.selected.items[0].raw.id;
		var role = Ext.getCmp('role').getValue();
		var login = Ext.getCmp('login').getValue();
		var prymitka = Ext.getCmp('prymitka').getValue();
		var oldPassword = Ext.getCmp('password').getValue();
		var newPassword = hex_md5(oldPassword);

		Ext.Ajax.request({
		    url:'./php/edit_users.php',
				params: {
				index: index ,
				role: role,
				login: login,
				newPassword: newPassword,
				prymitka: prymitka
				},
            success:function(responce, action) 
			{
				Ext.MessageBox.alert('Збережено', 'Збережено');
			},
			
			failure: function(response)
			{
				Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
			}
		});        
		var MyGrid = Ext.getCmp(GridName).getView();
		MyGrid.getStore().load();
    }
	
function AddUser(){
	var settingsDialog;
		settingsDialog = new Ext.Window({
		title: 'Новий Користувач:',
		layout:'fit',
		width:320,
		height:220,
		closeAction:'hide',
		items: [{
            xtype: 'form',
            frame: true,
            border: true,
            labelWidth: 75,
            items: [input_username, input_password, prymitka]
          }],
		plain: true,
 		
			buttons: [	
{
              text: 'Додати',
              id: 'save_config',
              handler: function(){
				if(Ext.getCmp('input_username').isValid() && Ext.getCmp('input_password').isValid() && Ext.getCmp('role').isValid()){
                  Ext.Ajax.request({
                    url: '/php/AddNewUser.php',
                    params: {
                      prymitka: Ext.getCmp('prymitka').getValue(),
					  username: Ext.getCmp('input_username').getValue(),
                      password: hex_md5(Ext.getCmp('input_password').getValue()),
					  role: Ext.getCmp('role').getValue()
                    },
                    success: function(response, opts) 
					{
					    Ext.MessageBox.show({
                          title: 'Повідомлення',
                          msg: 'Користувач був успішно доданий',
                          buttons: Ext.MessageBox.OK,
                          icon: Ext.MessageBox.INFO
                        });
						store_users.reload();
						settingsDialog.hide();
						
                    },
                    failure: function(response, opts) 
					{
						Ext.MessageBox.show({
						title: 'Помилка',
						msg: 'Помилка при додаванні користувача до системи',
						buttons: Ext.MessageBox.OK,
						icon: Ext.MessageBox.ERROR
						});
                    }
                  });
                } 
				else 
				{
                  Ext.MessageBox.show({
                    title: 'Помилка',
                    msg: 'Введіть логін, пароль та роль користувача ',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                  });
                }
              }
            },
			
			{text: 'Закрити',
			handler: function(){
			settingsDialog.hide();}}
			]
		});
		
		
		
        settingsDialog.show();
      }
	editor.on('afteredit', UpdateRequest); 
