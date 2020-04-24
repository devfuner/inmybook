
const menuLink = document.querySelector('.menu-list');
const menuTypes = ['books', 'about', 'devfuner'];
menuLink.addEventListener('click', e => {
  const type = e.target.getAttribute('data-menu');

  menuTypes.map(x => {
    const container = document.querySelector(`.${x}-container`);
    if (type === x) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
});