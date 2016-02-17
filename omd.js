!function(factory){
    "use strict";
    
    var spacename = 'yourfilename'; // 改为文件名（去掉后缀），作为本模块的唯一标识
    
    if(typeof $ === 'undefined') 
        var $ = {};
    
    // 当define被定义的情况下 RequireJS SeaJS
    if(typeof define == 'function' && (define.amd != undefined || define.cmd != undefined)) {
        define(function() {
            return factory($);
        });
        /* 如果在写一个requrejs的模块，可以考虑下面这种方式，这样可以提前把jquery加载进来，防止jquery无法使用
        define(spacename,['jquery'],function(){
            return factory($);
        });
        */
    }
    // 当define没有被定义的情况下
    else {
        var ex = factory($);
        // CommonJS NodeJS
        if(typeof module !== 'undefined' && typeof exports === 'object') {
            // 由于exports被定义，函数中的exports已经是全局变量，因此，这里就不进行任何操作
            module.exports = ex;
        }
        // 原生Javascript，接口将被作为一个window的子对象
        else {
            window[spacename] = ex;
        }
    }
}(function($){
    "use strict";

    // 真正的插件代码都在这里
    /*
    $.fn.fillText = function(text) {
        this.each(function(){
            $(this).text(text);
        });
    };
    */
    // 插件代码结束

    var ex = {};
    // 接口开始
    /*
    ex.fillText = function(selector,text) {
        $(selector).fillText(text);
    };
    */
    // 接口结束
    return ex;
});
