const config = require("./config");
const { EmailService } = require("./index");

const mailOptions = {
    from: `Expresso App <${config.email_address}>`,
    to: "m.khatab.88@gmail.com",
    subject: "test email",
    message: `Test email from email service \n Environment: ${process.env.NODE_ENV}`,
    //html: options.html
};

const emailSvc = new EmailService(config.email_host, config.email_address, config.email_password);
emailSvc.sendEmail(mailOptions);
