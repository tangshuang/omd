/**
 * Name: OMD
 * Description: javascript run in amd cmd and node
 * Version: 1.3.0
 * Author: tison <mail@tangshuang.net>
 * Source code: https://github.com/tangshuang/omd
 */

(function(factory){
    "use strict";

    // change to your module name
    var NAME = 'main';
    
    if(typeof define == 'function' && (define.cmd || define.amd)) { // amd & cmd
        define(function(require){
            var requires = {
                /**
                 * dependences: 
                 * 1. need to fill requires
                 * 2. use require, moudule name should be defined before
                 * 3. relative path is not allowed in cmd & amd mode
                 */
                'mymodule' : require('mymodule')
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
        this[NAME] = factory(function(key){
            return this[key];
        }.bind(this));
    }
}).call(this || (typeof window !== 'undefined' ? window : global),function(require){
    "use strict";

    var House = require('mymodule'); // we can use require, even through in no-module environment
    var house = new House();

    console.log('Owner: ' + house.owner);
    console.log('Prirce: ' + house.price);
    console.log('City: ' + house.city);

    house.move('Tokoy');
    console.log('Move to: ' + house.city);

});
