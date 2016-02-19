define(function(require){
    require('jquery');
    var $plugin = require('plugin');

    $('#test1').fillText('by jquery plugin in seajs');
    $plugin.fillText('#test2','by exports of seajs');
});