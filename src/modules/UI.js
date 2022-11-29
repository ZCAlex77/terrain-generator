const UI = (() => {
  const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    optionGroups = document.querySelectorAll('.option-group'),
    arrows = document.querySelectorAll('.arrow'),
    options = document.querySelectorAll('.option'),
    selectedTerrainOptions = document.querySelectorAll('.terrain-selected');

  let unit = null;
  let columns = null;
  let rows = null;
  let isGridVisible = false;
  let lastOpenOption = 0;

  const toggleSelectedTerrainOptions = (state) => {
    selectedTerrainOptions.forEach(
      (option) => (option.style.display = state ? 'block' : 'none')
    );
  };

  const changeGenerateButtonText = (newText) =>
    (document.querySelector('#generate-terrain-btn').value = newText);

  const setCanvasBackground = (newBackground) => {
    canvas.style.background = newBackground;
  };

  const showOption = (index) => {
    options.forEach((option, i) => {
      if (i !== index) {
        option.style.display = 'none';
        arrows[i].style.transform = 'rotate(90deg)';
      }
    });

    let currentOpenState = options[index].style.display;
    options[index].style.display =
      currentOpenState === 'none' ? 'block' : 'none';
    arrows[index].style.transform =
      currentOpenState === 'none' ? 'rotate(-90deg)' : 'rotate(90deg)';
  };

  const toggleGrid = (newState) => {
    isGridVisible = newState;
  };

  const getGridSize = () => {
    return {
      rows,
      columns,
    };
  };

  const setGridSize = (rowsNum, columnsNum) => {
    rows = Number(rowsNum);
    columns = Number(columnsNum);
    unit = Math.floor((0.7 * innerHeight) / rows);
  };

  const hideSetupScreen = () => {
    document.querySelector('.setup').style.display = 'none';
  };

  const resizeCanvas = () => {
    canvas.width = unit * columns;
    canvas.height = unit * rows;
  };

  const drawGrid = () => {
    ctx.strokeStyle = '#fff';

    for (let i = 0; i <= columns; i++) {
      ctx.beginPath();
      ctx.moveTo(unit * i, 0);
      ctx.lineTo(unit * i, canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i <= rows; i++) {
      ctx.beginPath();
      ctx.moveTo(0, unit * i);
      ctx.lineTo(canvas.width, unit * i);
      ctx.stroke();
    }
  };

  const renderCells = (cells) => {
    for (let i = 0; i < cells.length; i++)
      for (let j = 0; j < cells[i].length; j++) {
        ctx.fillStyle = cells[i][j].getColor();
        let x = i * unit;
        let y = (rows - j) * unit;
        ctx.fillRect(x, y, unit, unit);
      }
  };

  const renderScreen = (cells = null) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (cells) renderCells(cells);
    if (isGridVisible) drawGrid();
  };

  return {
    toggleSelectedTerrainOptions,
    changeGenerateButtonText,
    toggleGrid,
    renderScreen,
    showOption,
    hideSetupScreen,
    setCanvasBackground,
    getGridSize,
    setGridSize,
    resizeCanvas,
  };
})();

export default UI;
