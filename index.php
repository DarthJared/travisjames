<!DOCTYPE html>
<!-- This is the home page-->
<html lang="en">
	<head>	
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="myStyle.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="script.js"></script>
		<title>Travis James</title>
		<style type="text/css">
			.footButtons {
				position: absolute;
				width: 160px;
				top: 45px;
				text-align: center;
			}
			#copy {
				color: #FFFFFF;
				font-family: sans-serif;
				position: absolute;
				top: 10px;
				left: 347px;
			}
			#imdbFoot {
				left: 0px;
			}
			#facebookFoot {
				left: 160px;
			}
			#twitterFoot {
				left: 320px;
			}
			#resumeFoot {
				left: 640px;
			}
			#contactFoot {				
				left: 480px;
			}
		</style>
	</head>
	<body>
		<header id="homeHeader">
			<p id="name">TRAVIS JAMES</p>
		</header>
		<div id="navigator">
			<a href="index.php"><div id="homeTab" class="navButtons">
				<p class="navB">HOME</p>
			</div></a>
			<a href="http://www.imdb.com/name/nm7236230/" target="_blank"><div id="imdb" class="navButtons">
				<p class="navB">IMDB</p>
			</div></a>
			<a href="https://www.facebook.com/profile.php?id=100010773305670&fref=ts" target="_blank"><div id="facebook" class="navButtons">
				<p class="navB">FACEBOOK</p>
			</div></a>
			<a href="https://twitter.com/travisbeagley" target="_blank"><div id="twitter" class="navButtons">
				<p class="navB">TWITTER</p>
			</div></a>
			<a href="https://www.linkedin.com/profile/view?id=AAkAABezmlABmGDuVT39u47bBq7zmec6R7o9c6s&authType=NAME_SEARCH&authToken=ax1Q&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A397646416%2CauthType%3ANAME_SEARCH%2Cidx%3A2-1-4%2CtarId%3A1452388889365%2Ctas%3Atrav"><div id="contact" class="navButtons">
				<p class="navB">LINKEDIN</p>
			</div></a>
			<a href="resume.html"><div id="resume" class="navButtons">
				<p class="navB">R&Eacute;SUM&Eacute;</p>
			</div></a>
		</div>
		<div id="pictures">
			<img src="images/bench.jpg" alt="bench" id="bench" height="455" width="608">
			<img src="images/forrest.jpg" alt="forrest" id="forrest" height="455" width="608">
			<img src="images/couch.jpg" alt="couch" id="couch" height="455" width="608">
			<!--<img src="images/blackBack.png" alt="black" id="black" height="455" width="608">-->
			<img src="images/beard.jpg" alt="beard" id="beard" height="455" width="608">
		</div>
		<div id="picBorder" style="border: solid 2px"></div>
		<div id="textT"></div>
		<div id="bio">
			<div id="bioText">
				<p><em>Travis James</em> was born and raised in Kalispell, Montana. Through both grade school and high school he discovered his passion: <strong>ACTING</strong>.</p>
				<p>After graduating Flathead High School, <em>Travis began</em> to put his dreams into action.</p>
				<p>He studied in Flathead Valley Community College before heading to Montana State University and eventually moved on to Oregon State University.</p>
				<p><em>Travis</em> is now known for his roles as <em>The Rookie</em> in <strong>"The Orphan Girl,"</strong> the story of a mining community in Billings Montana, and as <em>Brent</em> in <strong>"Twenty-Five Five,"</strong> a tale of a mother whos luck turns when she stumbles upon a winning lottery ticket.</p>
			</div>
		</div>
		<div id="textB"></div>
		<div id="botPics">
			<img src="images/mining.jpg" alt="botMine" id="botMine" width="200" height="275">
			<img src="images/set.jpg" alt="botSet" id="botSet" height="334" width="250">
			<img src="images/crosswalk.jpg" alt="cross" id="cross" width="550">
		</div>
		<footer id="foot">
			<span id="copy">Copyright 2015</span>
			<a href="http://www.imdb.com/name/nm7236230/" target="_blank" class="noUnder"><div id="imdbFoot" class="footButtons">
				<p class="footB">IMDB</p>
			</div></a>
			<a href="https://www.facebook.com/profile.php?id=100010773305670&fref=ts" target="_blank" class="noUnder"><div id="facebookFoot" class="footButtons">
				<p class="footB">FACEBOOK</p>
			</div></a>
			<a href="https://twitter.com/travisbeagley" target="_blank" class="noUnder"><div id="twitterFoot" class="footButtons">
				<p class="footB">TWITTER</p>
			</div></a>
			<a href="https://www.linkedin.com/profile/view?id=AAkAABezmlABmGDuVT39u47bBq7zmec6R7o9c6s&authType=NAME_SEARCH&authToken=ax1Q&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A397646416%2CauthType%3ANAME_SEARCH%2Cidx%3A2-1-4%2CtarId%3A1452388889365%2Ctas%3Atrav" class="noUnder"><div id="contactFoot" class="footButtons">
				<p class="footB">LINKEDIN</p>
			</div></a>
			<a href="resume.html" class="noUnder"><div id="resumeFoot" class="footButtons">
				<p class="footB">R&Eacute;SUM&Eacute;</p>
			</div></a>			
		</footer>
	</body>
</html>