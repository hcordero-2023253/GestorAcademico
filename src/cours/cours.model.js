import { Schema, model } from "mongoose";

const courSchema = Schema({
    name:{
        type:String,
        required:[true, 'Cours name is required'],
        unique: [true, 'Cours name already exist']
    },
    student:{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required:[true, 'Student is required']
    },
    teacher:{
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required:[true, 'Teacher is required']
    }
})

export default model('Cours', courSchema);