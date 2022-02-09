//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    jQuery_get();
});
function jQuery_get() {
    $.get( "test.txt" ).then(
        function() {
            alert( "$.get succeeded" );
        }, function() {
            alert( "$.get failed!" );
        }
    );
}

