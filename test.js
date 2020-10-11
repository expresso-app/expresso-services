const config = require("./config");
const EmailService = require("./services/email-service");

const mailOptions = {
    from: `Expresso App <${config.email_address}>`,
    email: config.email_address,
    subject: "test email",
    message: `Test email from email service \n Environment: ${process.env.NODE_ENV}`,
    //html: options.html
};

const emailSvc = new EmailService(config.email_host, config.email_address, config.email_password);
emailSvc.sendEmail(mailOptions);

