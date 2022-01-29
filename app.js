const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');

const sendEmail = require('./controllers/sendEmail');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// @@@@@@@@@@@@@@@@@@@@@@@ MIDDLEWARE
app.use(express.json());

// routes
app.get('/', (req, res) => {
   res.send('<h1>Email Project</h1> <a href="/send">Send emilio</a>');
});
app.get('/send', sendEmail);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// @@@@@@@@@@@@@@@@@@@@@@@ APP LISTEN
const port = process.env.PORT || 3000;

const start = async () => {
   try {
      app.listen(port, () =>
         console.log(`Server is listening on port ${port}...`)
      );
   } catch (error) {
      console.log(error);
   }
};

start();

//
// Ethereal
// Name	Retta Lockman
// Username	retta.lockman49@ethereal.email (also works as a real inbound email address)
// Password	GaqQCvVYDar13CmBpQ
// //
// Nodemailer configuration
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'retta.lockman49@ethereal.email',
//         pass: 'GaqQCvVYDar13CmBpQ'
//     }
// });
