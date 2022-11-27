const Terrain = (props) => {
  props.maxPoints = [];

  const getProps = (propName = null) => {
    if (propName) {
      return props[propName];
    }
    return props;
  };

  const setColor = (newColor) => (props.color = newColor);
  const setName = (newName) => (props.name = newName);

  const getRandomHeightChange = () => {
    if (Math.random() * 101 < props.smoothness) {
      return 0;
    }
    const randomNumber = Math.floor(Math.random() * props.steepness);
    if (randomNumber >= 90) return 5;
    if (randomNumber >= 70) return 4;
    if (randomNumber >= 50) return 3;
    if (randomNumber >= 20) return 2;
    if (randomNumber > 0) return Math.random() > 0.5 ? 1 : 0;
    if (randomNumber === 0) return 0;
  };

  const generate = (() => {
    let direction = Math.random() < 0.5 ? -1 : 1;
    let currentPosition =
      Math.floor(Math.random() * (props.maxHeight - props.minHeight)) +
      props.minHeight;

    for (let i = 0; i < props.width; i++) {
      props.maxPoints.push(currentPosition);
      currentPosition += direction * getRandomHeightChange();
      if (currentPosition <= props.minHeight) {
        currentPosition = props.minHeight;
        direction = -direction;
      }
      if (currentPosition >= props.maxHeight) {
        currentPosition = props.maxHeight;
        direction = -direction;
      }
    }
  })();

  return {
    setName,
    setColor,
    getProps,
  };
};

export default Terrain;
