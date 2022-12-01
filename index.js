const inputData = document.querySelector('.input');
const contentContainer = document.querySelector('.content');
const menu = document.querySelector('.menu');
const selectedHeader = document.querySelector('.selected-header');

let element;
const createHeader = (value) => {
  const header = document.createElement(element);
  header.innerText = value;
  header.contentEditable = 'true';
  contentContainer.appendChild(header);
  inputData.value = '';
};

inputData.addEventListener('keyup', (e) => {
  const { value } = e.target;
  if (e.key === 'Enter') {
    createHeader(value);
    inputData.placeholder = 'Type / for blocks';
    inputData.classList.remove('font');
  }
  if (value === '/') {
    menu.classList.remove('hide');
    selectedHeader.classList.add('selected');
  }
  if (value === '/1') {
    menu.classList.add('hide');
    element = 'h1';
    inputData.value = '';
    inputData.placeholder = 'Heading 1';
    inputData.classList.add('font');
  }

  if (value === '/2') {
    element = 'p';
    menu.classList.add('hide');
    inputData.value = '';
  }
});
