const path = require('path');

require('custom-env').env(true);

module.exports = {
    env: process.env.NODE_ENV || "development",
    app_env: process.env.APP_ENV || "local",
    email_host: process.env.EMAIL_HOST,
    email_address: process.env.EMAIL_ADDRESS,
    email_password: process.env.EMAIL_PASSWORD
};