
Ext.onReady(function() {

    var someHandler = function(evt,t,o,myArg1,myArg2,myArg3) {
        //do stuff
        alert(11111);
}
Ext.select('.notice-type1').addListener('click', someHandler.createDelegate(this, [4,'pizza',11], true));
Ext.select('.notice-type2').addListener('click', someHandler.createDelegate(this, [7,'stuff',12], true));
    
    
    
});