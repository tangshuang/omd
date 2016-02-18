!function(factory){
    "use strict";

    // amd & cmd
    if(typeof define == 'function' && (define.amd != undefined || define.cmd != undefined)) {
        define(function() {
            return factory($);
        });
    }
    else {
        var ex = factory($);
        // CommonJS NodeJS
        if(typeof module !== 'undefined' && typeof exports === 'object') {
            module.exports = ex;
        }
        // without module
        else {
            for(var i in ex) {
                window[i] = ex[i];
            }
        }
    }
}(function($){
    "use strict";

    /*
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
    */

});
