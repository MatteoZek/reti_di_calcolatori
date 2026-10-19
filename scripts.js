function mostraTesto(textID){
    if (textID=='Sporting'){
      var par = document.getElementById("testoSporting");
      if (par.style.display=="none"){
        par.style.display="block";
      } else {
        par.style.display="none";
      }
    } else if (textID=='Real'){
      var par = document.getElementById("testoReal");
      if (par.style.display=="none"){
        par.style.display="block";
      } else {
        par.style.display="none";
      } 
    } else {
      var par = document.getElementById("testoJuve");
      if (par.style.display=="none"){
        par.style.display="block";
      } else {
        par.style.display="none";
      }
    }  
}
