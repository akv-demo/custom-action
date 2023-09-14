const core = require('@actions/core');
const glob = require('@actions/glob');

const pattern1 = core.getInput('pattern');
core.info(`pattern1 = "${pattern1}"`)

const pattern2 = core.getInput('pattern2');
core.info(`pattern2 = "${pattern2}"`)

const pattern = pattern1 + '\n'+pattern2
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
