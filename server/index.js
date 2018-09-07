const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')
require ('dotenv').config()
const connectionString = process.env.CONNECTION_STRING='postgres://emvcmygefuuxnp:7a96940defc62960a52ec1baaa27c9fb9f8be80253799be9c87a05ca9ab4f60d@ec2-54-163-245-44.compute-1.amazonaws.com:5432/d2oho3i944knut?ssl=true'

// const {
    //     SERVER_PORT,
    //     CONNECTION_STRING
    // } = process.env
    
    require('dotenv').config()

    
    const app = express()

    app.get('/api/houses',ctrl.getHouses)
    // app.post()

    app.use(bodyParser.json())
    
const PORT = 3333

massive(connectionString).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => {console.log(`Mr Smith lives on port ${PORT}`)
    })
})
// massive(CONNECTION_String).then(db => {
//     app.set('db', db)
//     console.log("db is on")
//     app.listen(PORT, () => {console.log(`Mr Smith lives on port ${PORT}`)
//     })
// })