import { Router } from "express"
const router = Router()
const nodemailer = require('nodemailer')



router.get('/', (req, res) => {
    res.send("REST API is working!")
})

router.post('/send',(req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aaronk4572@gmail.com',
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: req.body.email,
        to: '180816@upslp.edu.mx',
        subject: req.body.subject,
        text: `${req.body.name} envió el siguiente mensaje:\n ${req.body.message}\nCorreo de contacto: ${req.body.email}`
    }
    transporter.sendMail(mailOptions, (error: any, success: any) => {
        if(error){
            res.send(error)
        }else{
            res.send('Email sent succesfully')
        }
    })
})

export default router