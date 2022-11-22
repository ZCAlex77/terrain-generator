import UI from './UI';

const Input = (() => {
  const setupButton = document.querySelector('#begin');

  setupButton.onclick = () => {
    const rows = document.querySelector('#rows').value;
    const columns = document.querySelector('#columns').value;

    UI.setGridSize(rows, columns);
    UI.resizeCanvas();
    UI.hideSetupScreen();
  };
})();

export default Input;
