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
    <title>&#1054;&#1087;&#1077;&#1088;&#1072;&#1094;&#1110;&#1111; &#1085;&#1072;&#1076; &#1082;&#1085;&#1080;&#1075;&#1072;&#1084;&#1080;</title>
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
		'book_theme_store',
'prychyna_spysannia_store',
		'format_store'

    ],

    launch: function() {
        Ext.QuickTips.init();

        var New_object = Ext.create('Borsuko.view.book_operations', {
            renderTo: Ext.getBody()
        });
        New_object.show();
    }
});

	</script>
</head>
<body></body>
</html>