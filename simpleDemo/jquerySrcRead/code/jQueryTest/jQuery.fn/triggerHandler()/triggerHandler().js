$(function () {
    simple();
    function simple() {
        $result=$("#result");
        $result.click(function (data) {
            let message = "hello world ";
            message = data ? message + data : message;
            $(this).text(message);
        });
        $result.triggerHandler("click","hello lucia");
    }
});
