import UI from './UI';

const Input = (() => {
  const setupButton = document.querySelector('#begin'),
    optionGroups = document.querySelectorAll('.option-group'),
    backgroundChoices = document.querySelectorAll('.background-choice'),
    backgroundColorInput = document.querySelector('#background-color'),
    backgroundImageInput = document.querySelector('#background-image'),
    toggleGridInput = document.querySelector('#grid-toggle');

  toggleGridInput.onchange = (ev) => UI.toggleGrid(ev.target.checked);

  backgroundChoices.forEach((choice) => {
    choice.onchange = (ev) => {
      switch (ev.target.value) {
        case 'color':
          backgroundImageInput.disabled = true;
          backgroundColorInput.disabled = false;
          break;
        case 'image':
          backgroundColorInput.disabled = true;
          backgroundImageInput.disabled = false;
      }
    };
  });

  backgroundColorInput.onchange = (ev) => {
    UI.setCanvasBackground(ev.target.value);
  };

  backgroundImageInput.onchange = (ev) => {
    if (/.+\.(png|jpg|gif|jpeg)$/.test(ev.target.value)) {
      ev.target.setCustomValidity('');
      UI.setCanvasBackground("url('" + ev.target.value + "')");
    } else {
      ev.target.setCustomValidity('File must end in png, jpg or gif');
      return;
    }
  };

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
