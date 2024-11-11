// Grab the share button and social icons container
const shareBtn = document.getElementById('share-btn');
const socialIcons = document.getElementById('social-icons');

// Toggle the display of social media icons when share button is clicked
shareBtn.addEventListener('click', () => {
    if (socialIcons.style.display === 'block') {
        socialIcons.style.display = 'none';
    } else {
        socialIcons.style.display = 'block';
    }
});