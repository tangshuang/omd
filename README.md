# omd
兼容CommonJS amd (RequireJS) &amp; cmd (SeaJS)的插件定义方法

plugin.omd.js中代码为最终代码，有demo jquery、demo zepto、seajs和requirejs的演示代码。nodejs尚未测试。

用法：

下载plugin.omd.js，打开它，里面已经解释了哪个地方应该放什么东西。

一般的插件都会提供完整版和min版，打开完整版，把真正的代码插件拷贝到plugin.omd.js中的指定位置。一些插件已经做了amd兼容，因此，你要进行辨识。
如果你不是很清楚，也可以提交issue，让我帮你辨识。

----------------------------------------------------------

老版本的代码如下：

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
