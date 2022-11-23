import './styles/index.scss';
import Input from './modules/Input';
import UI from './modules/UI';

const App = (() => {
  UI.setGridSize('54', '100');
  UI.resizeCanvas();

  UI.showOption(document.querySelector('.option-group'), 0);
})();

/*
  TODO:
  - fix bug preventing image backgrounds
  - fix visual bug (menu arrows)
*/
