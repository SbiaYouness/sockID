function calculateSockLossIndex() {
    var p = parseInt(document.getElementById("people").value);
    var A = parseInt(document.getElementById("precautions").value);
    var t = parseInt(document.getElementById("types").value);
    var f = parseInt(document.getElementById("washFreq").value);
    var P = parseInt(document.getElementById("attitude").value);
    var s = parseInt(document.getElementById("socks").value);
  
    var L = p * f;
    var C = t * s;
    var sockLossIndex = (L + C) - (P * A);
  
    document.getElementById("result").innerHTML = "Sock Loss Index: " + sockLossIndex;
  }
  
  // Update slider values
  var sliders = document.querySelectorAll('input[type="range"]');
  sliders.forEach(function(slider) {
    slider.addEventListener('input', function() {
      var spanId = this.id + "Value";
      var value = this.value;
  
      document.getElementById(spanId).innerHTML = value;
      updateSliderThumb(this);
    });
  });
  
  function updateSliderThumb(slider) {
    var value = slider.value;
    var thumb = slider.nextElementSibling.querySelector('input[type="range"]::-webkit-slider-thumb');
    thumb.style.left = (value - 1) * 5 + '%';
  }
  