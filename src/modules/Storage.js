const Storage = (() => {
  const saveTerrains = (terrainArr) => {
    localStorage.setItem(
      'generated-terrains',
      JSON.stringify(terrainArr.map((terrain) => terrain.getProps()))
    );
  };

  const loadTerrains = () => {
    const savedTerrains =
      JSON.parse(localStorage.getItem('generated-terrains')) ?? [];
    return savedTerrains;
  };

  return {
    saveTerrains,
    loadTerrains,
  };
})();

export default Storage;
