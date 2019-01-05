

var bigImg = document.getElementById("ITBPbigImg");
var bigSubText = document.getElementById("ITBPbigSubText");
var frame = document.getElementById("ITBPframe");

var closeButton = document.getElementById("ITBPcloseButton");

function toBigPreview(src, alt) {

    bigImg.src = src;
    bigSubText.innerHTML = alt;

    frame.style.display = "block";

}

closeButton.onclick = function() {

    frame.style.display = "none";


}
		
	
