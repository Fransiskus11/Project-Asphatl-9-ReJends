document.addEventListener('DOMContentLoaded', function() {
    const statBoxes = document.querySelectorAll('.statistic-box, .regional-box, .world-box, .sponsor-box');

    statBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });
});
