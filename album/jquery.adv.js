jQuery(function($){
	var list_toggle = 0;
	
	$("#fileList").height($(window).height());
	$(".control_page").height($(window).height()-40);
	
	$(window).resize(function(){
		$("#fileList").height($(window).height());
		$(".control_page").height($(".main").height()-4);
	});
	
	$("#ScrollList").click(function(){
		$("#header").animate({opacity: 'toggle'}, 100, 'swing');
		$("#footer").animate({opacity: 'toggle'}, 100, 'swing');
	});
	$("#imagePane").click(function(){
		$("#header").animate({opacity: 'toggle'}, 100, 'swing');
		$("#footer").animate({opacity: 'toggle'}, 100, 'swing');
	});
	
	$("a.header_togglelistview").click(function(){
		
		$("#fileList").animate({width: 'toggle'}, 200, 'swing');
		if(list_toggle == 1){ $("#wrap").css('margin', '0'); list_toggle = 0; 
		$("#selector").hide();
		}
		else {
			$("#wrap").css("margin", "0 0 0 220px");
			list_toggle = 1;
			$("#selector").show();
		}
	});
});