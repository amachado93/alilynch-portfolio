(function () {

  const acc = document.getElementsByClassName('accordion');
  const panel = document.getElementsByClassName('panel');

  acc[0].addEventListener('click', activateMenu);

   function activateMenu () {
        this.classList.toggle('active');
        if (panel[0].style.display === 'block') {
            panel[0].style.display = 'none';
        } else {
            panel[0].style.display = 'block';
        }
    };

})();
