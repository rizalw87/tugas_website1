/* script.js */

// Global Variables
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const backToTopBtn = document.getElementById("backToTop");
const statsSection = document.querySelector('.stats-section');
const counters = document.querySelectorAll('.stat-item h3');
let animated = false;

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));
}

// WhatsApp Function
function openWA() {
    const phoneNumber = "6281234567890"; // Replace with actual number
    const message = "Halo, saya tertarik dengan paket outbound Batu Malang. Bisakah saya mendapatkan informasi lebih lanjut?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Scroll Event Listener
window.onscroll = function () {
    scrollFunction();
    animateStats();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Stats Animation
function animateStats() {
    if (statsSection && !animated && isElementInViewport(statsSection)) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // The lower the slower

            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20); // Speed of count up
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
        animated = true;
    }
}

// Utility: Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
