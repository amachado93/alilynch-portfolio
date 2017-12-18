(function () {

  const acc = document.getElementsByClassName('accordion')

  acc[0].addEventListener('click',showHide);

  function showHide (){
    acc[0].classList.toggle('active');
  }




})();
