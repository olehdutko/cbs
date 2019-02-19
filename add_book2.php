<?php
  require("common.php"); 
  
?>
<!DOCTYPE html>

<!-- Auto Generated with Ext Designer -->
<!-- Modifications to this file will be overwritten. -->
<html>
<head>










        <style>
	        h1 a:link, h1 a:visited {
	            color: #046BCA;
	        }

	        h1 a:hover, h1 a:focus, h1 a:active {
	            color: #1C417C;
	        }

	        div#header {
	            height: 65px;
	            width: 1090px;
	            padding: 25px 0 10px 0;
	            margin: 0 50px;
	        }
	        div#header h1 {
	            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	            font-size: 24px;
	            font-weight: 600;
	        }
	        form#styleswitcher {
	            background-color: #f3f3f3;
	            background-color: rgba(243,243,243,.333);
	            border: 1px solid #ddd;
	            border-color: rgba(221,221,221,.333);
	            border-radius:         8px;
	            -moz-border-radius:    8px;
	            -ms-border-radius:     8px;
	            -o-border-radius:      8px;
	            -webkit-border-radius: 8px;

	            float: right;
	            padding: 8px 10px;

	            width: auto;
	        }
	        form#styleswitcher select {
	            font-size: 13px;
	            line-height: 13px;
	        }
	        div#header h1 span {
	            color: inherit;
	            font-family: Helvetica, Arial, sans-serif;
	            font-size: 13px;
	            font-weight: normal;
	            line-height: 30px;
	            padding-left: 25px;
	        }
        </style>





  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>��������� ����</title>

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
        'book_theme_store',
        'format_store',
        'filija_store'

    ],

    launch: function() {
        Ext.QuickTips.init();
		
		var add_book = Ext.create('Borsuko.view.add_book2', {
            renderTo: Ext.getBody()
        });
        add_book2.show();
		
    }
});

	</script>
</head>
<body></body>
</html>