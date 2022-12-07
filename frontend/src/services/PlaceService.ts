import axios from './axios'
import { Place } from '@/interfaces/Place'

export const createPlace = async (place: Place) => {
    return await axios.post('/places', place)
}

export const getPlaces = async () => {
    return await axios.get('/places')
}

export const getPlace = async (id: string) => {
    return await axios.get(`/places/${id}`)
}

export const deletePlace = async (id: string) => {
    return await axios.delete(`/places/${id}`)
}

export const updatePlace = async (id: string, place: Place) => {
    return await axios.patch(`/places/${id}`, place)
}