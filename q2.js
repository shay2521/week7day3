async function returnMovie(movieName){
    try{
        let t = await getMovieInfo (movieName)
        console.dir(t)
    } catch(e){
        console.error(e)
    }
}

returnMovie('MovieName')