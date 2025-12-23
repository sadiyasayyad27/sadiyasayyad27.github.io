// Typing effect (home page only)
const typingText = document.querySelector(".typing");
if (typingText) {
    const words = ["Web Developer", "BCA Student", "Coder", "Tech Enthusiast"];
    let i = 0, j = 0, isDeleting = false;

    function typeEffect() {
        let word = words[i];
        typingText.textContent = isDeleting
            ? word.slice(0, j--)
            : word.slice(0, j++);

        if (j === word.length + 1) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
        setTimeout(typeEffect, isDeleting ? 80 : 150);
    }
    typeEffect();
}

// Dark mode toggle
const themeBtn = document.getElementById("theme-icon");
if (themeBtn) {
    themeBtn.onclick = () => {
        document.body.classList.toggle("light-mode");
        themeBtn.classList.toggle("fa-sun");
        themeBtn.classList.toggle("fa-moon");
    };
}
