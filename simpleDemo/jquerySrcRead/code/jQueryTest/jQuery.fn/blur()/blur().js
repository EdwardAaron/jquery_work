$(document).ready(function () {
    $("#example input").blur(function (event) {
        console.log(event.target.tagName + " 失去焦点");
    });
});