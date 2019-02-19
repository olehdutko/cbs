/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */

Ext.chart.Chart.CHART_URL = 'ext/resources/charts.swf';
Ext.onReady(function(){
    Ext.QuickTips.init();
    var xg = Ext.grid;
	var bd = Ext.getBody();
	var strProp = 1;
	var strTotalCost = 1;
	var strProp1 = 0;
	var strTotalCost1 = 0;
	var strGrivna = 1;
	//var streuro = 0;
	var strTotalTime1 = 0;
	var fm = Ext.form;
	var sm = new xg.CheckboxSelectionModel({listeners: {
		rowselect: function(sm, row, rec) {
		}
	}});
	var url = {
        local:  'grid-filter.json',  // static data file
        remote: 'php/grid-filter.php'
    };
	var encode = false;
	var local = false;
	
	var strDate1;
	var strDate2;
	
	var date1 = new Ext.form.DateField({
	allowBlank : false,
	//fieldLabel:'Дата Об`єкту',
	name:'date1',
	anchor:'100%',
	emptyText:'Дата початку історії',
	id:"date1"
}); 
var date2 = new Ext.form.DateField({
	allowBlank : false,
	//fieldLabel:'Дата Об`єкту',
	name:'date2',
	anchor:'100%',
	emptyText:'Дата кінця історії',
	id:"date2"
}); 
		var dialog;
		dialog = new Ext.Window({
		title: 'Період',
		layout:'form',
		width:300,
		height:200,
		closeAction:'hide',
		plain: true,
		items: [date1, date2],
 		/*listeners : {
		afterrender: function() { 
		tpl.overwrite(dialog.body, data);}
		},*/
			buttons: [				
			{text: 'Закрити',
			handler: function(){
			dialog.hide();}}, 
			
			{text: 'Продовжити',
			handler: function(){
			strdate1 = Ext.getCmp("date1").getValue();
			strdate2 = Ext.getCmp("date2").getValue();
			
			d1 = strdate1.format("ymd");
			d2 = strdate2.format("ymd");
			strUrl = "/php/Narahuvannia_export.php"
		
			
			strUrlNew = strUrl+"?&date1="+d1+"&date2="+d2;
			window.open(strUrlNew);
			dialog.hide();
			}}
			]
		});
		date1.setValue(new Date());
		date2.setValue(new Date());
	var filters = new Ext.ux.grid.GridFilters({
        encode: encode, 
        local: local,
        filters: [
		{ type: 'string', dataIndex: 'Type'}, 
		{ type: 'numeric', dataIndex: 'ID'}, 
		{ type: 'numeric', dataIndex: 'Nomer_Narahuvannia'}, 
		{type: 'date', dataIndex: 'Date'}, 
		{type: 'string', dataIndex: 'Pryznachennia'}, 
		{type: 'numeric', dataIndex: 'Suma'}, 
		{type: 'string', dataIndex: 'Prymitky'},
		]
    });    
	
	var narahuvania_view_cm = new Ext.grid.ColumnModel([//CORRECT
		sm,
		{dataIndex: 'Type', header: 'Тип', width: 100, id: 'Type', filter: {} , filterable: true},
		{dataIndex: 'ID', header: 'Номер', width: 80, id: 'ID'},
		{dataIndex: 'Date', header: 'Дата нарахування', width: 100, id: 'Date'},
		{dataIndex: 'Pryznachennia', header: 'Призначення нарахування', width: 200, id: 'Pryznachennia'},
		{dataIndex: 'IsKontrAgent', header: 'IsKontrAgent', hidden: true, width: 200, id: 'IsKontrAgent'},
		{dataIndex: 'Oper_Suma',header: 'Опер. сума',width: 100, editor: new fm.TextField({allowBlank: false})},
		{dataIndex: 'Zalyshok', header: 'Невиплачено', summaryType: 'sum', width: 100},
		{dataIndex: 'Suma',header: 'Сума', summaryType: 'sum', width: 100},
		{dataIndex: 'Prymitky', header: 'Примітка', width: 200, id: 'Prymitky', editor: new fm.TextField({allowBlank: false})}
    ]);


var reader_for_grid = new Ext.data.JsonReader({
		root: 'data',
        fields: [
		{name: 'Type'}, 
		{name: 'ID'}, 
		{name: 'Date'}, 
		{name: 'Pryznachennia'}, 
		{name: 'IsKontrAgent'}, 
		
		{name: 'Zalyshok',type: 'float'},
		{name: 'Suma',type: 'float'},
		{name: 'Prymitky'}
        ]
    });


	var store = new Ext.data.GroupingStore({
        autoLoad: true,
		reader: reader_for_grid,
        proxy: new Ext.data.ScriptTagProxy({ url: 'php/view_vyplaty.php'}),
		groupField: 'Type'
    });
	
	var GridStore_Open = new Ext.data.GroupingStore({
        autoLoad: true,
		reader: reader_for_grid,
		idProperty: 'Id',
        root: 'result',
		id: "GridStore_Open",
		storeId: 'GridStore_Open',
        totalProperty: 'total',
		remoteSort: false,
        sortInfo: { field: 'ID', direction: 'ASC'},
        proxy: new Ext.data.ScriptTagProxy({ url: 'php/view_Narahuvannia_open.php'}),
		groupField: 'Type'
    });
	
	var GridStore_Close = new Ext.data.GroupingStore({
        autoLoad: true,
		reader: reader_for_grid,
		idProperty: 'Id',
        root: 'result',
		id: "GridStore_Close",
		storeId: 'GridStore_Close',
        totalProperty: 'total',
		remoteSort: false,
        sortInfo: { field: 'ID', direction: 'ASC'},
        //proxy: new Ext.data.ScriptTagProxy({ url: 'php/view_Narah.php?action=ShowData_close'}),
		proxy: new Ext.data.ScriptTagProxy({ url: 'php/view_Narahuvannia_close.php'}),
		
		groupField: 'Type'
    });
	
	CurrentStore = GridStore_Open;
		
	var Status = [
    ['Невиплачені'],
	['Виплечені']
]; 
var stan = new Ext.form.ComboBox({
    fieldLabel: 'stan',
    hiddenName: 'stan',
    store: new Ext.data.SimpleStore({
        fields: ['stan'],
        data : Status 
    }),
    displayField: 'stan',
    typeAhead: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText:'Стан нарахування',
    selectOnFocus:true,
	
	 listeners: {
        select: {
            fn:function(combo, value) 
			{
			switch (combo.value)
			{
		case 'Невиплачені':
			CurrentStore = GridStore_Open;
			Ext.getCmp('vyplatyty').setDisabled(false),
			grid_1.reconfigure(CurrentStore, narahuvania_view_cm)
			GridStore_Open.load({params:{start:0, limit:10}});
			
			break;
		case 'Виплечені':
			CurrentStore = GridStore_Close;
			Ext.getCmp('vyplatyty').setDisabled(true),
			grid_1.reconfigure(CurrentStore, narahuvania_view_cm)
			GridStore_Close.load({params:{start:0, limit:10}});
			
			break;
			};
			}
        }
	}
});	


	
	var summary = new Ext.ux.grid.GroupSummary();
	
	
	
	
	
	
	
	
	var grid_1 = new xg.EditorGridPanel({
		columnWidth: 0.75,
		layout: 'fit',
		id: 'grid_1',
		draggable  : false,
		resizable : false,
		loadMask:true,
		frame:true,
		border:true,
		header:true,
		stripeRows: true,
		columnLines: true,
		store: CurrentStore,
		plugins: [summary, filters],	
		height:600,
		cm:narahuvania_view_cm,
		sm:sm,
		view: new Ext.grid.GroupingView({
            forceFit:true,
            groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "нарахувань" : "нарахування"]})'
        }),
		loadMask: true,
		autoExpandColumn: 'Prymitky',
		tbar: [stan,
			{text: 'Нове нарахування',
			id : 'add_Narahuvannia',
			iconCls: 'narah_add',
			handler : function()
			{
			//var strID = Ext.getCmp('ID').getValue();
			strUrl = "./narahuvania.html";
			window.location = strUrl;
			},
			style: {marginLeft: '25px'}
			},
			{text: 'Виплатити',
			id : 'vyplatyty',
			iconCls: 'money-up',
			handler : function()
			{
				Vyplata();
			},
			style: {marginLeft: '25px'}
			}, {text: 'Експорт нарахувань',
			id : 'export',
			iconCls: 'export',
			handler : function()
			{
			dialog.show();  
			}
			//style: {marginLeft: '25px'}
			}
		],
		 bbar: new Ext.PagingToolbar({
            store: CurrentStore,
			displayInfo: true,
            pageSize: 20,
			plugins: [new Ext.ux.ProgressBarPager(),filters]
        }),
		border: true,
		listeners: {
			viewready: function(g) {
				this.getSelectionModel().selectRow(0);
			}
		},
	renderTo: document.body
	})

	
	
	function Vyplata(){		
		
		var selection = grid_1.getSelectionModel().getSelections();	
		//var selection = sm;	
		if(selection.length > 0) {
		Slenght = selection.length;
			for (var i=0 ; i<Slenght; i++) {
			
			var id=selection[i].data.ID;
			var date=selection[i].data.Date;
			var pryznachennia=selection[i].data.Pryznachennia;
			var opersuma=selection[i].data.Oper_Suma;
			var suma=selection[i].data.Suma;
			var prymitky=selection[i].data.Prymitky;
			var zalyshok=selection[i].data.Zalyshok;
			var IsKontrAgent=selection[i].data.IsKontrAgent;
			
			var new_zalyshok= zalyshok - opersuma ;
			
			if( new_zalyshok >= 0) {
			alert('Добре, залишок : '+new_zalyshok);
			if( new_zalyshok == 0) 
				{var additional_comment = ". Проведена повна виплата за нарахуванням № "+id+". Нарахування закрито. "}
			else
				{var additional_comment = ". Проведена часткова виплата за нарахуванням № "+id+". Залишилося виплати "+new_zalyshok+" грн."}
	
			Ext.Ajax.request({
				url: './php/new_vyplata.php',
				params: {
				id:id,
				date:date,
				pryznachennia:pryznachennia,
				opersuma:opersuma,
				suma:suma,
				prymitky:prymitky,
				additional_comment:additional_comment,
				zalyshok:zalyshok,
				new_zalyshok:new_zalyshok},
				success: function()
					{
					GridStore_Open.reload();
					grid_1.reconfigure(GridStore_Open, narahuvania_view_cm)
					},
				failure: function(response)
					{
					Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
					}
			});
				//kontragent:pryznachennia,
				//opersuma:opersuma,
				if( IsKontrAgent == 1) 
				{
					Ext.Ajax.request({
					url: './php/z_balansu_kontragenta.php',
					params: {
					p_Kontragent:pryznachennia,
					suma:opersuma
					},
					success: function()
						{
						},
					failure: function(response)
						{
						Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
						}
				});
				}
			}
			else
			{
				if ( isNaN(new_zalyshok) ) 
				{
					alert('Не введена сума для виплати!');
				}
				else
				{
					alert('Ви намагаєтесь виплатити більшу суму ніж нараховано. Різниця : '+new_zalyshok);
				}
			}
		}
	}
	}
	});

			
Ext.ns('app.grid');



