var cron = require('node-cron');
let app = require('./app.js');

cron.schedule('*/3 * * * * *', function () {
    console.log('info', 'running a task every minute / ' + new Date());
    app.run();
}).start();
