define(['jquery'],function($){
  // 由于plugin依赖于jquery，所以不得不按照这样的格式进行使用
  require(['plugin'],function($plugin){
    $('#test1').fillText('插件模式调用');
    $plugin.fillText('#test2','接口模式调用');
  });
});
