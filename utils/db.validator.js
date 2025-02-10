import Student from '../src/student/student.model.js';
import Teacher from '../src/teacher/teacher.model.js';

/*validar los datos de Estudiante */
export const existUsernameEstudent = async (username, student) => {
    const alreadyStudent = await Student.findOne({username});
    if(alreadyStudent && alreadyStudent._id != student.uid){
        console.error(`Username ${username} already exists`);
        throw new Error(`Username ${username} already exists`);
    }
}

export const existEmailEstudent = async (email, student) => {
    const alreadyStudent = await Student.findOne({email});
    if(alreadyStudent && alreadyStudent._id != student.uid){
        console.error(`Email ${email} already exists`);
        throw new Error(`Email ${email} already exists`);
    }
}

/*validar los datos de Profesor*/
export const existUsernameTeacher = async (username, teacher) => {
    const alreadyTeacher = await Teacher.findOne({username});
    if(alreadyTeacher && alreadyTeacher._id != teacher.uid){
        console.error(`Username ${username} already exists`);
        throw new Error(`Username ${username} already exists`);
    }
}

export const existEmailTeacher = async (email, teacher) => {
    const alreadyTeacher = await Teacher.findOne({email});
    if(alreadyTeacher && alreadyTeacher._id != teacher.uid){
        console.error(`Email ${email} already exists`);
        throw new Error(`Email ${email} already exists`);
    }
}

export const notRequiredField = async (field) => {
    if(!field) {
        throw new Error(`${field} is not required`);
    }
}