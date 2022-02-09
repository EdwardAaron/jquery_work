window.onload = function () {
    let n = 0;
    $( "div" ).one( "click", function() {
        let index = $( "div" ).index( this );
        $( this ).css({
            borderStyle: "inset",
            cursor: "auto"
        });
        $( "p" ).text( "Div at index #" + index + " clicked." +
            " That's " + (++n) + " total clicks." );
    });
};



