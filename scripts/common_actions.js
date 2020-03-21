var width = document.body.scrollWidth;

var images = document.getElementsByClassName("full-width-frame");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  var rWidth = parseInt(img.getAttribute('data-rWidth'));
  var rHeight = parseInt(img.getAttribute('data-rHeight'));

  img.style.width = "100%";
  var height = width * (rHeight / rWidth);
  img.style.height = height + "px";
}

var gifs = document.getElementsByClassName("vid-gif");

for (var i = 0; i < gifs.length; i++) {
  gifs[i].playing = false;
  gifs[i].loop = true;
  gifs[i].style.borderRadius = "6px"

  var parent = gifs[i].parentElement;
  parent.style.position = "relative";
  parent.style.margin = "0px 3px";
  parent.style.padding = "0px"

  var play_icon = document.createElement("img");
  play_icon.src = "../../images/icons/play.svg";
  play_icon.style.position = "absolute";
  play_icon.style.width = "70px"
  play_icon.style.height = "70px"
  play_icon.style.left = "50%";
  play_icon.style.top = "50%";
  play_icon.style.zIndex = 3;
  play_icon.style.transform = "translate(-50%, -50%)";
  gifs[i].play_icon = play_icon;
  play_icon.video = gifs[i];

  play_icon.addEventListener("click", function () {
    if(!this.video.playing){
      this.video.play()
      $(this).hide(100)
      this.video.playing = true;
    }    
  }, false);

  parent.appendChild(play_icon)

  gifs[i].addEventListener("click", function () {
    if(!this.playing){
      this.play()
      $(this.play_icon).hide(100)
      this.playing = true;
    }    
    else{
      this.pause();
      $(this.play_icon).show(100);
      this.playing = false;
    }
  }, false);
}


// $(document).ready(function(){
//     $('#videoElementID').bind('contextmenu',function() { return false; });
//  });
 


