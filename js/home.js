

$(document).ready(function() {

    $(".bounce").click(function(){
        console.log('works');
       $(this).effect( "bounce", {times:2}, 1000 );
    });

 });

