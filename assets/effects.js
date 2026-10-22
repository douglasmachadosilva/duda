// Conteúdo permanece visível quando JavaScript não está disponível.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.about, .project-grid, .contact').forEach(section => {
    section.classList.add('reveal-ready');
    observer.observe(section);
  });
}
