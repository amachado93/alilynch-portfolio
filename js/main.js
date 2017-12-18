(function () {

  const acc = document.getElementsByClassName('accordion');
  const panel = document.getElementsByClassName('panel');

  acc[0].addEventListener("click", activateThing);

  function activateThing () {

       acc.classList.toggle("active");

       if (panel.style.display === "block") {
           panel.style.display = "none";
       } else {
           panel.style.display = "block";
       }
   };




})();
