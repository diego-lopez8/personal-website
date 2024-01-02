// typewriter.js
function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.typewriter');
    elements.forEach((element) => {
        typeWriter(element, element.getAttribute('data-text'), 15);
    });
});