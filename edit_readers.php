<?php
?>
<!DOCTYPE html>

<!-- Auto Generated with Ext Designer -->
<!-- Modifications to this file will be overwritten. -->
<html>
<head>
<style type="text/css">
   BODY {
    background-image: url(resources/images/blue.jpg); /* ���� � �������� ����������� */
     
   }
  </style>
  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>����������� �������</title>
    <link rel="stylesheet" type="text/css" href="./ext-4.0.2a/resources/css/ext-all.css"/>
    <script type="text/javascript" src="./ext-4.0.2a/ext-all.js"></script>
	<link rel="stylesheet" type="text/css" href="/Css/toolbars.css"/>
	
	<link rel="stylesheet" type="text/css" href="./ext-4.0.2a/ux/gridfilters/css/GridFilters.css" />
    <link rel="stylesheet" type="text/css" href="./ext-4.0.2a/ux/gridfilters/css/RangeMenu.css" />
	
	<script type="text/javascript" src="/app/nav.js"></script>
    <script type="text/javascript">
	
	   
	   
	   Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Borsuko',

    stores: [
 'filija_store',
 'osvita_store',
 'profesia_store',
 'viddil_store'
    ],

    launch: function() {
        Ext.QuickTips.init();

        var New_object = Ext.create('Borsuko.view.edit_readers', {
            renderTo: Ext.getBody()
        });
        New_object.show();
    }
});

	</script>
</head>
<body></body>
</html>