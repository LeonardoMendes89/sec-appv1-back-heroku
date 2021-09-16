const file = require('../knexfile')['production']
const db   = require('knex')(file)

module.exports = app => {
    const hello = async(req,res)=>{
        db.select()
          .table('appv1account')
          .then(data => res.status(200).json(data))
          .catch(err => res.status(500).json(err))
    }

    return { hello }
}
