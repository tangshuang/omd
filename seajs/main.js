define(function(require){
    require('jquery');
    var $plugin = require('plugin');

    $('#test1').fillText('插件模式调用');
    $plugin.fillText('#test2','接口模式调用');
});