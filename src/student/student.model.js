import { Schema , model } from "mongoose";

const studentSchema = new Schema({
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
    carnet:{
        type: Number,
        required: [true, 'Carnet is required'],
        maxLength: [8, 'Carnet is too long']
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
        maxLength: [100, 'Password can not be longer than 100 characters'],
    },
    cours:[{
        type:Schema.Types.ObjectId,
        ref:'Cours',
    }],
    role:{
        type: String,
        required: [true,'Role is required'],
        uppercase: true,
        default: 'STUDENT_ROLE',
    },
    
})

export default model('Student', studentSchema);

studentSchema.methods.toJSON = function(){
    const { __v, password ,...student } = this.toObject();
    return student;
}