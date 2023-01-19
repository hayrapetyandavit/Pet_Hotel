import nodemailer from 'nodemailer';

const sendMail = (message, email) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'manul.pethotel@gmail.com',
          pass: 'ndspuakihdrjreyu'
        }
      });
      
      const mailOptions = {
        from: 'manul.pethotel@gmail.com',
        to: `${email}`,
        subject: 'Thanks For Choosing Us!',
        text: `${message}`
      };
      
      transporter.sendMail(mailOptions);
}

export {sendMail}; 