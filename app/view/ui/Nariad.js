/*
 * File: app/view/ui/Nariad.js
 * Date: Mon Sep 12 2011 16:32:25 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '/ext-4.0.2a/examples/ux');
Ext.require([
    //'Ext.grid.*',
    //'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging'
	
]);
var hash = getUrlVars();
 var strID = hash['objid'];
 
 function getUrlVars()
{
	var vars = [], hash;

	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	{
	hash = hashes[i].split('=');
	vars.push(hash[0]);
	vars[hash[0]] = hash[1];
	}
	return vars;
}
var GridName = "Nariad_Grid" 
 
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


 var url = {
        local:  'grid-filter.json',  
        remote: 'grid-filter.php'
    };

    var encode = false;
    var local = false;
	
	 Ext.define('Product', {
    extend: 'Ext.data.Model',
    fields: [ 
			{
                    type: 'string',
		name: 'Type'
                },
                {
                    type: 'int',
		name: 'ID'
                },
                {
                    type: 'string',
		name: 'ModelId'
                },
				
				{
                    type: 'string',
		name: 'Model'
                },
				
				{
                    type: 'string',
		name: 'Description'
                },
				
				{
                    type: 'string',
		name: 'Vendor'
                },
				
				{
                    type: 'int',
		name: 'count'
                },
				
				{
                    type: 'int',
		name: 'Kilkist'
                },
				
				{
                    type: 'string',
		name: 'OdVym'
                },
				{
                    type: 'string',
		name: 'Price'
                },
				{
                    type: 'string',
		name: 'Valiuta'
                },
				{
                    type: 'string',
		name: 'Suma'
                },
				{
                    type: 'string',
		name: 'IsDeleted'
                },
				{
                    type: 'string',
		name: 'DateDelete'
                }
				
				

			]
});

    var filters = {
        ftype: 'filters',
        encode: encode, 
        local: local,   

        filters: [
							{
                    type: 'string',
		dataIndex: 'Type'
                },
                {
                    type: 'int',
		dataIndex: 'ID'
                },
                {
                    type: 'string',
		dataIndex: 'ModelId'
                },
				
				{
                    type: 'string',
		dataIndex: 'Model'
                },
				
				{
                    type: 'string',
		dataIndex: 'Description'
                },
				
				{
                    type: 'string',
		dataIndex: 'Vendor'
                },
				
				{
                    type: 'int',
		dataIndex: 'count'
                },
				
				{
                    type: 'int',
		dataIndex: 'Kilkist'
                },
				
				{
                    type: 'string',
		dataIndex: 'OdVym'
                },
				{
                    type: 'string',
		dataIndex: 'Price'
                },
				{
                    type: 'string',
		dataIndex: 'Valiuta'
                },
				{
                    type: 'string',
		dataIndex: 'Suma'
                },
				{
                    type: 'string',
		dataIndex: 'IsDeleted'
                },
				{
                    type: 'string',
		dataIndex: 'DateDelete'
                }
        ]
    };

 var editor = new Ext.grid.plugin.RowEditing({
        saveText: 'Зберегти'
    });
 
 PeregliadNariadu_Store = Ext.create('Ext.data.JsonStore', {
		pageSize: 20,
        storeId: 'PeregliadNariadu_Store',
		autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './php/nariad_info.php?objid='+strID,
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
            {name: 'P_kontragent', type: 'string'},
			{name: 'S_kontragent', type: 'string'},
			{name: 'Object', type: 'string'},
			{name: 'IsFinalized', type: 'string'},
			{name: 'Prymitka', type: 'string'},
			{name: 'Type', type: 'string'},
			{name: 'ID', type: 'int'},
			{name: 'ModelId', type: 'int'},
			{name: 'Model', type: 'string'},
			{name: 'Description', type: 'string'},
			{name: 'Vendor', type: 'string'},
			{name: 'count', type: 'float'},
			{name: 'Kilkist', type: 'float'},
			{name: 'OdVym', type: 'string'},
			{name: 'Price', type: 'float'},
			{name: 'Valiuta', type: 'string'},
			{name: 'Suma', type: 'float'},
			{name: 'IsDeleted', type: 'bool'},
			//{name: 'Date', type: 'date'},
			{name: 'Date'},
			{name: 'DateDelete'},
			{name: 'euro'},
			{name: 'euro'},
			{name: 'dollar'},
			{name: 'grivna'}
            ],
			listeners: {
						load: function() {
						Ext.getCmp("ID").setValue(PeregliadNariadu_Store.data.items[0].data.ID);
						Ext.getCmp("P_kontragent").setValue(PeregliadNariadu_Store.data.items[0].data.P_kontragent);
						Ext.getCmp("S_kontragent").setValue(PeregliadNariadu_Store.data.items[0].data.S_kontragent);
						Ext.getCmp("Object").setValue(PeregliadNariadu_Store.data.items[0].data.Object);
						Ext.getCmp("IsFinalized").setValue(PeregliadNariadu_Store.data.items[0].data.IsFinalized);
						Ext.getCmp("Date").setValue(PeregliadNariadu_Store.data.items[0].data.Date);
						if(PeregliadNariadu_Store.data.items[0].data.IsFinalized == 1)
							{
								Ext.getCmp('fin').setDisabled(true),
								//Ext.getCmp('del').setDisabled(true),
								Ext.getCmp('add_sklad').setDisabled(true),
								Ext.getCmp('add_fond').setDisabled(true)
							};
						}
					}
    });
	 
	
	
	CurrentStore = 'PeregliadNariadu_Store';
	
	
Ext.define('Borsuko.view.ui.Nariad', {
    extend: 'Ext.panel.Panel',


    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                autoRender: true,
                autoShow: true,
                frame: true,
                height: 750,
                id: 'tabs',
                itemId: 'tabs',
                maintainFlex: true,
                bodyPadding: '',
                animCollapse: false,
                collapseFirst: false,
                collapsed: false,
                collapsible: true,
                frameHeader: false,
                title: 'Перегляд Об\'єктів',
                titleCollapse: true,
                pollForChanges: true,
                paramsAsHash: true,
                standardSubmit: true,
                trackResetOnLoad: true,
                items: [
                    {
                        xtype: 'container',
                        height: 120,
                        layout: {
                            type: 'column'
                        },
                        items: [
                            
                            {
                                xtype: 'container',
                                id: 'Container2',
                                padding: 10, 
                                width: 400,
                                items: [
                                     {
                                        xtype: 'textfield',
                                       displayField: 'ID',
										valueField:'ID',
										fieldLabel:'Номер Наряду',
										name:'ID',
										width: 200,
										emptyText:'№',
										readOnly: true,
										growMax:50,
										id:"ID"
                                    },
                                    {
                                        xtype: 'textfield',
										allowBlank : false,
										readOnly: true,
										fieldLabel:'Гол. контрагент',
										maxLength: 150,
										width: 300,
										name:'P_kontragent',
										id:"P_kontragent"
                                    },
									{
                                        xtype: 'textfield',
										allowBlank : true,
										readOnly: true,
										fieldLabel:'Помічник',
										name:'S_kontragent',
										width: 300,
										id:'S_kontragent'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                id: 'Container3',
                                padding: 10,
                                width: 338,
                                stateful: false,
                                focusOnToFront: false,
                                items: [
                                    {
                                        xtype: 'datefield',
                                        fieldLabel:'Дата',
										readOnly: true,
										format: 'd.m.Y',
										name:'Date',
										width: 200,
										id:"Date"
                                    },
									{
                                        xtype: 'textfield',
                                        allowBlank : false,
										readOnly: true,
										fieldLabel:'Об`єкт',
										maxLength: 150,
										width: 300,
										name:'Object',
										id:"Object"
                                    },
									{
                                        xtype: 'textfield',
                                        allowBlank : false,
										readOnly: true,
										//hidden: true,
										fieldLabel:'Фіналізовано',
										maxLength: 150,
										width: 300,
										name:'IsFinalized',
										id:"IsFinalized"
                                    }
                                ]
                            }
                        ]
                    },
                     {
                        xtype: 'gridpanel',
                        frame: true,
                        height: 500,
                        id: GridName,

                        //width: 800,
                        focusOnToFront: false,
                        animCollapse: false,
                        collapseFirst: false,
                        //forceFit: true,
                        store: PeregliadNariadu_Store,
                        columnLines: true,
                        dock: 'left',
						features: [filters, 
						{
							ftype: 'grouping'
						}],
                        columns: [
						{header: 'Тип', width: 15, sortable: true,dataIndex: 'Type',   renderer: TypTovaru},
						{header: 'Номер Наряду', hidden: true, width: 15, sortable: true,dataIndex: 'ID'},
						{dataIndex: 'ModelId', header: 'MI', hidden: true, width: 15},
						{header: 'Модель', width: 15, sortable: true,dataIndex: 'Model'},
						{dataIndex: 'Description', header: 'Опис', width: 15},	
						{header: 'Виробник',  width: 15, sortable: true,dataIndex: 'Vendor'},
						{header: 'Наявно',  width: 15, sortable: true,dataIndex: 'count'},
						{header: 'Початкова к-сть',  width: 15, sortable: true,dataIndex: 'Kilkist'},
						{dataIndex: 'OdVym', header: 'Од. вим.', width: 15},
						{header: 'Ціна за 1 в валюті', width: 15,sortable: true,dataIndex: 'Price', renderer: function(v, params, record){ var Price = (record.data.Price).toFixed(2); 	return Price;}},
						{header: 'Валюта', width: 15,sortable: true,dataIndex: 'Valiuta',   renderer: valiuta},
						{header: 'Сума', width: 15,sortable: true,dataIndex: 'Suma', renderer: pctChange/*, summaryType: 'Suma', summaryRenderer: Ext.util.Format.uaMoney*/}, 
						{header: 'Примітка',  width: 15, sortable: true,dataIndex: 'Prymitka'},
						
						{dataIndex: 'IsDeleted', header: 'Видалений', width: 15, filterable: true,
								renderer: function(v, params, record){ 	
							if(record.data.IsDeleted == true) { var strDohidGrn = 'Так'};
							if(record.data.IsDeleted == false) { var strDohidGrn = 'Ні'};
							return strDohidGrn;
							}
						},
						//{header: 'Дата',  width: 15,sortable: true, hidden: true, renderer: dateFunction, dataIndex: 'Date'}
						{header: 'Дата',  width: 15,sortable: true, hidden: true, renderer: dateFunction, dataIndex: 'DateDelete'}
						
                        ],
						listeners: {
							selectionchange: function(model, records) {
								if (records[0]) {
								this.up('form').getForm().loadRecord(records[0]);
								}
							}
						},
                        viewConfig: {
                            frame: true,
                            width: 700
                        },
						selModel: Ext.create('Ext.selection.CheckboxModel', {
							}),
                        
                        dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
							{
								 xtype: 'button',
								iconCls: 'save_columns', tooltip: 'Зберегти параметри колонок',
								handler : function(){
								getCount()
									}
							},
							
                            {
	            text: 'Добавити зі скдаду',
				iconCls: 'add',
				id: 'add_sklad',
	            handler : function(){
				window.location = "/sklad_view.php?objid="+strID;   
	            }
        	},{
	            text: 'Добавити з фондів',
				iconCls: 'add',
				id: 'add_fond',
	            handler : function(){
				window.location = "/fond_view.php?objid="+strID;   
	            }
        	},{
	            text: 'Фіналізувати',
				tooltip: 'Після фіналізації неможливо буде внести в наряд зміни',
				iconCls: 'add',
				id: 'fin',
	            handler : function(){
				
				Ext.Msg.confirm('Підтвердження', 'Фіналізовані наряди неможливо редагувати. Ви дійсно хочете Фіналізувати наряд?',
				function(btn){
					if(btn == 'yes'){
					Ext.Ajax.request({
					url:'/php/finalization.php', //php function that saves the data
					params: {strnomer: strID},
					success:function(responce, action) {
					Ext.getCmp('fin').setDisabled(true),
					Ext.getCmp('del').setDisabled(true),
					Ext.getCmp('add_sklad').setDisabled(true),
					Ext.getCmp('add_fond').setDisabled(true)
					},
					failure: function(form, action) {
					alert('Помилка при виделенні об*єкту');
					}
				});
					}
				}
			);
			
	               
	            }
        	},
			{
	            text: 'Видалити з наряду',
				iconCls: 'remove',
				id: 'del',
	            handler : function(){
				
					Ext.Msg.confirm('Підтвердження', 'Дійсно хочете видалити запис?', 
					function(btn){
						if(btn == 'yes'){
						var MyStore = Ext.getCmp(GridName).getStore();
						var MyGrid = Ext.getCmp(GridName).getView();
						var selection = Ext.getCmp(GridName).getSelectionModel().selected;
						var Slenght = selection.length;
							for (var i=0; i<Slenght; i++) 
							{
							var strId = selection.items[i].data.ModelId;
							var strType = selection.items[i].data.Type;
							
							//Видалення з наряду
							Ext.Ajax.request({
							   url:'./php/nariad_total.php?action=removeRecord', 
								params: {
										Type: strType,
										nariadId: strID,
										modelId: strId
										},
								success:function(responce, action) {
										MyGrid.getStore().load();
								},
								failure: function(form, action) {
									alert('Oops the delete did not work out too well!');
								}
							}); 
							//  Добавлення в Склад/ Виробничі фонди
							var strType = selection.items[i].data.Type;
							if(strType==''){
								strType = 'Склад';
							}
		
							var strModelId = selection.items[i].data.ModelId;
							var strModel = selection.items[i].data.Model;
							var strDescription = selection.items[i].data.Description;
							var strVendor = selection.items[i].data.Vendor;
							var strcount = selection.items[i].data.count;
							var strOdVym = selection.items[i].data.OdVym;
							var strPrice = selection.items[i].data.Price;
							var strValiuta = selection.items[i].data.Valiuta;
							
							var strDollar = Ext.getCmp("dollar").getValue();
							var strGrivna = Ext.getCmp("grivna").getValue();
							var strEuro = Ext.getCmp("euro").getValue();
							
							switch(strType)
							{
							case 'Склад':
								Ext.Ajax.request({
									url: './php/return_to_sklad.php',
									params: {
									Vendor: strVendor,
									Count: strcount,
									Valiuta: strValiuta,
									ModelId: strModelId,
									Model: strModel,
									Description: strDescription,
									OdVymir: strOdVym,
									price: strPrice
									},
									success: function()
										{
										},
									failure: function(response)
										{
										Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
										}
								});  
							  break;
							case 'в.фонди':
								Ext.Ajax.request({
									url: './php/return_to_fondy.php',
									params: {
									Vendor: strVendor,
									Count: strcount,
									Valiuta: strValiuta,
									ModelId: strModelId,
									Model: strModel,
									Description: strDescription,
									OdVymir: strOdVym,
									price: strPrice
									},
									success: function()
										{
										},
									failure: function(response)
										{
										Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
										}
								})
							  break;
							default:

							}
							//Видалення з робочого балансу контрагнета
							P_kontragent = Ext.getCmp("P_kontragent").getValue();
							var strFondyType = "в.фонди";
							var strSkladType = "Склад";
							switch(strValiuta)
							{
								case 'dollar':
								/*alert(strcount);
								alert(strPrice);
								alert(strDollar);*/
									var strSuma_P_kontragent = ((strcount * strPrice) * strDollar).toFixed(2);
									//alert(strSuma_P_kontragent);
									break;
								case 'grivna':
									var strSuma_P_kontragent = ((strcount * strPrice) * strGrivna).toFixed(2);
									break;
								case 'euro':
									var strSuma_P_kontragent = ((strcount * strPrice) * strEuro).toFixed(2);
									break;
								default:
									var strSuma_P_kontragent = (strcount * strPrice).toFixed(2);
							}
							
					
								/*alert(strSuma_P_kontragent);
								alert(P_kontragent);
								alert(strSkladType);
								alert(strFondyType);
								alert(strType);*/
								
							Ext.Ajax.request({
							url: './php/spysaty_z_kontragenta.php',
							params: {
								p_Kontragent: P_kontragent,
								cina_spysanogo: strSuma_P_kontragent,
								strSkladType: strSkladType,
								strFondyType: strFondyType,
								type:strType
							},
							success: function()
								{
								//selection.deselectAll();	
								},
							failure: function(response)
								{
								Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
								}
						});
						
						
							
							}	
			
						}
					}
				);
	            }
        	},
			{
	            text: 'Друкувати наряд',
				iconCls: 'print',
				id: 'nariad_pring',
	            handler : function(){
				strUrl = "/php/nariad_export.php?nariad="+strID;
				window.location = strUrl;					
				
	            }
        	},
			{
				xtype: 'button',
				id: 'Close_Nariad',
				iconCls: 'Turn_off',
				//disabled: true,
				text: '',
				handler : function(){
					var strnomer = Ext.getCmp('ID').getValue();
					strUrl = "/Nariad_spys.php?objid="+strnomer;
					window.location = strUrl;
				}
				//style: {marginLeft: '25px'}
			},
							
			
			SettingsForm
                        ]
                    },
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
                                store: PeregliadNariadu_Store,
                                dock: 'bottom'
                            }
                        ]
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
	
});


