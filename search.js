
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


var swiper = new Swiper(".about-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
     delay: 4000,
     disableOnInteraction: false,
    }, 
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      450: {
       slidesPerView: 2,
     },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });


  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const Cartcontainer = document.getElementById('cart-container');

  function renderCart() {
    Cartcontainer.innerHTML = ''; 

      if (cartItems.length === 0) {
        Cartcontainer.innerHTML = '<p>looks like you have no items in your cart!</p>';
          return;
      }

      cartItems.forEach((item, index) => {
          const div = document.createElement('div');
          div.classList.add('item');
          div.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div>
                  <p>Name:  ${item.name} <br/> Price: ${item.price}</p>
              </div>
              <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
          `;
          Cartcontainer.appendChild(div);
      });
  }

  function removeFromCart(index) {
      cartItems.splice(index, 1); 
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
      renderCart();
  }

  renderCart();

const wishlistContainer = document.getElementById('wishlist-container');
const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

function renderWishlist() {
    wishlistContainer.innerHTML = '';

    if (wishlistItems.length === 0) {
        wishlistContainer.innerHTML = '<p>Your wishlist is empty!</p>';
        return;
    }

    wishlistItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('wishlist-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
                <p>Name:  ${item.name} <br/> Price: ${item.price}</p>
            <button class="remove-btn" onclick="removeFromWishlist(${index})">Remove</button>
        `;
        wishlistContainer.appendChild(div);
    });
}

function removeFromWishlist(index) {
    wishlistItems.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    renderWishlist();
}

renderWishlist();

const ordersContainer = document.getElementById('orders-container');
const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

function renderOrder() {
    ordersContainer.innerHTML = '';

    if (orderItems.length === 0) {
        ordersContainer.innerHTML = '<p>You have no orders yet! Shop now!</p>';
        return;
    }

    orderItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('orderItems');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
                <p>Name:  ${item.name} <br/> Price: ${item.price}</p>
            <button class="remove-btn" onclick="removeFromOrder(${index})">Remove</button>
        `;
        ordersContainer.appendChild(div);
    });
}

function removeFromOrder(index) {
    orderItems.splice(index, 1);
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    renderOrder();
}

renderOrder();
