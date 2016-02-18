!function(spacename,dependencies,window,factory){
    // 当define被定义的情况下
    if(typeof define == 'function') {
        if(define.amd != undefined) {
            define(dependencies,function() {
                return factory(window,require);
            });
        }
        else if(define.cmd != undefined) {
            define(dependencies,function(require) {
                return factory(window,require);
            });
        }
    }
    // 当define没有被定义的情况下
    else {
        var ex = factory(window);
        // CommonJS NodeJS
        if(typeof module !== 'undefined' && typeof exports === 'object') {
            // 由于exports被定义，函数中的exports已经是全局变量，因此，这里就不进行任何操作
            module.exports = ex;
        }
        // 原生Javascript，接口将被作为一个window的子对象
        else {
            window[spacename] = ex;
        }
    }
}('spaceName',['jquery'],window,function(window,require){
    var $ = (window.$ != undefined ? window.$ : null);
    // var $ = require('jquery');

    /**
     * 如何上手呢？
     * 1. 修改上面的'spaceName'为当前文件的名称（不要后缀）【在非模块化环境中使用】
     * 2. 修改上面['jquery']的内容为依赖包列表【在模块化环境中可能使用】
     * 3. window就是window，有你需要的window属性
     * 4. 加载$，如果你的项目中依赖了jQuery或Zepto，则选择上面注释中的一种，使$可用
     * 5. 模块加载，像requirejs或seajs一样，使用require
     * 6. 接口，通过return返回接口
     */
     
});
