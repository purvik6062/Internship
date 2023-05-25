const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api", router);
// Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    requireTLS: true,
    auth: {
        user: 'devtestingexample1@gmail.com',
        pass: 'tpkzsykpaalcwinp'
    }
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});


// POST Route for Contact Form
router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const mailOptions = {
        from: email,
        to: 'devtestingexample1@gmail.com',
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error: Could not send email');
        } else {
            console.log(`Email sent: ${info.response}`);
            // res.send('Email sent successfully');
            res.json({ status: 'success' })
        }
    });
});

app.listen(5001, () => console.log("Server Running"));
// const PORT = process.env.PORT || 5001;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
