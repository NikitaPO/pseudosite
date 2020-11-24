document.addEventListener("DOMContentLoaded", () => {
  //scrollTo btn

  const scrollBtn = document.querySelector(".scroll_to");
  scrollBtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //nav animation and hide scroll btn
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav_top");

    if (window.scrollY > 0) {
      nav.classList.add("active");
      scrollBtn.style.opacity = 1;
    } else if (window.scrollY == 0) {
      nav.classList.remove("active");
      scrollBtn.style.opacity = 0;
    }
  });

  //links 3x underline
  const link = document.querySelectorAll(".default_link");

  link.forEach((link) => {
    for (let i = 0; i < 3; i++) {
      let line = document.createElement("span");
      line.classList.add("line");
      line.style.transitionDelay = i * 0.2 + "s";
      link.appendChild(line);
    }
  });

  //line animation
  const navLine = document.createElement("div");
  const navItems = document.querySelectorAll(".nav_item");
  const navList = document.querySelector(".nav_top ul");
  navLine.classList.add("nav_line");
  navList.appendChild(navLine);
  moveLineTo();

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      let navActiveItem = document.querySelector(".nav_item.active");
      navActiveItem.classList.remove("active");
      item.classList.add("active");
      moveLineTo(navActiveItem);
    });
  });

  function moveLineTo(item) {
    const navCoords = navList.getBoundingClientRect();
    let navActiveItem = document.querySelector(".nav_item.active");
    const navItemCoords = navActiveItem.getBoundingClientRect();
    navLine.style.width = navActiveItem.clientWidth + "px";
    navLine.animate(
      { left: navItemCoords.left - navCoords.left + "px" },
      {
        duration: 1000,
        easing: "cubic-bezier(.54,-0.74,.72,1.55)",
        fill: "forwards",
      }
    );
  }
});
