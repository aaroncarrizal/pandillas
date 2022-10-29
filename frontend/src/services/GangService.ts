import axios from './axios'
import { Gang } from '@/interfaces/Gang'

export const createGang = async (gang: Gang) => {
    return await axios.post('/gangs', gang)
}

export const getGangs = async () => {
    return await axios.get('/gangs')
}