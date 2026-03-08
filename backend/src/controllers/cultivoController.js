import Cultivo from "../models/Cultivo.js";


export const crearCultivo = async (req, res) => {

    try{
        const {nombre, tipo, fechaSiembra, estado, parcela } = req.body;

        const cultivo = new Cultivo({

            nombre,
            tipo,
            fechaSiembra,
            estado,
            parcela,
            usuario: req.user.id   // Aqui asociar al usuario autenticado
        
        });


        await cultivo.save();
        res.status(201).json(cultivo);

    }catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    export const obtenerCultivos = async (req, res) => {
        try{
            const cultivos = await Cultivo.find({ usuario: req.user.id });  // Aqui filtramos por usuario
            res.json(cultivos);
        }catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
