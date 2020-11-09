// =====   BATONY   =====
const overlay = document.getElementById("overlay");
const btns = document.querySelectorAll(".btn");

const cyclo = document.getElementById("cyclo");
const dzial = document.getElementById("dzial");
const obrz = document.getElementById("obrz");
const objaw = document.getElementById("objaw");
const zyla = document.getElementById("zyla");
const hemo = document.getElementById("hemo");
const lecz = document.getElementById("lecz");
const stos = document.getElementById("stos");

// =====   STRONY   =====

const strony = document.querySelectorAll(".page");

const page01 = document.getElementById("page01");

const page02 = document.getElementById("page02");

const page03 = document.getElementById("page03");

const page04 = document.getElementById("page04");

const page05 = document.getElementById("page05");

const page06 = document.getElementById("page06");

const page07 = document.getElementById("page07");

const page08 = document.getElementById("page08");

// =====   ARROWS   =====

const arrows = document.querySelectorAll(".arrow");

const arrow1 = page01.querySelector(".arrow");

const arrow2 = page02.querySelector(".arrow");

const arrow3 = page03.querySelector(".arrow");

const arrow4 = page04.querySelector(".arrow");

const arrow5 = page05.querySelector(".arrow");

const arrow6 = page06.querySelector(".arrow");

const arrow7 = page07.querySelector(".arrow");

const arrow8 = page08.querySelector(".arrow");

// =====   STRONA 1   =====

// const produkt = page01.querySelector("img#produkt");

const popup01 = document.getElementById("tabelka01");

const closePopup01 = popup01.querySelector(".close");

const popup02 = document.getElementById("galeria01");

const closePopup02 = popup02.querySelector(".close");

produkt.addEventListener("touchstart", () => {
  popup01.classList.add("active");
});

closePopup01.addEventListener("touchstart", () => {
  popup01.classList.remove("active");
});

console.log(arrow1);

arrow1.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page02.classList.add("active");
  dzial.classList.add("dzial");
});

cyclo.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== cyclo) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  cyclo.classList.add("cyclo");
  page01.classList.add("active");
});

const ruszczyk = document.getElementById("ruszczyk");

ruszczyk.addEventListener("touchstart", () => {
  popup02.classList.add("active");
});

closePopup02.addEventListener("touchstart", () => {
  popup02.classList.remove("active");
});

const headlines = document.querySelector(".headlines");

const triangle = document.querySelector(".triangle");

triangle.addEventListener("touchstart", () => {
  headlines.classList.toggle("active");
});

// =====   STRONA 2   =====

const kulki = page02.querySelector(".kulki");

kulki.addEventListener("touchstart", () => {
  kulki.classList.toggle("active");
});

dzial.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== dzial) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  dzial.classList.add("dzial");
  page02.classList.add("active");
});

// =====   STRONA 3   =====

obrz.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== obrz) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  obrz.classList.add("obrz");
  page03.classList.add("active");
});

arrow2.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page03.classList.add("active");
  obrz.classList.add("obrz");
});

// =====   STRONA 3   =====

obrz.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== obrz) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  obrz.classList.add("obrz");
  page03.classList.add("active");
});

arrow3.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page04.classList.add("active");
  objaw.classList.add("objaw");
});

// =====   OBJAWY   =====

objaw.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== objaw) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  objaw.classList.add("objaw");
  page04.classList.add("active");
});

arrow4.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page05.classList.add("active");
  zyla.classList.add("zyla");
});

const tabletkiDwie = page04.querySelector(".tabletki");

tabletkiDwie.addEventListener("touchstart", () => {
  tabletkiDwie.classList.toggle("active");
});

// =====   ZYLAKI   =====

zyla.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== zyla) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  zyla.classList.add("zyla");
  page05.classList.add("active");
});

arrow5.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page06.classList.add("active");
  hemo.classList.add("hemo");
});

const termometr = document.getElementById("termometr");

const nogi = document.getElementById("nogi");

const giry = page05.querySelector(".giry");

const giryClose = giry.querySelector(".close");

nogi.addEventListener("touchstart", () => {
  giry.classList.add("active");
});

giryClose.addEventListener("touchstart", () => {
  giry.classList.remove("active");
});

const cieplo = page05.querySelector(".cieplo");

const cieploClose = cieplo.querySelector(".close");

termometr.addEventListener("touchstart", () => {
  cieplo.classList.add("active");
});

cieploClose.addEventListener("touchstart", () => {
  cieplo.classList.remove("active");
});

// =====   HEMOROIDY   =====

hemo.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== hemo) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  hemo.classList.add("hemo");
  page06.classList.add("active");
});

arrow6.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page07.classList.add("active");
  lecz.classList.add("lecz");
});

const hemoroidy = document.querySelector(".hemoroidy");

const belka = document.querySelector(".belka");

hemoroidy.addEventListener("touchstart", () => {
  hemoroidy.classList.toggle("show");
  belka.classList.toggle("hide");
});

belka.addEventListener("touchstart", () => {
  belka.classList.toggle("show");
  hemoroidy.classList.toggle("hide");
});

// =====   LECZENIE   =====

lecz.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== lecz) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  lecz.classList.add("lecz");
  page07.classList.add("active");
});

arrow7.addEventListener("touchstart", () => {
  for (let el of strony) {
    el.classList.remove("active");
  }
  for (let el of btns) {
    el.classList = "btn";
  }
  page08.classList.add("active");
  stos.classList.add("stos");
});

const tabletkiCztery = page07.querySelector(".tabletki");

tabletkiCztery.addEventListener("touchstart", () => {
  tabletkiCztery.classList.toggle("active");
});

// =====   STOSOWANIE   =====

stos.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== stos) {
      el.classList = "btn";
    }
    for (let el of strony) {
      el.classList.remove("active");
    }
  }
  stos.classList.add("stos");
  page08.classList.add("active");
});

const paczka = page08.querySelector(".paczka");

const sil = document.querySelector(".sil");

const silClose = page08.querySelector(".close");

paczka.addEventListener("touchstart", () => {
  sil.classList.add("active");
  silClose.classList.add("active");
});

silClose.addEventListener("touchstart", () => {
  sil.classList.remove("active");
  silClose.classList.remove("active");
});
