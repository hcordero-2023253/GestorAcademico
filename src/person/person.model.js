import { model, Schema } from "mongoose";

const personSchema = Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    lastName:{
        type:String,
        required:[true, 'Last name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required']
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    role:{
        type:String,
        required:[false,'Role is not required'],
        enum:['STUDENT_ROLE','TEACHER_ROLE','ADMIN_ROLE'],
    }
})
export default model('Person',personSchema)