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
	//var sm = new xg.CheckboxSelectionModel();
	var hash = getUrlVars();
	var strZamovleniaid = hash['objid'];
	var strProp = 1;
	var strTotalCost = 1;
	var strProp1 = 0;
	var strTotalCost1 = 0;
	var strDollar = 0;
	var strGrivna = 0;
	var strEuro = 0;
	var strTotalTime1 = 0;
	//var waitMask = new Ext.LoadMask(grid_1.getEl().dom, {msg:"Оновлюю..."});	
	
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

var _comboData = [];	

_comboData.push(['Ціна', 1]);
_comboData.push(['Пропозиція', 1]);

	var KursStore = new Ext.data.JsonStore({
			root: "results",
            remoteSort: false,
			fields: ['grivna', 'euro', 'dollar'],
			 url: '/php/kurs.php',
            listeners: {
            load: function(store, records, options) {
			strGrivna = parseFloat(store.data.items[0].data.grivna); //global Vars
			strDollar = parseFloat(store.data.items[0].data.dollar); //global Vars
			strEuro = parseFloat(store.data.items[0].data.euro); //global Vars
            }
            }
        });
		
var store1 = new Ext.data.ArrayStore({
	fields: ['season', 'total'],
	data: _comboData
});

var reader = new Ext.data.JsonReader({
        idProperty: 'modelId',
		root: 'results',
        totalProperty: 'total',
        fields: [
			{name: 'nomer', type: 'int'},
			{name: 'zamovleniaID', type: 'int'},
			{name: 'type', type: 'string'},
			{name: 'CategoryName', type: 'string'},
            {name: 'SubCategoryName', type: 'string'},
			{name: 'ModelId', type: 'int'},
            {name: 'Model', type: 'string'},
            {name: 'Count', type: 'float'},
			{name: 'OdVymir', type: 'string'},
			{name: 'Vendor', type: 'string'},
			{name: 'Description', type: 'string'},
            {name: 'Count', type: 'float'},
			{name: 'Time', type: 'int'},
			{name: 'TotalTime', type: 'int'},
			{name: 'Price', type: 'float'},
			{name: 'PriceGrn', type: 'float'},
			{name: 'cost', type: 'float'},
			{name: 'Nacinka', type: 'float'},
			{name: 'Propozycija', type: 'float'},
            {name: 'cost', type: 'float'},
			{name: 'Dohid', type: 'float'},
			{name: 'Valiuta', type: 'string'},
			{name: 'Gryvni', type: 'float'},
			
        ]
    });
	
var reader2 = new Ext.data.JsonReader({
        idProperty: 'modelId',
		root: 'results',
        totalProperty: 'total',
        fields: [
			{name: 'nazva', type: 'string'},
			{name: 'nomer', type: 'string'},
			{name: 'zamovnyk', type: 'string'},
			{name: 'Vykonavci', type: 'string'},
            {name: 'adresa', type: 'string'},
			{name: 'date', type: 'string'},
            {name: 'objthemes', type: 'string'},
            {name: 'PDV', type: 'string'},
			{name: 'Variant', type: 'string'},
        ]
    });

	var ObjThemesStore = new Ext.data.JsonStore({
        root: 'results',
		readOnly: true,
		allowBlank : false,
        totalProperty: 'total',
        idProperty: 'id',
        remoteSort: false,
        fields: ['ObjectThemesName'],
		proxy: new Ext.data.ScriptTagProxy({
            url: '/php/ObjThemes.php'
        }),
        //sortInfo:{field:'name', direction:'ASC'}
		sortInfo:{field:'ObjectThemesName', direction:'ASC'}
    });
	
	
	//KursStore.load();


	var store2 = new Ext.data.JsonStore({
        fields:['name', 'visits', 'views'],
        data: [
            {name:'Jul 07', visits: 245000, views: 3000000},
            {name:'Aug 07', visits: 240000, views: 3500000},
            {name:'Sep 07', visits: 355000, views: 4000000},
            {name:'Oct 07', visits: 375000, views: 4200000},
            {name:'Nov 07', visits: 490000, views: 4500000},
            {name:'Dec 07', visits: 495000, views: 5800000},
            {name:'Jan 08', visits: 520000, views: 6000000},
            {name:'Feb 08', visits: 620000, views: 7500000}
        ]
    });
	

	
