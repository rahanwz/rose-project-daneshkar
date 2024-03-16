

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

