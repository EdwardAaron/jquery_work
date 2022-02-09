$(document).ready(function () {
    let str = $("form").serialize();
    console.log(str);
    $("#results").text(str);
});