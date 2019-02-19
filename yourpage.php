<?php
  require("common.php"); 
  require_authentication();
?>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Your Page</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/ext/resources/css/ext-all.css" />
    <link rel="stylesheet" type="text/css" href="editor.css" />
    <!-- Calls to ExtJS library files from Cachefly. -->
    <script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
    <script type="text/javascript" src="/ext/ext-all.js"></script>
    <script type="text/javascript" src="/md5/md5.js"></script>
    <script type="text/javascript" src="editor.js"></script>
    <script type="text/javascript">
      function changeSettings(){
        var settingsDialog = new Ext.Window({
          title: 'Settings',
          id: 'settingsdialog',
          border: false,
          height: 140,
          layout: 'fit',
          resizable: false,
          width: 300,
          items: [{
            xtype: 'form',
            frame: true,
            border: false,
            labelWidth: 75,
            items: [{
              xtype: 'textfield',
              id: 'input_username',
              fieldLabel: 'User name',
              allowBlank: false,
              width: 190
            },{
              xtype: 'textfield',
              id: 'input_password',
              fieldLabel: 'Password',
              inputType: 'password',
              allowBlank: false,
              width: 190
            }]
          }],
            buttons: [{
              text: 'Submit',
              id: 'save_config',
              handler: function(){
                if(Ext.getCmp('input_username').isValid() && Ext.getCmp('input_password').isValid()){
                  Ext.Ajax.request({
                    url: 'settings.php',
                    params: {
                      username: Ext.getCmp('input_username').getValue(),
                      password: hex_md5(Ext.getCmp('input_password').getValue())
                    },
                    success: function(response, opts) {
                      var obj = Ext.decode(response.responseText);
                      if (obj.success) {
                        Ext.MessageBox.show({
                          title: 'Your Page',
                          msg: 'Your changes have been saved',
                          buttons: Ext.MessageBox.OK,
                          icon: Ext.MessageBox.INFO
                        });
                      }else{
                        Ext.MessageBox.show({
                          title: 'Your Page',
                          msg: 'Unable to save changes',
                          buttons: Ext.MessageBox.OK,
                          icon: Ext.MessageBox.ERROR
                        });
                      }
                    },
                    failure: function(response, opts) {
                    }
                  });
                } else {
                  Ext.MessageBox.show({
                    title: 'Your Page',
                    msg: 'Please enter user name and password',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                  });
                }
              }
            },{
              text: 'Close',
              handler: function(){
                settingsDialog.close();
              }
            }]
        });
        settingsDialog.show();
      }
      Ext.onReady(function(){
        Ext.QuickTips.init();
        var contentPanel = new Ext.Panel({
          frame: true,
          layout: 'fit',
          items: [{
            xtype: 'textarea'
          }],
          tbar: [{
            xtype: 'button',
            text: 'Settings',
            tooltip: 'Change Settings',
            handler: function(){
              changeSettings();
            }
          },{
            xtype: 'button',
            text: 'Logout',
            tooltip: 'Logout',
            handler: function(){
              window.location = 'index.php';
            }
          }]
        });
        var viewport = new Ext.Viewport({
          layout: 'fit',
          items: [contentPanel]
        });
      });
    </script>
  </head>
  <body>
  </body>
</html>