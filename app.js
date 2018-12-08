const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require( './schema/schema' )
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

//allow croos-origin requests
app.use(cors())

//connect to mlab database

mongoose.connect('mongodb://ayush:hellogola123@ds141351.mlab.com:41351/gql-react')
mongoose.connection.once('open', ()=> {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(process.env.PORT || 4000, ()=> {
    console.log("Now listening on port 4000!")
})