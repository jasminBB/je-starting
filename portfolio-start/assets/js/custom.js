jQuery(document).ready(function(){
	jQuery("#fullpage").fullpage({
		navigation: true,
		navigationPosition: "right",
		scrollOverflow: true
	});

	/* Calculate viewport width */
	var vWidth = jQuery(window).innerWidth();
	jQuery(window).resize(function() {
		vWidth = jQuery(window).innerWidth();
		tabletDevices(vWidth);
	});
	tabletDevices(vWidth);
});

function tabletDevices(vWidth) {
	if(vWidth >= 768 && vWidth < 992) {
		jQuery("[data-device='tablet']").addClass("fp-auto-height");
	} else  {
		jQuery("[data-device='tablet']").removeClass("fp-auto-height");
	}
}
