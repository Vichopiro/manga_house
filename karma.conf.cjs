module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: ['tests/**/*.spec.jsx'],
    preprocessors: {
      'tests/**/*.spec.jsx': ['webpack'],
    },
    webpack: {
      mode: 'development',
      devtool: false,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: [['istanbul', { exclude: ['tests/**'] }]],
              },
            },
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
      },
      resolve: { extensions: ['.js', '.jsx'] },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    singleRun: true,
  });
};
