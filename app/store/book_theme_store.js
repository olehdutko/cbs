/*
 * File: app/store/book_theme_store.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.store.book_theme_store', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
			remoteSort: true,
            storeId: 'book_theme_store',
            proxy: {
                type: 'ajax',
                url: './php/book_themes.php',
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'book_theme_name'
                },
                {
                    name: 'id' , 
					type: 'int'
                }
            ],
			sortInfo:{field:'id', direction:'Desc'}
        }, cfg)]);
    }
});