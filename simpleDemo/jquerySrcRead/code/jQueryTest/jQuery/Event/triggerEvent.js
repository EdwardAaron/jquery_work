$(function () {
    let e = jQuery.Event("click");
    $target = $("#target");
    $target.on('submit',function (e) {
        console.log("submit is triggered");
        console.log(e.target);
    }).on('click',function () {
        console.log("click is triggered");
        console.log(e.target);
    });
    $target.trigger(e);
});