/**
 * Name: OMD
 * Description: javascript run in amd cmd and node
 * Version: 1.2.0
 * Author: tison <mail@tangshuang.net>
 * Source code: https://github.com/tangshuang/omd
 */

!function(name,factory){
    "use strict";

    if(typeof define == 'function' && (define.cmd || define.amd)) { // amd & cmd
        define(function(require){
            // --------------- dependencies you should write it by yourself
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
        // --------------- dependencies copy from up
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
}('main',function(_require_){ // change 'main' to the name of this component
    
    // your code here
    // now you can use _require_ to require your dependencies written by yourself
    // for example: 
    /** dependencies
    var _require_ = function(name) {
        var requires = {
            'my-plugin' : require('./libs/my-plugin')
        };
        return requires[name];
    }
    **/
    /** use
    var myPlugin = _require_('my-plugin');
    **/
    // remember: if you dont need something, dont add it into dependencies
    
});
