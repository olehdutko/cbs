/*
 * File: app/store/store_users.js
 * Date: Mon Sep 05 2011 19:04:54 GMT+0300 (FLE Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Borsuko.store.store_users', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
			pageSize: 20,
            storeId: 'store_users',
            proxy: {
                type: 'ajax',
                url: './php/view_users.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    type: 'int',
					name: 'id'
                },
                {
                    name: 'login'
                },
                {
                    name: 'password'
                },
                {
                    name: 'role'
                },
                {
                    name: 'Prymitka'
                }
            ]
        }, cfg)]);
    }
});