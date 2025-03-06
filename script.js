// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

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

// Open Article
function openArticle(index) {
    if (index < 0 || index >= articles.length) {
        console.error("Invalid article index");
        return;
    }

    const article = articles[index];

    // Function to convert **bold text** to <strong>bold text</strong> and new lines to <br>
    function formatBoldText(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
            .replace(/\n/g, "<br>"); // Preserve line breaks
    }

    // Apply the formatting
    const formattedText = formatBoldText(article.text);

    // Set the title and formatted text with HTML interpretation
    document.getElementById("modal-img").src = article.image;
    document.getElementById("modal-title").innerText = article.title;
    document.getElementById("modal-text").innerHTML = formattedText; // Use innerHTML

    // Show modal
    const modal = document.getElementById("article-modal");
    modal.style.display = "flex";

    // Close modal when clicking outside the content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeArticle();
        }
    });
}

// Close Article
function closeArticle() {
    document.getElementById("article-modal").style.display = "none";
}


// Share Article
function shareArticle() {
    const title = document.getElementById("modal-title").innerText;
    const url = window.location.href; // In real use, link to the article

    if (navigator.share) {
        navigator.share({
            title: title,
            text: `${title} - Read it here: ${url}`,
            url: url
        }).catch((error) => console.error("Error sharing:", error));
    } else {
        navigator.clipboard.writeText(`${title} - Read it here: ${url}`);
        alert("Article link copied to clipboard!");
    }
}
