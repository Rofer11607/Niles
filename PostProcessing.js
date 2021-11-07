const fs = require('fs');

// <-- Import End -->

const CONSTANTS = {
  productionFilePath: './bin/main.js',
  shebang: '#!/usr/bin/env node',
};

// <-- Variable Definition End -->

const file = fs.readFileSync(CONSTANTS.productionFilePath, 'utf8');
fs.writeFileSync(CONSTANTS.productionFilePath, CONSTANTS.shebang + '\n' + file);
