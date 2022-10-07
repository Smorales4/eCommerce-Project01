// JSON FILE 
let data = {
    homeProducts: [
    {
        name: "Rice & Grain Dispenser",
        description:"Grain Dispenser 2 Layers Rice Container Kitchen Food Organizer with 6 Small Grids&1 Large Grid for Home Kitchen Use, Rice Beans Grains Holder.",
        brand: "JIAWANSHUN",
        price: "$78.98",
        image: "https://m.media-amazon.com/images/I/71a0UuMwN1L._AC_SL1500_.jpg",
    },
    ],

    kitchenProducts: [
    {
        name: "Multi Function Mini Rice Cooker",
        description:"Modern Designed Portable Cooker Digital Display 2L capacity. Five menus. Cook quickly in 25 minutes. With a steamer. Steaming and cooking. Start with one button. 24 hours smart reservation.",
        brand: "EAP",
        price: "$15.00",
        image: "https://p.globalsources.com/IMAGES/PDT/B5225857184/rice-cooker.jpg",
    },
    ],
    beautyProducts: [
    {   
        name: "12L Skincare Fridge",
        description: "For Makeup, Cosmetic & Facial Skin Care Products - for Women & Teen Girls - Pearl White Mini Fridge for Bedroom & Bathroom Vanity - Interior LED Lights",
        brand: "Cooluli Beauty",
        price: "$139.00",
        image: "https://m.media-amazon.com/images/I/71puEv4vGqL._AC_SL1500_.jpg",
    },
    {   
        name: "12L Skincare Fridge",
        description: "For Makeup, Cosmetic & Facial Skin Care Products - for Women & Teen Girls - Pearl White Mini Fridge for Bedroom & Bathroom Vanity - Interior LED Lights",
        brand: "Cooluli Beauty",
        price: "$139.00",
        image: "https://m.media-amazon.com/images/I/71puEv4vGqL._AC_SL1500_.jpg",
    },
    {   
        name: "12L Skincare Fridge",
        description: "For Makeup, Cosmetic & Facial Skin Care Products - for Women & Teen Girls - Pearl White Mini Fridge for Bedroom & Bathroom Vanity - Interior LED Lights",
        brand: "Cooluli Beauty",
        price: "$139.00",
        image: "https://m.media-amazon.com/images/I/71puEv4vGqL._AC_SL1500_.jpg",
    },

    ],
};

let productsElement= document.querySelector(".products");

data.product-card.forEach(
    (product) => (productsElement.innerHTML += 
    <div class="product-card">
    <div class="name">${product.name}</div>
    <img src="${product.image}"/>
    <div class="description">${product.description}</div>
    </div>


        // <section id="product1" class="section-p1">,
        // <div class="pro-container">,
        // <div class="pro">,
        //     <img src="${product.image}" alt="">,
        //     <div class="des">${product.description},
        //         <span>${product.brand}</span>,
        //         <h5>#22 T-Shirt</h5>,
        //         <h4>{product.price}</h4>,
        //     </div>,
        //     </section>,)



// Slider functions - Not working  //
        var slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
           showSlides(slideIndex += n);
        }
        function currentSlide(n) {
           showSlides(slideIndex = n);
        }
        function showSlides(n) {
           var i;
           var slides = document.getElementsByClassName("mySlides");
           var dots = document.getElementsByClassName("dot");
           if (n > slides.length) {slideIndex = 1}
           if (n < 1) {slideIndex = slides.length}
           for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
           }
           for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
           }
           slides[slideIndex-1].style.display = "block";
           dots[slideIndex-1].className += " active";
        }