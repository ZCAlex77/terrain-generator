const UI = (() => {
  const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    optionGroups = document.querySelectorAll('.option-group'),
    options = document.querySelectorAll('.option');

  let unit = null;
  let columns = null;
  let rows = null;
  let isGridVisible = false;

  const setCanvasBackground = (newBackground) => {
    canvas.style.background = newBackground;
  };

  const showOption = (element, index) => {
    options.forEach((option) => (option.style.display = 'none'));
    options[index].style.display = 'block';
    optionGroups.forEach(
      (group) => (group.children[0].style.transform = 'rotate(90deg)')
    );
    element.children[0].style.transform = 'rotate(-90deg)';
  };

  const toggleGrid = (newState) => {
    isGridVisible = newState;
    refreshScreen();
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

  const refreshScreen = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isGridVisible) drawGrid();
  };

  return {
    toggleGrid,
    refreshScreen,
    showOption,
    hideSetupScreen,
    setCanvasBackground,
    setGridSize,
    resizeCanvas,
  };
})();

export default UI;
