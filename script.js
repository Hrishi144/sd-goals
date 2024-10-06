document.addEventListener('DOMContentLoaded', function () {
    // Initially hide all sections except the first one
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none'; // Hide all sections except the first one
        }
    });

    // Click event for navigation links
    const goalLinks = document.querySelectorAll('.goal-list a');
    goalLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const target = document.querySelector(this.getAttribute('href'));

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none'; // Hide all sections
            });
            // Show the selected section
            target.style.display = 'block'; // Show the selected section
            
            // Smooth scroll to the target section
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Click event for Next Goal buttons
    const nextGoalButtons = document.querySelectorAll('.next-goal');
    nextGoalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentSection = this.parentElement; // Get the current section
            const nextSectionId = this.getAttribute('onclick').match(/'(.*?)'/)[1]; // Extract the ID of the next section
            const nextSection = document.getElementById(nextSectionId);

            // Hide the current section
            currentSection.style.display = 'none';
            // Show the next section
            nextSection.style.display = 'block';

            // Smooth scroll to the next section
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
