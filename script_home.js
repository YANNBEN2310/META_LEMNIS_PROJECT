let currentSlideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlideIndex++;
  if (currentSlideIndex > slides.length) {currentSlideIndex = 1}
  slides[currentSlideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.onload = showSlides; // Ensure the slides start showing once the window has loaded
document.getElementById('createAccountBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.toggle('hidden');
  });
  
  // Close form
  document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('hidden');
  });
  
  document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.toggle('hidden');
  });
  
  // Close form
  document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('hidden');
  });


