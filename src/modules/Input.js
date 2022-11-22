import UI from './UI';

const Input = (() => {
  const setupButton = document.querySelector('#begin'),
    optionGroups = document.querySelectorAll('.option-group');

  optionGroups.forEach((el, i) => {
    el.onclick = (ev) => {
      UI.showOption(ev.target, i);
    };
  });

  setupButton.onclick = () => {
    const rows = document.querySelector('#rows').value;
    const columns = document.querySelector('#columns').value;

    UI.setGridSize(rows, columns);
    UI.resizeCanvas();
    UI.hideSetupScreen();
  };
})();

export default Input;
