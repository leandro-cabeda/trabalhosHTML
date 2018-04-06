
$(document).ready(function(){

	$('#oc').click(function(){

		$('#me,#text,#xc,#mus,#aten,#yy,#res,#hh3,.av').slideToggle();

	});
    


$( ".ft" ).mouseenter(function() {
  $( ".mg" ).animate({ "height": "+=50px" }, "slow" );
});
 
$( ".ft" ).mouseleave(function(){
  $( ".mg" ).animate({ "height": "-=50px" }, "slow" );
});



(function($) {
    $(function() {

    	var jcarousel = $('#wf');

        jcarousel
            .on('wf:reload wf:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.control-next')
            .jcarouselControl({
                target: '+=1'
            });
        

    });
})(jQuery);



});




