/**
 * Alterna la visibilidad del contenido de la página entre Español e Inglés.
 * @param {string} idioma - El código del idioma seleccionado ('es' o 'en').
 */
function cambiarIdioma(idioma) {
  // Selección de todos los contenedores de idioma
  const elementosEs = document.querySelectorAll('.lang-es');
  const elementosEn = document.querySelectorAll('.lang-en');
  
  // Selección de los botones del menú de navegación
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');

  if (idioma === 'en') {
    // Ocultar español, mostrar inglés
    elementosEs.forEach(el => el.style.display = 'none');
    elementosEn.forEach(el => el.style.display = 'block');
    
    // Cambiar estado activo de los botones
    btnEn.classList.add('active');
    btnEs.classList.remove('active');
  } else {
    // Mostrar español, ocultar inglés
    elementosEs.forEach(el => el.style.display = 'block');
    elementosEn.forEach(el => el.style.display = 'none');
    
    // Cambiar estado activo de los botones
    btnEs.classList.add('active');
    btnEn.classList.remove('active');
  }
}