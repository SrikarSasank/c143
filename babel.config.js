module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "sourceType": "unambiguous",
     "plugins": ["@babel/plugin-transform-runtime"],
  };
};
