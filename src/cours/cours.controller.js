import Cours from '../cours/cours.model.js';

export const verCurso = async (req, res) => {
    try {
        res.send(await Cours.find())
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Not found cours',error});
    }
}

export const agregarCurso = async (req, res) => {
    try {
        let data = req.body;
        let curso = new Cours(data)
        await curso.save()
        res.status(200).send({
            success: true,
            message: 'Cours add successfully',
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Cannot add course"
        })
    }
}