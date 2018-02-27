const express = require('express');
const app = express();

const logger = require('logger').createLogger();

const appConfig = require("../config/app");


app.listen(appConfig.APP_PORT,() => {
    logger.info(`SHA: Smart Home Automation, is running in the port :${appConfig.APP_PORT}`);
});