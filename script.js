const headerColor = "activeHeader";
const buttonColor = "activeButton";
const scrollTrigger = 350;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(headerColor);
    document.getElementsByClassName("get-started")[0].classList.add(buttonColor);
    document.getElementsByClassName("get-started")[0].classList.remove("get-started");
  } else {
    document.getElementsByTagName("header")[0].classList.remove(headerColor);
    document.getElementsByClassName("activeButton")[0].classList.add("get-started");
    document.getElementsByClassName("activeButton")[0].classList.remove(buttonColor);
  }
};
