const Terrain = (props) => {
  const getProps = (propName = null) => {
    if (propName) {
      return props[propName];
    }
    return props;
  };

  const setColor = (newColor) => (props.color = newColor);
  const setName = (newName) => (props.name = newName);

  const generateRandomTerrain = () => {
    const terrain = [];
    for (let i = 0; i < 100; i++)
      terrain.push(
        Math.floor(Math.random() * (props.maxHeight - props.minHeight)) +
          props.minHeight
      );

    return terrain;
  };

  const linp = (a, b, mu) => {
    return a * (1 - mu) + b * mu;
  };

  const cosp = (a, b, mu) => {
    const mu2 = (1 - Math.cos(mu * Math.PI)) / 2;
    return a * (1 - mu2) + b * mu2;
  };

  const interpolateTerrain = (naiveTerrain, sample = 30) => {
    const terrain = [];
    const samplePoints = [];

    for (let i = 0; i < naiveTerrain.length; i += sample)
      samplePoints.push(naiveTerrain[i]);

    for (let i = 0; i < samplePoints.length; i++) {
      terrain.push(samplePoints[i]);

      for (let j = 0; j < sample - 1; j++) {
        let mu = (j + 1) / sample;
        let a = samplePoints[i];
        let b = samplePoints[(i + 1) % samplePoints.length];
        let v = cosp(a, b, mu);

        terrain.push(Math.floor(v));
      }
    }

    terrain.length = 100;
    return terrain;
  };

  const generate = (() => {
    if (props.maxPoints.length) return;

    const randomTerrain = generateRandomTerrain();
    const interpolatedTerrain = interpolateTerrain(
      randomTerrain,
      props.sampleSize
    );
    props.maxPoints = interpolatedTerrain;
  })();

  return {
    setName,
    setColor,
    getProps,
  };
};

export default Terrain;
