import {Schema, model} from "mongoose";

const teacherSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [50, 'Name is too long']
    },
    lastname:{
        type: String,
        required: [true, 'Last name is required'],
        maxLength: [50, 'Last name is too long']
    },
    CUI:{
        type: Number,
        required: [true, 'CUI is required'],
    },
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username is already in use']
    },
    email:{
        type: String,
        required: [true, 'emal is required'],
        unique: [true, 'Email is already in use']
    },
    password:{
        type: String,
        required: [true,'Password is required'],
        minLength: [8, 'Password must be at least 8 characters long'],
        masLength: [100, 'Password can not be longer than 100 characters'],
    },
    role:{
        type: String,
        required: [true,'Role is required'],
        uppercase: true,
        default: 'TEACHER_ROLE',
    }
})

export default model('Teacher', teacherSchema);

teacherSchema.methods.toJSON = function(){
    const {__v, password, ...teacher} = this.toObject();
    return teacher;
}