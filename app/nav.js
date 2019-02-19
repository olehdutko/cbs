Ext.require([
    'Ext.panel.Panel',
    'Ext.Action',
    'Ext.button.Button',
    'Ext.window.MessageBox'
]);
var dialog;
var win;
Ext.onReady(function(){


 var panel = Ext.create('Ext.panel.Panel', {
	renderTo: document.body,

	dockedItems: {
		itemId: 'toolbar',
		xtype: 'toolbar',
		items: [
			{ text: '&#1050;&#1085;&#1080;&#1075;&#1080;', iconCls: 'objects',
			menu: [
			{text: '&#1044;&#1086;&#1076;&#1072;&#1090;&#1080; &#1082;&#1085;&#1080;&#1075;&#1091;', iconCls: 'add16',handler : function() { strUrl = "/add_book.php";  window.location = strUrl;}},
			{text: '&#1055;&#1077;&#1088;&#1077;&#1075;&#1083;&#1103;&#1076; &#1082;&#1085;&#1080;&#1075;', iconCls: 'view' , handler : function() { strUrl = "/books.php";  window.location = strUrl;}},
			{text: '&#1056;&#1077;&#1076;&#1072;&#1075;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1082;&#1085;&#1080;&#1075;', iconCls: 'edit' , handler : function() { strUrl = "/edit_books.php";  window.location = strUrl;}},
			{text: '&#1054;&#1087;&#1077;&#1088;&#1072;&#1094;&#1110;&#1111;', iconCls: 'edit' , handler : function() { strUrl = "/book_operations.php";  window.location = strUrl;}},

	{text: '&#1030;&#1089;&#1090;&#1086;&#1088;&#1110;&#1103; &#1082;&#1085;&#1080;&#1075;', iconCls: 'edit' , handler : function() { strUrl = "/books_history.php";  window.location = strUrl;}},
			{text: '&#1057;&#1087;&#1080;&#1089;&#1072;&#1085;&#1110; &#1082;&#1085;&#1080;&#1075;&#1080;', iconCls: 'edit' , handler : function() { strUrl = "/php/spysano.php";  window.location = strUrl;}}

			]},

			{ text: '&#1050;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1074;&#1072;&#1095;&#1110;/&#1095;&#1082;&#1080;', iconCls: 'settings',
			menu: [
			{text: '&#1044;&#1086;&#1076;&#1072;&#1090;&#1080; &#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1074;&#1072;&#1095;&#1072;/&#1095;&#1082;&#1091;', id : 'add_reader', iconCls: 'book',	handler : function() {strUrl = "/add_reader.php"; window.location = strUrl;	}, style: {marginLeft: '0px'}},
			{text: '&#1050;&#1072;&#1088;&#1090;&#1086;&#1090;&#1077;&#1082;&#1072; &#1108;&#1076;&#1080;&#1085;&#1086;&#1075;&#1086;/&#1111; &#1095;&#1080;&#1090;&#1072;&#1095;&#1072;/&#1095;&#1082;&#1080;', id : 'readers', iconCls: 'book', handler : function() { strUrl = "/readers.php"; window.location = strUrl; }, style: {marginLeft: '0px'} },
			{text: '&#1056;&#1077;&#1076;&#1072;&#1075;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;', id : 'edit_readers',  iconCls: 'book',  handler : function() { strUrl = "/edit_readers.php"; window.location = strUrl; }, style: {marginLeft: '0px'} }
			]},

			{ text: 'Відвідувачі', iconCls: 'settings',
			menu: [
			{text: 'Реєструвати відвідувачів', id : 'registration', iconCls: 'book', handler : function() { strUrl = "/registration.php"; window.location = strUrl; }, style: {marginLeft: '0px'} },
			{text: 'Перегляд відвідувачів', id : 'visitors', iconCls: 'book', handler : function() { strUrl = "/visitors.php"; window.location = strUrl; }, style: {marginLeft: '0px'} },
			{text: 'Редагування відвідувачів', id : 'edit_visitors', iconCls: 'book', handler : function() { strUrl = "/edit_visitors.php"; window.location = strUrl; }, style: {marginLeft: '0px'} }
			]},

			{ text: 'Події', iconCls: 'settings',
			menu: [

			{text: 'Додати подію', iconCls: 'add16',handler : function() { strUrl = "/add_event.php";  window.location = strUrl;}},
			{text: 'Перегляд подій', iconCls: 'view' , handler : function() { strUrl = "/events.php";  window.location = strUrl;}},
			{text: 'Редагування подій', iconCls: 'edit' , handler : function() { strUrl = "/edit_events.php";  window.location = strUrl;}}
			]},

			{ text: 'Замовлення Книг', iconCls: 'settings',
			menu: [
			{text: '&#1047;&#1072;&#1084;&#1086;&#1074;&#1083;&#1077;&#1085;&#1085;&#1103; &#1050;&#1085;&#1080;&#1075;', id : 'orders', iconCls: 'book', handler : function() { strUrl = "/ordering.php"; window.location = strUrl; }, style: {marginLeft: '0px'} },
			{text: 'Список замовлень', id : 'orderslist', iconCls: 'book', handler : function() { strUrl = "/orders.php"; window.location = strUrl; }, style: {marginLeft: '0px'} },
			{text: 'Редагування замовлень', id : 'edit_orderslist', iconCls: 'book', handler : function() { strUrl = "/edit_orders.php"; window.location = strUrl; }, style: {marginLeft: '0px'} }
			]},

			{ text: 'Статистика', iconCls: 'settings',
			menu: [
			{text: 'Статика книг за період', id : 'books_period', iconCls: 'book', handler : function() { showDialogForm(); }, style: {marginLeft: '0px'} }
			]},

			{ text: 'Експорт для сайту', iconCls: 'settings',
			menu: [
			{text: 'Список книг для сайту', id : 'bookslist', iconCls: 'book', handler : function() { strUrl = "/php/books_export.php"; window.location = strUrl; }, style: {marginLeft: '0px'} }
			]},

			{ text: 'Налаштування', iconCls: 'settings', style: {marginLeft: '50px'},
			menu: [
			{text: 'Головні Налаштування', id : 'configuring', iconCls: 'settings', handler : function() { strUrl = "/configuring.php"; window.location = strUrl; }, style: {marginLeft: '0px'} }
			]},
		]
	}
    });

	var date1Nav = new Ext.form.DateField({
	allowBlank : false,
	fieldLabel:'Початок періоду',
	format : "d/m/Y",
	name:'date1Nav',
	anchor:'100%',
	emptyText:'Дата початку історії',
	id:"date1Nav"
	});

	var date2Nav = new Ext.form.DateField({
	allowBlank : false,
	format : "d/m/Y",
	fieldLabel:'Кінець періоду',
	name:'date2Nav',
	anchor:'100%',
	emptyText:'Дата кінця історії',
	id:"date2Nav"
	});

	var date3 = new Ext.form.DateField({
	allowBlank : false,
	format : "d/m/Y",
	fieldLabel:'Початок періоду',
	name:'date3',
	anchor:'100%',
	emptyText:'Дата кінця історії',
	id:"date3"
	});

	var date4 = new Ext.form.DateField({
	allowBlank : false,
	format : "d/m/Y",
	fieldLabel:'Кінець періоду',
	name:'date4',
	anchor:'100%',
	emptyText:'Дата кінця історії',
	id:"date4"
	});

	date1Nav.setValue(new Date());
	date2Nav.setValue(new Date());
	date3.setValue(new Date());
	date4.setValue(new Date());

	function showDialogForm() {
        if (!win) {
            var form = Ext.widget('form', {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },
                defaults: {
                    margins: '0 0 10 0'
                },

                items: [date3, date4],

                buttons: [{
                    text: 'Статистика книг',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                },
				{
                    text: 'Статистика Читачів',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                },
				{
                    text: 'Статистика Відвідувачів',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                },
				{
                    text: 'Відмінити',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                }

				]
            });

            win = Ext.widget('window', {
                title: 'Експорт',
                closeAction: 'hide',
                width: 500,
                height: 500,
                minHeight: 500,
                layout: 'fit',
                resizable: true,
                modal: true,
                items: form
            });
        }
        win.show();
    }

});
	