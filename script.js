document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("footer button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const arrowImg = btn.querySelector("img");

      document.querySelectorAll("footer .overflow-hidden").forEach((el) => {
        if (el !== content) {
          el.style.maxHeight = null;
          el.previousElementSibling.querySelector("img").style.transform =
            "rotate(0deg)";
          el.classList.remove("pb-4");
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrowImg.style.transform = "rotate(0deg)";
        content.classList.remove("pb-4");
      } else {
        content.style.maxHeight = content.scrollHeight + 16 + "px";
        arrowImg.style.transform = "rotate(180deg)";
        content.classList.add("pb-4");
      }
    });
  });
});
