/*
 * File: app/store/ClosedNarahuvannia_Store.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.store.ClosedNarahuvannia_Store', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'ClosedNarahuvannia_Store',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: './php/view_Narahuvannia_close.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'Type'
                },
                {
                    type: 'int',
					name: 'ID'
                },
                {
                    name: 'Date'
                },
                {
                    name: 'Pryznachennia'
                },
                {
                    name: 'IsKontrAgent'
                },
                {
                    name: 'Zalyshok'
                },
                {
                    name: 'Suma'
                },
                {
                    name: 'Prymitky'
                }
            ]
        }, cfg)]);
    }
});