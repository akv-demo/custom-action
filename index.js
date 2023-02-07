const core = require('@actions/core');

core.info('before')
core.setFailed("ERROR");
core.info('after')
