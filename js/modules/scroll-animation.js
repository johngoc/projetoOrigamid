export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;
    function animaScroll() {
      sections.forEach((section) => {
        const scrollTop = section.getBoundingClientRect().top;
        const isSectionVisible = (scrollTop - windowMetade) < 0;

        if (isSectionVisible)
          section.classList.add('ativo');
        else if(section.classList.contains('ativo'))
          section.classList.remove('ativo');
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  };
};