window.addEventListener("load", function() {
    var zickzack = document.getElementById("zickzack");
    var width = zickzack.offsetWidth;
    var height = zickzack.offsetHeight;
    
    for (var i = 0; i < height/10; i++) {
      var line = document.createElement("div");
      line.style.top = (i * 20) + "px";
      
      if (i % 2 === 0) {
        line.style.left = "0";
      } else {
        line.style.left = width + "px";
      }
      
      line.classList.add("line");
      zickzack.appendChild(line);
    }
  });
  