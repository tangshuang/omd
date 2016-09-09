/**
 * Name: OMD
 * Description: javascript run in amd cmd and node
 * Version: 1.3.0
 * Author: tison <mail@tangshuang.net>
 * Source code: https://github.com/tangshuang/omd
 */

"use strict";

!function(factory){
    // config your module name
    var NAME = 'myModule';
    
    if(typeof define == 'function' && (define.cmd || define.amd)) { // amd & cmd
        define(function(require){
            var requires = {
                /**
                 * dependences: 
                 * 1. need to fill requires
                 * 2. use require, moudule name should be defined before
                 * 3. relative path is not allowed in cmd & amd mode
                 */
                'jquery' : require('jquery')
            };
            var _require_ = function(key) {
                return requires[key];
            }
            return factory(_require_);
        });
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') { // nodejs
        module.exports = factory(require); // in node, require can be used everywhere generally
    }
    else { // none module
        window[NAME] = factory(function(key){}); // change 'main' to the name of this component, because we may use _require_ in following function, so we should give a nothing-to-do function to fix
    }
}(function(require){
    
    require('jquery');

    // constructor
    $(document).ready(function() {
        alert('jquery is required.');
    });

    // exports
    return {
        alert : function() {
            alert('OK');
        },
        log : function () {
            console.log('OK');
        }
    };

});
