define(['jquery'],function($){ // depend on jquery
  require(['plugin'],function($plugin){ // depend on plugin
    $('#test1').fillText('by jquery plugin in requirejs');
    $plugin.fillText('#test2','by exports of requirejs');
  });
});
