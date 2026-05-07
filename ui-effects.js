// Toggle mobile navigation
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.background = "white";
        nav.style.padding = "20px";
        nav.style.textAlign = "center";
    }
}


// Carousel infinite loop logic
document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    track.addEventListener('mouseenter', function() {
        this.style.cursor = 'default';
    });
});