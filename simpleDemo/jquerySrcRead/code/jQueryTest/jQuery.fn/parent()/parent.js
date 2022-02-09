//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    $( "*", document.body ).each(function() {
        var parentTag = $( this ).parent().get( 0 ).tagName;
        $( this ).prepend( document.createTextNode( parentTag + " > " ) );
    });
});

