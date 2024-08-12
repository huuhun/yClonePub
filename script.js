function getGreeting(name) {
    return `Hello, ${name}!`;
}

function handleDropdown() {
    let dropdowns = document.querySelectorAll('.dropdown-toggle');
    
    dropdowns.forEach((dd) => {
        dd.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default behavior
            e.stopPropagation(); // Stop the event from propagating to the document

            var el = this.nextElementSibling;
            if (el.classList.contains('show')) {
                el.classList.remove('show');
            } else {
                closeAllDropdowns(); // Close all other dropdowns before opening a new one
                el.classList.add('show');
            }
        });
    });

    document.addEventListener('click', function (e) {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdowns.forEach((dd) => {
            var el = dd.nextElementSibling;
            if (el.classList.contains('show')) {
                el.classList.remove('show');
            }
        });
    }
}


