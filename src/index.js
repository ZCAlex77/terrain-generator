import './styles/index.scss';
import Input from './modules/Input';
import UI from './modules/UI';
import Storage from './modules/Storage';
import Cell from './factories/Cell';
import Terrain from './factories/Terrain';

const App = (() => {
  // Temporary (or not, the other option is a buggy mess so I'll stick to this for now)
  UI.setGridSize('54', '100');
  UI.resizeCanvas();
  UI.showOption(1);
  // ---------

  let terrainArray = [];
  const cells = [];

  // cell generation
  const generateCells = (numberOfCells) => {
    let numberOfColumns = UI.getGridSize().columns;

    for (let i = 0; i < numberOfCells; i++) {
      if (!cells[i % numberOfColumns]) cells[i % numberOfColumns] = [];
      cells[i % numberOfColumns].push(Cell('#fff0'));
    }
  };

  generateCells(100 * 54);

  const prepareRender = () => {
    const gridHeight = UI.getGridSize().rows;
    cells.forEach((row) => row.forEach((cell) => cell.setColor('#fff0')));

    for (let i = 0; i < terrainArray.length; i++) {
      let maxPoints = terrainArray[i].getProps('maxPoints');
      for (let j = 0; j < maxPoints.length; j++) {
        let maxPoint =
          maxPoints[j] < gridHeight ? maxPoints[j] : gridHeight - 1;
        for (let k = 0; k <= maxPoint; k++)
          cells[j][k].setColor(terrainArray[i].getProps('color'));
      }
    }

    UI.renderScreen(cells);
  };

  // terrain-related functions
  const getTerrain = (terrainId) => {
    return terrainArray.find((terrain) => terrain.getProps('id') === terrainId);
  };

  const getTerrainIndex = (terrainId) =>
    terrainArray.findIndex((terrain) => terrain.getProps('id') === terrainId);

  const addTerrain = (terrain) => {
    terrainArray.push(terrain);
    Storage.saveTerrains(terrainArray);
    prepareRender();
  };

  const deleteTerrain = (terrainId) => {
    terrainArray = terrainArray.filter(
      (terrain) => terrain.getProps('id') !== terrainId
    );

    Storage.saveTerrains(terrainArray);
    prepareRender();
  };

  const updateTerrain = (updatedTerrain) => {
    let targetTerrain = getTerrainIndex(updatedTerrain.getProps('id'));
    if (targetTerrain !== -1) {
      terrainArray[targetTerrain] = updatedTerrain;
      Storage.saveTerrains(terrainArray);
      prepareRender();
    }
  };

  const updateTerrainProps = (terrainId, propValue, prop) => {
    const targetTerrain = getTerrainIndex(terrainId);

    switch (prop) {
      case 'color':
        terrainArray[targetTerrain].setColor(propValue);
        prepareRender();
        break;
      case 'name':
        terrainArray[targetTerrain].setName(propValue);
        break;
    }

    Storage.saveTerrains(terrainArray);
  };

  const moveTerrain = (terrainId, newIndex) => {
    const terrainIndex = terrainArray.findIndex(
      (terrain) => terrain.getProps('id') === terrainId
    );
    [terrainArray[terrainIndex], terrainArray[newIndex]] = [
      terrainArray[newIndex],
      terrainArray[terrainIndex],
    ];
    prepareRender();
  };

  const loadSavedTerrains = (() => {
    const savedTerrains = Storage.loadTerrains();
    savedTerrains.forEach((props) => {
      const terrain = Terrain(props);
      addTerrain(terrain);
      Input.updateSelectInput(terrain, 'add');
    });
  })();

  return {
    getTerrainIndex,
    deleteTerrain,
    updateTerrain,
    updateTerrainProps,
    moveTerrain,
    prepareRender,
    generateCells,
    addTerrain,
    getTerrain,
  };
})();

export default App;

/*
  TODO:
  - fix bug preventing image backgrounds (ETA: the end of the world)
  - find out why the App module is initialized twice
*/
