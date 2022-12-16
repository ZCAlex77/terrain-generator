const Terrain = (props) => {
  const getProps = (propName = null) => {
    if (propName) {
      return props[propName];
    }
    return props;
  };

  const setColor = (newColor) => (props.color = newColor);
  const setName = (newName) => (props.name = newName);

  const getRandomHeightChange = () => {
    if (Math.random() * 101 < props.smoothness) return 0;
    const randomNumber = Math.floor(Math.random() * props.steepness);
    const randomNumber2 = Math.random();

    if (!randomNumber) return 0;
    switch (Math.floor(randomNumber / 20)) {
      case 4:
        return randomNumber2 < 0.5 ? 4 : 5;
      case 3:
        return randomNumber2 < 0.5 ? 3 : 4;
      case 2:
        return randomNumber2 < 0.5 ? 2 : 3;
      case 1:
        return randomNumber2 < 0.5 ? 1 : 2;
      case 0:
        return randomNumber2 < 0.5 ? 0 : 1;
    }
  };

  const generate = (() => {
    if (props.maxPoints.length) return;
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
