const goTopBtn = document.getElementById("goTopBtn");

goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
});

window.scroll() = () => {
    document.documentElement.scrollTop > document.documentElement.clientHeight &&
    document.documentElement.scrollTop !== 0
    ? (goTopBtn.style.display = "flex")
    : (goTopBtn.style.display = "none");
};