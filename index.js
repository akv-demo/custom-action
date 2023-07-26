const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const defnreq = core.getInput('defnreq');
  console.log({defnreq});

  const defno = core.getInput('defno');
  console.log({defno});
} catch (error) {
  core.setFailed(error.message);
}
