var strUseOwn;


var grivna = Ext.create('Ext.form.TextField', {
    allowBlank : true,
    //padding: 10,
    labelAlign: 'right',
    fieldLabel:'���� �����',
    width: 150,
    labelWidth: 70,
    name:'grivna',
    id:"grivna"
});






































MaxNomer = Ext.create('Ext.data.JsonStore', {
       autoLoad: true,
            storeId: 'MaxNomer',
            proxy: {
                type: 'ajax',
                url: './php/select_max_book_number.php',
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



Ext.define('Borsuko.view.ui.add_book2', {
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
    title: 'Нова Книга',
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
                        fieldLabel: 'id (internal)',
                        labelWidth: 150
                    },
                                        {
                        xtype: 'textfield',
                        id: 'ext_nomer',
                        width: 350,
                        fieldLabel: '&#1053;&#1086;&#1084;&#1077;&#1088;',
                        labelWidth: 150
                    },
                    {
                        xtype: 'textfield',
                        id: 'book_name',
                        width: 500,
                        fieldLabel: 'Назва Книжки',
                        labelWidth: 150,
                        emptyText: 'Назва'
                    },
                    {
                        xtype: 'textfield',
                        id: 'book_outhors',
                        width: 500,
                        fieldLabel: '&#1040;&#1074;&#1090;&#1086;&#1088;&#1080;/&#1088;&#1082;&#1080;',
                        labelWidth: 150
                        //emptyText: '&#1040;&#1074;&#1090;&#1086;&#1088;&#1080;/&#1088;&#1082;&#1080;'
                    },
					{
                        xtype: 'textfield',
                        id: 'publisher',
                        width: 500,
                        name: 'publisher',
                        fieldLabel: 'Видавництво',
                        labelWidth: 150,
                        emptyText: 'Видавництво'
                    },
                                        {
                        xtype: 'textfield',
                        id: 'city',
                        width: 500,
                        name: 'city',
                        fieldLabel: '&#1052;&#1110;&#1089;&#1090;&#1086; &#1074;&#1080;&#1076;&#1072;&#1085;&#1085;&#1103;',
                        labelWidth: 150
                    },
                                                            {
                        xtype: 'textfield',
                        id: 'price',
                        width: 500,
                        name: 'price',
                        fieldLabel: '&#1094;&#1110;&#1085;&#1072;',
                        labelWidth: 150
                    },
                    {
                        xtype: 'combobox',
                        id: 'BBK',
                        editable: false,
                        width: 500,
                        fieldLabel: '&#1042;&#1110;&#1076;&#1076;&#1110;&#1083; (&#1041;&#1041;&#1050;)',
                        labelWidth: 150,
                        displayField: 'book_theme_name',
                        store: 'book_theme_store',
                        valueField: 'book_theme_name',
                        listeners: {

                                    }
                    },
                                        {
                        xtype: 'combobox',
                        id: 'UDK',
                        editable: false,
                        width: 500,
                        fieldLabel: '&#1042;&#1110;&#1076;&#1076;&#1110;&#1083; (&#1059;&#1044;&#1050;)',
                        labelWidth: 150,
                        displayField: 'book_theme_name',
                        store: 'book_theme_store',
                        valueField: 'book_theme_name',
                        listeners: {

                                    }
                    },
                    {
                        xtype: 'textfield',
						maskRe: /[0-9.]/,
                        id: 'year',
                        width: 500,
                        fieldLabel: 'Рік Видання',
                        labelWidth: 150,
                        emptyText: 'Рік видання'
                    },
                    {
                        xtype: 'textfield',
                        id: 'pages',
						maskRe: /[0-9.]/,
                        width: 500,
                        fieldLabel: 'Кількість сторінок',
                        labelWidth: 150,
                        emptyText: 'Кількість сторінок'
                    },

                                   {
                        xtype: 'textfield',
                        id: 'format',
                        width: 500,
                        fieldLabel: '&#1060;&#1086;&#1088;&#1084;&#1072;&#1090;',
                        labelWidth: 150
                    },

 {
                        xtype: 'combobox',
                        id: 'format',
                        width: 500,
                        fieldLabel: '&#1060;&#1086;&#1088;&#1084;&#1072;&#1090;',
                        labelWidth: 150,
                        displayField: 'format',
                        store: 'format_store',
                        valueField: 'format'
		                    },


                    {
                        xtype: 'textfield',
                        id: 'ISBN',
                        width: 500,
                        fieldLabel: 'ISBN',
                        labelWidth: 150,
                        emptyText: 'ISBN'
                    },
                       {
                        xtype: 'textareafield',
                        height: 85,
                        id: 'other',
                        width: 500,
                        fieldLabel: 'Примітка',
                        labelWidth: 150,
                        emptyText: 'Примітка'
                    },
                    {
                        xtype: 'datefield',
						format : "d/m/Y H:i:s",
                        id: 'date',
						editable: false,
                        width: 500,
                        name: 'date',
                        fieldLabel: 'Дата додавання',
						listeners: {
						render: function() {
							this.setValue(new Date());
						}
						},
                        labelWidth: 150
                    },
                    {
                        xtype: 'combobox',
                        id: 'book_theme_name',
						editable: false,
                        width: 500,
                        fieldLabel: 'Жанр книжки',
                        labelWidth: 150,
                        emptyText: 'Вибір жанру',
                        displayField: 'book_theme_name',
                        store: 'book_theme_store',
                        valueField: 'book_theme_name',
						listeners: {


								select: {
									fn:function(combo, value)
									{
									switch (combo.value)
									{

								case 'Свій варіант':
									strUseOwn= true;
									Ext.getCmp("own").setDisabled(false)
									Ext.getCmp("add").setDisabled(false)
									break;
								default:
									strUseOwn= false;
									Ext.getCmp("own").setDisabled(true)
									Ext.getCmp("add").setDisabled(false)

									};
									}
								}
							}
		                    },
							                    {
                        xtype: 'textfield',
                        disabled: true,
                        id: 'own',
                        width: 500,
                        fieldLabel: 'Свій варіант',
                        labelWidth: 150
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
                        text: '&#1044;&#1086;&#1076;&#1072;&#1090;&#1080; &#1082;&#1085;&#1080;&#1075;&#1091;',
						iconCls: 'add',
						id: 'add',
						disabled: true,
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

        var str_ext_nomer = Ext.getCmp("ext_nomer").getValue();
        var str_city = Ext.getCmp("city").getValue();
        var str_price = Ext.getCmp("price").getValue();
        var str_BBK = Ext.getCmp("BBK").getValue();
        var str_UDK = Ext.getCmp("UDK").getValue();
        var str_format = Ext.getCmp("format").getValue();
		var str_book_theme_name = Ext.getCmp("book_theme_name").getValue();
		var str_book_name = Ext.getCmp("book_name").getValue();
		var str_book_outhors = Ext.getCmp("book_outhors").getValue();
		var str_publisher = Ext.getCmp("publisher").getValue();
		var str_year = Ext.getCmp("year").getValue();
		var str_pages = Ext.getCmp("pages").getValue();
		var str_ISBN = Ext.getCmp("ISBN").getValue();
		var str_other = Ext.getCmp("other").getValue();
		var str_date = Ext.getCmp("date").getValue();



		switch(strUseOwn)
		{
			case true:
			str_book_theme_name = Ext.getCmp("own").getValue();
			Ext.Ajax.request(
				{
				url: './php/inserttheme.php',
				params: { newtheme: str_book_theme_name},
				success: function()
				{
				Ext.MessageBox.alert('Дані Збережені!', 'Нова категорія книг додана!');
				},
				failure: function(response)
				{ }
			})
			break;
			case false:
			str_book_theme_name= Ext.getCmp("book_theme_name").getValue();
			break;
		}

	Ext.Ajax.request(
	{
		url: './php/insert_book.php',
		params: {

            ext_nomer : str_ext_nomer,
            city : str_city,
            price : str_price,
            BBK : str_BBK,
            UDK : str_UDK, 
            format : str_format, 

			nomer :	str_nomer,
			book_theme_name: str_book_theme_name,
			book_name : str_book_name,
			book_outhors : str_book_outhors,
			publisher :  str_publisher,
			year :	str_year,
			pages :	str_pages,
			ISBN :	str_ISBN,
			other :	str_other,
			date :	str_date,
		},
		success: function()
		{

        Ext.getCmp("ext_nomer").reset();
        Ext.getCmp("city").reset();
        Ext.getCmp("price").reset();
        Ext.getCmp("BBK").reset();
        Ext.getCmp("UDK").reset();
        Ext.getCmp("format").reset();
		Ext.getCmp("book_theme_name").reset();
		Ext.getCmp("book_name").reset();
		Ext.getCmp("book_outhors").reset();
		Ext.getCmp("publisher").reset();
		Ext.getCmp("year").reset();
		Ext.getCmp("pages").reset();
		Ext.getCmp("ISBN").reset();
		Ext.getCmp("other").reset();
		Ext.getCmp("date").reset();
		var newIdValue = parseInt(Ext.getCmp("id").getValue())+1
		Ext.getCmp("id").setValue(newIdValue);
			//Ext.MessageBox.alert('Дані Збережені!', 'Тепер можете');
		},
		failure: function(response)
		{
			Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
		}
	})
	}
