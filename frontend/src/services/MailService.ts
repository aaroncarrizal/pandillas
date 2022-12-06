import axios from './axios'
import { Mail } from '@/interfaces/Mail'

export const sendEmail = async (mailData: Mail) => {
    return await axios.post('/send', mailData)
}