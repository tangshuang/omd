/**
 * Name: OMD
 * Description: javascript run in amd cmd and node
 * Version: 1.2.0
 * Author: tison <mail@tangshuang.net>
 * Source code: https://github.com/tangshuang/omd
 */

!function(factory){
    "use strict";

    if(typeof define == 'function' && (define.cmd || define.amd)) { // amd & cmd
        define(function(require){
            // --------------- dependencies you should write it by yourself
            var _require_ = function(name) {
                var requires = {};
                return requires[name];
            }
            // ------------------ remember: if you dont need something, dont add it into dependencies
            return factory(_require_);
        });
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') { // nodejs
        module.exports = factory(require);
    }
    else { // none
        window['main'] = factory(function(name){}); // change 'main' to the name of this component
    }
}(function(_require_){ 

    return {
    	alert : function() {
    		alert('OK');
    	},
    	log : function () {
    		console.log('OK');
    	}
    };

});
