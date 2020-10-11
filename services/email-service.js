const nodemailer = require('nodemailer');

class EmailService {
    constructor(host, email, password) {
        this.host = host;
        this.email = email;
        this.password = password;
    }

    // Dev Mail Server: https://mailtrap.io/inboxes/1025540/messages
    sendEmailDev = async options => {
        // 1. create a transporter
        const transporter = nodemailer.createTransport({
            host: this.host,
            auth: {
                user: this.email,
                pass: this.password
            }
        });

        // 2. define email options
        const mailOptions = {
            from: options.from,
            to: options.email,
            subject: options.subject,
            text: options.message,
            //html: options.html
        };

        // 3. send email
        await transporter.sendMail(mailOptions);
    }

    sendEmailProd = async options => {
        // 1. create a transporter
        const transporter = nodemailer.createTransport({
            service: this.host,
            auth: {
                user: this.email,
                pass: this.password
            }
            // ACTIVATE in Gmail "less secure app" option
            // https://nodemailer.com/usage/using-gmail/
        });

        // 2. define email options
        const mailOptions = {
            from: options.from,
            to: options.email,
            subject: options.subject,
            text: options.message,
            //html: options.html
        };

        // 3. send email
        await transporter.sendMail(mailOptions);
    }

    sendEmail = async options => {
        if (process.env.NODE_ENV === "production") {
            await this.sendEmailProd(options);
        } else {
            await this.sendEmailDev(options);
        }
    }
}

module.exports = EmailService;