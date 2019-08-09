const start = require('./base');
const cron = require('node-cron');
const CONFIG = require('./config.json');
 
cron.schedule(CONFIG.cron, () => {
    start.puppet;
});
