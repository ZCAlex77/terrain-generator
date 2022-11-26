import UI from './UI';
import App from '../index';
import Terrain from '../factories/Terrain';
import { v4 as uuidv4 } from 'uuid';

const Input = (() => {
  const setupButton = document.querySelector('#begin'),
    optionGroups = document.querySelectorAll('.option-group'),
    backgroundChoices = document.querySelectorAll('.background-choice'),
    backgroundColorInput = document.querySelector('#background-color'),
    backgroundImageInput = document.querySelector('#background-image'),
    toggleGridInput = document.querySelector('#grid-toggle'),
    terrainOptionsForm = document.querySelector('#terrainOptions'),
    selectInput = document.querySelector('select'),
    deleteTerrainBtn = document.querySelector('#deleteTerrainBtn');

  let terrainIndex = 0;
  let currentSelection = null;

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

  const updateTerrainOptions = (newInputValues) => {
    const form = terrainOptionsForm;
    form.minHeight.value = newInputValues.minHeight;
    form.maxHeight.value = newInputValues.maxHeight;
    form.steepness.value = newInputValues.steepness;
    form.terrainColor.value = newInputValues.color;
    form.terrainName.value = newInputValues.name;
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
        color: '#000000',
        name: '',
      });
      return;
    }

    currentSelection = selectInput.value;
    UI.changeGenerateButtonText('Re-generate');
    UI.toggleSelectedTerrainOptions(true);
    const targetTerrain = App.getTerrain(currentSelection);
    updateTerrainOptions(targetTerrain.getProps());
  };

  deleteTerrainBtn.onclick = () => {
    if (!currentSelection) return;
    const confirmation = window.confirm(
      'Are you sure you want to delete selected terrain?'
    );
    if (confirmation) {
      App.deleteTerrain(currentSelection);
      updateSelectInput(currentSelection, 'remove');
      handleSelectInputChange();
    }
  };

  terrainOptionsForm.maxHeight.onchange = (ev) => {
    const minHeight = Number(terrainOptionsForm.minHeight.value);
    if (Number(ev.target.value) < minHeight) ev.target.value = minHeight;
  };

  terrainOptionsForm.minHeight.onchange = (ev) => {
    const maxHeight = Number(terrainOptionsForm.maxHeight.value);
    if (Number(ev.target.value) > maxHeight) ev.target.value = maxHeight;
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

  selectInput.onchange = handleSelectInputChange;

  terrainOptionsForm.onsubmit = (ev) => {
    ev.preventDefault();

    let minHeight = Number(ev.target.minHeight.value),
      maxHeight = Number(ev.target.maxHeight.value);

    if (minHeight > maxHeight) return;

    const steepness = Number(ev.target.steepness.value),
      color = ev.target.terrainColor.value,
      width = UI.getGridSize().columns;

    let name = ev.target.terrainName.value;
    if (!name.length) name = 'terrain' + terrainIndex;
    terrainIndex++;

    const id = currentSelection ?? uuidv4();
    const newTerrain = Terrain({
      id,
      name,
      minHeight,
      maxHeight,
      steepness,
      color,
      width,
    });

    if (!currentSelection) {
      updateSelectInput(newTerrain, 'add');
      App.addTerrain(newTerrain);
    } else {
      App.updateTerrain(newTerrain);
    }
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

  return {
    updateTerrainOptions,
  };
})();

export default Input;
