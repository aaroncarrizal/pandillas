import axios from './axios'
import { Mail } from '@/interfaces/Mail'

export const sendEmail = async (mailData: Mail) => {
    return await axios.post('/send', mailData)
}

export const generatePDF = async (gangIds: string[]) => {
    return await axios.post('/pdf', gangIds)
}