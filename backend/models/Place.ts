import {Schema , model} from 'mongoose'

const placeSchema = new Schema({
    municipality: {
        type: String,
        trim: true,
    },
    delegacy: {
        type: String,
        trim: true,
    },
    locality: {
        type: String,
        trim: true,
        required: true
    },
    suburb: {
        type: String,
        trim: true,
    },
    street: {
        type: String,
        trim: true,
    },
    number: {
        type: Number,
    },
    postalCode: {
        type: Number,
    },
    description: {
        type: String,
        trim: true
    },
})

export default model('Place', placeSchema)