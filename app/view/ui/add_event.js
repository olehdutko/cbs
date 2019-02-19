/*
 * File: app/view/ui/add_event.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
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
                url: './php/select_max_event_number.php',
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
						
						Ext.getCmp("id").setValue(parseInt(MaxNomer.data.items[0].data.Max)+1);
						}
					}
    });
	

Ext.define('Borsuko.view.ui.add_event', {
extend: 'Ext.form.Panel',

autoRender: true,
autoShow: true,
frame: true,
id: 'form',
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
title: 'Нова Подія',
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
			padding: 10,
			width: 852,
			items: [
					{xtype: 'textfield',  id: 'id', width: 350, disabled: true, fieldLabel: 'Номер події', labelWidth: 150 },
					{xtype: 'textfield', allowBlank: false, id: 'event_name', width: 500, fieldLabel: 'Назва Події', labelWidth: 150, emptyText: 'Назва Події'},
					{xtype: 'textfield', allowBlank: false, id: 'sponsor', width: 500, name: 'sponsor', fieldLabel: 'Організатор', labelWidth: 150, emptyText: 'Організатор' },
					{xtype: 'datefield', allowBlank: false, format : "d/m/Y H:i", id: 'date', editable: false, width: 500, name: 'date', fieldLabel: 'Дата та час події', listeners: { render: function() { this.setValue(new Date()); }}, labelWidth: 150 },
					{ xtype: 'textareafield', height: 85, id: 'notes', width: 500, fieldLabel: 'Примітка', labelWidth: 150, emptyText: 'Примітка' }
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
					text: 'Добавити подію',
					iconCls: 'add',
					id: 'add',
					//disabled: true,
					handler : function(){
					AddBook()
					}
				}
			]
		}
	];
	me.callParent(arguments);
}
	
});


	function AddBook(){		
		var str_nomer = Ext.getCmp("id").getValue();
		var str_event_name = Ext.getCmp("event_name").getValue();
		var str_sponsor = Ext.getCmp("sponsor").getValue();
		var str_date = Ext.getCmp("date").getValue();
		var str_notes = Ext.getCmp("notes").getValue();
		
	Ext.Ajax.request(
	{
		url: './php/insert_event.php',
		params: {
			nomer :	str_nomer,
			event_name : str_event_name,
			sponsor : str_sponsor,
			date :	str_date,
			notes :  str_notes
		},
		success: function()
		{
			Ext.getCmp("event_name").reset();
			Ext.getCmp("sponsor").reset();
			Ext.getCmp("date").reset();
			Ext.getCmp("notes").reset();
			var newIdValue = parseInt(Ext.getCmp("id").getValue())+1
			Ext.getCmp("id").setValue(newIdValue);
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
	}
	
	