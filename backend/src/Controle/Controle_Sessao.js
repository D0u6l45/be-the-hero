const connection = require('../database/connection');

module.exports = {

     async create(request,response){
        const {id} = request.body;
        
        const ong = await connection('ongs')
        .select('nome', 'whatsapp')
        .where('id', id)
        .first();

        if (!ong){
            return response.status(400).json({erro: 'ong não cadastrada'});
        }
        return response.json(ong);
    }

}