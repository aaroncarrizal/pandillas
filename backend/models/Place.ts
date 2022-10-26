import {Schema , model} from 'mongoose'

const placeSchema = new Schema({
    municipality: {
        type: String,
        trim: true,
        required: true
    },
    delegacy: {
        type: String,
        trim: true,
        required: true
    },
    locality: {
        type: String,
        trim: true,
        required: true
    },
    suburb: {
        type: String,
        trim: true,
        required: true
    },
    street: {
        type: String,
        trim: true,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        trim: true
    }

})

export default model('Place', placeSchema)