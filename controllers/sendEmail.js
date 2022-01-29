const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

// con Etherial
const sendEmailEthereal = async (req, res) => {
   let testAccount = await nodemailer.createTestAccount();

   const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
         user: 'retta.lockman49@ethereal.email',
         pass: 'GaqQCvVYDar13CmBpQ',
      },
   });

   let info = await transporter.sendMail({
      from: '"A-rielox" <arielox.ag@gmail.com>', // sender address
      to: 'arielox@hotmail.com', // list of receivers
      subject: 'Holi hola', // Subject line
      text: 'Mandando emiliodesde Nodejs', // plain text body
      html: '<h2>Sending Email from Nodejs</h2>', // html body
   });

   res.json(info); // no mandar esta respuesta en producción
};

const sendEmail = async (req, res) => {
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   const msg = {
      to: 'arielox@hotmail.com', // Change to your recipient
      from: 'arielox.godoy@gmail.com', // Change to your verified sender 🌀
      subject: 'Sending with SendGrid is Fun',
      text: 'Correo mandado desde Node.js 😎', // 💈
      // html: '<strong>😎 Listo with Node.js 😎</strong>',
   };

   const info = await sgMail.send(msg);

   res.json(info);
};

module.exports = sendEmail;

// 💈 parece q manda o el text o el html, pero no llegan los dos como cuerpo
// 🌀 debe ser el q puse en sendgrid como sender

//
// el sugerido
// sgMail
//    .send(msg)
//    .then(() => {
//       console.log('Email sent');
//    })
//    .catch(error => {
//       console.error(error);
//    });
