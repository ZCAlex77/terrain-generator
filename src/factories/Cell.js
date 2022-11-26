const Cell = (backgroundColor) => {
  const getColor = () => backgroundColor;
  const setColor = (newColor) => (backgroundColor = newColor);

  return {
    getColor,
    setColor,
  };
};

export default Cell;
