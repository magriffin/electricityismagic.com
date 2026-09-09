
document.addEventListener("DOMContentLoaded", function(event) {
	var myElement = document.getElementById('container');
	var hammertime = new Hammer(myElement);
	
	hammertime.on("swipeleft swiperight", function(ev) {
		console.log("BOOBL");
		if (ev.type == "swipeleft") {
			previousrelease();
		} else if (ev.type == "swiperight") {
			nextrelease();
		}
	});
});

$(document).keydown(function(e){
        if (e.keyCode == 37) { 
  		   previousrelease();
           return false;
        }
        if (e.keyCode == 39) { 
           nextrelease();
           return false;
        }
});


function firstalbum() {
	if (sessionStorage.firstalbum == null) {
		console.log("NULL");
		sessionStorage.setItem("firstalbum", "adoptedfamily");
	}
	console.log(sessionStorage.firstalbum);
	document.getElementById(sessionStorage.firstalbum).style.display = "block";
}

function nextrelease() {
    var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
    var nextToShow = $(visibleRelease).next('.releases:hidden');
    if (nextToShow.length > 0) {
        nextToShow.show();
    } else {
        $('#container .releases:hidden:first').show();
    }
    return false;
};

function previousrelease() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	var previousToShow = $(visibleRelease).prev('.releases:hidden');
    if (previousToShow.length > 0) {
        previousToShow.show();
    } else {
        $('#container .releases:hidden:last').show();
    }
    return false;	
};

function showalbumgrid() {
	$("#albumgrid").fadeIn(250);
//	document.getElementById("albumgrid").style.display = "block";
};

function hidealbumgrid() {
	$("#albumgrid").fadeOut(100);
//	document.getElementById("albumgrid").style.display = "none";
};

function showadopted() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("adoptedfamily").style.display = "block";
}

function showballads() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("ballads").style.display = "block";
}

function showmint() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("mint").style.display = "block";
}

function showlevee() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("levee").style.display = "block";
}

function showhalfsteps() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("halfsteps").style.display = "block";
}

function showuls() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("uls").style.display = "block";
}

function showmic() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("mic").style.display = "block";
}

function showoln() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("oln").style.display = "block";
}

function showdictionary() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("dictionary").style.display = "block";
}

function showgridroad() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("gridroad").style.display = "block";
}

function showuss() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("uss").style.display = "block";
}

function showexitstrategy() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("exitstrategy").style.display = "block";
}

function showornament() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("ornament").style.display = "block";
}

function showpisc() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("pisc").style.display = "block";
}

function showtowns() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("towns").style.display = "block";
}

function showcawc() {
	var visibleRelease = $('#container .releases:visible');
    visibleRelease.hide();
	document.getElementById("cawc").style.display = "block";
}

function gotoballads() {
	sessionStorage.setItem("firstalbum", "ballads");
}

function gotomint() {
	sessionStorage.setItem("firstalbum", "mint");
}

function gotolevee() {
	sessionStorage.setItem("firstalbum", "levee");
}

function gotohalfsteps() {
	sessionStorage.setItem("firstalbum", "halfsteps");
}

function gotouls() {
	sessionStorage.setItem("firstalbum", "uls");
}

function gotomic() {
	sessionStorage.setItem("firstalbum", "mic");
}

function gotooln() {
	sessionStorage.setItem("firstalbum", "oln");
}

function gotodictionary() {
	sessionStorage.setItem("firstalbum", "dictionary");
}

function gotogridroad() {
	sessionStorage.setItem("firstalbum", "gridroad");
}

function gotouss() {
	sessionStorage.setItem("firstalbum", "uss");
}

function gotoexitstrategy() {
	sessionStorage.setItem("firstalbum", "exitstrategy");
}

function gotoornament() {
	sessionStorage.setItem("firstalbum", "ornament");
}

function gotopisc() {
	sessionStorage.setItem("firstalbum", "pisc");
}

function gototowns() {
	sessionStorage.setItem("firstalbum", "towns");
}

function gotocawc() {
	sessionStorage.setItem("firstalbum", "cawc");
}
