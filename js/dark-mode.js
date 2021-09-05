const button = document.querySelector("button");
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
}
toggleDarkMode(useDark.matches);


//it automatically sets dark or light theme (not necessary)
useDark.addListener((evt) => toggleDarkMode(evt.matches));

button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
});