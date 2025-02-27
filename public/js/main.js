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

    updateProjectTimestamps();
});

// GitHub API integration
async function fetchRepoLastUpdate(repoUrl) {
    try {
        // Extract owner and repo from GitHub URL
        const urlParts = repoUrl.split('github.com/')[1].split('/');
        const owner = urlParts[0];
        const repo = urlParts[1].replace('.git', '');

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        const data = await response.json();

        if (response.ok) {
            const date = new Date(data.updated_at);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }
        return null;
    } catch (error) {
        console.error('Error fetching repo data:', error);
        return null;
    }
}

// Update project cards with last update times
async function updateProjectTimestamps() {
    const projectCards = document.querySelectorAll('.project-card');

    for (const card of projectCards) {
        const githubLink = card.querySelector('a[href*="github.com"]');
        if (githubLink) {
            const lastUpdate = await fetchRepoLastUpdate(githubLink.href);
            if (lastUpdate) {
                const timestamp = document.createElement('div');
                timestamp.className = 'last-updated';
                timestamp.textContent = `Last updated: ${lastUpdate}`;
                card.appendChild(timestamp);
            }
        }
    }
}
