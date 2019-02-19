Ext.grid.EditorPasteCopyGridPanel = Ext.extend(Ext.grid.EditorGridPanel, {	
	
	flashPath:'_clipboard.swf',
	 /**
     * @cfg {Number} clicksToEdit
     * <p>The number of clicks on a cell required to display the cell's editor (defaults to 2).</p>
     * <p>Setting this option to 'auto' means that mousedown <i>on the selected cell</i> starts
     * editing that cell.</p>
     */
 	clicksToEdit:2,
 	
 	initComponent : function(){
 		Ext.grid.EditorPasteCopyGridPanel.superclass.initComponent.call(this);
 		/*make sure that selection modal is ExcelCellSelectionModel*/
 		this.selModel = new Ext.grid.ExcelCellSelectionModel();
 		this.addListener('render',this.addKeyMap, this);
 	}, 	
 	addKeyMap:function(){
    	var thisGrid = this;
    	
    	Ext.DomQuery.selectNode('div[class*=x-grid3-scroller]', this.getEl().dom).style.overflowX='hidden';
	 	// map multiple keys to multiple actions by strings and array of codes	 	
	 	new Ext.KeyMap(Ext.DomQuery.selectNode('div[class*=x-grid3-scroller]', this.getEl().dom).id, [{
	        key: "c",
	        ctrl:true,
	        fn: function(){									
				thisGrid.copyToClipBoard(thisGrid.getSelectionModel().getSelectedCellRange());
			}
	    },{
	    	key: "v",
	        ctrl:true,
	        fn: function(){ 				        	
	        	 thisGrid.pasteFromClipBoard();
			}
	    }]);
	 },  
	copyToClipBoard:function(rows){
    	this.collectGridData(rows);
    	if( window.clipboardData && clipboardData.setData )	{
			clipboardData.setData("text", this.tsvData);
		} else {
			var flashcopier = 'flashcopier';
			if(!document.getElementById(flashcopier)) {
			  var divholder = document.createElement('div');
			  divholder.id 	= flashcopier;
			  document.body.appendChild(divholder);
			}
			document.getElementById(flashcopier).innerHTML = '';		
			document.getElementById(flashcopier).innerHTML = '<embed src="'+this.flashPath+'" FlashVars="clipboard='+encodeURIComponent(this.tsvData)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
		}
    },
    collectGridData:function(cr){        	
        var row1 		= cr[0], col1 = cr[1], row2 = cr[2], col2=cr[3];
        this.tsvData 	="";
        var rowTsv		="";
        for(var r = row1; r<= row2; r++){
        	if(this.tsvData!=""){
        	  	this.tsvData +="\n";
        	}
        	rowTsv	= "";
        	for(var c = col1; c<= col2; c++){
        		if(rowTsv!=""){
	        	  	rowTsv+="\t";
	        	}
        	  	rowTsv += this.store.getAt(r).get( this.store.fields.itemAt(c).name);
        	}
        	this.tsvData +=rowTsv;
    	}
    	return this.tsvData;        
	},	
	pasteFromClipBoard:function(){        
    	if(!this.hiddentextarea){
    		this.hiddentextarea = new Ext.Element(document.createElement('textarea'));        	
    		this.hiddentextarea.setStyle('position','absolute');
    		this.hiddentextarea.setStyle('top','-1000');
    		this.hiddentextarea.addListener('keyup', this.updateGridData, this);
    		Ext.get(document.body).appendChild(this.hiddentextarea.dom);
    	}
		this.hiddentextarea.dom.value =""; 
    	this.hiddentextarea.focus();
		       		
    },	
    updateGridData:function(){
    	var Record 			= Ext.data.Record.create(this.store.fields.items);        	
    	var tsvData 		= this.hiddentextarea.getValue();        
    	tsvData				= tsvData.split("\n");
    	var column			= [];
    	var cr 				= this.getSelectionModel().getSelectedCellRange(); 
   		var nextIndex 		= cr[0];       		
   		var gridTotalRows	= this.store.getCount();
    	for(var rowIndex = 0; rowIndex < tsvData.length; rowIndex++ ){
    		if(tsvData[rowIndex].trim()==""){
    			continue;
    		}
    		columns	= tsvData[rowIndex].split("\t");
			if(nextIndex > gridTotalRows-1){
    			var NewRecord 	= new Record({});        			
				this.stopEditing();        			
				this.store.insert(nextIndex, NewRecord);						
    		}
			pasteColumnIndex = cr[1];				        		
			for(var columnIndex=0; columnIndex < columns.length; columnIndex++ ){
				this.store.getAt(nextIndex).set( this.store.fields.itemAt(pasteColumnIndex).name, columns[columnIndex] );
				pasteColumnIndex++;
			}
			nextIndex++;
    	}
    	this.hiddentextarea.blur();
    }
	
});
Ext.reg('editorPasteCopyGrid', Ext.grid.EditorPasteCopyGridPanel);