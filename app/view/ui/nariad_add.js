/*
 * File: app/view/ui/nariad_add.js
 * Date: Fri Sep 09 2011 15:00:13 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

 MaxNomer = Ext.create('Ext.data.JsonStore', {
       autoLoad: true,
            storeId: 'MaxNomer',
            proxy: {
                type: 'ajax',
                url: './php/SelectMaxNariad.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'Max'
                }
            ],
			listeners: {
						load: function() {
						
						Ext.getCmp("nomer").setValue(parseInt(MaxNomer.data.items[0].data.Max)+1);
						}
					}
    });
	
	 /*ne_zvilneni_KontragentyStore = Ext.create('Ext.data.JsonStore', {
       autoLoad: true,
            storeId: 'MaxNomer',
            proxy: {
                type: 'ajax',
                url: './php/SelectMaxNariad.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'Max'
                }
            ],
			listeners: {
						load: function() {
						
						Ext.getCmp("nomer").setValue(parseInt(MaxNomer.data.items[0].data.Max)+1);
						}
					}
    });
	*/

Ext.define('Borsuko.view.ui.nariad_add', {
    extend: 'Ext.form.Panel',

    autoRender: true,
    autoShow: true,
    frame: true,
    id: 'nariad_add_form',
    itemId: 'form',
    styleHtmlContent: true,
    autoScroll: true,
    maintainFlex: true,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    animCollapse: false,
    collapseFirst: false,
    collapsed: false,
    collapsible: true,
    frameHeader: false,
    title: 'Створення нового наряду',
    titleCollapse: true,
    pollForChanges: true,
    paramsAsHash: true,
    standardSubmit: true,
    trackResetOnLoad: true,

    initComponent: function() {
        var me = this;
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
						id: 'add',
                        text: 'Добавити Наряд',
						iconCls: 'add',
						handler : function(){
						addNariad()
						}
						
						
                    }
                ]
            }
        ];
        me.items = [
            {
                xtype: 'fieldset',
                frame: true,
                height: 355,
                padding: 10,
                width: 852,
                items: [
                    {
                        xtype: 'textfield',
                        id: 'nomer',
                        width: 350,
                        name: 'nomer',
                        fieldLabel: 'Номер наряду',
                        labelWidth: 150,
                        emptyText: 'Номер наряду'
                    },
                    {
                        xtype: 'combobox',
                        id: 'kontr',
                        width: 500,
                        fieldLabel: 'Головний контрагент',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
                        editable: false,
                        displayField: 'Type',
                        store: 'ne_zvilneni_KontragentyStore',
                        valueField: 'Type'
                    },
                    {
                        xtype: 'combobox',
                        id: 'kontr2',
                        width: 500,
                        fieldLabel: 'Помічник',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
                        editable: false,
                        displayField: 'Type',
                        store: 'ne_zvilneni_KontragentyStore',
                        valueField: 'Type'
                    },
                    {
                        xtype: 'datefield',
						format : "d/m/Y",
                        id: 'date',
                        width: 500,
                        name: 'date',
                        fieldLabel: 'Дата',
                        labelWidth: 150,
						listeners: {
						render: function() {
							this.setValue(new Date());
						}
						}
                    },
                    {
                        xtype: 'combobox',
						pageSize: true,
						 minChars: 0,
						//triggerAction: 'local', 
                        id: 'obj_nomer',
                        width: 500,
                        fieldLabel: 'Об\'єкт',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
                        editable: false,
                        displayField: 'nazva',
                        store: { 
							fields: ['nazva'], 
							pageSize: 20, 
							proxy: {
								type: 'ajax',
								//url: './php/objects.php?action=showTop20',
								url: './php/nomer_nazva.php',
								reader: {
									type: 'json',
									root: 'data'
								}
							} 
						} ,
                        valueField: 'nazva'
                    },
                    {
                        xtype: 'textareafield',
                        height: 85,
                        id: 'prymitka',
                        width: 500,
                        fieldLabel: 'Примітка',
                        labelWidth: 150,
                        emptyText: 'Примітка'
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
});

function addNariad(){		
		
		var strObj_nomer = Ext.getCmp("obj_nomer").getValue();
		var str_P_kontr = Ext.getCmp("kontr").getValue();
		var str_S_kontr = Ext.getCmp("kontr2").getValue();
		var str_date = Ext.getCmp("date").getValue();
		var str_prymitka = Ext.getCmp("prymitka").getValue();

	Ext.Ajax.request(
	{
		url: './php/insert_nariad.php?action=Insert',
		params: {
		
		P_kontr: str_P_kontr,
		S_kontr: str_S_kontr,
		date: str_date,			
		prymitka: str_prymitka,
		object: strObj_nomer		

		},
		success: function()
		{
			//Ext.MessageBox.alert('Контрагент доданий!', 'Контрагент доданий');
			window.location = "/Nariadview.php";   
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
}