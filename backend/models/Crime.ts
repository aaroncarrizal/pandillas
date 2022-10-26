import {Schema , model} from 'mongoose'

const crimeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
})

export default model('Crime', crimeSchema)