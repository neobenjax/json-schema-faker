module.exports = {
  register(jsf) {
    return jsf.option({
      useDefaultValue: true,
      optionalsProbability: 1.0,
    });
  },
};
