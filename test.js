const config = require("./config");
const EmailService = require("./services/email-service");

const mailOptions = {
    from: "Expresso App <expressoapp.2020@gmail.com>",
    email: config.email_address,
    subject: "test email",
    message: `test email from email service , ${process.env.NODE_ENV}`,
    //html: options.html
};

const emailSvc = new EmailService(config.email_host, config.email_address, config.email_password);
emailSvc.sendEmailProd(mailOptions);

