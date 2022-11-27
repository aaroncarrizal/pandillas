import axios from './axios'
import { Member } from '@/interfaces/Member'

export const createMember = async (member: Member) => {
    return await axios.post('/members', member)
}

export const getMembers = async () => {
    return await axios.get('/members')
}