# omd

A way to make your javascript compatible in node, amd mode and cmd mode.

## intro

When you are writing a javascript module, for example a jquery plugin, you should think about the compatibility of your script in defferent environment.

When you are writing a node module, have you ever think about using it in frontend page? Developer who use your module, may use this js file as a file link by `src`. Or some other developers may use it as a module in cmd mode such as seajs.

Do not be afraid, follow the method by OMD.

## how it works?

Firstly, we should find out the ways a javascript file may be used.

* as a node module on server side
* as a module of requirejs or seajs on front-end
* not as a module, just link into a html page

In fact, as a module, `define` comes to be a function, so we can use `typeof define == 'function'` to judge module environment.

To judge different module environment, we can use `define.cmd` or `define.amd` or not defined. For example, if define.amd is defined, this may be used by requirejs, if define.cmd and define.amd are both not defined, this may be used by node.

On the other hand, how to get the compatibility? use define and return.

In module environment, the structure is always make sense:

```
define(function(){
	return exports;
});
```

No matter amd or cmd or node it is. So this structure is the base structure we need to extend.

Diffrent environment use different parts to return exports, so OMD comes out to be like mode:

```
if(module env) {
	if(amd || cmd) {
		define(function(require){
			return (what we need to construct)
		})
	}
	else if(node) {
		module.exports = (what we need to construct)
	}
}
else if(window env) {
	window[module name] = (what we need to construct)
}
```

Now how to construct what we want to exports? Use `function() {} ()` structure, for example:

```
(function(factory){
	exports mode like before (use factory as a function, i.e. return factory())
})(function(){
	your code
});
```

This is the core idea of OMD. Read the source code, and understand it.

## cases

Create a jquery plugin:

```
(function(factory){
    "use strict";

    var NAME = 'my-plugin'; // choose a plugin name as you like, but remenber to use this module name
    
    if(typeof define == 'function' && (define.cmd || define.amd)) {
        define(function(require){
            var requires = {
                'jquery' : require('jquery') // jquery link should be defined before
            };
            var _require_ = function(key) {
                return requires[key];
            }
            return factory(_require_);
        });
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = factory(require);
    }
    else {
        this[NAME] = factory(function(key){
            return this[key];
        }.bind(this));
    }
}).call(this || (typeof window !== 'undefined' ? window : global),function(require){
    "use strict";
    
    require('jquery');

    $.fn.render = function(color) {
    	this.each(function(){
    		$(this).css('color',color);
    	});
    }

    return {
    	render : function(element,color) {
    		$(element).css('color',color);
    	}
    };
});
```

How to use this new module?

1. window env

```
<script src="./jquery.js"></script>
<script src="./my-plugin.js"></script>
<script>
	$('.test').render('#000');
</script>
```

2. require

```
var Plugin = require('./my-plugin'); // path mode should be allowed
Plugin.render('.test','#000');

$('.test').render('#000'); // this can be used too
```

**notice**: jquery can not be used in node.

Take a notice to demo directory to test more cases. 

**notice**: demo/node-test.js should be run by node like `node node-test.js`.



If you have any question, just request a issue.