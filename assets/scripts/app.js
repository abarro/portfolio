$(document).on("scroll",function(){
	if($(document).scrollTop()>200){ 
		$("header").removeClass("full").addClass("small");
		}
	else{
		$("header").removeClass("small").addClass("full");
		}
	});
