import UI from './UI';
import App from '../index';
import Terrain from './Terrain';

const Input = (() => {
  const setupButton = document.querySelector('#begin'),
    optionGroups = document.querySelectorAll('.option-group'),
    backgroundChoices = document.querySelectorAll('.background-choice'),
    backgroundColorInput = document.querySelector('#background-color'),
    backgroundImageInput = document.querySelector('#background-image'),
    toggleGridInput = document.querySelector('#grid-toggle'),
    terrainOptionsForm = document.querySelector('#terrainOptions');

  terrainOptionsForm.onsubmit = (ev) => {
    ev.preventDefault();
    ev.target.minHeight.setCustomValidity('');

    let minHeight = Number(ev.target.minHeight.value),
      maxHeight = Number(ev.target.maxHeight.value);

    if (minHeight > maxHeight) {
      ev.target.minHeight.setCustomValidity(
        'Minimum height must be lower than maximum height!'
      );
      return;
    }

    const steepness = Number(ev.target.steepness.value),
      color = ev.target.terrainColor.value,
      width = UI.getGridSize().columns;

    const newTerrain = Terrain({
      minHeight,
      maxHeight,
      steepness,
      color,
      width,
    });

    App.addTerrain(newTerrain);
  };

  toggleGridInput.onchange = (ev) => {
    UI.toggleGrid(ev.target.checked);
    App.prepareRender();
  };

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

    App.generateCells(rows * columns);
  };
})();

export default Input;
