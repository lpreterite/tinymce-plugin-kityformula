tinymce.PluginManager.add('kityformula-editor', function(editor, url) {

    var baseURL = tinymce.PluginManager.urls['kityformula-editor']+'/kityFormula.html';

    function getOptions(editor){
      var node = editor.selection.getNode();
      var rng = editor.selection.getRng();
      if(rng.collapsed) return;
      var latex = node.dataset['latex'];
      if(!latex) return;
      return encodeURIComponent(latex);
    }

    editor.on('dblclick',function(e){
        openDialog(getOptions(editor));
    });

    var openDialog = function(param) {
        return editor.windowManager.openUrl({
            title: '插入公式',
            size: 'large',
            width: 785,
            height: 475,
            url:param?baseURL+"?c="+param:baseURL,
            buttons: [
                {
                    type: 'cancel',
                    text: 'Close'
                },
                {
                    type: 'custom',
                    text: 'Save',
                    name: 'save',
                    primary: true
                },
            ],
            onAction: function (api, details) {
                switch (details.name) {
                    case 'save':
                        api.sendMessage("save");
                        break;
                    default:
                        break;
                };
            }
        });
    };


    editor.ui.registry.addButton('kityformula-editor', {
        text: '公式',
        tooltip: '插入公式',
        onAction: function() {
            openDialog(getOptions(editor));
        }
    });
    editor.ui.registry.addMenuItem('kityformula-editor', {
        text: '公式',
        onAction: function() {
            openDialog(getOptions(editor));
        }
    });
    return {
        getMetadata: function() {
            return  {
                name: "公式",
                url: "http://hgcserver.gitee.io",
            };
        }
    };
});
