const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(typeof nameToGreet);
  console.log(nameToGreet);
  console.log(JSON.parse(nameToGreet));
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  const sampleVar = core.getInput('sample-env-var');
  console.log(`SampleVar ${sampleVar}!`);
  core.exportVariable('sampleVar', sampleVar);

  const id = core.getInput('id');
  console.log(`ID ${id}!`);

} catch (error) {
  core.setFailed(error.message);
}
