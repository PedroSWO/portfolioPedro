 
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}
 
function changeImage() {
  
    if(document.getElementById("about-image").src == "file:///C:/Users/pedro.alonso/OneDrive%20-%20SoftwareONE/Documentos/CodeAcademy/DevProject/resources/images/about_me.png") {
        document.getElementById("about-image").src = "./resources/images/xd.jpg";
    }
    else {
        document.getElementById("about-image").src = "./resources/images/about_me.png";
    } 
      }
