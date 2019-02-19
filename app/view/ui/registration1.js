/*
 * File: app/view/ui/registration.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
 
 
var strUseOwn;
var strDollar;
var streuro;
var strGrivna;

MaxNomer = Ext.create('Ext.data.JsonStore', {
       autoLoad: true,
            storeId: 'MaxNomer',
            proxy: {
                type: 'ajax',
                url: './php/select_max_visitor_number.php',
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
	
	/*KursStore = Ext.create('Ext.data.JsonStore', {

       autoLoad: true,
            storeId: 'KursStore',
            proxy: {
                type: 'ajax',
                 url: '/php/kurs.php',
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'grivna'
                },
				 {
                    name: 'euro'
                },
				 {
                    name: 'dollar'
                }
				
            ],
			listeners: {
						load: function() {
						strGrivna = parseFloat(KursStore.data.items[0].data.grivna); //global Vars
						strDollar = parseFloat(KursStore.data.items[0].data.dollar); //global Vars
						streuro = parseFloat(KursStore.data.items[0].data.euro); //global Vars
						}
					}
    });*/
	

Ext.define('Borsuko.view.ui.registration', {
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
    title: 'Новий Читач',
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
                    {
                        xtype: 'textfield',
                        id: 'id',
                        width: 350,
						disabled: true,
                        fieldLabel: 'Номер',
                        labelWidth: 150
                    },
					{
                        xtype: 'datefield',
						format : "d/m/Y H:i:s",
                        id: 'date',
						editable: false,
						disabled: true,
                        width: 500,
                        name: 'date',
                        fieldLabel: 'Дата запису',
						listeners: {
						render: function() {
							this.setValue(new Date());
						}
						},
                        labelWidth: 150
                    },
                    {
                        xtype: 'textfield',
                        id: 'name1',
                        name: 'name1',
                        width: 500,
						//editable: false,
						//disabled: true,
                        fieldLabel: 'Ім\'я',
                        labelWidth: 150,
                        emptyText: 'Ім\'я'
                    },
                    {
                        xtype: 'textfield',
                        id: 'name2',
                        width: 500,
						//editable: false,
						//disabled: true,
                        name: 'name2',
                        fieldLabel: 'Прізвище',
                        labelWidth: 150,
                        emptyText: 'Прізвище'
                    },
					{
                        xtype: 'textfield',
                        id: 'surname',
                        width: 500,
                        name: 'surname',
						//editable: false,
						//disabled: true,
                        fieldLabel: 'По-батькові',
                        labelWidth: 150,
                        emptyText: 'По-батькові'
                    },
                    {
                        xtype: 'datefield',
						//maskRe: /[0-9.]/,
                        id: 'birthday',
                        width: 500,
						//editable: false,
						//disabled: true,
                        fieldLabel: 'Дата народження',
                        labelWidth: 150,
                        emptyText: 'Дата народження'
                    },
					
					{
                        xtype: 'textfield',
                        id: 'workplace',
                        width: 500,
                        name: 'workplace',
                        fieldLabel: 'місце праці/навчання',
                        labelWidth: 150,
                        emptyText: 'місце праці/навчання'
                    },
					{
                        xtype: 'textfield',
                        id: 'interests',
                        width: 500,
                        name: 'interests',
                        fieldLabel: 'фах/сфера інтересів',
                        labelWidth: 150,
                        emptyText: 'фах/сфера інтересів'
                    },
					{
                        xtype: 'textfield',
						vtype: 'email',
                        id: 'email',
                        width: 500,
                        name: 'email',
                        fieldLabel: 'Електронна пошта',
                        labelWidth: 150,
                        emptyText: 'Електронна пошта'
                    },					
					
					{
                        xtype: 'textfield',
						//maskRe: /[0-9.]/,
                        id: 'idcard',
                        width: 500,
                        fieldLabel: '№ квитка/студентського',
                        labelWidth: 150,
                        emptyText: '№ квитка/студентського'
                    },
					
					{
                        xtype: 'textarea',
						//maskRe: /[0-9.]/,
                        id: 'other',
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
                        text: 'Додати відвідувача',
						iconCls: 'add',
						id: 'add',
						//disabled: true,
						handler : function(){
						AddVisitor()
						}
                    },
					{
                        xtype: 'button',
                        text: 'Перевірити відвідувача',
						iconCls: 'add',
						id: 'check',
						//disabled: true,
						handler : function(){
						CheckVisitor()
						}
                    }
                ]
            }
		
        ];
        me.callParent(arguments);
    
	
	}
	
	
});

	function AddVisitor(){		
		/*var str_nomer = Ext.getCmp("id").getValue();
		var str_date = Ext.getCmp("date").getValue();*/

		
		/*var str_workplace = Ext.getCmp("workplace").getValue();
		var str_other = Ext.getCmp("other").getValue();*/
		
		var str_idcard = Ext.getCmp("idcard").getValue();
		var str_other = Ext.getCmp("other").getValue();
		var str_name1 = Ext.getCmp("name1").getValue();
		var str_name2 = Ext.getCmp("name2").getValue();
		var str_surname = Ext.getCmp("surname").getValue();
		var str_birthday = Ext.getCmp("birthday").getValue();
		
		var str_workplace = Ext.getCmp("workplace").getValue();
		var str_email = Ext.getCmp("email").getValue();
		var str_interests = Ext.getCmp("interests").getValue();

	Ext.Ajax.request(
	{
		url: './php/insert_visitor.php',
		params: {

				name1: str_name1,
				name2: str_name2,
				surname: str_surname,
				birthday: str_birthday,
				other: str_other,
				workplace: str_workplace,
				email: str_email,
				interests: str_interests,
				idcard: str_idcard
		},
		success: function()
		{
			Ext.getCmp("date").reset();
			Ext.getCmp("name1").reset();
			Ext.getCmp("name2").reset();
			Ext.getCmp("surname").reset();
			Ext.getCmp("birthday").reset();
			Ext.getCmp("idcard").reset();
			Ext.getCmp("other").reset();
			Ext.getCmp("workplace").reset();
			Ext.getCmp("email").reset();
			Ext.getCmp("interests").reset();
			
			
			
			var newIdValue = parseInt(Ext.getCmp("id").getValue())+1
			Ext.getCmp("id").setValue(newIdValue);
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
	}
	
	
	function CheckVisitor(){		
		var str_idcard = Ext.getCmp("idcard").getValue();
		var str_other = Ext.getCmp("other").getValue();
		Ext.Ajax.request(
	{
		url: './php/check_visitor.php',
		params: {
				idcard: str_idcard
		},
		callback: function(options, success, response) {
				var responseObj = JSON.parse(response.responseText);

			if (responseObj.total == 1) {
				
				Ext.getCmp("name1").reset();
				Ext.getCmp("name2").reset();
				Ext.getCmp("surname").reset();
				Ext.getCmp("birthday").reset();
				
				Ext.getCmp("name1").setValue(responseObj.data[0].name1);
				Ext.getCmp("name2").setValue(responseObj.data[0].name2);
				Ext.getCmp("surname").setValue(responseObj.data[0].surname);
				Ext.getCmp("birthday").setValue(responseObj.data[0].birthday);
			}
			else{
				Ext.Msg.confirm('Читача в Базі не знайдено', 'Чи бажаєте зареєструвати нового читача?',
				function(btn){
					if(btn == 'yes'){
						
						window.open(
						  './add_reader.php?readerid='+str_idcard,
						  '_blank' // <- This is what makes it open in a new window.
						);

					}
				}
				);
				
									
			}

			},
		success: function() {},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
		
		
		
		
		
		
		
		/*
		
		
	Ext.Ajax.request(
	{
		url: './php/insert_visitor.php',
		params: {

				//nomer: str_nomer,
				//date: str_date,
				other: str_other,
				idcard: str_idcard
		},
		success: function()
		{
			Ext.getCmp("date").reset();
			Ext.getCmp("1name").reset();
			Ext.getCmp("2name").reset();
			Ext.getCmp("surname").reset();
			Ext.getCmp("birthday").reset();
			Ext.getCmp("idcard").reset();
			Ext.getCmp("other").reset();
			var newIdValue = parseInt(Ext.getCmp("id").getValue())+1
			Ext.getCmp("id").setValue(newIdValue);
			//Ext.MessageBox.alert('Дані Збережені!', 'Тепер можете');
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})*/
	}
	
	