$(document).ready(function(){
	$("#homeTab").css("background-image","url('images/tabLight.png')");
	$("#resume").css("background-image","url('images/selected.png')");
	$("#contact").css("background-image","url('images/tabLight.png')");
	
    $("#homeTab").hover(
		function(){
			$("#homeTab").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#homeTab").css("background-image","url('images/tabLight.png')");
		}
	);
	
	$("#imdb").hover(
		function(){
			$("#imdb").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#imdb").css("background-image","url('images/tabLight.png')");
		}
	);
	
	$("#facebook").hover(
		function(){
			$("#facebook").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#facebook").css("background-image","url('images/tabLight.png')");
		}
	);
	
	$("#twitter").hover(
		function(){
			$("#twitter").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#twitter").css("background-image","url('images/tabLight.png')");
		}
	);
	$("#resume").hover(
		function(){
			$("#resume").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#resume").css("background-image","url('images/selected.png')");
		}
	);
	$("#contact").hover(
		function(){
			$("#contact").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#contact").css("background-image","url('images/tabLight.png')");
		}
	);
	

	$(".footButtons").css("color", "#FFFFFF");
	$("#imdbFoot").hover(
		function(){
			$("#imdbFoot").css("background-image","url('images/white.png')").css("background-size", "100% 100%").css("color", "#000000").css("font-weight","bold");
		},
		function(){
			$("#imdbFoot").css("background-image","url('none')").css("color", "#FFFFFF").css("font-weight","normal");
		}
	);
	
	$("#facebookFoot").hover(
		function(){
			$("#facebookFoot").css("background-image","url('images/white.png')").css("background-size", "100% 100%").css("color", "#000000").css("font-weight","bold");
		},
		function(){
			$("#facebookFoot").css("background-image","url('none')").css("color", "#FFFFFF").css("font-weight","normal");
		}
	);
	
	$("#twitterFoot").hover(
		function(){
			$("#twitterFoot").css("background-image","url('images/white.png')").css("background-size", "100% 100%").css("color", "#000000").css("font-weight","bold");
		},
		function(){
			$("#twitterFoot").css("background-image","url('none')").css("color", "#FFFFFF").css("font-weight","normal");
		}
	);
	$("#resumeFoot").hover(
		function(){
			$("#resumeFoot").css("background-image","url('images/white.png')").css("background-size", "100% 100%").css("color", "#000000").css("font-weight","bold");
		},
		function(){
			$("#resumeFoot").css("background-image","url('none')").css("color", "#FFFFFF").css("font-weight","normal");
		}
	);
	$("#contactFoot").hover(
		function(){
			$("#contactFoot").css("background-image","url('images/white.png')").css("background-size", "100% 100%").css("color", "#000000").css("font-weight","bold");
		},
		function(){
			$("#contactFoot").css("background-image","none").css("color", "#FFFFFF").css("font-weight","normal");
		}
	);
	
	var $window = $(window),
       $stickyEl = $('.navButtons'),
       elTop = $stickyEl.offset().top;

    $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });
	
	var backBottomF = $('#resTab').position().top + $('#resTab').outerHeight(true) + 70;
	$("#foot").css("top", backBottomF + "px");
	
	var backBottom = $('#foot').position().top+$('#foot').outerHeight(true);
	$("html").css("background-size", "500% " + backBottom + "px");
	
});
