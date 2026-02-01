/**
 * Inicializa las animaciones de "aparecer al hacer scroll" para elementos
 * con la clase 'animate-on-scroll'.
 * Utiliza IntersectionObserver para un rendimiento óptimo.
 */
export const initScrollAnimations = () => {
  // Seleccionamos los elementos de la página ACTUAL
  const elements = document.querySelectorAll(".animate-on-scroll");

  // Si no hay elementos (otra página), salimos para evitar errores
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Importante: Dejar de observar una vez animado para mejor rendimiento
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // Se activa cuando el 15% del elemento es visible
    }
  );

  elements.forEach((el) => observer.observe(el));
};
