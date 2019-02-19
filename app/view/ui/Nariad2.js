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
    'Ext.grid.*',
    'Ext.data.*',
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
	fieldLabel:'���� ������',
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
	fieldLabel:'���� ������',
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
	fieldLabel:'���� ����',
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
		//title:'�������� ���� �����',
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
		name: 'ID'
                },
                {
                    type: 'string',
		name: 'nazva'
                },
                {
                    type: 'string',
		name: 'prymitka'
                },
                {
                    type: 'string',
		name: 'telefon'
                },
                {
                    type: 'string',
		name: 'Variant'
                },
                {
                    type: 'string',
		name: 'objthemes'
                },
                {
                    type: 'string',
		name: 'zamovnyk'
                },
                {
                    type: 'string',
		name: 'Vykonavci'
                },
                {
                    type: 'string',
		name: 'PIB'
                },
                {
                    type: 'string',
		name: 'adresa'
                },
                {
                    type: 'string',
		name: 'PDV'
                },
                {
                    type: 'string',
		name: 'znyzhka'
                },
                {
                    type: 'string',
		name: 'Moment_Dollar'
                },
                {
                    type: 'string',
		name: 'Moment_Euro'
                },
                {
                    type: 'string',
		name: 'nomer'
                },
                {
                    type: 'string',
		name: 'Stan_objektu'
                },
                {
                    type: 'string',
		name: 'date'
                }
			]
});

	

	
    var filters = {
        ftype: 'filters',
        encode: encode, 
        local: local,   

        filters: [
				{ type: 'int', 	dataIndex: 'ID'},
                { type: 'string',	dataIndex: 'nazva'},
                { type: 'string',	dataIndex: 'prymitka'},
                { type: 'string',	dataIndex: 'telefon'},
                { type: 'string',	dataIndex: 'Variant'},
                { type: 'string',	dataIndex: 'objthemes'},
                { type: 'string',	dataIndex: 'zamovnyk'},
                { type: 'string',	dataIndex: 'Vykonavci'},
                { type: 'string',	dataIndex: 'PIB'},
                { type: 'string',	dataIndex: 'adresa'},
                { type: 'string',	dataIndex: 'PDV'},
                { type: 'int',	dataIndex: 'znyzhka'},
                { type: 'int',	dataIndex: 'Moment_Dollar'},
                { type: 'int',	dataIndex: 'Moment_Euro'},
                { type: 'int',	dataIndex: 'nomer'},
                { type: 'string',	dataIndex: 'Stan_objektu'},
                { type: 'date',	dataIndex: 'date'}
        ]
    };

 var editor = new Ext.grid.plugin.RowEditing({
        saveText: '��������'
    });
 
 PeregliadNariadu_Store = Ext.create('Ext.data.JsonStore', {
        storeId: 'PeregliadNariadu_Store',
		autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './php/nariad_total.php?action=showData&objid='+strID,
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
            {name: 'P_kontragent', type: 'string'},
			{name: 'S_kontragent', type: 'string'},
			{name: 'Object', type: 'string'},
			{name: 'IsFinalized', type: 'string'},
			
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
			{name: 'Date', type: 'float'},
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
                title: '�������� ��\'����',
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
										fieldLabel:'����� ������',
										name:'ID',
										width: 200,
										emptyText:'�',
										readOnly: true,
										growMax:50,
										id:"ID"
                                    },
                                    {
                                        xtype: 'textfield',
										allowBlank : false,
										readOnly: true,
										fieldLabel:'���. ����������',
										maxLength: 150,
										width: 300,
										name:'P_kontragent',
										id:"P_kontragent"
                                    },
									{
                                        xtype: 'textfield',
										allowBlank : true,
										readOnly: true,
										fieldLabel:'�������',
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
                                        fieldLabel:'����',
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
										fieldLabel:'��`���',
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
										fieldLabel:'Գ���������',
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
                        store: CurrentStore,
                        columnLines: true,
                        dock: 'left',
						features: [filters, 
						{
							ftype: 'grouping'
						}],
                        columns: [
						{header: '���', width: 100, sortable: true,dataIndex: 'Type',   renderer: TypTovaru},
						{header: '����� ������', hidden: true, width: 50, sortable: true,dataIndex: 'ID'},
						{dataIndex: 'ModelId', header: 'MI', hidden: true, width: 100},
						{header: '������', width: 100, sortable: true,dataIndex: 'Model'},
						{dataIndex: 'Description', header: '����', width: 200},	
						{header: '��������',  width: 100, sortable: true,dataIndex: 'Vendor'},
						{header: '������',  width: 100, sortable: true,dataIndex: 'count'},
						{header: '��������� �-���',  width: 100, sortable: true,dataIndex: 'Kilkist'},
						{dataIndex: 'OdVym', header: '��. ���.', width: 50},
						{header: 'ֳ�� �� 1 � �����', width: 100,sortable: true,dataIndex: 'Price', renderer: function(v, params, record){ var Price = (record.data.Price).toFixed(2); 	return Price;}},
						{header: '������', width: 100,sortable: true,dataIndex: 'Valiuta',   renderer: valiuta},
						{header: '����', width: 100,sortable: true,dataIndex: 'Suma', renderer: pctChange/*, summaryType: 'Suma', summaryRenderer: Ext.util.Format.uaMoney*/}, 
						{dataIndex: 'IsDeleted', header: '���������', width: 50, filterable: true,
								renderer: function(v, params, record){ 	
							if(record.data.IsDeleted == true) { var strDohidGrn = '���'};
							if(record.data.IsDeleted == false) { var strDohidGrn = 'ͳ'};
							return strDohidGrn;
							}
						},
	{header: '����',  width: 100,sortable: true, hidden: true, dataIndex: 'Date'}
	
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
								text: '�������� ��������� �������',
								handler : function(){
								getCount();
								}
							},
							
                            {
	            text: '�������� � ������',
				iconCls: 'add',
				id: 'add_sklad',
	            handler : function(){
				window.location = "/sklad_view.php?objid="+strID;   
	            }
        	},{
	            text: '�������� � �����',
				iconCls: 'add',
				id: 'add_fond',
	            handler : function(){
				window.location = "/fond_view.php?objid="+strID;   
	            }
        	},{
	            text: 'Գ���������',
				tooltip: 'ϳ��� ���������� ��������� ���� ������ � ����� ����',
				iconCls: 'add',
				id: 'fin',
	            handler : function(){
				
				Ext.Msg.confirm('ϳ�����������', 'Գ��������� ������ ��������� ����������. �� ����� ������ Գ��������� �����?',
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
					alert('������� ��� ��������� ��*����');
					}
				});
					}
				}
			);
			
	               
	            }
        	},
			{
	            text: '�������� � ������',
				iconCls: 'remove',
				id: 'del',
	            handler : function(){
				
					Ext.Msg.confirm('ϳ�����������', 'ĳ���� ������ �������� �����?', 
					function(btn){
						if(btn == 'yes'){
						var MyStore = Ext.getCmp(GridName).getStore();
						var MyGrid = Ext.getCmp(GridName).getView();
						var selection = Ext.getCmp(GridName).getSelectionModel().selected;
						var Slenght = selection.length;
							for (var i=0; i<Slenght; i++) 
							{
							var strId = selection.items[i].data.ModelId;
							
							Ext.Ajax.request({
							   url:'./php/nariad_total.php?action=removeRecord', 
								params: {
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
							}	
			
						}
					}
				);
	            }
        	},
			{
	            text: '��������� �����',
				iconCls: 'print',
				id: 'nariad_pring',
	            handler : function(){
				strUrl = "/php/nariad_export.php?nariad="+strID;
				window.location = strUrl;					
				
	            }
        	},
			SettingsForm
                        ]
                    },
                            {
                                xtype: 'pagingtoolbar',
								id: 'pagingtoolbar',
                                afterPageText: '�� {0}',
                                beforePageText: '�������',
                                displayInfo: true,
                                displayMsg: '�������� {0} - {1} �� {2}',
                                emptyMsg: '������ �������',
                                firstText: '����� �������',
                                lastText: '������� �������',
                                nextText: '�������� �������',
                                prependButtons: true,
                                prevText: '��������� �������',
                                refreshText: '�������',
                                store: CurrentStore,
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
		  var ItemValiuta = '<span style="color:red;"> �����������</span>';
		}
	return ItemValiuta;
	}	
	
	function TypTovaru(val){ 
		
		switch(val)
		{
		case '':
		  var Typ = '<span style="color:red;"> �����������</span>';
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
		  var strgrivna = '<span style="color:green;">' + strNumber.toFixed(2) + ' ���.</span>';
		  break;
		case 'grivna':
		var strNumber = (record.data.count * record.data.Price) * record.data.grivna;
		  var strgrivna = '<span style="color:blue;">' + strNumber.toFixed(2) + ' ���.</span>';
		  break;
		case 'euro':
		var strNumber = (record.data.count * record.data.Price) * record.data.euro;
		  var strgrivna = '<span style="color:orange;">' + strNumber.toFixed(2) + ' ���.</span>';
		  break;
		default:
		var strNumber = record.data.count * record.data.Price;
		  var strgrivna = '<span style="color:red;">' + strNumber.toFixed(2) +' ���.</span>';
		}
		
		return '<span style="color:blue;">' + strgrivna + '</span>';
	}	

	

//editor.on('afteredit', sendUpdateRequest); 