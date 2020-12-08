window.onscroll = function() {
  setStickyHeader()
};

const header = document.getElementById("menubar");
const sticky = header.offsetTop;

function setStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}