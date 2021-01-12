require('custom-env').env(true);

module.exports = {
    env: process.env.NODE_ENV || "development",
    app_env: process.env.APP_ENV || "local",
    email: {
        address: process.env.EMAIL_ADDRESS,
        host: process.env.EMAIL_HOST,
        userName: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD
    }
};