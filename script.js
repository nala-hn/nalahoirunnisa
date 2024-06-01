document.addEventListener('DOMContentLoaded', function () {
    animateProgressBar();
});

function animateProgressBar() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(progressBar => {
        const percentage = parseInt(progressBar.parentNode.previousElementSibling.querySelector('.val').innerText);
        let width = 0;
        const interval = setInterval(frame, 10);

        function frame() {
            if (width >= percentage) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }
    });
}