function sendRemoveRequest(GridName){ 
		var MyStore = Ext.getCmp(GridName).getStore();
		var MyGrid = Ext.getCmp(GridName).getView();
		/*var StoreCount = MyStore.getCount();
		
		if(StoreCount<1){
		
			return;
		}*/
		var jsonData = new Array(); 
		var selection = Ext.getCmp(GridName).getSelectionModel();
		var Slenght = selection.lenght;
		//var KontragentID = selection.selected.items[0].raw.ID;
		//strNariadId = strObjid;
		alert(Slenght);
		
		
			for (var i=0; i<Slenght; i++) 
			{
			strId = selection[i].data.ModelId;
			alert(strId);
			
			/*Ext.Ajax.request({
			   url:'./php/nariad_total.php?action=removeRecord', //php function that saves the data
				params: {
						nariadId: strID,
						modelId: strId
						},
				success:function(responce, action) {
					store.reload();		
					grid_1.reconfigure(store, cm2)
				},
				failure: function(form, action) {
					alert('Oops the delete did not work out too well!');
				}
			}); /*/
			}	
	} 

	function valiuta(val){ 
		
		switch(val)
		{
		case 'dollar':
		  var ItemValiuta = '<span style="color:green;">' + val + '</span>';
		  break;
		case 'grivna':
		  var ItemValiuta = '<span style="color:blue;">' + val + '</span>';
		  break;
		case 'euro':
		  var ItemValiuta = '<span style="color:orange;">' + val + '</span>';
		  break;
		default:
		  var ItemValiuta = '<span style="color:red;"> Невизначено</span>';
		}
	return ItemValiuta;
	}	
	
	function TypTovaru(val){ 
		
		switch(val)
		{
		case '':
		  var Typ = '<span style="color:red;"> Невизначено</span>';
		  break;
		default:
		  var Typ = val;
		}
	return Typ;
	}	
	
	function pctChange(val, params, record){ 
		switch(record.data.Valiuta)
		{
		case 'dollar':
		var strNumber = (record.data.count * record.data.Price) * record.data.dollar;
		  var strgrivna = '<span style="color:green;">' + strNumber.toFixed(2) + ' грн.</span>';
		  break;
		case 'grivna':
		var strNumber = (record.data.count * record.data.Price) * record.data.grivna;
		  var strgrivna = '<span style="color:blue;">' + strNumber.toFixed(2) + ' грн.</span>';
		  break;
		case 'euro':
		var strNumber = (record.data.count * record.data.Price) * record.data.euro;
		  var strgrivna = '<span style="color:orange;">' + strNumber.toFixed(2) + ' грн.</span>';
		  break;
		default:
		var strNumber = record.data.count * record.data.Price;
		  var strgrivna = '<span style="color:red;">' + strNumber.toFixed(2) +' грн.</span>';
		}
		
		return '<span style="color:blue;">' + strgrivna + '</span>';
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

	/*function dateFunction(val){ 
		var ItemDate = Ext.Date.format(val, 'd/m/Y');
		return ItemDate	;
	}*/
	
	function dateFunction(val){ 
	var dateArray1 = val.split(" ");
	var dateArray = dateArray1[0].split("-");
	MyDate = dateArray[2]+"/"+dateArray[1]+"/"+dateArray[0];
	
	return MyDate;
	}
		

//editor.on('afteredit', sendUpdateRequest); 