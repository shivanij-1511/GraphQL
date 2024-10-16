// NOTE: resolvers, answers and rootvalues are one thing

// const movies = [
//     {
//         name: 'DDLJ', genre: 'Romance', year: '2001'
//     },
//     {
//         name: 'YJHD', genre: 'Comedy', year: '2001'
//     },
//     {
//         name: 'DDLJ', genre: 'Romance', year: '2001'
//     },
   
// ]


const mongoModel=require('../model/model')
const resolvers = {
    listMovies: () => {
        return mongoModel.find({})
    },
    addMovie: (args) => {
        let newMovieData=new mongoModel({
            name: args.name,
            genre: args.genre,
            year: args.year
        })
        newMovieData.save()
        return newMovieData
    }
}

module.exports=resolvers