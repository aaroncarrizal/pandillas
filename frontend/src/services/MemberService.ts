import axios from './axios'
import { Member } from '@/interfaces/Member'

export const createMember = async (member: Member) => {
    return await axios.post('/members', member)
}

export const getMembers = async () => {
    return await axios.get('/members')
}

export const getMember = async (id: string) => {
    return await axios.get(`/members/${id}`)
}

export const deleteMember = async (id: string) => {
    return await axios.delete(`/members/${id}`)
}

export const updateMember = async (id: string, member: Member) => {
    return await axios.patch(`/members/${id}`, member)
}