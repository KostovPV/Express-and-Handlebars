document.addEventListener('DOMContentLoaded', () => {
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
