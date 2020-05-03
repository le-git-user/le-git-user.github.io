let tower = document.getElementById("campanile");

tower.onclick = function() {
	document.getElementById("content").style.background = "#303333";
	document.getElementById("campanile").style.filter = "invert(80%)";
	document.getElementById("text").style.display = "none";
	document.getElementById("hidden-text").style.display = "block";
	document.getElementById("hidden-text").style.color = "white";
};