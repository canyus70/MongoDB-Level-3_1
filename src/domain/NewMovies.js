

export function makeNewMovie({
    _id,
    poster,
    title,
    director,
    year,
    imdb,
    plot,
    
}) {
    if (!plot || typeof plot !== "string") {
    throw new Error(" Plot must be a string");
}


    const newMovie = {
    _id,
    poster,
    title,
    director,
    year,
    imdb,
    plot,
    
    };
    return newMovie;
}