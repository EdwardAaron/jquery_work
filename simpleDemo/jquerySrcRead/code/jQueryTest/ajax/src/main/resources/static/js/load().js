$(document).ready(
    function () {
        //将 hello world ，this is from server。插入到#example中
        $("#example").load("/index.txt");
        //将 HELLO WORLD ....................。插入到#example2中
        $("#example2").load("/index.txt", function (responseText, textStatus, jqXHR) {
            if (textStatus === 'success') {
                $(this).text(responseText.toUpperCase());
            }
        });
        //
        $("#select").load("/selector.txt");
    }
);