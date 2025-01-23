searchFrom = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchFrom.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".flower-slider", {
   loop: true,
   centeredSlides: true,
   autoplay:{
    delay: 1500,
    disableOnInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
  
  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
     delay: 4500,
     disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 2,
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });
   

   var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
     delay: 4500,
     disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      450: {
       slidesPerView: 2,
     },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay:{
     delay: 2500,
     disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      450: {
       slidesPerView: 2,
     },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".more-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay:{
     delay: 5500,
     disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
       slidesPerView: 2,
     },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
