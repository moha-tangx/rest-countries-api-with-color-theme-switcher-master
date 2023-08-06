// dark-mode toggle
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("dark");
})