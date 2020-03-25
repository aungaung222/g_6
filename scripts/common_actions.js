var width = window.innerWidth || document.clientWidth || body.clientWidth


var images = document.getElementsByClassName("full-width-frame");

for (var i = 0; i < images.length; i++) {

  var img = images[i];
  var rWidth = parseFloat(img.getAttribute('data-rWidth'));
  var rHeight = parseFloat(img.getAttribute('data-rHeight'));

  img.style.width = "100%";
  img.style.height = img.getBoundingClientRect().width * (rHeight / rWidth) + "px";
}

var gifs = document.getElementsByClassName("vid-gif");

for (var i = 0; i < gifs.length; i++) {
  gifs[i].playing = false;
  gifs[i].loop = false;
  gifs[i].style.borderRadius = "6px"
  var color = gifs[i].getAttribute("data-color");


  var parent = gifs[i].parentElement;
  parent.style.position = "relative";
  parent.style.margin = "0px 3px";
  parent.style.padding = "0px"

  var play_icon = document.createElement("img");
  if (color == "w") {
    play_icon.src = "../../images/icons/play-grey.svg";
  }
  else {
    play_icon.src = "../../images/icons/play.svg";
  }

  play_icon.style.position = "absolute";

  const size = width / 10;

  play_icon.style.width = size + "px"
  play_icon.style.height = size + "px"
  play_icon.style.left = "50%";
  play_icon.style.top = "48%";
  play_icon.style.zIndex = 3;
  play_icon.style.transform = "translate(-50%, -50%)";
  gifs[i].play_icon = play_icon;
  play_icon.video = gifs[i];

  play_icon.addEventListener("click", function () {
    if (!this.video.playing) {
      this.video.play()
      $(this).hide(100)
      this.video.playing = true;
    }
  }, false);

  parent.appendChild(play_icon)

  gifs[i].addEventListener("click", function () {
    if (!this.playing) {
      this.play()
      $(this.play_icon).hide(100)
      this.playing = true;
    }
    else {
      this.pause();
      $(this.play_icon).show(100);
      this.playing = false;
    }
  }, false);

  gifs[i].addEventListener("ended", function () {
    $(this.play_icon).show(100);
    this.playing = false;
  }, false);
}



var sliders = []
window.jssor_1_slider_init = function () {

  var jssor_1_SlideshowTransitions = [
    { $Duration: 800, x: 0.25, $Zoom: 1.5, $Easing: { $Left: $Jease$.$InWave, $Zoom: $Jease$.$InCubic }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 800, x: -0.25, $Zoom: 1.5, $Easing: { $Left: $Jease$.$InWave, $Zoom: $Jease$.$InCubic }, $Opacity: 2, $ZIndex: -10 } },
    { $Duration: 1200, x: 0.5, $Cols: 2, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InOutCubic }, $Opacity: 2, $Brother: { $Duration: 1200, $Opacity: 2 } },
    { $Duration: 600, x: 0.3, $During: { $Left: [0.6, 0.4] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 600, x: -0.3, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 } },
    { $Duration: 800, x: 0.25, y: 0.5, $Rotate: -0.1, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2, $Brother: { $Duration: 800, x: -0.1, y: -0.7, $Rotate: 0.1, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2 } },
    { $Duration: 1000, x: 1, $Rows: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 1000, x: -1, $Rows: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } },
    { $Duration: 1000, y: -1, $Cols: 2, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 1000, y: 1, $Cols: 2, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } },
    { $Duration: 800, y: 1, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 800, y: -1, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } },
    { $Duration: 1000, x: -0.1, y: -0.7, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4] }, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2, $Brother: { $Duration: 1000, x: 0.2, y: 0.5, $Rotate: -0.1, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2 } },
    { $Duration: 800, x: -0.2, $Delay: 40, $Cols: 12, $During: { $Left: [0.4, 0.6] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 }, $Brother: { $Duration: 800, x: 0.2, $Delay: 40, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 1028, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Round: { $Top: 0.5 }, $Shift: -200 } },
    { $Duration: 700, $Opacity: 2, $Brother: { $Duration: 700, $Opacity: 2 } },
    { $Duration: 800, x: 1, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 800, x: -1, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } }
  ];

  var jssor_1_options = {
    $AutoPlay: 0,
    $FillMode: 5,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16
    }
  };

  var class_sliders = document.getElementsByClassName("gallery-slider");
  for (var i = 0; i < class_sliders.length; i++) {

    var jssor_1_slider = new $JssorSlider$(class_sliders[i].id, jssor_1_options);

    class_sliders[i].style.marginTop = "-50px";
    class_sliders[i].style.marginBottom = "-10px";
    // class_sliders[i].style.width = "100%";
    // class_sliders[i].style.maxHeight = "200px"
    // class_sliders[i].style.padding = "0px"

    sliders.push(jssor_1_slider)
  }


  /*#region responsive code begin*/

  var MAX_WIDTH = 600;

  function ScaleSlider() {

    for (var i = 0; i < sliders.length; i++) {
      var containerElement = sliders[i].$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        sliders[i].$ScaleWidth(expectedWidth);
      }
      else {
        window.setTimeout(ScaleSlider, 30);
      }

    }

  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};
jssor_1_slider_init()