var pieChart = new Ext.chart.PieChart({  
	id: 'pieChart',
	name: 'pieChart',
	height: 300,
	width: 300,
	store: store1,  
	dataField: 'total',
    categoryField: 'season',
	extraStyle:
            {
                legend:
                {
                    display: 'bottom',
                    padding: 5,
                    font:
                    {
                        family: 'Tahoma',
                        family: 'Tahoma',
                        size: 13
                    }
                }
            }
	}); 
	
var columnChart = new Ext.chart.ColumnChart({  
	id: 'columnChart',
	name: 'columnChart',
	width: 200,
    height: 180,
	//renderTo: document.body,

	store: store1,  
	yField: 'total',
			url: '/resources/charts.swf',
            xField: 'season',
            xAxis: new Ext.chart.CategoryAxis({
                //title: 'співвідношення ціни/пропозиції'
            }),
            yAxis: new Ext.chart.NumericAxis({
                title: 'гроші'
            }),
            extraStyle: {
               xAxis: {
                    labelRotation: 0
                }
            }
	});
	
var lineChart = new Ext.chart.LineChart({  
	xtype: 'linechart',
            store: store2,
            xField: 'name',
            yField: 'visits',
			listeners: {
				itemclick: function(o){
					var rec = store.getAt(o.index);
					Ext.example.msg('Item Selected', 'You chose {0}.', rec.get('name'));
				}
			}
	}); 
var nomer = new Ext.form.TextField({
	//store: VykonavciStore,
	displayField: 'nomer',
    valueField:'nomer',
	//allowBlank : false,
	fieldLabel:'Номер',
	name:'nomer',
	//anchor:'20%',
	width: 100,
	emptyText:'№',
	readOnly: true,
	growMax:50,
	id:"nomer"
}); 
var nazva = new Ext.form.TextField({
	allowBlank : false,
	readOnly: true,
	fieldLabel:'Назва Об*єкту',
	maxLength: 250,
	width: 350,
	name:'nazva',
	//anchor:'50%',
	emptyText:'Назва Об*єкту...',
	id:"nazva"
}); 
var zamovnyk = new Ext.form.TextField({
	allowBlank : false,
	readOnly: true,
	fieldLabel:'Замовник Об*єкту',
	name:'zamovnyk',
	//anchor:'50%',
	width: 350,
	emptyText:'Замовник',
	id:'zamovnyk'
}); 
var adresa = new Ext.form.TextField({
    allowBlank : false,
	readOnly: true,
	fieldLabel:'Адреса Об*єкту',
	multiline: true,
	name:'adresa',
	//anchor:'50%',
	width: 350,
	
	
	emptyText:'Адреса',
	id:"adresa"
}); 

adresa.setSize(350, 100);

