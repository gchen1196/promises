/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird')
var fsFunctions = Promise.promisifyAll(fs);
var getProfile = require("./promisification");
var getUserName = require('./promiseConstructor')




var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // First pluckFirstLineFromFileAsync to get the first name 
  // use getGitHubProfileAsync to get user profile with first name
  // use fs.writeFile to 


    return getUserName.pluckFirstLineFromFileAsync(readFilePath)

    .then((username) => {

    return getProfile.getGitHubProfileAsync(username)
  
    }).then((data) => {
      var stringify = JSON.stringify(data);
      console.log('THIS IS STRING', stringify);
      console.log('THIS IS FILE PATH', writeFilePath)
      return fsFunctions.writeFileAsync(writeFilePath, stringify, 'utf8')
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
