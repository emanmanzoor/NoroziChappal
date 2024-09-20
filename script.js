function toggleSizeChart() {
    var modal = document.getElementById("size-chart-modal");
    modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "block" : "none";
}

function addToCart() {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    if (size === "") {
        alert("Please select a size before adding to cart!");
    } else {
        alert(`Added ${quantity} item(s) of size ${size} to your cart.`);
    }
}

// JavaScript for Auto-Slide Carousel
const images = [
    'images/back.jpg',
    'images/backs.jpg',
    'images/3.jpg'
];

let currentIndex = 0;
let interval;

// Function to change the image
function changeImage(direction) {
    currentIndex += direction;

    // Loop the images
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('carousel-image').src = images[currentIndex];
}

// Auto-slide function
function autoSlide() {
    interval = setInterval(() => {
        changeImage(1);  // Move to the next image
    }, 3000);  // Slide every 3 seconds
}

// Pause auto-slide on hover
document.querySelector('.product-carousel').addEventListener('mouseenter', () => {
    clearInterval(interval);  // Stop auto-slide when hovering
});

// Resume auto-slide when hover ends
document.querySelector('.product-carousel').addEventListener('mouseleave', () => {
    autoSlide();  // Resume auto-slide when mouse leaves the carousel
});

// Start the auto-slide when the page loads
window.onload = () => {
    autoSlide();
};

// Function to handle product sharing
function shareProduct() {
    const shareData = {
        title: 'BLACK PLAIN KHERI 715',
        text: 'Check out this product!',
        url: window.location.href
    }
    navigator.share(shareData).then(() => {
        console.log('Product shared successfully!');
    }).catch(console.error);
}



   
   












    function toggleContent(contentId) {
        // Get all content elements
        const contents = document.querySelectorAll('.content');

        // Hide all content elements
        contents.forEach(content => {
            if (content.id !== contentId) {
                content.style.display = 'none'; // Hide other content
            }
        });

        // Toggle the clicked content
        const currentContent = document.getElementById(contentId);
        if (currentContent.style.display === 'none' || currentContent.style.display === '') {
            currentContent.style.display = 'block'; // Show clicked content
        } else {
            currentContent.style.display = 'none';  // Hide if already visible
        }
    }

    function openReviewModal() {
        document.getElementById("reviewModal").style.display = "block";
    }

    function closeReviewModal() {
        document.getElementById("reviewModal").style.display = "none";
    }

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        const modal = document.getElementById("reviewModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Handle the review form submission
    document.getElementById("reviewForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission

        // Get review data
        const name = document.getElementById("reviewerName").value;
        const rating = document.getElementById("reviewRating").value;
        const text = document.getElementById("reviewText").value;

        // Create a new review card
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        reviewCard.innerHTML = `
            <div class="review-header">
                <h4>${name}</h4>
                <div class="star-rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
            </div>
            <p class="review-date">Reviewed just now</p>
            <p class="review-text">${text}</p>
        `;

        // Append the new review to the reviews list
        document.querySelector(".reviews-list").appendChild(reviewCard);

        // Close the modal and reset the form
        closeReviewModal();
        document.getElementById("reviewForm").reset();
    };



    // Open and Close Modal for Questions
function openQuestionModal() {
    document.getElementById('questionModal').style.display = 'block';
}

function closeQuestionModal() {
    document.getElementById('questionModal').style.display = 'none';
}

// Form Submission for Question
document.getElementById('questionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh
    const name = document.getElementById('questionName').value;
    const question = document.getElementById('questionText').value;

    // Show an alert (you can replace this with server-side handling)
    alert(`Thank you, ${name}, for your question: "${question}"`);

    // Close the modal
    closeQuestionModal();
});


function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        closeNav();
    } else {
        sidenav.style.width = "250px"; // Open the sidenav
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; // Close the sidenav
}





// Get modal elements
var modal = document.getElementById("modal");
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var closeBtn = document.querySelector(".close");

// Open the modal when the Login button is clicked
loginBtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modalTitle").innerText = "Sign In"; // Set the title
    document.getElementById("modalForm").innerHTML = `
        <div id="formContent">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <button type="submit">Sign In</button>
        </div>
    `;
}

// Open the modal when the Register button is clicked
registerBtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modalTitle").innerText = "Register"; // Set the title
    document.getElementById("modalForm").innerHTML = `
        <div id="formContent">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <button type="submit">Register</button>
        </div>
    `;
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
