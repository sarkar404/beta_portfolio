const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Remove 'active-btn' class from currently active button
            sectBtns.forEach((button) => {
                button.classList.remove('active-btn');
            });
            // Add 'active-btn' class to the clicked button
            this.classList.add('active-btn');

            // Hide all sections and remove 'active' class
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Show the section that matches the clicked button's ID
            const sectionToShow = document.getElementById(this.dataset.id);
            sectionToShow.classList.add('active');
        });
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

PageTransitions();
