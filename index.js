const port = process.env.PORT || 8005

const consign = require('consign')
const express = require('express')

const app = express()

consign()
        .then('./config')
        .then('./api')
        .then('./routes')
.into(app)

app.listen(port, ()=> console.log(`online into port: ${port}`))

/**sadasdas */