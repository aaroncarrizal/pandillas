import {Schema , model, Types} from 'mongoose'

const memberSchema = new Schema({
    gangId: {
        type: Types.ObjectId,
        ref: "Gang"
    },
    name: {
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        middleName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true
        }
    },
    alias: {
        type: String,
        trim: true
    },
    birthdate: Date,
    username: {
        type: String,
        trim: true
    },
    residence: {
        type: Types.ObjectId,
        ref: "Place"
    },
    crimes: {
        type: [Types.ObjectId],
        ref: "Crime"
    }

})

export default model('Member', memberSchema)