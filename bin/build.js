const fs = require('fs-extra')
const uglifyJS = require('uglify-js-es6')

fs.readFile('src/index.js', 'utf8')
  .then(content => fs.writeFile('dist/index.js', content))
  .then(() => uglifyJS.minify(['dist/index.js'], { compress: { dead_code: true, global_defs: { DEBUG: false } } }).code)
  .then(content => fs.writeFile('dist/index.js', content))
