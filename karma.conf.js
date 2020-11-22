module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ["ChromeHeadless", "FirefoxHeadless", "jsdom"],
    concurrency: 1,
    files: ["target/**/*.bench.js"],
    frameworks: ["benchmark", "browserify"],
    preprocessors: { "target/**/*.js": ["browserify"] },
    reporters: ["benchmark"],
    singleRun: true,
  });
};
