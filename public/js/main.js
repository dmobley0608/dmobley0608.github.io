document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const cloudCount = 5;

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.width = `${Math.random() * 100 + 150}px`;
        cloud.style.height = `${Math.random() * 50 + 75}px`;
        cloud.style.top = `${Math.random() * 100 + 20}px`; // Adjusted to ensure clouds are not stuck at the top
        cloud.style.left = `${Math.random() * 100}vw`; // Randomly place clouds across the width of the header
        cloud.style.animationDuration = `${Math.random() * 20 + 40}s`; // Slowed down the speed
        cloud.style.zIndex = Math.random() > 0.5 ? 1 : 3; // Randomly set z-index to appear in front or behind the sun
        if (cloud.style.zIndex == 3) {
            cloud.classList.add('glow'); // Apply glowing effect if in front of the sun
        }
        cloud.addEventListener('animationend', () => {
            cloud.remove();
            setTimeout(createCloud, Math.random() * 5000); // Add random delay before creating a new cloud
        });
        header.appendChild(cloud);
    }

    for (let i = 0; i < cloudCount; i++) {
        setTimeout(createCloud, Math.random() * 5000); // Add random delay before creating initial clouds
    }
});
