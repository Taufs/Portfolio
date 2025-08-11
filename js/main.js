window.addEventListener("load", () => {
  // Preloader Animation
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const text3 = document.getElementById("text3");
  const animation2 = document.getElementById("animation-2");
  const revealBox = document.getElementById("reveal-box");
  const preloader = document.getElementById("preloader");

  if (text1 && text2 && text3 && animation2 && revealBox && preloader) {
    setTimeout(() => {
      text1.classList.remove("opacity-0", "translate-y-8");
    }, 400);
    setTimeout(() => {
      text2.classList.remove("opacity-0", "translate-y-8");
    }, 800);
    setTimeout(() => {
      text3.classList.remove("opacity-0", "translate-y-8");
    }, 1200);

    setTimeout(() => {
      text1.classList.add("opacity-0", "-translate-y-8");
      text2.classList.add("opacity-0", "-translate-y-8");
      text3.classList.add("opacity-0", "-translate-y-8");
    }, 2000);

    setTimeout(() => {
      animation2.classList.remove("opacity-0");
      revealBox.classList.add("animate-reveal");
    }, 2500);

    setTimeout(() => {
      animation2.classList.add("opacity-0");
    }, 4000);

    setTimeout(() => {
      preloader.classList.add("opacity-0");
    }, 4400);

    setTimeout(() => {
      preloader.style.display = "none";
    }, 5000);
  }

  // Tabs Functionality
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and hide all panels
      tabs.forEach((t) => t.classList.remove("active-tab"));
      panels.forEach((p) => p.classList.add("hidden"));

      // Add active class to clicked tab and show corresponding panel
      tab.classList.add("active-tab");
      const targetPanel = document.getElementById(tab.dataset.tab);
      if (targetPanel) targetPanel.classList.remove("hidden");
    });
  });
});