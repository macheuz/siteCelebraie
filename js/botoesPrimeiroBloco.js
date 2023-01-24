document.getElementById("text2").style.display = "none";
document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("text1").style.display = "flex";
    document.getElementById("text2").style.display = "none";
  });
  document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "flex";
  });
  