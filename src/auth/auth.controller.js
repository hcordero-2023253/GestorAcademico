import Student from '../student/student.model.js';
import Teacher from '../teacher/teacher.model.js';
import { checkPassword, encrypt } from '../../utils/crypto.js';
import { generateJwt } from '../../utils/jwt.js';

export const test = (req, res) => {
    console.log('Test run');
    res.send({ message: 'Test run' });
}

/*Registrar  los datos de un alumno o profesor*/

export const register = async (req, res) => {
    try {
        let data = req.body;
        //Validar los datos de entrada 
        if(data.role === 'STUDENT_ROLE'){
            let student = new Student(data);
            student.password = await encrypt(data.password);
            await student.save();
            res.send({ message: 'Student registered successfully' });
        }else if(data.role === 'TEACHER_ROLE'){
            let teacher = new Teacher(data);
            teacher.password = await encrypt(data.password);
            await teacher.save();
            res.send({ message: 'Teacher registered successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Already exists'
        });
    }
}

/*logear un estudiante o profesor*/
export const login = async (req, res) => {
    try {
        let { logginEstudent, logginTeacher, password } = req.body;

        let student = await Student.findOne({ 
            $or: [{ username: logginEstudent }, { email: logginEstudent }]
        });
        let teacher = await Teacher.findOne({
            $or: [{ username: logginTeacher }, { email: logginTeacher }]
        });

        if (student) {
            if (await checkPassword(student.password, password)) {
                let logginStudent = {
                    uid: student._id,
                    username: student.username,
                    email: student.email,
                    role: student.role,
                };
                let tokens = await generateJwt(logginStudent);
                return res.send({ 
                    success: true,
                    message: `Welcome ${logginStudent.username}, you are logged in`, 
                    logginStudent,
                    tokens
                });
            }
        }

        if (teacher) {
            if (await checkPassword(teacher.password, password)) {
                let logginTeacher = {
                    uid: teacher._id,
                    username: teacher.username,
                    email: teacher.email,
                    role: teacher.role,
                };
                let tokent = await generateJwt(logginTeacher);
                return res.send({ 
                    success: true,
                    message: `Welcome ${logginTeacher.username}, you are logged in`, 
                    logginTeacher,
                    tokent
                });
            }
        }

        return res.status(400).send({
            success: false,
            message: 'Invalid user or password'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Error generating login', error
        });
    }
};