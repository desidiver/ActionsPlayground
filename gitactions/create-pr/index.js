const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log('The event payload:',core,github);
} catch (error) {
  core.setFailed(error.message);
}