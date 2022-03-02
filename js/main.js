window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

// timer for landing page
var countDownDate = new Date("Mar 3, 2022 17:00:00").getTime();
var x= setInterval(function(){
  var now =new Date().getTime();
  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML= days;
document.getElementById("hours").innerHTML= (hours<10 ? "0" + hours : hours) + " ";
document.getElementById("minutes").innerHTML= (minutes<10 ? "0" + minutes : minutes) + " ";
document.getElementById("seconds").innerHTML= (seconds<10 ? "0" + seconds : seconds);
},1000);		


// js for gallery carosal
$(".gallery-section-slider").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


let btn = document.getElementById('nav-button')
let visible = false
btn.addEventListener("click" ,()=>{
  if(visible == false)
  {
    btn.style.border = "none"
    document.getElementById('nav-menu').style.width = "100%"
    visible = true
  }
  else{
    btn.style.border = "none"
    document.getElementById('nav-menu').style.width = "0%"
    visible = false
  }
})



// animate on scroll
AOS.init();

//timeline
var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var day = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-day');
    return '<span class="' + className + '">' + day + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});
