import { Place } from './Place'

export interface Member {
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    alias: string,
    birthdate: Date,
    username: string,
    residence: Place,
    crimes: []
}