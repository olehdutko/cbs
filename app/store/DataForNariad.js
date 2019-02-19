/*
 * File: app/store/DataForNariad.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.store.DataForNariad', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'DataForNariad',
            proxy: {
                type: 'ajax',
                url: './php/nariad_total.php?action=showData&objid=170',
                reader: {
                    type: 'json',
                    root: 'results'
                }
            },
            fields: [
                {
                    name: 'Type'
                },
                {
                    type: 'int',
					name: 'NariadID'
                },
                {
                    name: 'P_kontragent'
                },
                {
                    type: 'int',
					name: 'ModelId'
                },
                {
                    name: 'Model'
                },
                {
                    name: 'Description'
                },
                {
                    name: 'Vendor'
                },
                {
                    name: 'count'
                },
                {
                    name: 'Kilkist'
                },
                {
                    name: 'OdVym'
                },
                {
                    name: 'Price'
                },
                {
                    name: 'Valiuta'
                },
                {
                    name: 'Suma'
                },
                {
                    name: 'Date'
                },
                {
                    name: 'euro'
                },
                {
                    name: 'dollar'
                },
                {
                    name: 'grivna'
                }
            ]
        }, cfg)]);
    }
});