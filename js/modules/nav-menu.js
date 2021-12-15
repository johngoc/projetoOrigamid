export default function initNavMenu(){

  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('active');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      })
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('active', direcao);
    }

    tabMenu.forEach((ItemMenu, index) => {
      ItemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  };
};