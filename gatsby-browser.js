import './src/styles/global.css';

export const onClientEntry = () => {
  window.onload = () => {
    var bodyClass;
    switch (Math.floor(Math.random() * 5)) {
      case 0:
        bodyClass = 'compagnon-bold';
        break;
      case 1:
        bodyClass = 'compagnon-italic';
        break;
      case 2:
        bodyClass = 'compagnon-light';
        break;
      case 3:
        bodyClass = 'compagnon-medium';
        break;
      case 4:
        bodyClass = 'compagnon-roman';
        break;
      default:
        bodyClass = 'compagnon-roman';
    }
    document.body.classList.add(bodyClass)
    document.body.classList.add('loaded')
  }
}