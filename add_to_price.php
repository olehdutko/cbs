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
    <title>Додавання в Прайс</title>
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
        
		'store_OdVymiru',
		'TypObladnannia_Store',
		'ObjThemesStore',
        'CategoryStore',
        'SubCategoryStore',
        'ValiutaStore'
    ],

    launch: function() {
        Ext.QuickTips.init();

        var add_to_price = Ext.create('Borsuko.view.add_to_price', {
            renderTo: Ext.getBody()
        });
        add_to_price.show();
    }
});

	</script>
</head>
<body></body>
</html>