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
}(['jquery'],function(){
    // your code begin
    $.fn.fillText = function(text) {
        this.each(function(){
            $(this).text(text);
        });
    };

    // exports here
    var ex = {};
    ex.fillText = function(selector,text) {
        $(selector).fillText(text);
    };
    return ex;
});