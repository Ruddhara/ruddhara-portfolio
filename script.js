
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// CLOSE MENU AFTER CLICK
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// SCROLL PROGRESS BAR
const progressBar = document.getElementById("scrollProgress");

function updateProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgress);
updateProgress();

// REVEAL ELEMENTS WHEN SCROLLING
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// ACTIVE NAVIGATION SECTION
const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.id;

            navItems.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + currentId
                );
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// AUTOMATIC FOOTER YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
