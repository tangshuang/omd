define('main',function(require){
	require('jquery');
	var $plugin = require('plugin');
	
	$('#test').fillText('test');
	$plugin.export1();
	$plugin.export2('test text');
});
