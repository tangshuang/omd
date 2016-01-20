!function(fun){
    "use strict";
    function __() {
        return $;
    }

    // 当define被定义的情况下： AMD (RequireJS) || CMD (SeaJS)
    if(typeof define == 'function' && (define.amd != undefined || define.cmd != undefined)) {
        define(function(){
            return fun(__());
        });
    }
    // 当define没有被定义的情况下
    else {
        var ex = fun(__());
        // CommonJS (NodeJS)
        if (typeof module !== 'undefined' && typeof exports === 'object') {
            // 由于exports被定义，函数中的exports已经是全局变量，因此，这里就不进行任何操作
        }
        // Javascript，接口将直接被作为一个函数
        else {
            for(var i in ex) {
                window[i] = ex[i];
            }
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

    if(exports == undefined) var exports = {};
    // 接口开始
    /*
    exports.fillText = function(selector,text) {
        $(selector).fillText(text);
    };
    */
    // 接口结束
    return exports;
});