// ฟังก์ชันสำหรับเมนูนำทางบนมือถือ
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
