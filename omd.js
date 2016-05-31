/**
 * OMD 1.1.2
 */

!function(name,dependencies,factory){
    if(typeof define == 'function' && (define.cmd || define.amd)) {
        define(dependencies,factory);
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = factory();
    }
    else {
        this[name] = factory();
    }
}('your-module-name',['jquery'],function(){ // you should change 'your-module-name' and ['jquery'] to the value you need
    
    // your code here
    
});
