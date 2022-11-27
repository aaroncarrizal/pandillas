import { Place } from './Place'
import { Member } from './Member'

export interface Gang {
    name: string,
    description: string,
    leader: Member,
    members: [],
    numMembers: number,
    ageAverage: number,
    reunionPlace: Place,
    dangerousness: number,
    rivalries: [],
    alliances: [],
    crimes: []
}