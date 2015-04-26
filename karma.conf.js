'use strict'

module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: [
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.spec.js': 'browserify'
    },
    browsers: ['PhantomJS']
  })
}
