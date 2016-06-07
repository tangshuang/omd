!function(name,factory){
	"use strict";

    if(typeof define == 'function' && (define.cmd || define.amd)) { // amd & cmd
        define(function(require){
            // --------------- dependencies
            var _require_ = function(name) {
                var requires = {
                    'jquery' : require('jquery')
                };
                return requires[name];
            }
            // ------------------
            return factory(_require_);
        });
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') { // nodejs
        // --------------- dependencies
        var _require_ = function(name) {
            var requires = {
                'jquery' : require('jquery')
            };
            return requires[name];
        }
        // ----------------
        module.exports = factory(_require_);
    }
    else { // none
        this[name] = factory();
    }
}('main',function(_require_){

    _require_('jquery');

    $('#test1').text('by  seajs');
});