# omd
兼容CommonJS amd (RequireJS) &amp; cmd (SeaJS)的插件定义方法

请看plugin.js里面的代码，核心代码为：

```
;(function(){
    function _init() {
        // ……插件功能部分代码……，很多国外插件都加入了amd的兼容，因此，要注意一下
        (function($) {
            // jQuery代码部分，如果是原生的JS，则不需要这个闭包来进行jquery处理，但是如果用jquery的话，就这样
            //$.fn.fillText = function(text) {}
        })(jQuery);
    }
    
    function _export1(param1,param2) {}
    function _export2(param1,param2) {}
    
    // CommonJS
    if (typeof module !== 'undefined' && typeof exports === 'object') {
    	_init();
		  exports.export1 = _export1;
		  exports.export2 = _export2;
    }
    // amd & cmd
    else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function() {
        	_init();
        	var exports = {};
        	exports.export1 = _export1;
			    exports.export2 = _export2;
        	return exports;
        });
    }
    // javascript
    else {
    	_init();
    	this.export1 = _export1;
		  this.export2 = _export2;
    }
}).call(function() {
    return this || (typeof window !== 'undefined' ? window : global);
});
```
