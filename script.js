// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 10000); // Change slide every 10 seconds
}

autoSlide();

// Display json listings
document.addEventListener("DOMContentLoaded", function () {
    // Fetch all data and display on the home page
    fetchAllData();
});

function fetchAllData() {
    // Fetch and display businesses
    fetch('businesses.json')
        .then(response => response.json())
        .then(data => displayBusinesses(data.businesses, 'business-listings'))
        .catch(error => console.error('Error fetching businesses:', error));

    // Fetch and display freelancers
    fetch('freelancers.json')
        .then(response => response.json())
        .then(data => displayFreelancers(data.freelancers, 'freelancer-listings'))
        .catch(error => console.error('Error fetching freelancers:', error));

    // Fetch and display jobs
    fetch('jobs.json')
        .then(response => response.json())
        .then(data => displayJobs(data.jobs, 'job-listings'))
        .catch(error => console.error('Error fetching jobs:', error));

    // Fetch and display projects
    fetch('projects.json')
        .then(response => response.json())
        .then(data => displayProjects(data.projects, 'project-listings'))
        .catch(error => console.error('Error fetching projects:', error));
}

function displayBusinesses(businesses, containerId) {
    const container = document.getElementById(containerId);
    businesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${business.name}</h3>
            <p><strong>Products_Services:</strong><br>${business.products_services}</p>
            <p><strong>Address:</strong><br>${business.address}</p>
            <p><strong>Phone:</strong><br>${business.phone}</p>
            <p><strong>Email:</strong><br>${business.email}</p>
            <p><strong>Website:</strong><br>${business.website}</p>
        `;
        container.appendChild(card);
    });
}

function displayFreelancers(freelancers, containerId) {
    const container = document.getElementById(containerId);
    freelancers.forEach(freelancer => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${freelancer.name}</h3>
            <p><strong>Skill:</strong><br>${freelancer.skill}</p>
            <p><strong>Location:</strong><br>${freelancer.location}</p>
            <p><strong>Price:</strong><br>${freelancer.price}</p>
            <p><strong>Contact:</strong><br>${freelancer.contact}</p>
        `;
        container.appendChild(card);
    });
}

function displayJobs(jobs, containerId) {
    const container = document.getElementById(containerId);
    jobs.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.description}</p>
            <p><strong>Closing Date:</strong><br>${job.closing_date}</p>
            <p><strong>Application Method:</strong><br>${job.application_method}</p>
            <p><strong>Directions:</strong><br>${job.application_directions}</p>
            <p><strong>Enquiries:</strong><br>${job.enquiries}</p>
        `;
        container.appendChild(card);
    });
}

function displayProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Application Directions:</strong><br>${project.application_directions}</p>
            <p><strong>Contact:</strong><br> ${project.contact_details}</p>
        `;
        container.appendChild(card);
    });
}
