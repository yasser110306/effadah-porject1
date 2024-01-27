module.exports = function (api) {
  api.cache(true);

  const presets = [
    // Add your presets here if you have any
  ];

  const plugins = [
    "@babel/plugin-proposal-private-property-in-object",
    // Add other plugins if needed
  ];

  return {
    presets,
    plugins,
  };
};
