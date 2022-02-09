document.addEventListener("DOMContentLoaded", function () {
    getJSON_url_fun();
});

/**
 * getJSON(url,fun(data))
 *  :从指定url返回的数据可以是任意形式，不一定是json字符串
 */
function getJSON_url_fun() {
    $.getJSON("movies.json", function (data) {
        $div=$("#example").append("<p>");
        $("p", $div).append(data.toString());
    });
}
