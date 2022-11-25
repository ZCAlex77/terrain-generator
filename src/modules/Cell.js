const Cell = (index, backgroundColor) => {
  const getBackgroundColor = () => backgroundColor;
  const setBackgroundColor = (newColor) => (backgroundColor = newColor);

  return {
    index,
    getBackgroundColor,
    setBackgroundColor,
  };
};

export default Cell;
