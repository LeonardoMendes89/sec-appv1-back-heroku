module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'sec',
      user:     'admin',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    }
  },


  production: {
    client: 'pg',
    connection: {
      host:"ec2-52-2-118-38.compute-1.amazonaws.com",
      database: "dfot6icc9219po",
      user:     "ytlcmowhaffvdy",
      password: "2ffb4ee7be13354102d86764cac1cd5c4109753681769f364c36e08d0a19ea3e",
      ssl:       { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