var objthemes = new Ext.form.TextField({
    allowBlank : false,
	width: 350,
	readOnly: true,
	autoSelect : true,
	id: 'objthemes',
    store: ObjThemesStore,
    fieldLabel:'Тема об*єкту',
	displayField: 'ObjectThemesName',
    valueField:'ObjectThemesName',
    typeAhead: true,
    mode: 'remote',
    forceSelection: true,
    triggerAction: 'all',
	//anchor:'50%',
	width: 350,
	name : 'objthemes',
    emptyText: 'Вибір теми...',
    selectOnFocus: true
    //applyTo: 'categories-combo'
});
var date = new Ext.form.DateField({
    fieldLabel:'Дата',
	readOnly: true,
	format: 'd.m.Y',
	name:'date',
	//showToday: false,
	//anchor:'20%',
	width: 350,
	id:"date"
}); 
var PDV = new Ext.form.TextField({
	allowBlank : false,
	readOnly: true,
	fieldLabel:'ПДВ',
	//format: 'd.m.Y',
	name:'PDV',
	showToday: false,
	//anchor:'20%',
	width: 350,
	id:"PDV"
}); 
var Variant = new Ext.form.TextField({
    allowBlank : false,
	fieldLabel:'Варіант',
	readOnly: true,
	//format: 'd.m.Y',
	name:'Variant',
	showToday: false,
	//anchor:'50%',
	width: 350,
	id:"Variant"
}); 
var Vykonavci = new Ext.form.TextField({
	allowBlank : false,
	fieldLabel:'Виконавці Об*єкту',
	readOnly: true,
	name:'Vykonavci',
	//anchor:'50%',
	width: 350,
	emptyText:'Замовник',
	id:"Vykonavci"
}); 

	var tabs = new Ext.FormPanel({
		labelWidth: 120,
		//layout:'hbox',
		layout:'column',
		margins:'30 30 30 30',
		id: "forma",
		frame: true,
		reader: reader2,
		title: 'Інформація про об*єкт',
		border:true,
		draggable:false,
		resizible:true,
		//autoHeight: true,
		height: 220,
		collapsible: true,
		maximizable : true,
		animCollapse: true,
		trackMouseOver: true,
		autoWidth : true,
		monitorResize :true,
		listeners : {
		afterrender: function() { 
		tabs.getForm().load({url:'./php/total.php?action=ShowData&objid='+strZamovleniaid, waitMsg:'Оновлюю'});}
		},

		items:[
			{
			//layout:'vbox',
			//margins:'10 10 10 10',
			//region:'left',
			autoScroll:true,
			columnWidth:.400,
			baseCls:'x-plain',
			bodyStyle:'padding:0px 0px 10px 10px',		
			items:[ 
				{
					layout:'form',
			//items:[ nomer, PDV, date, nazva, zamovnyk, Vykonavci,adresa, objthemes, Variant]}]
			items:[ nomer, date, nazva]}]
			
			 },

			 {
			layout:'hbox',
			bodyStyle:'padding:0px 0px 0px 10px',		
			margins:'10 10 10 10',
			//region:'left',
			autoScroll:true,
			columnWidth:.600,
			baseCls:'x-plain',
			//items:[pieChart, columnChart]
			items:[columnChart]
			} ]

    });
	
	tabs.render(document.body);
	function pctChange(val){ return '<span style="color:blue;">' + val + '%</span>';}
	function green(val){ return '<span style="color:green;">' + val + '</span>';}	
	var fm = Ext.form;
	Ext.ux.grid.GroupSummary.Calculations['Propozycija'] = function(v, record, field){
 		//strProp = v + ((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count));
		
		if (record.data.Valiuta	 == 'dollar') { strProp = v + (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count)) * strDollar) };
		if(record.data.Valiuta	 == 'grivna') { strProp = v + (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))* strGrivna) };
		if(record.data.Valiuta	 == 'euro') { strProp = v + (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))* strEuro)}; 		
		
		
		return strProp;
    };
	Ext.ux.grid.GroupSummary.Calculations['Dohid'] = function(v, record, field){
 		
		if (record.data.Valiuta	 == 'dollar') { var strDohid = v + ((((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price))* strDollar) };
		if (record.data.Valiuta	 == 'grivna') { var strDohid = v + ((((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price))* strGrivna) };
		if (record.data.Valiuta	 == 'euro') { var strDohid = v + ((((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price)) * strEuro) };
		return strDohid;
    };
	Ext.ux.grid.GroupSummary.Calculations['PriceGrn'] = function(v, record, field){
		if (record.data.Valiuta	 == 'dollar') { var strPriceGrn = v + (record.data.Price) * strDollar };
		if(record.data.Valiuta	 == 'grivna') { var strPriceGrn = v + (record.data.Price) * strGrivna };
		if(record.data.Valiuta	 == 'euro') { var strPriceGrn = v + (record.data.Price) * strEuro }; 		
		return strPriceGrn;
    };
	
/*
		Ext.ux.grid.GroupSummary.Calculations['PriceGrn'] = function(v, record, field){
		if (record.data.Valiuta	 == 'dollar') { var strPriceGrn = v + (record.data.Price * record.data.Count) * strDollar };
		if(record.data.Valiuta	 == 'grivna') { var strPriceGrn = v + (record.data.Price * record.data.Count) * 1 };
		if(record.data.Valiuta	 == 'euro') { var strPriceGrn = v + (record.data.Price * record.data.Count) * 2}; 		
		return strPriceGrn;
    };
*/	
	
		Ext.ux.grid.GroupSummary.Calculations['totalCost'] = function(v, record, field){
 		//strTotalCost =  v + (record.data.Count * record.data.Price);
		
		if (record.data.Valiuta	 == 'dollar') { strTotalCost = v + ((record.data.Price * record.data.Count) *strDollar) };
		if(record.data.Valiuta	 == 'grivna') { strTotalCost = v + ((record.data.Price * record.data.Count))*strGrivna };
		if(record.data.Valiuta	 == 'euro') { strTotalCost = v + ((record.data.Price * record.data.Count))*strEuro }; 		
		
		
		return strTotalCost;
    };
	
	Ext.ux.grid.GroupSummary.Calculations['TotalTime'] = function(v, record, field){
 		var strTotalTime1 = 0;
		var strTotalTime = 0;
		strTotalTime =  record.data.Count * record.data.Time;
		strTotalTime1  = strTotalTime1 + strTotalTime;
		return strTotalTime1;
		};
	
	
    var summary = new Ext.ux.grid.GroupSummary();
	var store = new Ext.data.GroupingStore({
        autoLoad: true,
		reader: reader,
        remoteSort: false,
        proxy: new Ext.data.ScriptTagProxy({ url: './php/total.php?action=showData&objid='+strZamovleniaid}),
		sortInfo:{field:'ModelId', direction:'DESC'},
		groupField: 'zamovleniaID',
		
		
		listeners: {
            load: function(store, records, options) {
			//grid_1.update();
            }
            }
    });
    
	/*var KursStore = new Ext.data.JsonStore({
        root: 'results',
        remoteSort: false,
		//autoLoad: true,
        fields: ['grivna', 'euro', 'dollar'],
		//proxy: new Ext.data.ScriptTagProxy({
        url: '/php/kurs.php'
        //})
	})
*/


		
	var grid_1 = new xg.EditorGridPanel({
	store:store,
	draggable:false,
	maximizable : true,
	loadMask: true,
	columns: [
	
	{header: '№', width: 30, sortable: true,dataIndex: 'zamovleniaID'},
	{header: 'Тип', width: 50, sortable: true,dataIndex: 'type'},
	{header: 'Категорія', width: 350, sortable: true, hidden: true, dataIndex: 'categoryName', summaryType: 'count', summaryRenderer: function(v, params, data){ return ((v === 0 || v > 1) ? '(' + v +' Tasks)' : '(1 Task)');}},
	{header: 'Субкатегорія', width: 150, sortable: true,hidden: true,dataIndex: 'SubCategoryName'},
	//{header: 'МI', width: 40,sortable: true,dataIndex: 'ModelId'},
	{id: 'model', header: 'Модель', width: 80,sortable: true,dataIndex: 'Model', editor: new fm.TextField({allowBlank: false})},
	{header: 'Опис Товару', width: 230, sortable: true, dataIndex: 'Description', id: 'Description', editor: new fm.TextField({allowBlank: false})},
	{header: 'Виробник', width: 80, sortable: true, dataIndex: 'Vendor', editor: new fm.TextField({allowBlank: false})},
	{ header: 'К-сть', width: 30, sortable: true, dataIndex: 'Count', summaryType: 'sum', renderer : function(v){ return v ; }, editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, style: 'text-align:left'})},
	{ header: 'Од.Виміру', width: 60, sortable: true, dataIndex: 'OdVymir', editor: new fm.TextField({allowBlank: false})},
	{ header: 'Час монтажу 1', width: 75, sortable: true, summaryType: 'sum', dataIndex: 'Time', renderer : function(v){ return v + ' хв'; }, editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, style: 'text-align:left'})},
	
	{ id: 'TotalTime', header: 'Заг.Час', width: 50, dataIndex: 'TotalTime', renderer: function(v, params, record) 	{return record.data.Count * record.data.Time + ' хв';	}},
	
	
	{ header: 'Ціна в вал.', width: 50, sortable: true,  dataIndex: 'Price', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, style: 'text-align:left' }) },
	{header: 'Валюта', width: 40, sortable: true, dataIndex: 'Valiuta'},
	{ id: 'PriceGrn', header: 'Ціна в грн', width: 50, sortable: false, groupable: false, dataIndex: 'PriceGrn', summaryType: 'PriceGrn', summaryRenderer: Ext.util.Format.uaMoney,
	renderer: function(v, params, record) 	{ 
		if (record.data.Valiuta	 == 'dollar') { var strgrivna = record.data.Price * strDollar };
		if(record.data.Valiuta	 == 'grivna') { var strgrivna = record.data.Price * strGrivna };
		if(record.data.Valiuta	 == 'euro') { var strgrivna = record.data.Price * strEuro};
		//return '<span style="color:green;">'strgrivna.toFixed(2) + ' грн'+'%</span>';	
		return '<span style="color:green;">'+strgrivna.toFixed(2) + ' грн'+'</span>';
	} 
	 },	
	{ id: 'cost', header: 'Сума', width: 50, sortable: false, groupable: false, dataIndex: 'cost', summaryType: 'totalCost', summaryRenderer: Ext.util.Format.uaMoney,
		renderer: function(v, params, record) 	{ 
		if (record.data.Valiuta	 == 'dollar') { var strFinalGrivna = (record.data.Count * record.data.Price) * strDollar };
		if(record.data.Valiuta	 == 'grivna') { var strFinalGrivna = (record.data.Count * record.data.Price) * strGrivna };
		if(record.data.Valiuta	 == 'euro') { var strFinalGrivna = (record.data.Count * record.data.Price) * strEuro };
		return strFinalGrivna.toFixed(2) + ' грн';
	}},
	{header: '% Націнка', width: 30, sortable: true, renderer: pctChange, dataIndex: 'Nacinka', editor: new fm.TextField({allowBlank: false})},
	{ id: 'Propozycija', header: 'Пропозиція', width: 50, sortable: false, groupable: false, dataIndex: 'Propozycija', summaryType: 'Propozycija', summaryRenderer: Ext.util.Format.uaMoney, 
	renderer: function(v, params, record){ 
	if (record.data.Valiuta	 == 'dollar') { var strProposicija = ((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count)).toFixed(2) * strDollar };
	if(record.data.Valiuta	 == 'grivna') { var strProposicija = ((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count)).toFixed(2) * strGrivna };
	if(record.data.Valiuta	 == 'euro') { var strProposicija = ((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count)).toFixed(2) * strEuro};
	return strProposicija.toFixed(2) + ' грн';
	}},
	//{ id: 'Dohid', header: 'Дохід', width: 100, sortable: false, groupable: false, renderer: function(v, params, record){ return (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price)).toFixed(2); }, dataIndex: 'Dohid', summaryType: 'Dohid', summaryRenderer: Ext.util.Format.Empty }
	{ id: 'Dohid', header: 'Дохід', width: 50, sortable: false, groupable: false, dataIndex: 'Dohid', summaryType: 'Dohid', summaryRenderer: Ext.util.Format.uaMoney, 
	renderer: function(v, params, record){ 
	
	if (record.data.Valiuta	 == 'dollar') { var strDohidGrn = (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price)).toFixed(2) * strDollar };
	if(record.data.Valiuta	 == 'grivna') { var strDohidGrn = (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price)).toFixed(2) * 1 };
	if(record.data.Valiuta	 == 'euro') { var strDohidGrn = (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price)).toFixed(2) * 2};
	if (strDohidGrn.toFixed(2)	< 0) { return '<span style="font-weight: bold"; style="color:red">' + strDohidGrn.toFixed(2) + ' грн </span>';};
	return strDohidGrn.toFixed(2) + ' грн';
	
	//return (((((record.data.Price * record.data.Count)*record.data.Nacinka)/100)+(record.data.Price * record.data.Count))-(record.data.Count * record.data.Price)).toFixed(2); 
	} 
	
	}
	
	

        ],
		view: new Ext.grid.GroupingView({
            forceFit:true,
            groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "товарів" : "товар"]})'
        }),
        plugins: summary,
               tbar : [{
            text: 'Сумуваня',
            tooltip: 'Сумує кількість вибраного товару',
            handler: function(){
			summary.toggleSummaries(); 
			}
        },
		{
	            text: 'Добавити додаткові комплектуючі',
	            handler : function(){
	               AddAditional();
	            }
        	},
			{
	            text: 'Видалити комплектуючі',
	            handler : function(){
				
					Ext.Msg.confirm('Підтвердження', 'Дійсно хочете видалити запис?', 
					function(btn){
						if(btn == 'yes'){
						sendRemoveRequest();
						}
					}
				);
				
				
	               
	            }
        	}
				
				/*,{
	            text: 'Зберегти зміни',
	            handler : function(){
	               sendUpdateRequest();
	            }
        } */
		,{
	            text: 'Експортувати для Клієнта',
	            handler : function()
	{
				strUrl = "/php/final.php?objid="+strZamovleniaid;
				window.navigate(strUrl);
		}
        }],
        //sm: sm,
		frame: true,
		id: 'grid_1',
		sortInfo:{field:'ModelId', direction:'DESC'},
        autoHeight: true,
		clicksToEdit: 1,
		collapsible: true,
		animCollapse: true,
		enableColumnMove: true,
		listeners : {
		afterrender: function() 
		{ KursStore.load();}
		},
		
        title: 'Обрані товари',
        renderTo: document.body
    });

	grid_1.on('afteredit', sendUpdateRequest); 
	//grid_1.on('afterrender', grid_1.getStore().reload());
	grid_1.on('afterrender', sendUpdateRequest);
	grid_1.on('afterload', changeChart);
	
	//grid_1.on('afteredit', );
	
	
	function sendUpdateRequest(){
	        var jsonData = new Array();                        
			for(i=0;i<store.getCount();i++) {
            record = store.getAt(i);
            jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData); 		
		Ext.Ajax.request({
		    url:'./php/total.php?action=saveData', //php function that saves the data
		  	params:{data:jsonData},
            success:function(responce, action) {
            },
            failure: function(form, action) {
                alert('Oops the delete did not work out too well!');
            }
		});        
		strObjid = hash['objid'];
		Ext.Ajax.request(
	{
		url: './php/inserttotal.php',
		params: {propozycija: strProp, objId: strObjid},
		success: function()
		{}.createDelegate(this),
		failure: function(response)
		{}.createDelegate(this)
	}) 
		
    }  
	/*function sendUpdateRequest_1(){
        var jsonData = new Array();                        
        for(i=0;i<store.getCount();i++) {
            record = store.getAt(i);
            jsonData.push(record.data);
        }                        
        jsonData = Ext.encode(jsonData); 		
		Ext.Ajax.request({
		    url:'/php/total.php?action=saveData', //php function that saves the data
		  	params:{data1:jsonData},
            success:function(responce, action) {
                //alert('Congrats!  Your changes were saved!!!!');
            },
            failure: function(form, action) {
                //alert('Oops the delete did not work out too well!');
            }
		});        
    }  */
	function sendRemoveRequest(){ 
		if(store.getCount()<1){
			return;
		}
		var jsonData = new Array();       
		//var cr = grid_1.getSelectionModel().getSelectedCellRange();
		var cr = grid_1.getSelectionModel().getSelectedCell();
		var cr2 = store.getCount();
		//for(var rowIndex = cr[0]; rowIndex<=cr2; rowIndex++){			
			record = store.getAt(cr[0]);
			jsonData.push(record.data);
		//}
		jsonData = Ext.encode(jsonData);
		Ext.Ajax.request({
		   url:'./php/total.php?action=removeRecord', //php function that saves the data
		  	params:{data:jsonData},
            success:function(responce, action) {
            	var rowCorection=0
					rowIndex = cr[0];
					store.removeAt(rowIndex-rowCorection);
					rowCorection++;
            },
            failure: function(form, action) {
                alert('Oops the delete did not work out too well!');
            }
		});        
    }  
	
	
  	function sendAddRequest(){		
		//waitMask.show();
		//var cr = grid_1.getSelectionModel().getSelectedCellRange();
		var cr = grid_1.getSelectionModel().getSelectedCell();
		var rowIndex = cr[0];
		Ext.Ajax.request({
		   url:'./php/total.php?action=addRecord', //php function that saves the data		  	
            success:function(responce, action) {
            	var Record = Ext.data.Record.create(store.fields.items);            	
				var newRecord = new Record(Ext.decode(responce.responseText));  
                grid_1.stopEditing();
                store.insert(rowIndex, newRecord);
                grid_1.startEditing(rowIndex, 1);   
				//waitMask.hide()      	
                //alert('Congrats!  Record added!');
            },
            failure: function(form, action) {
                alert('Oops the delete did not work out too well!');
            }
		});        
    }  
	
	
	
	function AddAditional(){
	var strObjid = hash['objid'];
	window.navigate("./AddAditional.html?objid="+strObjid);	
    }
	
	
	function changeChart(){
	_comboData = new Array();
	_comboData.push(['Ціна', (strTotalCost).toFixed(2)]);
	_comboData.push(['Пропозиція', (strProp).toFixed(2)]);
	store1.destroy();
		store1 = new Ext.data.ArrayStore({
		fields: ['season', 'total'],
		data: _comboData
		});
	//pieChart.bindStore(store1)
	columnChart.bindStore(store1)
	};


	});

			
Ext.ns('app.grid');



