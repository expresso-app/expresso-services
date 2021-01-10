const nodemailer = require('nodemailer');
const config = require('../config');

class EmailService {
    constructor(host, email, password) {
        this.host = host;
        this.email = email;
        this.password = password;

        this.createTransporter();
    }

    createTransporter = () => {
        let transporter = null;

        if(config.env === 'production') {
            // ACTIVATE in Gmail "less secure app" option
            // https://nodemailer.com/usage/using-gmail/
            transporter = nodemailer.createTransport({
                service: this.host,
                auth: {
                    user: this.email,
                    pass: this.password
                }
            });
        } else {
            // Dev Mail Server: https://mailtrap.io/inboxes/1025540/messages
            transporter = nodemailer.createTransport({
                host: this.host,
                auth: {
                    user: this.email,
                    pass: this.password
                }
            });
        }

        this.transporter = transporter;
    }

    sendEmail = async options => {
        await this.transporter.sendMail(options);
    }
}

module.exports = EmailService;