
document.addEventListener('DOMContentLoaded', () => {
    console.log("Web programozás-1 keretrendszer betöltve.");

   
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML += ` | © ${year}`;
    }

    
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = 0;
        mainContent.style.transition = "opacity 0.8s ease-in-out";
        setTimeout(() => mainContent.style.opacity = 1, 100);
    }
});