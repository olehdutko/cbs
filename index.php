
<html>
  <head>
   <style type="text/css">
   BODY {
    background-image: url(resources/images/nod32-antivirus_1920x1200_293-wide.jpg); /* Путь к фоновому изображению */
    background-color: #CED9DF; /* Цвет фона */
	
  background-repeat: no-repeat;
  background-repeat: no-repeat;
   }
  </style>
  
     <title>Авторизація</title>
     <link rel="stylesheet" type="text/css" href="/ext-4.0.2a/resources/css/ext-all.css" />
     <!-- Calls to ExtJS library files from Cachefly. -->
     
     <script type="text/javascript" src="/ext-4.0.2a/ext-all.js"></script>
     <script type="text/javascript" src="/md5/md5.js"></script>
     <script type="text/javascript">
       
		Ext.onReady(function(){
    var formLogin = new Ext.FormPanel({
        frame: true,
        border: false,
		draggable: false,
        //labelWidth: 50,
		//bodyStyle: "background-image:url(resources/images/FlowersOnDesktop.com_000004.jpg) !important",  
		buttonAlign: 'center',
        url: '/php/authenticate.php', method: 'POST',
        id: 'frmLogin',
        items: [{
            xtype: 'textfield',
			labelWidth: 50,
            fieldLabel: 'Логін',
            id:'username',
            name: 'username',
            allowBlank: false
        }, {
            xtype: 'textfield',
			labelWidth: 50,
            fieldLabel: 'Пароль',
            id:'password',
            name: 'password',
            allowBlank: false,
            inputType: 'password'
        },
		{
             xtype: 'hidden',
             id: 'challenge',
             value: "<?php echo $challenge; ?>",
             submitValue: false
           }],
        buttons: [
            {
             text: 'Залогуватися',
             handler: function(){
			 
               if(Ext.getCmp('username').getValue() !== '' && Ext.getCmp('password').getValue() !== ''){
				 
			
				formLogin.getForm().submit({
                   url: 'authenticate.php',
                   method: 'POST',
                   params: {
                     response: hex_md5(Ext.getCmp('challenge').getValue()+hex_md5(Ext.getCmp('password').getValue()))
                   },
                   success: function(){
                     window.location = 'ObjView.php';
                   },
                   failure: function(form, action){
                     Ext.MessageBox.show({
                       title: 'Помилка', 
                       msg: action.result.message,
                       buttons: Ext.Msg.OK,
                       icon: Ext.MessageBox.ERROR
                     });
                   }
                 });
               }else{
                 Ext.MessageBox.show({
                   title: 'Помилка', 
                   msg: 'Введіть Логін та пароль',
                   buttons: Ext.Msg.OK,
                   icon: Ext.MessageBox.ERROR
                 });
               }
             }
           },
            { text: 'Очистити', handler: function() {
                    formLogin.getForm().reset();
                }
            }
        ],
        keys: [
            { key: [Ext.EventObject.ENTER], handler: function() {
                    Ext.Msg.alert("Alert","Enter Key Event !");
                }
            }
        ]
    });

    var winLogin = new Ext.Window({
        title: 'Аворизація користувачів',
           layout: 'fit',
           closable: false,
           resizable: false,
           draggable: false,
           border: false,
           height: 125,
           width: 300,
		items: [formLogin]
    });

    winLogin.show();
});
	   
	   
     </script>
   </head>
   <body>
   </body>
</html>