$(function () {
    let count = 0;

    // option_null();
    // option_once();
    option_memory();

    //-----------------
    function createFun() {
        let tempCount = count++;
        return function (val) {
            let message = "this is function ___" + tempCount;
            message = val ? message + " " + val : message;
            console.log(message);
        };
    }

    /**
     * Callbacks():可以多次触发list中的callbacks
     * :queue中不会保存上次fire的参数
     */
    function option_null() {
        let fun1 = createFun(),
            fun2 = createFun(),
            fun3 = createFun(),
            callbacks = $.Callbacks();
        callbacks.add(fun1).add(fun2);
        callbacks.fire("hello world");
        callbacks.add(fun3);
        callbacks.fire("hello lucia");
    }

    /**
     * Callbacks(unique):
     */
    function option_unique() {

    }

    /**
     * Callbacks("once"):只能触发list中的callbacks一次
     */
    function option_once() {
        let fun1 = createFun(),
            fun2 = createFun(),
            fun3 = createFun(),
            callbacks = $.Callbacks("once");
        callbacks.add(fun1).add(fun2).add(fun3);
        callbacks.fire("hello world");
        callbacks.fire("hello lucia");
    }

    /**
     * Callbacks("memory")
     *  :queue中保存着上次调用使用的参数，使用add添加fun的时候，会使用该参数调用fun，即在fire之前使用先前的值来调用fun
     */
    function option_memory() {
        let fun1 = createFun(),
            fun2 = createFun(),
            fun3 = createFun(),
            callbacks = $.Callbacks("memory");
        callbacks.add(fun1).add(fun2);
        callbacks.fire("hello world");
        callbacks.add(fun3);
        callbacks.fire("hello lucia");
    }

    /**
     * Callbacks("once memory")
     */
    function option_onceAndMemory() {

    }
});

