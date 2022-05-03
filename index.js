const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const rating = form.rating.value;
  // Hide rating card
  const ratingCard = document.getElementById('rate-card');
  ratingCard.classList.add('hidden');
  // Show thank you card
  const thankCard = document.getElementById('thank-card');
  thankCard.classList.remove('hidden');
  // Display rating
  document.getElementById('rating-result').textContent = rating;
});