document.addEventListener('DOMContentLoaded', () => {

  const currentPath = window.location.pathname;
  
  // Loop through all nav links
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    // Check if the href attribute matches the current URL path
    if (link.getAttribute('href') === currentPath) {
      // Add 'active' class to the matched link
      link.classList.add('active');
      // Disable hover effect by adding a class or directly setting styles
      link.classList.add('no-hover');
    }
  });
  
  document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const details = document.getElementById(`details-${id}`);
      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Show Less Info';
      } else {
        details.style.display = 'none';
        button.textContent = 'Show More Info';
      }
    });
  });

  document.querySelectorAll('.explore-details').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      window.location.href = `/list/${id}`;
    });
  });
});
