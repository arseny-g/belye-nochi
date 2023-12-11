const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('root'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/root/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'khvostovajulia23@gmail.com',
      pass: 'jksd icwj jyno qbta',
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: 'khvostovajulia23@gmail.com',
    subject: `Сообщение от ${req.body.email}: ${req.body.tour}`,
    text: `
    Имя: ${req.body.name}
    Телефон:${req.body.phone}
    Экскурсия:${req.body.tour}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent' + info.response);
      res.send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
