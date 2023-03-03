const core = require('@actions/core');
const github = require('@actions/github');

try {
  const defInput = core.getInput('def-input');
  core.setOutput("defOutput", defInput);
  console.log(`DefOutput ${defInput}!`);
  core.exportVariable('DefOutput', defInput);

} catch (error) {
  core.setFailed(error.message);
}
