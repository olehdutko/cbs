<?php
  require("common.php"); 
  require_authentication();
?>
<!DOCTYPE html>

<!-- Auto Generated with Ext Designer -->
<!-- Modifications to this file will be overwritten. -->
<html>
<head>
<style type="text/css">
   BODY {
    background-image: url(resources/images/blue.jpg); /* Путь к фоновому изображению */
     
   }
  </style>
  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Перегляд пропозиції</title>
    <link rel="stylesheet" type="text/css" href="./ext-4.0.2a/resources/css/ext-all.css"/>
    <script type="text/javascript" src="./ext-4.0.2a/ext-all.js"></script>
	<link rel="stylesheet" type="text/css" href="/Css/toolbars.css"/>
	<script type="text/javascript" src="/app/nav.js"></script>
    <script type="text/javascript">
	
	   
	   
	   Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Borsuko',

    stores: [
        'ObjThemesStore',
        'store_users',
        'vykonavciStore',
        'ObjectStore',
        'KontragentyStore',
        'store_all_kontragenty',
        'PryznachenniaStore',
        'store_OdVymiru',
        'CategoryStore',
        'SubCategoryStore',
        'AllObjectsStore',
        'Active_Store',
        'SkladStore',
        'store_fond',
        'Montazh_Store',
        'NariadView_Open',
       
        'KursStore',
           
       
       
        'ValiutaStore'
    ],

    launch: function() {
        Ext.QuickTips.init();

       var totals = Ext.create('Borsuko.view.totals', {
            renderTo: Ext.getBody()
        });
        totals.show();
    }
});

	</script>
</head>
<body></body>
</html>