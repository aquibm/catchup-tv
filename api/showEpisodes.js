export const loadAiredEpisodes = showId => {
    if (!showId) throw Error('No showId provided')

    const today = new Date()

    return fetch(`http://api.tvmaze.com/shows/${showId}/episodes`)
        .then(response => response.json())
        .then(data =>
            data.filter(episode => new Date(episode.airstamp) <= today),
        )
}
