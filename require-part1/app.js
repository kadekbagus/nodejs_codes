console.log('starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello World! ${user.username}`);