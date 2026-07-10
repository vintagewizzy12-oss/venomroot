// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);

});




// ================= CART SYSTEM =================


let cart = [];

const cartCount = document.getElementById("cart-count");

const cartTotal = document.getElementById("cart-total");

const cartSidebar = document.querySelector(".cart-sidebar");

const cartButton = document.querySelector(".cart-button");

const closeCart = document.querySelector(".close-cart");

const cartItems = document.querySelector(".cart-items");




// OPEN CART

cartButton.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});




// CLOSE CART

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});




// ADD PRODUCTS

const addButtons = document.querySelectorAll(".add-cart-btn");


addButtons.forEach(button => {


    button.addEventListener("click", () => {


        const card = button.closest(".product-card");


        const product = {

            name: card.querySelector("h3").innerText,

            price: Number(
                card.querySelector("span")
                    .innerText
                    .replace("$", "")
            )

        };


        cart.push(product);


        updateCart();


        button.innerText = "Added ✓";


        setTimeout(() => {

            button.innerText = "Add to Cart";

        }, 1200);


    });


});





function updateCart() {


    cartCount.innerText = cart.length;


    cartItems.innerHTML = "";


    let total = 0;



    cart.forEach(item => {


        total += item.price;


        const product = document.createElement("div");


        product.classList.add("cart-product");


        product.innerHTML = `

            <h3>${item.name}</h3>

            <p>$${item.price}</p>

        `;


        cartItems.appendChild(product);


    });



    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
            Your cart is empty.
            </p>
        `;

    }



    cartTotal.innerText = total;


}





// ================= SCROLL REVEAL =================


const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", () => {


    reveals.forEach(section => {


        const position = section.getBoundingClientRect().top;


        if (position < window.innerHeight - 100) {

            section.classList.add("show");

        }


    });


});





// ================= CUSTOM CURSOR =================


const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e) => {


    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";


});





// ================= BUTTON GLOW =================


const buttons = document.querySelectorAll("button");


buttons.forEach(btn => {


    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });


    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });


});
// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navbar nav");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}
// ================= MOUSE GLOW =================


document.addEventListener("mousemove", (e) => {


    document.body.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );


    document.body.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );


});
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.style.display = "none";

        }, 2500);

    }

});

const drone = document.getElementById("drone");

if (drone) {

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    let targetX = x;
    let targetY = y;

    document.addEventListener("mousemove", (e) => {
        targetX = e.clientX + 50;
        targetY = e.clientY + 20;
    });

    function updateDrone() {

        x += (targetX - x) * 0.08;
        y += (targetY - y) * 0.08;

        drone.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(updateDrone);
    }

    updateDrone();

}
// ================= LENIS SMOOTH SCROLL =================

const lenis = new Lenis({

    duration: 1.3,

    smoothWheel: true,

    wheelMultiplier: 0.9,

    touchMultiplier: 1.5,

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);
// LOOKBOOK PARALLAX

document.querySelectorAll(".look-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const img = card.querySelector("img");

        const rect = card.getBoundingClientRect();

        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;

        img.style.transform =
            `scale(1.08) translate(${x}px, ${y}px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.querySelector("img").style.transform =
            "scale(1) translate(0,0)";

    });

});
// ================= FINAL REVEAL =================


const revealElements = document.querySelectorAll(".reveal");


function reveal() {

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;


        if (top < window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", reveal);


reveal();