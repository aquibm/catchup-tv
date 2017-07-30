export const searchForShows = searchString => {
    if (!searchString || searchString.length < 3)
        throw Error('Please search for a show')

    return fetch(`http://api.tvmaze.com/search/shows?q=${searchString}`)
        .then(response => response.json())
        .then(data =>
            data.sort((prev, next) => next.score - prev.score).map(result => ({
                ...result.show,
                key: result.show.id,
            })),
        )
}
