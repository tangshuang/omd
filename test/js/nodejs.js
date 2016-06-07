/**
 * test for node, exec `node nodejs.js` in cmd
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
            return factory(require);
        });
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') { // nodejs
        module.exports = factory(require);
    }
    else { // none
        window['main'] = factory(function(name){}); // change 'main' to the name of this component
    }
}(function(_require_){ 

    var mod = _require_('./module');
    mod.log();

});
