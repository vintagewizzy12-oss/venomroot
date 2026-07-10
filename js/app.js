// ==========================================
//          VENOMROOT V2
// ==========================================


// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.transition = "0.8s ease";

            setTimeout(() => {

                loader.remove();

            }, 800);

        }, 2200);

    }

});



// ================= CART =================

let cart = [];

const cartButton = document.querySelector(".cart-button");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCart = document.querySelector(".close-cart");

const cartItems = document.querySelector(".cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");



// OPEN CART

if (cartButton) {

    cartButton.addEventListener("click", () => {

        cartSidebar.classList.add("active");

    });

}



// CLOSE CART

if (closeCart) {

    closeCart.addEventListener("click", () => {

        cartSidebar.classList.remove("active");

    });

}



// ADD TO CART

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

        }, 1000);

    });

});



// UPDATE CART

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-product");

        div.innerHTML = `

            <h3>${item.name}</h3>

            <p>$${item.price}</p>

        `;

        cartItems.appendChild(div);

    });

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                Your cart is empty.

            </p>

        `;

    }

    cartCount.innerText = cart.length;

    cartTotal.innerText = total;

}
// ==========================================
//      SCROLL REVEAL
// ==========================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();



// ==========================================
//      MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navbar nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}



// ==========================================
//      BUTTON ANIMATION
// ==========================================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});



// ==========================================
//      NAVBAR SHADOW
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(0,0,0,.82)";

        navbar.style.backdropFilter = "blur(18px)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.background = "rgba(0,0,0,.55)";

        navbar.style.boxShadow = "none";

    }

});



// ==========================================
//      ACTIVE NAV LINK
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ==========================================
//      NEWSLETTER
// ==========================================

const newsletter = document.querySelector(".newsletter");

if (newsletter) {

    newsletter.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = newsletter.querySelector("input");

        if (email.value.trim() === "") {

            alert("Please enter your email.");

            return;

        }

        alert("Welcome to VENOMROOT 🖤");

        email.value = "";

    });

}



// ==========================================
//      END
// ==========================================

console.log("VENOMROOT V2 Loaded Successfully 🖤");
// ==========================================
// VENOMROOT SYMBOL PARTICLES
// ==========================================

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resize() {

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize", resize);



    const particles = [];

    const total = 45;



    for (let i = 0; i < total; i++) {

        particles.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: 12 + Math.random() * 10,

            speedY: .15 + Math.random() * .35,

            speedX: (Math.random() - .5) * .2,

            alpha: .12 + Math.random() * .15,

            rotation: Math.random() * 360

        });

    }



    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            p.y -= p.speedY;

            p.x += p.speedX;

            p.rotation += .15;

            if (p.y < -40) {

                p.y = canvas.height + 40;

                p.x = Math.random() * canvas.width;

            }

            ctx.save();

            ctx.translate(p.x, p.y);

            ctx.rotate(p.rotation * Math.PI / 180);

            ctx.font = `${p.size}px serif`;

            ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;

            ctx.fillText("𖣂", 0, 0);

            ctx.restore();

        });

        requestAnimationFrame(animate);

    }

    animate();

}