import {Schema , model, Types} from 'mongoose'
// import { Member } from './Member'
const gangSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    leader: {
        type: Types.ObjectId,
        ref: "Member"
    },
    members: {
        type: [Types.ObjectId],
        ref: "Member"
    },
    numMembers: {
        type: Number
    },
    ageAverage: {
        type: Number
    },
    reunionPlace: {
        type : Types.ObjectId,
        ref: "Place"
    },
    dangerousness: {
        type: Number,
    },
    rivalries: {
        type: [Types.ObjectId],
        ref: "Gang"
    },
    alliances: {
        type: [Types.ObjectId],
        ref: "Gang"
    },
    crimes: {
        type: [Types.ObjectId],
        ref: "Crime"
    }
})

export default model('Gang', gangSchema)