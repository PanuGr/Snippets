const buttonUp = document.querySelector("#buttonUp");

window.onscroll = function (e) {
    if (window.scrollY > 400) {
        buttonUp.style.visibility = "visible";
    } else { buttonUp.style.visibility = "hidden"; }
}
buttonUp.onclick = () => window.scrollTo(0, 0);

//export {goingUp,scrollFunction};