function modalbox(){
  // Get the <span> element that closes the modal
  var modal = document.getElementById("myModal");
  var close = document.getElementById("close");
  var add = document.getElementById("add");
  //input 값 가져오기

  modal.style.display = "block";

  close.onclick = function(){
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
