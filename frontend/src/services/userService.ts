import axios from './axios'
import { User } from '@/interfaces/User'

export const loginUser = async (user: User) => {
    return await axios.post('/users/login', user)
}

export const createUser = async (token: any, user: User) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axios.post('/users', user, config)
}

export const getUsers = async (token: any) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axios.get('/users', config)
}

export const getUser = async (token: any, id: string) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axios.get(`/users/${id}`, config)
}

export const deleteUser = async (token: any, id: string) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axios.delete(`/users/${id}`, config)
}

export const updateUser = async (token: any, id: string, user: User) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axios.patch(`/users/${id}`, user, config)
}