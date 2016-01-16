var numBotLinks = 6;
var numTopLinks = 7;
$(window).load(function() {
	//alert("here");
	resizeTop();
});

$(window).resize(function(){
	resizeTop();
});

function resizeTop() {
	var winWidth = $(window).width();
	//alert(winWidth);
	var picWidth = winWidth + 200;
	var clipWidth = winWidth + 100;
	$("#miningTop").css("clip", "rect(100px," + clipWidth + "px,900px,100px");
	$("#miningTop").css("width", picWidth + "px");	
	
	var setWidth = winWidth * 0.3;
	$("#set").css("width", setWidth + "px");
	
	var beardWidth = winWidth * 0.37;
	$("#beard").css("width", beardWidth + "px");
	
	var textTop = $("#photoNav").offset().top + 30;
	$("#bodyText").css("top", textTop + "px");
	//alert($("#photoNav").offset().bottom);
	
	var setWidth = $("#set").width();
	var bodyWidth = winWidth - setWidth - 170 - 35;
	$("#bodyText").css("width", bodyWidth + "px");
	
	// alert($("#bodyText").outerHeight());
	var beardTop = $("#bodyText").offset().top + $("#bodyText").outerHeight() + 30;
	$("#beardPic").css("top", beardTop + "px");
	$("#beard").css("visibility", "visible");
	
	//var beardWidth = winWidth - 500 - 35 - 150;
	$("#leftText").css("width", bodyWidth + "px");
	var leftTextL = beardWidth + 35;
	$("#leftText").css("left", leftTextL + "px");
	var leftTextTop = $("#beard").offset().top + 100;
	$("#leftText").css("top", leftTextTop + "px");
	
	var bottomNavW = winWidth * 0.9;
	$("#bottomBar").css("width", bottomNavW + "px");
	var margin = bottomNavW / 2 * -1;
	$("#bottomBar").css("margin-left", margin + "px");
	//alert($("#beard").offset().top + " " + $("#beard").outerHeight());
	var bH = $("#beard").offset().top + $("#beard").outerHeight();
	var tH = $("#leftText").offset().top + $("#leftText").outerHeight();
	if (bH > tH) {
		var bottomNavT = bH + 100;
		$("#bottomBar").css("top", bottomNavT + "px");
	}
	else {
		var bottomNavT = tH + 100;
		$("#bottomBar").css("top", bottomNavT + "px");
	}
	
	var botLinkW = bottomNavW / numBotLinks;
	$(".botLink").css("width", botLinkW + "px");
	$("#faceBot").css("left", botLinkW + "px");
	var link2L = botLinkW * 2;
	var link3L = botLinkW * 3;
	var link4L = botLinkW * 4;
	var link5L = botLinkW * 5;
	$("#twitBot").css("left", link2L + "px");
	$("#linkedBot").css("left", link3L + "px");
	$("#resBot").css("left", link4L + "px");
	$("#photoBot").css("left", link5L + "px");
	
	
}