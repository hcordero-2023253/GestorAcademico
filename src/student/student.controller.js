import Student from './student.model.js';
import Cours from '../cours/cours.model.js';

export const verCurso = async (req, res) => {
    try {
        res.send(await Cours.find())
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Not found cours',error});
    }
}

/*Editar perfil */
export const editStudent = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let student = await Student.findByIdAndUpdate(id, data, {new: true});
        res.send({
            success: true,
            message: 'Student edit',
            student
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Cannot edit student'
        });
    }
}

/*Eliminar perfil */
export const deleteStudent = async (req, res) => {
    try {
        let id = req.params.id;
        let student = await Student.findByIdAndDelete(id);
        res.send({
            success: true,
            message: 'Student delete',
            student
        })
    }catch(error){
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Cannot delete student'
        });
    }
}