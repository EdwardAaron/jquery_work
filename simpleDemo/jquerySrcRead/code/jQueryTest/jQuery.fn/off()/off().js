window.onload = function () {
    function flash() {
        $( "div" ).show().fadeOut( "slow" );
    }
    $( "#bind" ).click(function() {
        $( "body" )
            .on( "click",  flash )
            .find( "#theone" )
            .text( "Can Click!" );
    });
    $( "#unbind" ).click(function() {
        $( "body" )
            .off( "click",  flash )
            .find( "#theone" )
            .text( "Does nothing..." );
    });
};



