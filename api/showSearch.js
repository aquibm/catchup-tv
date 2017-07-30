export const searchForShows = searchString => {
    if (!searchString || searchString.length < 3) return undefined

    return fetch(`http://api.tvmaze.com/search/shows?q=${searchString}`)
        .then(response => response.json())
        .then(data =>
            data
                .sort((prev, next) => next.score - prev.score)
                .map(result => result.show),
        )
}
