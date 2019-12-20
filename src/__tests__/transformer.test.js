const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'transformer', null, 'update-addon-info');
