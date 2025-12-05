/* const botones = document.querySelectorAll('.button-apply-job');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    boton.classList.add('is-applied');
    boton.textContent = 'Aplicado';
    boton.disabled = true;
  });
}); */

const jobsListingSection = document.querySelector('.jobs-listings');/* llamamos al padre */

jobsListingSection?.addEventListener('click', function(event){/* identificamos el evento */
  const element = event.target;

  if (element.classList.contains('button-apply-job')) {/* vemos si el evento contiene algun boton y se le aplican los cambios */
    element.classList.add('is-applied');
    element.textContent = 'Aplicado';
    element.disabled = true;
  }
  
})