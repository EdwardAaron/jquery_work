$(function () {
    done_test();
    fail_test();
    notify_test();
    promise_test();
    then_all_test();
    // done_many();
    then_many();
});

function done_test() {
    let deferred = $.Deferred();
    let count = 0;
    $("#doneFunction").click(function () {
        deferred.done(function () {
            let message = "this is function add by done() " + count++;
            console.log(message);
            $("#result").append("<p>" + message + "</p>")
        });
    });
    $("#resolve").click(function () {
        $("#result").text("");
        deferred.resolve();
    });
}

/**
 * done(fun(value))
 *  :当添加多个fun的时候，每个fun接收的value都是相同的
 */
function done_many() {
    let deferred = $.Deferred();
    deferred.done(function (value) {
        console.log("value is " + value);
        return value + 1;
    }).done(function (message) {
        console.log("value is " + message);
    });
    deferred.resolve(1);
}

function fail_test() {
    let deferred = $.Deferred();
    let count = 0;
    $("#failFunction").click(function () {
        deferred.fail(function () {
            let message = "this is function add by fail() " + count++;
            console.log(message);
            $("#result").append("<p>" + message + "</p>")
        });
    });
    $("#reject").click(function () {
        $("#result").text("");
        deferred.reject();
    });
}

function notify_test() {
    let deferred = $.Deferred();
    let count = 0;
    $("#thenFunction").click(function () {
        deferred.progress(function (val) {
            let message = "this is function add by done() ";
            message = val ? message + " " + val : message + " " + count++;
            console.log(message);
            $("#result").append("<p>" + message + "</p>")
        });
    });
    $("#notify").click(function () {
        $("#result").text("");
        deferred.notify("hello world");
    });
}

function promise_test() {
    let def = $.Deferred();
    def.promise().done(function (val) {
        let message = val || "";
        $("#result").append("<p>" + message + "</p>")
    });
    $("#promise").click(function () {
        def.resolve("hello lucia");
    });
}

function then_test() {

}

/**
 * then(fun(value))
 *  :fun的返回值会作为后续fun的参数
 */
function then_many() {
    let deferred = $.Deferred();
    deferred.then(function (value) {
        console.log("value is " + value);
        return value + 1;
    }).then(function (message) {
        console.log("value is " + message);
        return message + 1;
    }).done(function (message) {
        console.log("value is " + message);
    }).done(function (message) {
        console.log("value is " + message);
    });
    deferred.resolve(1);
}

/**
 * then(onFulfilled, onRejected, onProgress)
 *  :onFulfilled
 *  :onRejected
 *  :onProgress
 */
function then_all_test() {
    let deferred = $.Deferred();

    function fulfilled() {
        console.log("fulfilled start");
        console.log(this);
        console.log("fulfilled end");
    }
    function rejected() {
        console.log("rejected start");
        console.log(this);
        console.log("rejected end");
    }
    function progress() {
        console.log("progress start");
        console.log(this);
        console.log("progress end");
    }
    $("#thenAddAll").click(function () {
        deferred.then(fulfilled,rejected,progress);
    });
    $("#onFulfilled").click(function () {
        deferred.resolve();
    });
    $("#onRejected").click(function () {
        deferred.reject();
    });
    $("#onProgress").click(function () {
        deferred.notify();
    });
}


