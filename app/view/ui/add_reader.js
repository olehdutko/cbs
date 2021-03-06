/*
 * File: app/view/ui/add_reader.js
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
var hash = getUrlVars();


   var currentTime = new Date();
    var now = currentTime.getFullYear()+1;
    var years = [];
    var y = 1975;
    while(y<=now){
        years.push([y]);
        y++;
    }



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
 readerid = hash['readerid'];


storeThn = Ext.create('Ext.data.SimpleStore', {
storeId: 'storeThn',
        fields: [ 'tahun' ],        
        data: years
    });

MaxNomer = Ext.create('Ext.data.JsonStore', {
       autoLoad: true,
            storeId: 'MaxNomer',
            proxy: {
                type: 'ajax',
                url: './php/select_max_reader_number.php',
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
                        
                        Ext.getCmp("reader_id").setValue(parseInt(MaxNomer.data.items[0].data.Max)+1);
                        Ext.getCmp("idcard").setValue(readerid);
                        }
                    }
    });

Ext.define('Borsuko.view.ui.add_reader', {
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
                        id: 'reader_id',
                        width: 350,
                        disabled: true,
                        hidden: true,

                        fieldLabel: '&#1042;&#1085;&#1091;&#1090;&#1088;&#1110;&#1096;&#1085;&#1110;&#1081; &#1085;&#1086;&#1084;&#1077;&#1088;',
                        labelWidth: 150
                    },
                    {
                        xtype: 'textfield',
                        maskRe: /[0-9.]/,
                        id: 'idcard',
                        width: 500,
                        fieldLabel: '&#8470; &#1095;&#1080;&#1090;&#1072;&#1094;&#1100;&#1082;&#1086;&#1075;&#1086;',
                        labelWidth: 150
                    },
                    {
                        xtype: 'textfield',
                        id: '2name',
                        width: 500,
                        name: '2name',
                        fieldLabel: 'Прізвище',
                        labelWidth: 150,
                        emptyText: 'Прізвище'
                    },
                    {
                        xtype: 'textfield',
                        id: '1name',
                        width: 500,
                        fieldLabel: 'Ім\'я',
                        labelWidth: 150,
                        emptyText: 'Ім\'я'
                    },

                    {
                        xtype: 'textfield',
                        id: 'surname',
                        width: 500,
                        name: 'surname',
                        fieldLabel: 'По-батькові',
                        labelWidth: 150,
                        emptyText: 'По-батькові'
                    },
                    {
                        xtype: 'datefield',
                        //maskRe: /[0-9.]/,
                        id: 'birthday',
                        width: 500,
                        fieldLabel: '&#1044;&#1072;&#1090;&#1072; &#1085;&#1072;&#1088;&#1086;&#1076;&#1078;&#1077;&#1085;&#1085;&#1103;',
                        labelWidth: 150
                    },
                    {
                        xtype: 'textareafield',
                        height: 85,
                        id: 'adress',
                        width: 500,
                        fieldLabel: '&#1044;&#1086;&#1084;&#1072;&#1096;&#1085;&#1103; &#1072;&#1076;&#1088;&#1077;&#1089;&#1072;',
                        labelWidth: 150

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
    xtype: 'combobox',
    id: 'filija',
    width: 500,
    fieldLabel: '&#1060;&#1110;&#1083;&#1110;&#1103;',
    labelWidth: 150,
    displayField: 'filija',
    store: 'filija_store',
    valueField: 'filija'
},

{
    xtype: 'combobox',
    id: 'year',
    width: 500,
    fieldLabel: '&#1056;&#1110;&#1082;',
    labelWidth: 150,
    displayField: 'tahun',
    store: 'storeThn',
    valueField: 'tahun'
},


/*NEW*/

                    {
                        xtype: 'textfield',
                        id: 'formuliar',
                        width: 500,
                        name: 'formuliar',
                        fieldLabel: '&#8470; &#1092;&#1086;&#1088;&#1084;&#1091;&#1083;&#1103;&#1088;&#1072;',
                        labelWidth: 150
                    },

                    {
                        xtype: 'textfield',
                        id: 'nationality',
                        width: 500,
                        name: 'nationality',
                        fieldLabel: '&#1053;&#1072;&#1094;&#1110;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1110;&#1089;&#1090;&#1100;',
                        labelWidth: 150
                    },
                    {
                        xtype: 'textfield',
                        id: 'phone',
                        width: 500,
                        name: 'phone',
                        fieldLabel: '&#8470; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;&#1091;',
                        labelWidth: 150
                    },
{
    xtype: 'combobox',
    id: 'osvita',
    width: 500,
    fieldLabel: '&#1054;&#1089;&#1074;&#1110;&#1090;&#1072;',
    labelWidth: 150,
    displayField: 'osvita',
    store: 'osvita_store',
    valueField: 'osvita'
},
{
    xtype: 'combobox',
    id: 'profesia',
    width: 500,
    fieldLabel: '&#1055;&#1088;&#1086;&#1092;&#1077;&#1089;&#1110;&#1103;',
    labelWidth: 150,
    displayField: 'profesia',
    store: 'profesia_store',
    valueField: 'profesia'
},

