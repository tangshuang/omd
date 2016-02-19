/**
 * OMD 1.1.0
 */

!function(dependencies,window,factory){
    // amd || cmd
    if(typeof define == 'function') {
        // amd requirejs
        if(define.amd != undefined) {
            define(dependencies,function() {
                return factory(window,require);
            });
        }
        // cmd seajs
        else if(define.cmd != undefined) {
            define(dependencies,function(require) {
                return factory(window,require);
            });
        }
    }
    else {
        var ex = factory(window);
        // CommonJS NodeJS
        if(typeof module !== 'undefined' && typeof exports === 'object') {
            // 由于exports被定义，函数中的exports已经是全局变量，因此，这里就不进行任何操作
            module.exports = ex;
        }
        // Javascript: exports as window functions
        else {
            for(var i in ex) {
                window[i] = ex[i];
            }
        }
    }
}(['jquery'],window,function(window,require){
    /*
    if(typeof window.$ === 'undefined')
        throw new Error("jQuery required");

    var $ = (window.$ != undefined ? window.$ : null);
    */

    // your code here

});