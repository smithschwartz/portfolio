$(document).ready(function(event){ 
	$('.scroll-js').click(function(event) {
   		event.preventDefault();
   		anchor = $(event.target).closest("a").attr("href").replace(/#/,"");
   		// Find target
   		$anchor = $("a[name='" + anchor + "']");
   		
   		$.scrollTo($anchor, 1000, {offset:-80, 'axis':'y', onAfter: function() {
   			// update url
   			if (history.pushState) {
                history.pushState(null, null, "#" + anchor);
            } else {
                location.hash = name;
            }
   		}});
  	});
});
