import {Schema , model} from 'mongoose'

const gangSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    }
})

export default model('Gang', gangSchema)