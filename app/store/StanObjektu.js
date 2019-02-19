/*
 * File: app/store/StanObjektu.js
 * Date: Tue Sep 13 2011 13:29:14 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.store.StanObjektu', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'StanObjektu',
            proxy: {
                type: 'ajax',
                url: './Json/StanObjektu.json',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'name'
                },
                {
                    name: 'abbr'
                }
            ]
        }, cfg)]);
    }
});