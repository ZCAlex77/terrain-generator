const Terrain = (options) => {
  const maxPoints = [];

  const getMaxPoints = () => maxPoints;

  const getRandomHeightChange = () => {
    const randomNumber = Math.floor(Math.random() * options.steepness);
    if (randomNumber >= 80) return 4;
    if (randomNumber >= 60) return 3;
    if (randomNumber >= 40) return 2;
    if (randomNumber >= 10) return 1;
    if (randomNumber >= 0) return 0;
  };

  const generate = (() => {
    let direction = Math.random() < 0.5 ? -1 : 1;
    let currentPosition =
      Math.floor(Math.random() * (options.maxHeight - options.minHeight)) +
      options.minHeight;

    for (let i = 0; i < options.width; i++) {
      maxPoints.push(currentPosition);
      currentPosition += direction * getRandomHeightChange();
      if (currentPosition <= options.minHeight) {
        currentPosition = options.minHeight;
        direction = -direction;
      }
      if (currentPosition >= options.maxHeight) {
        currentPosition = options.maxHeight;
        direction = -direction;
      }
    }
  })();

  return {
    getMaxPoints,
  };
};
