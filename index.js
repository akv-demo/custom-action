const core = require('@actions/core');
const glob = require('@actions/glob');

const pattern = core.getInput('pattern');
core.info(`pattern = "${pattern}"`)

glob.create(pattern)
    .then(globber => globber.glob())
    .then(expanded => {
        if (expanded.length > 0) {
            expanded.forEach((p, i) => {
                core.info(`${i + 1}: "${p}"`);
            })
        } else {
            core.info('No path expanded');
        }
    });
