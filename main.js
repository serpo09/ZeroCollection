 console.log('ZeroCollection');

$(window).on("scroll", () => {
  if ($(window).scrollTop() > 60) {
    $("nav").addClass("navScroll");
  } else {
    $("nav").removeClass("navScroll");
  }
});

// show /Hide menu bar

// let menu = document.$(".nav-menu");
// let menuBtn = document.$("#open-menu-btn");
// let closeBtn = document.$("#close-menu-btn");

// menuBtn.addEventListener("click", () => {
//   menu.style.display = "flex";
//   closeBtn.style.display = "inline-block";
//   menuBtn.style.display = "none";
// })

// // Closing menu bar

// const closeNav = () => {
//     menu.style.display = 'none';
//     closeBtn.style.display = 'none';
//     menuBtn.style.display =  'inline-block';
// }

// closeBtn.addEventListener('click', closeNav)


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click' , () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click' , () => {
    item.scrollLeft -= containerWidth;
  })  
}) 