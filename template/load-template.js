// Function to load Html content

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        });
}

// Load header and footer
loadHTML('./template/header.html', 'header-placeholder');
loadHTML('./template/footer.html', 'footer-placeholder');


