/*
 * File: app/store/store_OdVymiru.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.store.store_OdVymiru', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
			remoteSort: true,
            storeId: 'store_OdVymiru',
            proxy: {
                type: 'ajax',
                url: './php/OdVymiru_admin.php?action=showData',
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'OdVymiru'
                },
                {
                    name: 'ID' , type: 'int'
                }
            ],
			sortInfo:{field:'ID', direction:'Desc'}
        }, cfg)]);
    }
});