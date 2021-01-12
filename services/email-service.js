const nodemailer = require('nodemailer');
const config = require('../config');

class EmailService {
    constructor(host, userName, password) {
        this.host = host;
        this.userName = userName;
        this.password = password;

        this.transporter = this.createTransporter();
    }

    createTransporter() {
        if (config.env === 'production') {
            /// Gmail
            /// ACTIVATE in Gmail "less secure app" option
            /// https://nodemailer.com/usage/using-gmail/

            /// SendGrid
            /// https://app.sendgrid.com/guide/integrate/langs/smtp

            return nodemailer.createTransport({
                service: this.host,
                auth: {
                    user: this.userName,
                    pass: this.password
                }
            });
        }

        /// Dev Mail Server
        /// https://mailtrap.io/inboxes/1025540/messages
        return nodemailer.createTransport({
            host: this.host,
            auth: {
                user: this.userName,
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
        try {
            await this.transporter.sendMail(options);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = EmailService;