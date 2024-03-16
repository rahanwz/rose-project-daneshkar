// const hamber_menu = document.querySelector('.hamber_menu');
// const menu = document.querySelector('.menu');

// hamber_menu.classList.addEventListener("click", () =>{

//     hamber_menu.classList.addEventListener.toggle("active");
//     menu.classList.addEventListener.toggle("active");

// })

function showsidebar() {
  const menu = document.querySelector(".menu");
  menu.style.display = "block";
}

  function showOverlay(id) {
    document.getElementById(id).querySelector(".overlay-photo").style.opacity =
      "1";
  }

  function hideOverlay(id) {
    document.getElementById(id).querySelector(".overlay-photo").style.opacity =
      "0";
  }

