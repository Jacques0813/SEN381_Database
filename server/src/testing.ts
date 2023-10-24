import * as nodemailer from 'nodemailer';

export class Email {
    private transporter;
    constructor(){
      this.transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "premiersssen381@gmail.com",
          pass: "olnu drtp gjca qdym",
        },
      });
    }

    // async..await is not allowed in global scope, must use a wrapper
    public async send() {
      // send mail with defined transport object
      const info = await this.transporter.sendMail({
        from: '"PREMIER SERVICE DEPARTMENT" <premiersssen381@gmail.com>', // sender address
        to: "jacquesvdw2002@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
    }
}