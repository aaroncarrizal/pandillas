import axios from './axios'
import { Member } from '@/interfaces/Member'

export const getMembers = async () => {
    return await axios.get('/members')
}