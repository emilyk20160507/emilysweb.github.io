function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var elements = document.querySelectorAll('header, footer, nav ul li a, section');
    elements.forEach(function(element) {
        element.classList.toggle("dark-mode");
    });
}

