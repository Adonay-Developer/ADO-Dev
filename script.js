const About = document.getElementById('about');
const Projects = document.getElementById('projects');
const Contacts = document.getElementById('contact');

About.addEventListener('click' , () => {
    window.location.href = 'about.html';
});

Projects.addEventListener('click', () => {
    window.location.href = 'projects.html';
});

Contacts.addEventListener('click', () => {
    window.location.href = 'contact.html';
});
