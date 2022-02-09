$(function () {
    when_test();
});

function when_test() {
    let def1 = $.Deferred();
    let def2 = $.Deferred();
    let result = $("#result");
    $.when(def1, def2).done(
        function (message1, message2) {
            let message = message1 || "";
            message = message2 ? message + " " + message2 : "";
            result.append("<p>def success " + message + "</p>")
        }
    ).fail(
        function (message1, message2) {
            let message = message1 || "";
            message = message2 ? message + " " + message2 : "";
            result.append("<p>def fail " + message + "</p>")
        }
    );
    $("#resolve1").click(function () {
        def1.resolve();
    });
    $("#resolve2").click(function () {
        def2.resolve();
    });
    $("#reject1").click(function () {
        def1.reject();
    });
    $("#resolveAll").click(function () {
        def1.resolve("lucia");
        def2.resolve("lifu");
    });
}