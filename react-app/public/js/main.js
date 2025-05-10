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
        cloud.style.animationDuration = `${Math.random() * 20 + 40}s`;
        cloud.style.zIndex = Math.random() > 0.5 ? 2 : 4; // Randomly set z-index to appear in front or behind the sun
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

    // Apply animations when elements come into view
    observeElements(document.querySelectorAll('.timeline-item'), 'animate-timeline');
    observeElements(document.querySelectorAll('.project-card'), 'fade-in');
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

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });

        // Show success message (you can replace this with your own logic)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add animation to sun element
const sunElement = document.getElementById('sun');
if (sunElement) {
    // Your existing sun animation code
}

// Animate timeline items when they come into view
const observeElements = (elements, className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};
