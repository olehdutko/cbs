/*
 * File: app/view/ui/prolongation.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
  
Ext.define('Borsuko.view.ui.prolongation', {
    extend: 'Ext.form.Panel',

    autoRender: true,
    autoShow: true,
    frame: true,
    id: 'nariad_add_form',
    itemId: 'prolongation',
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
    title: 'Пролонгація наряду',
    titleCollapse: true,
    pollForChanges: true,
    paramsAsHash: true,
    standardSubmit: true,
    trackResetOnLoad: true,

    initComponent: function() {
	
		var me = this;
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
                        id: 'P_kontragent',
                        width: 500,
                        fieldLabel: 'Головний контрагент',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
                        editable: false,
                        displayField: 'Type',
                        store: 'KontragentyStore',
                        valueField: 'Type'
                    },
                    {
                        xtype: 'combobox',
                        id: 'S_kontragent',
                        width: 500,
                        fieldLabel: 'Помічник',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
                        editable: false,
                        displayField: 'Type',
                        store: 'KontragentyStore',
                        valueField: 'Type'
                    },
                    {
                        xtype: 'datefield',
						format : "d/m/Y",
                        id: 'date',
                        width: 500,
                        name: 'date',
                        fieldLabel: 'Дата',
                        labelWidth: 150
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
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Зберегти пролонгований Наряд',
						iconCls: 'save',
						handler : function(){
									SaveProlongation()
								}
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
});
	
	storeMaxID = Ext.create('Ext.data.JsonStore', {
        storeId: 'storeMaxID',
		autoLoad: true,
            proxy: {
                type: 'ajax',
				url: './php/nariad_prolongation2.php?action=MaxID',
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'MaxN_Nariad'
                }
            ],
			listeners: {
						load: function() {
						Ext.getCmp("nomer").setValue(storeMaxID.data.items[0].data.MaxN_Nariad);
						 Ext.getCmp("date").setValue(new Date());
						}
					}
    });
		
		var hash = getUrlVars();
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
		var strObjid = hash['OldNariadId'];
				
		store = Ext.create('Ext.data.JsonStore', {
        storeId: 'store',
		autoLoad: true,
            proxy: {
                type: 'ajax',
				url: './php/nariad_prolongation2.php?action=ShowData&OldNariadId='+strObjid,
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'MaxN_Nariad'
                },
				{
                    name: 'P_kontragent'
                },
				{
                    name: 'S_kontragent'
                },
				{
                    name: 'Date'
                },
				{
                    name: 'Prymitka'
                }
            ],
			
			listeners: {
		    load: function() {
				
				strPrymitka = store.data.items[0].data.Prymitka;
				var P_kontragent = store.data.items[0].data.P_kontragent;
				var S_kontragent = store.data.items[0].data.S_kontragent;
				Ext.getCmp('prymitka').setValue(strPrymitka);				
				Ext.getCmp('S_kontragent').setRawValue(S_kontragent);
				Ext.getCmp('P_kontragent').setRawValue(P_kontragent);
				
	
	
			}
		}
			
    });
	
	function SaveProlongation(){		
		
		var strObj_nomer = Ext.getCmp("obj_nomer").getValue();
		var ID = Ext.getCmp("nomer").getValue();
		var str_P_kontr = Ext.getCmp("P_kontragent").getValue();
		var str_S_kontr = Ext.getCmp("S_kontragent").getValue();
		var str_date = Ext.getCmp("date").getValue();
		var str_Prymitka = Ext.getCmp("prymitka").getValue();

	Ext.Ajax.request(
	{
		url: './php/Update_nariad.php',
		params: {
		ID: ID,
		P_kontr: str_P_kontr,
		S_kontr: str_S_kontr,
		date: str_date,			
		Prymitka: str_Prymitka,
		object: strObj_nomer		

		},
		success: function()
		{
			window.location = "./Nariadview.php";
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
	}
	