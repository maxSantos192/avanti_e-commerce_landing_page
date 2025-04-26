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

document.addEventListener("DOMContentLoaded", () => {
  const cardData = Array(14).fill({
    image: "assets/images/card_model.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    originalPrice: "R$ 100,00",
    currentPrice: "R$79,90",
    discount: "10% OFF",
    installment: "10x de R$ 7,90",
  });

  document.querySelectorAll(".card-section").forEach((section) => {
    const container = section.querySelector(".cards-container");
    const btnLeft = section.querySelector(".scroll-left");
    const btnRight = section.querySelector(".scroll-right");

    btnLeft.addEventListener("click", () => {
      container.scrollBy({ left: -238, behavior: "smooth" });
    });
    btnRight.addEventListener("click", () => {
      container.scrollBy({ left: 238, behavior: "smooth" });
    });

    cardData.forEach((card) => {
      const div = document.createElement("div");
      div.className =
        "border border-[#DDDDDD] rounded-[10px] md:w-[238px] w-[158px] flex-none flex flex-col p-2 items-center justify-center";
      div.innerHTML = `
        <div class="relative">
          <span class="bg-[#00264E] text-white text-[10px] font-bold px-2 py-1 rounded absolute">NOVO</span>
          <img src="${card.image}" alt="Modelo" />
        </div>

        <div class="flex flex-col mt-4">
          <h3 class="text-xs">${card.title}</h3>
          <div class="mt-1 flex items-center space-x-2">
            <div class="flex flex-col">
              <span class="line-through text-[#303030] text-xs">${card.originalPrice}</span>
              <span class="font-bold text-base">${card.currentPrice}</span>
            </div>
            <span class="rounded px-2 py-1 bg-[#5EC0BE] text-white text-xs font-bold">${card.discount}</span>
          </div>
          <span class="text-xs">Ou em até <span class="font-bold">${card.installment}</span></span>
          <button class="bg-primary mt-4 w-full text-white rounded-lg py-[10px]">Comprar</button>
        </div>
      `;
      container.appendChild(div);
    });
  });
});
