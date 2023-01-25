const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

var elements = document.getElementsByTagName("*");
var img = document.getElementsByClassName("imgToggle")


btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    for (var i=0; i < elements.length; i++) 
    {   
      elements[i].classList.toggle("light-theme");
    }
    for (var i=0; i < img.length; i++)
    {
      console.log("node " + String(i) + ": " + img[i].nodeName)
      if (img[i].nodename == "IMG") {
        img[i].src= "https://raw.githubusercontent.com/Spope20/Mapping_Earthquakes/main/Images/Earthquake_Light.png";
      } else if (img[i].nodename == "SOURCE") {
        img[i].srcset= "https://raw.githubusercontent.com/Spope20/Mapping_Earthquakes/main/Images/Earthquake_Light.png";
      }
    }
  }

  else {
      for (var x=0; x < elements.length; x++) 
      {   
        elements[x].classList.toggle("dark-theme");
      }

      img[0].attributes("src","https://raw.githubusercontent.com/Spope20/Mapping_Earthquakes/main/Images/Earthquake_Dark.png");
  }
});