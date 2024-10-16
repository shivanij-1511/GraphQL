const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
// var { graphql, buildSchema } = require("graphql")
const movieResolvers = require('./resolvers/resolvers')
const movieSchema = require('./schema/schema')
const cors=require('cors')

mongoose.connect('mongodb+srv://shivanij-01:Shivani_2001@graphql-movie-maker.jb7nn.mongodb.net/?retryWrites=true&w=majority&appName=graphql-movie-maker').then(() => {
    console.log("MongoDb Connected Successfully");
}).catch((err) => {
    console.log("Unable to connect to MongoDB", err);
})


// var source = "{ listMovies }"

// graphql({ schema, source, rootValue }).then(response => {
//     console.log(response)
// })

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema:movieSchema,
    rootValue:movieResolvers,
    graphiql: true
}))


app.get('/hi', (req, res) => {
    res.send("Hello from the express server!")
})


app.listen('4000', () => {
    console.log("Server Running On port 4000");
})