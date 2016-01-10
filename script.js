//var done = false;

function fade() {
	done = false;
	$("#beard").delay(3000).fadeOut(1000, function() {
		
	});
	$("#black").delay(3000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(7000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(11000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(16000).fadeIn(1000, function() {
		
	});
	$("#beard").delay(21000).fadeOut(1000, function() {
		
	});
	$("#black").delay(21000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(25000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(29000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(34000).fadeIn(1000, function() {
		
	});
	$("#beard").delay(39000).fadeOut(1000, function() {
		
	});
	$("#black").delay(39000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(43000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(47000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(52000).fadeIn(1000, function() {
		
	});
	$("#beard").delay(57000).fadeOut(1000, function() {
		
	});
	$("#black").delay(57000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(61000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(65000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(70000).fadeIn(1000, function() {
		
	});
	$("#beard").delay(75000).fadeOut(1000, function() {
		
	});
	$("#black").delay(75000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(79000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(83000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(88000).fadeIn(1000, function() {
		
	});
	$("#beard").delay(93000).fadeOut(1000, function() {
		
	});
	$("#black").delay(93000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(97000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(101000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(106000).fadeIn(1000, function() {
		
	});
	$("#beard").delay(111000).fadeOut(1000, function() {
		
	});
	$("#black").delay(115000).fadeOut(1000, function() {
		
	});
	$("#couch").delay(119000).fadeOut(1000, function() {
		
	});
	$("#forrest").delay(123000).fadeOut(1000, function() {
		
	});
	$("#beard, #black, #couch, #forrest").delay(128000).fadeIn(1000, function() {
		
	});
	//setTimeout(function(){ done = true; }, 18000);
}

$(document).ready(function(){
	$("#homeTab").css("background-image","url('images/selected.png')");
	$("#resume").css("background-image","url('images/tabLight.png')");
	$("#contact").css("background-image","url('images/tabLight.png')");
	
    $("#homeTab").hover(
		function(){
			$("#homeTab").css("background-image","url('images/tabDark.png')");
		},
		function(){
			$("#homeTab").css("background-image","url('images/selected.png')");
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
			$("#resume").css("background-image","url('images/tabLight.png')");
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
	
	
	
	var bottomBord = $('#bio').position().top+$('#bio').outerHeight(true);
	$("#textB").css("top", bottomBord + "px");
	
	var botP = bottomBord + 130;
	//var min = botP + 30;
	$("#botPics").css("top", botP + "px");
	//$("#botMine").css("margin-top", min + "px");
	
	var backBottomF = $("#botPics").position().top + 800;
	$("#foot").css("top", backBottomF + "px");
	
	var backBottom = $('#foot').position().top+$('#foot').outerHeight(true);
	$("html").css("background-size", "500% " + backBottom + "px");
	
	fade();
	//setInterval(function(){ $.when(done).then(fade()); }, 20000);
	//$.when(done).then(fade());
	
	
});
