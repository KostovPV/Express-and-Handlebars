document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const details = document.getElementById(`details-${id}`);
      if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Show Less Info';
      } else {
        details.style.display = 'none';
        button.textContent = 'Show More Info';
      }
    });
  });
});

// const handlebars = require('express-handlebars');

// const hbs = handlebars.create({
//   helpers: {
//     stars: (rating) => {
//       const fullStars = Math.floor(rating);
//       return Array(5).fill(0).map((_, index) => index < fullStars ? 'fa-star' : 'fa-star-o');
//     }
//   }
// });
