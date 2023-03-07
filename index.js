const core = require('@actions/core');
const github = require('@actions/github');

try {
  const defInput = core.getInput('def-input');
  console.log(`DefInput ${defInput.slice(0,3)}-${defInput.slice(3)}!`);
  core.setOutput("defOutput", defInput);
  console.log(`DefOutput ${defInput}!`);
  core.exportVariable('DefOutput', defInput);

} catch (error) {
  core.setFailed(error.message);
}
