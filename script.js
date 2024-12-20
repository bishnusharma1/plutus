
AOS.init({
  duration: 600
 });
 var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: true,
    speed: 800,
  });


document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.main_dropdown > a');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();

            var subMenu = this.nextElementSibling;
            var isAlreadyOpen = subMenu.classList.contains('show');

            // Close any currently open dropdowns
            dropdowns.forEach(function(otherDropdown) {
                var otherSubMenu = otherDropdown.nextElementSibling;
                if (otherSubMenu && otherSubMenu.classList.contains('dropdown-menu')) {
                    otherSubMenu.classList.remove('show');
                }
            });

            // Toggle the clicked dropdown if it was not already open
            if (!isAlreadyOpen && subMenu && subMenu.classList.contains('dropdown-menu')) {
                subMenu.classList.toggle('show');
            }
        });
    });
});


  // Handle tab click to slide
  // var tabs = document.querySelectorAll('.btn-tab');
  // tabs.forEach(function(tab) {
  //   tab.addEventListener('click', function() {
  //     var tabData = this.dataset.tab;
  //     var slideIndex = Array.from(this.parentElement.children).indexOf(this);
  //     swiper.slideTo(slideIndex);
  //     updateActive(tabData);
  //     tabs.forEach(function(tab) {
  //       tab.classList.remove('active-nav');
  //     });
    
  //     // Add 'active-nav' class to the tab corresponding to the active slide
  //     tabs[activeIndex].classList.add('active-nav');
  //   });
  // });

//   Update active tab on slide change
  // swiper.on('slideChange', function () {
  //   var activeIndex = swiper.realIndex;
  //   var tabs = document.querySelectorAll('.btn-tab');
  //   var tab = tabs[activeIndex];
  //   var tabData = tab.dataset.tab;
  //   updateActive(tabData);
  //   tabs.forEach(function(tab) {
  //     tab.classList.remove('active-nav');
  //   });
  
  //   // Add 'active-nav' class to the tab corresponding to the active slide
  //   tabs[activeIndex].classList.add('active-nav');
  // });



//   var tabs = document.querySelectorAll('.btn-tab');
// tabs.forEach(function(tab, index) {
//   tab.addEventListener('click', function() {
//     var tabData = this.dataset.tab;
//     var slideIndex = index; // Use the index of the clicked tab
//     swiper.slideTo(slideIndex);
//     updateActive(tabData);
    
//     // Remove 'active-nav' class from all tabs
//     tabs.forEach(function(tab) {
//       tab.classList.remove('active-btn-tab');
//     });
    
//     // Add 'active-nav' class to the clicked tab
//     this.classList.add('active-btn-tab');
//   });
// });

// swiper.on('slideChange', function () {
//   var activeIndex = swiper.realIndex;
//   var tabs = document.querySelectorAll('.btn-tab');
  
//   // Remove 'active-nav' class from all tabs
//   tabs.forEach(function(tab) {
//     tab.classList.remove('active-btn-tab');
//   });

//   // Add 'active-nav' class to the tab corresponding to the active slide
//   tabs[activeIndex].classList.add('active-btn-tab');
// });



// end of tab
 document.addEventListener('DOMContentLoaded', function () {
      var reviewSwiper = new Swiper('.review-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.arrow1',
          prevEl: '.arrow2',
        },
       
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      var hero = new Swiper('.swiper-container-hero', {
          direction: 'horizontal',
          loop: true,
          slidesPerView:'auto',
          autoplay: true,
          spaceBetween: 0,
          centeredSlides: true,
          slideToClickedSlide: true,
          speed: 2500,
          pagination: {
            el: ".swiper-pagination",
          },
          
      });
  });








//   document.addEventListener("DOMContentLoaded", function() {
//     var blog = new Swiper('.blog-swiper', {
//       loop: true,
//       slidesPerView:'2',
     
//       // autoplay: true,
//       navigation: {
//         prevEl: '.arrow1-blog',
//         nextEl: '.arrow2-blog',    
//       },
//       breakpoints: {
//         // when window width is <= 576px (mobile)
//         576: {
//           slidesPerView: 1,
//           centeredSlides: true,
//           loop: true,
//         },
//         450: {
//           slidesPerView:'auto',
//           centeredSlides: true,
//           loop: true,
//         }
//       }
//     });
// });
  
 // Initialize Swiper
 

           
 $('.slider_content').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  verticalSwiping: true,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        vertical: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


