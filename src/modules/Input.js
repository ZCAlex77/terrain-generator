import UI from './UI';
import App from '../index';
import Terrain from '../factories/Terrain';
import { v4 as uuidv4 } from 'uuid';

const Input = (() => {
  const selectInput = document.querySelector('select'),
    terrainOptionsForm = document.querySelector('#terrain-options'),
    zIndexInput = document.querySelector('#z-index');

  let terrainIndex = 0; // for terrain naming purposes
  let currentSelection = null; // tracks the current selected terrain

  // add or remove <option> elements when a terrain is added or removed
  const updateSelectInput = (entry, updateType, updatePayload) => {
    let targetOption = null;

    if (typeof entry === 'string')
      targetOption = Array.from(selectInput.children).filter(
        (el) => el.value === entry
      )[0];

    switch (updateType) {
      case 'add':
        const option = document.createElement('option');
        option.value = entry.getProps('id');
        option.textContent = entry.getProps('name');
        selectInput.append(option);
        break;
      case 'remove':
        selectInput.value = 'new';
        targetOption.remove();
        break;
      case 'update':
        targetOption.textContent = updatePayload;
    }
  };

  // get current selection's props and set the input values to them
  const updateTerrainOptions = (newInputValues) => {
    const form = terrainOptionsForm;
    form.minHeight.value = newInputValues.minHeight;
    form.maxHeight.value = newInputValues.maxHeight;
    form.steepness.value = newInputValues.steepness;
    form.smoothness.value = newInputValues.smoothness;
    form.terrainColor.value = newInputValues.color;
    form.terrainName.value = newInputValues.name;

    form.minHeight.max = newInputValues.maxHeight;
    form.maxHeight.min = newInputValues.minHeight;
  };

  const handleSelectInputChange = () => {
    if (selectInput.value === 'new') {
      currentSelection = null;
      UI.changeGenerateButtonText('Generate');
      UI.toggleSelectedTerrainOptions(false);
      updateTerrainOptions({
        minHeight: 0,
        maxHeight: 1,
        steepness: 50,
        smoothness: 0,
        color: '#00ff00',
        name: '',
      });
      return;
    }

    currentSelection = selectInput.value;
    UI.changeGenerateButtonText('Re-generate');
    UI.toggleSelectedTerrainOptions(true);
    const targetTerrain = App.getTerrain(currentSelection);
    updateTerrainOptions(targetTerrain.getProps());
    zIndexInput.value = App.getTerrainIndex(currentSelection);
  };

  // TERRAIN OPTIONS
  // -- form & select input
  selectInput.onchange = handleSelectInputChange;

  terrainOptionsForm.onsubmit = (ev) => {
    ev.preventDefault();

    let minHeight = Number(ev.target.minHeight.value),
      maxHeight = Number(ev.target.maxHeight.value);

    if (minHeight > maxHeight) return;

    const steepness = Number(ev.target.steepness.value),
      smoothness = Number(ev.target.smoothness.value),
      color = ev.target.terrainColor.value,
      width = UI.getGridSize().columns;

    let name = ev.target.terrainName.value;
    if (!name.length && !currentSelection) {
      name = 'terrain' + terrainIndex;
      terrainIndex++;
    }

    const id = currentSelection ?? uuidv4();
    const newTerrain = Terrain({
      id,
      name,
      minHeight,
      maxHeight,
      steepness,
      smoothness,
      color,
      width,
    });

    if (!currentSelection) {
      updateSelectInput(newTerrain, 'add');
      App.addTerrain(newTerrain);
      zIndexInput.max = Number(zIndexInput.max) + 1;
    } else {
      App.updateTerrain(newTerrain);
    }
  };

  // -- buttons
  document.querySelector('#delete-terrain-btn').onclick = () => {
    App.deleteTerrain(currentSelection);
    updateSelectInput(currentSelection, 'remove');
    handleSelectInputChange();
    zIndexInput.max = Number(zIndexInput.max) - 1;
  };

  // -- individual input change events
  zIndexInput.onchange = (ev) => {
    if (!currentSelection) return;
    App.moveTerrain(currentSelection, ev.target.value);
  };

  terrainOptionsForm.maxHeight.onchange = (ev) => {
    const minHeight = Number(terrainOptionsForm.minHeight.value);
    terrainOptionsForm.minHeight.max = ev.target.value;
    ev.target.min = minHeight;
  };

  terrainOptionsForm.minHeight.onchange = (ev) => {
    const maxHeight = Number(terrainOptionsForm.maxHeight.value);
    terrainOptionsForm.maxHeight.min = ev.target.value;
    ev.target.max = maxHeight;
  };

  terrainOptionsForm.terrainColor.onchange = (ev) => {
    if (!currentSelection) return;
    App.updateTerrainProps(currentSelection, ev.target.value, 'color');
  };

  terrainOptionsForm.terrainName.onchange = (ev) => {
    if (!currentSelection) return;
    App.updateTerrainProps(currentSelection, ev.target.value, 'name');
    updateSelectInput(currentSelection, 'update', ev.target.value);
  };

  // GENERAL OPTIONS
  // makes sure only one background input is active
  document.querySelectorAll('.background-choice').forEach((choice) => {
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

  document.querySelector('#background-color').onchange = (ev) => {
    UI.setCanvasBackground(ev.target.value);
  };

  document.querySelector('#background-image').onchange = (ev) => {
    if (/.+\.(png|jpg|gif|jpeg)$/.test(ev.target.value)) {
      ev.target.setCustomValidity('');
      UI.setCanvasBackground("url('" + ev.target.value + "')");
    } else {
      ev.target.setCustomValidity('File must end in png, jpg or gif');
      return;
    }
  };

  document.querySelector('#grid-toggle').onchange = (ev) => {
    UI.toggleGrid(ev.target.checked);
    App.prepareRender();
  };

  // OPTION GROUPS
  // switches between option groups on click
  document.querySelectorAll('.option-group').forEach((el) => {
    el.onclick = (ev) => {
      UI.showOption(Number(ev.target.dataset.option));
    };
  });

  // SETUP SCREEN
  document.querySelector('#begin').onclick = () => {
    const rows = document.querySelector('#rows').value;
    const columns = document.querySelector('#columns').value;

    UI.setGridSize(rows, columns);
    UI.resizeCanvas();
    UI.hideSetupScreen();

    App.generateCells(rows * columns);
  };

  return {
    updateTerrainOptions,
  };
})();

export default Input;
