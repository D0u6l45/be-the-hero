const connection = require('../database/connection');

module.exports = {


    async index(request,response) {

        const { page = 1 } = request.query;

        const [count] = await connection('incidente').count();
        
        const incidente = await connection('incidente')
        .join('ongs', 'ongs.id', '=', incidente.ong_id)
        .select([
        'incidente.*',
        'ongs.nome',
        'ongs.email',
        'ong.whatsapp',
        'ongs.cidade',
        'ongs.uf'
        
        ])

        .limit(5)
        .offset((page - 1) * 5 );

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidente);
    },




    async create(request, response) {
        const {title, description, value } = request.body;
        const ong_id = request.headers.autorizacao;

        const [id] = await connection('incidente').insert({
            title,
            description, 
            value,
            ong_id
        });
        return response.json({id});
    },

    async delete(request,response) {
        const {id} = request.params;
        const ong_id = request.headers.autorizacao
        
        const incidente = await connection('incidente')
        .where('id',id)
        .select('ong_id')
        .first();

        if (incidente.ong_id !== ong_id){
            return response.status(401).json({erro: 'operação não permitida'});

        }
            await connection('incidente').where('id', id).delete();
            return response.status(204).send();
        
        }

    
 };

