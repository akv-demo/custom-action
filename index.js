const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(process.env);
  const defInput = core.getInput('def-input');
  console.log(`defInput: ${defInput}!`);
  core.setOutput("defOutput", defInput);
  console.log(`DefOutput ${defInput}!`);
  core.exportVariable('DefOutput', defInput);

} catch (error) {
  core.setFailed(error.message);
}
