const nodemailer = require('nodemailer');
const config = require('../config');

class EmailService {
    constructor(host, email, password) {
        this.host = host;
        this.email = email;
        this.password = password;

        this.transporter = this.createTransporter();
    }

    createTransporter() {
        if (config.env === 'production') {
            // ACTIVATE in Gmail "less secure app" option
            // https://nodemailer.com/usage/using-gmail/
            return nodemailer.createTransport({
                service: this.host,
                auth: {
                    user: this.email,
                    pass: this.password
                }
            });

            // /// SendGrid
            // return 1;
        }

        // Dev Mail Server: https://mailtrap.io/inboxes/1025540/messages
        return nodemailer.createTransport({
            host: this.host,
            auth: {
                user: this.email,
                pass: this.password
            }
        });
    }

    /**
    * Sends email using specified options object
    * @param {string} options.from - sender address
    * @param {string} options.to - list of receivers
    * @param {string} options.subject - Subject line
    * @param {string} options.text - plain text body
    * @param {string} options.html - html body
    */
    async sendEmail(options) {
        return await this.transporter.sendMail(options);
    }
}

module.exports = EmailService;