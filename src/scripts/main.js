document.addEventListener("mousemove", parallax);

function parallax(event) {
    this.querySelectorAll(".header-main .bx").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 120;
        const y = (window.innerHeight - event.pageY * position) / 120;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}