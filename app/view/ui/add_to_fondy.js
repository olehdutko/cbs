/*
 * File: app/view/ui/add_to_price.js
 * Date: Tue Sep 06 2011 18:19:14 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.view.ui.add_to_fondy', {
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
    title: 'Додати в Прайс',
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
				listeners: {
						afterrender: function() {
						Ext.getCmp("count").setValue("1");
							}
						},
                padding: 10,
                width: 852,
                items: [
                    {
                        xtype: 'textfield',
						//anchor:'20%',
                        id: 'count',
                        width: 300,
                        name: 'count',
                        fieldLabel: 'Кількість',
						allowBlank : false,
                        labelWidth: 150
                    },
					
                    {
                        xtype: 'textfield',
                        id: 'Model',
                        width: 500,
                        name: 'Model',
                        fieldLabel: 'Модель',
						allowBlank : false,
                        labelWidth: 150,
                        emptyText: 'Назва моделі'
                    },
                    {
                        xtype: 'textareafield',
                        height: 85,
                        id: 'Description',
                        width: 500,
                        name: 'Description',
                        fieldLabel: 'Опис',
						allowBlank : false,
                        labelWidth: 150,
                        emptyText: 'Опис'
                    },
					{
                        xtype: 'textareafield',
                        height: 85,
                        id: 'Prymitka',
                        width: 500,
                        name: 'Prymitka',
                        fieldLabel: 'Примітка',
						allowBlank : false,
                        labelWidth: 150,
                        emptyText: 'Примітка'
                    },
                    
                    /*{
                        xtype: 'textfield',
                        id: 'Vendor',
                        width: 500,
                        name: 'Vendor',
                        fieldLabel: 'Виробник',
                        labelWidth: 150,
                        emptyText: 'Виробник'
                    },*/
					{
                        xtype: 'combobox', editable: false,
                        id: 'OdVym',
                        width: 500,
                        name: 'OdVym',
                        fieldLabel: 'Одиниці виміру',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
						allowBlank : false,
                        displayField: 'OdVymiru',
                        store: 'store_OdVymiru',
                        valueField: 'OdVymiru'
                    },
                    {
                        xtype: 'textfield',
                        id: 'Price',
                        width: 500,
                        name: 'Price',
                        fieldLabel: 'Ціна в валюті',
						allowBlank : false,
                        labelWidth: 150,
                        emptyText: 'Ціна'
                    },
					{
                        xtype: 'combobox', editable: false,
                        id: 'Valiuta',
                        width: 500,
                        fieldLabel: 'Валюта',
                        labelWidth: 150,
                        emptyText: 'Вибір...',
						allowBlank : false,
                        displayField: 'name',
                        queryMode: 'local',
                        store: 'ValiutaStore',
                        valueField: 'abbr'
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
                        id: 'add_fondy',
                        text: 'Додати до Виробничих фондів',
						iconCls: 'add',
						handler : function(){
						AddToFondy()
						}
						
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
});
//Ext.getCmp("count").setValue(1);

	function AddToFondy(){
	
		var str_Model = Ext.getCmp("Model").getValue();
		var str_Vendor = '';//Ext.getCmp("Vendor").getValue();
		var str_count = Ext.getCmp("count").getValue();
		var str_Price = Ext.getCmp("Price").getValue();
		var str_Valiuta = Ext.getCmp("Valiuta").getValue();
		var str_OdVym = Ext.getCmp("OdVym").getValue();
		var str_Description= Ext.getCmp("Description").getValue();
		var str_Prymitka= Ext.getCmp("Prymitka").getValue();
		
		var myDate=new Date();
		
	Ext.Ajax.request(
	{
		url: './php/insert_fond.php',
		params: {
		Model: str_Model ,
		OdVym: str_OdVym,
		Description: str_Description,
		Prymitka: str_Prymitka,
		Vendor: str_Vendor ,
		Count: str_count,
		myDate: myDate,
		Price: str_Price,
		Valiuta: str_Valiuta
		
		},
		success: function()
		{
			Ext.MessageBox.alert('товар доданий!', 'Товар доданий');
			Ext.getCmp("Model").reset();
			Ext.getCmp("Price").reset();
			Ext.getCmp("Valiuta").reset();
			Ext.getCmp("OdVym").reset();
			Ext.getCmp("Description").reset();
			Ext.getCmp("Prymitka").reset();
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
	}
