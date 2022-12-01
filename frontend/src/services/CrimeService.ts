import axios from './axios'
import { Crime } from '@/interfaces/Crime'

export const createCrime = async (crime: Crime) => {
    return await axios.post('/crimes', crime)
}

export const getCrimes = async () => {
    return await axios.get('/crimes')
}

export const getCrime = async (id: string) => {
    return await axios.get(`/crimes/${id}`)
}

export const deleteCrime = async (id: string) => {
    return await axios.delete(`/crimes/${id}`)
}

export const updateCrime = async (id: string, crime: Crime) => {
    return await axios.patch(`/crimes/${id}`, crime)
}