{
    xtype: 'combobox',
    id: 'viddil',
    width: 500,
    fieldLabel: '&#1042;&#1110;&#1076;&#1076;&#1110;&#1083;',
    labelWidth: 150,
    displayField: 'viddil',
    store: 'viddil_store',
    valueField: 'viddil'
},
/*NEW*/

                    
/*HIDDEN*/
                    {
                        xtype: 'datefield',
                        format : "d/m/Y H:i:s",
                        id: 'date',
                        editable: false,
                        hidden: true, 
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
                        xtype: 'textfield',
                        vtype: 'email',
                        id: 'email',
                        width: 500,
                        name: 'email',
                        hidden: true, 

                        fieldLabel: 'Електронна пошта',
                        labelWidth: 150,
                        emptyText: 'Електронна пошта'
                    },      
                    {
                        xtype: 'textfield',
                        id: 'workplace',
                        hidden: true,
                        //maskRe: /[0-9.]/,
                        width: 500,
                        fieldLabel: 'Місце навчання/роботи',
                        labelWidth: 150,
                        emptyText: 'Місце навчання/роботи'
                    }


                    /*HIDDEN*/


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
                        text: 'Додати читача',
                        iconCls: 'add',
                        id: 'add',
                        //disabled: true,
                        handler : function(){
                        AddReader()
                        }
                    }
                    /*,
                    {
                        xtype: 'button',
                        text: 'Додати читача та зареєструвати',
                        iconCls: 'add',
                        id: 'addandregister',
                        //disabled: true,
                        handler : function(){
                        AddReader();
                        AddVisitor();
                        
                        }
                    }*/
                ]
            }
        ];
        me.callParent(arguments);
    
    
    }
    
    
});

    function AddReader(){       




       var str_adress = Ext.getCmp("adress").getValue();

        var str_filija = Ext.getCmp("filija").getValue();

        var str_year =   Ext.getCmp("year").getValue();
     
        var str_formuliar = Ext.getCmp("formuliar").getValue();
        var str_nationality = Ext.getCmp("nationality").getValue();
        var str_phone = Ext.getCmp("phone").getValue();
        var str_osvita = Ext.getCmp("osvita").getValue();
        var str_rofesia = Ext.getCmp("profesia").getValue();
        var str_viddil = Ext.getCmp("viddil").getValue();

        var str_nomer = Ext.getCmp("reader_id").getValue();
        var str_date = Ext.getCmp("date").getValue();
        var str_1name = Ext.getCmp("1name").getValue();
        var str_2name = Ext.getCmp("2name").getValue();
        var str_surname = Ext.getCmp("surname").getValue();
        var str_email = Ext.getCmp("email").getValue();
        var str_birthday = Ext.getCmp("birthday").getValue();
        var str_idcard = Ext.getCmp("idcard").getValue();
        var str_workplace = Ext.getCmp("workplace").getValue();
        var str_other = Ext.getCmp("other").getValue();
        
        
    Ext.Ajax.request(
    {
        url: './php/insert_reader.php',
        params: {

                formuliar: str_formuliar,
                nationality: str_nationality,
                phone: str_phone,
                osvita: str_osvita,
                profesia: str_rofesia,
                viddil: str_viddil,
                        adress: str_adress,
                        filija: str_filija,
                        year: str_year,

                nomer: str_nomer,
                date: str_date,
                name1: str_1name,
                name2: str_2name,
                surname: str_surname,
                email: str_email,
                birthday: str_birthday,
                idcard: str_idcard,
                workplace: str_workplace,
                other: str_other
        },
        success: function()
        {


Ext.getCmp("adress").reset();
 Ext.getCmp("filija").reset();
 Ext.getCmp("year").reset();

            Ext.getCmp("formuliar").reset();
            Ext.getCmp("nationality").reset();
            Ext.getCmp("phone").reset();
            Ext.getCmp("osvita").reset();
            Ext.getCmp("profesia").reset();
            Ext.getCmp("viddil").reset();
            Ext.getCmp("date").reset();
            Ext.getCmp("1name").reset();
            Ext.getCmp("2name").reset();
            Ext.getCmp("surname").reset();
            Ext.getCmp("birthday").reset();
            Ext.getCmp("email").reset();
            Ext.getCmp("idcard").reset();
            Ext.getCmp("workplace").reset();
            Ext.getCmp("other").reset();
            var newIdValue = parseInt(Ext.getCmp("reader_id").getValue())+1
            Ext.getCmp("reader_id").setValue(newIdValue);
            //Ext.MessageBox.alert('Дані Збережені!', 'Тепер можете');
        },
        failure: function(response)
        {
            Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
        }
    })
    }
    
    
    function AddVisitor(){      
        var str_idcard = Ext.getCmp("idcard").getValue();
        var str_other = Ext.getCmp("other").getValue();
    
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

Ext.getCmp("adress").reset();
 Ext.getCmp("filija").reset();
 Ext.getCmp("year").reset();
 
            Ext.getCmp("formuliar").reset();
            Ext.getCmp("nationality").reset();
            Ext.getCmp("phone").reset();
            Ext.getCmp("osvita").reset();
            Ext.getCmp("profesia").reset();
            Ext.getCmp("viddil").reset();
            Ext.getCmp("date").reset();
            Ext.getCmp("1name").reset();
            Ext.getCmp("2name").reset();
            Ext.getCmp("surname").reset();
            Ext.getCmp("birthday").reset();
            Ext.getCmp("idcard").reset();
            Ext.getCmp("workplace").reset();
            Ext.getCmp("other").reset();
            var newIdValue = parseInt(Ext.getCmp("reader_id").getValue())+1
            Ext.getCmp("reader_id").setValue(newIdValue);
            
            },
            failure: function(response)
            {
                Ext.MessageBox.alert('Помилка', 'Неможливо доступитися до бази даних');
            }
        })

    }
        