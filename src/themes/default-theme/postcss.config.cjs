const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    postcssImport,
    postcssPresetEnv({ stage: 0 }),
    cssnano({
      preset: [
        'cssnano-preset-lite',
        {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          minifySelectors: true,
          minifyFontValues: true
        }
      ]
    })
  ]
};
