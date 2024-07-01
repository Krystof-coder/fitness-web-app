/*document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        // Remove the "active" class from all links
        document.querySelectorAll('.nav-link.active').forEach(function (activeLink) {
            activeLink.classList.remove('active');
        });

        // Add the "active" class to the clicked link
        this.classList.add('active');
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    locator();
});
function locator() {
    const pathname = window.location.pathname;
    const pageName = pathname.split("/").pop();
    //console.log(pageName);
    highlight(pageName);
}

function highlight(name) {
    document.getElementById(name).classList.add('active');
}