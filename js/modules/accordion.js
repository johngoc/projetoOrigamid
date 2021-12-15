export default function initAccordion(){
  const accordion = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'active';

  if(accordion.length){

    accordion[0].classList.add(activeClass);
    accordion[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordion.forEach((dt) => {
      dt.addEventListener('click', activeAccordion);
    });
  };
};