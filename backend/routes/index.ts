import { Router } from "express"
const router = Router()
const nodemailer = require('nodemailer')



router.get('/', (req, res) => {
    res.send("REST API is working!")
})
router.get('/send',(req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aaronk4572@gmail.com',
            pass: 'fqpjfcawxlciltkn',
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from:'aaronk4572@gmail.com',
        to: '180816@upslp.edu.mx',
        subject: 'TEST',
        text: 'TEXTO EN EL EMAIL'
    }
    transporter.sendMail(mailOptions, (error: any, success: any) => {
        if(error){
            console.log(error)
            res.send(error)
        }else{
            console.log('Email sent succesfully')
            res.send('Email sent succesfully')
        }
    })
})

export default router