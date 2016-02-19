/**
 * OMD 1.1.2
 */

!function(dependencies,factory){
    // amd || cmd
    if(typeof define == 'function' && (define.cmd || define.amd)) {
        define(dependencies,function() {
            return factory();
        });
    }
    else {
        var ex = factory();
        // CommonJS NodeJS
        if(typeof module !== 'undefined' && typeof exports === 'object') {
            module.exports = ex;
        }
        // Javascript: exports as window functions
        else {
            for(var i in ex) {
                window[i] = ex[i];
            }
        }
    }
}(['jquery'],function(){
    // your code begin
});