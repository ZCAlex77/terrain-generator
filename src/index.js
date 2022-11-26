import './styles/index.scss';
import Input from './modules/Input';
import UI from './modules/UI';
import Cell from './factories/Cell';

const App = (() => {
  // Temporary
  UI.setGridSize('54', '100');
  UI.resizeCanvas();
  UI.showOption(document.querySelector('.option-group'), 1);
  // ---------

  let cells = [];
  let terrains = [];

  const prepareRender = () => {
    const gridHeight = UI.getGridSize().rows;
    cells.forEach((row) => row.forEach((cell) => cell.setColor('#fff0')));

    for (let i = 0; i < terrains.length; i++) {
      let maxPoints = terrains[i].getProps('maxPoints');
      for (let j = 0; j < maxPoints.length; j++) {
        let maxPoint =
          maxPoints[j] < gridHeight ? maxPoints[j] : gridHeight - 1;
        for (let k = 0; k <= maxPoint; k++)
          cells[j][k].setColor(terrains[i].getProps('color'));
      }
    }

    UI.renderScreen(cells);
  };

  const getTerrain = (terrainId) => {
    return terrains.find((terrain) => terrain.getProps('id') === terrainId);
  };

  const deleteTerrain = (terrainId) => {
    terrains = terrains.filter(
      (terrain) => terrain.getProps('id') !== terrainId
    );
    prepareRender();
  };

  const updateTerrainProps = (terrainId, propValue, prop) => {
    const targetTerrain =
      terrains[
        terrains.findIndex((terrain) => terrain.getProps('id') === terrainId)
      ];

    switch (prop) {
      case 'color':
        targetTerrain.setColor(propValue);
        prepareRender();
        break;
      case 'name':
        targetTerrain.setName(propValue);
        break;
    }
  };

  const updateTerrain = (updatedTerrain) => {
    let targetTerrain = terrains.findIndex(
      (terrain) => terrain.getProps('id') === updatedTerrain.getProps('id')
    );
    if (targetTerrain !== -1) {
      terrains[targetTerrain] = updatedTerrain;
      prepareRender();
    }
  };

  const addTerrain = (terrain) => {
    terrains.push(terrain);
    prepareRender();
  };

  const generateCells = (numberOfCells) => {
    let numberOfColumns = UI.getGridSize().columns;

    for (let i = 0; i < numberOfCells; i++) {
      if (!cells[i % numberOfColumns]) cells[i % numberOfColumns] = [];
      cells[i % numberOfColumns].push(Cell('#fff0'));
    }
  };

  generateCells(100 * 54); // to be removed later

  return {
    deleteTerrain,
    updateTerrain,
    updateTerrainProps,
    prepareRender,
    generateCells,
    addTerrain,
    getTerrain,
  };
})();

export default App;

/*
  TODO:
  - fix bug preventing image backgrounds
  - fix visual bug (menu arrows)
*/
