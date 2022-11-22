import axios from './axios'
import { User } from '@/interfaces/User'

export const loginUser = async (user: User) => {
    return await axios.post('/users/login', user)
}