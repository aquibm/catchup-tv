const showResponse = [
    {
        score: 29.306479,
        show: {
            id: 318,
            url: 'http://www.tvmaze.com/shows/318/community',
            name: 'Community',
            type: 'Scripted',
            language: 'English',
            genres: ['Comedy'],
            status: 'Ended',
            runtime: 30,
            premiered: '2009-09-17',
            officialSite: 'http://www.nbc.com/community',
            schedule: { time: '', days: [] },
            rating: { average: 8.5 },
            weight: 79,
            network: null,
            webChannel: {
                id: 5,
                name: 'YAHOO! View',
                country: {
                    name: 'United States',
                    code: 'US',
                    timezone: 'America/New_York',
                },
            },
            externals: { tvrage: 22589, thetvdb: 94571, imdb: 'tt1439629' },
            image: {
                medium:
                    'http://static.tvmaze.com/uploads/images/medium_portrait/2/5134.jpg',
                original:
                    'http://static.tvmaze.com/uploads/images/original_untouched/2/5134.jpg',
            },
            summary:
                "<p><b>Community </b>is a smart, exuberant comedy that is consistently ranked as one of the most inventive and original half-hours on television. This ensemble comedy centers around a tight-knit group of friends who all met at what is possibly the world's worst educational institution - Greendale Community College.</p>",
            updated: 1496780025,
            _links: {
                self: { href: 'http://api.tvmaze.com/shows/318' },
                previousepisode: {
                    href: 'http://api.tvmaze.com/episodes/162188',
                },
            },
        },
    },
    {
        score: 15.223307,
        show: {
            id: 28145,
            url: 'http://www.tvmaze.com/shows/28145/community-life',
            name: 'Community Life',
            type: 'Documentary',
            language: 'English',
            genres: [],
            status: 'Running',
            runtime: 10,
            premiered: '2016-04-17',
            officialSite: 'http://www.bbc.co.uk/programmes/b078mb0y',
            schedule: { time: '16:00', days: ['Sunday'] },
            rating: { average: null },
            weight: 0,
            network: {
                id: 389,
                name: 'BBC One Northern Ireland',
                country: {
                    name: 'United Kingdom',
                    code: 'GB',
                    timezone: 'Europe/London',
                },
            },
            webChannel: null,
            externals: { tvrage: null, thetvdb: null, imdb: null },
            image: {
                medium:
                    'http://static.tvmaze.com/uploads/images/medium_portrait/111/278554.jpg',
                original:
                    'http://static.tvmaze.com/uploads/images/original_untouched/111/278554.jpg',
            },
            summary:
                '<p>Vinny Hurrell presents a series dedicated to local charities.</p>',
            updated: 1494803443,
            _links: {
                self: { href: 'http://api.tvmaze.com/shows/28145' },
                previousepisode: {
                    href: 'http://api.tvmaze.com/episodes/1172093',
                },
            },
        },
    },
    {
        score: 2.487673,
        show: {
            id: 6191,
            url: 'http://www.tvmaze.com/shows/6191/diplomatic-immunity',
            name: 'Diplomatic Immunity',
            type: 'Scripted',
            language: 'English',
            genres: [],
            status: 'Ended',
            runtime: 30,
            premiered: '2009-03-10',
            officialSite: null,
            schedule: { time: '22:00', days: ['Tuesday'] },
            rating: { average: null },
            weight: 42,
            network: {
                id: 1031,
                name: 'TVNZ 1',
                country: {
                    name: 'New Zealand',
                    code: 'NZ',
                    timezone: 'Pacific/Auckland',
                },
            },
            webChannel: null,
            externals: { tvrage: 22087, thetvdb: 85460, imdb: 'tt1450364' },
            image: {
                medium:
                    'http://static.tvmaze.com/uploads/images/medium_portrait/23/59789.jpg',
                original:
                    'http://static.tvmaze.com/uploads/images/original_untouched/23/59789.jpg',
            },
            summary:
                "<p>A bold, quirky and politically incorrect comedy that follows the misadventures at the consulate of The Most Royal Kingdom of Fe'ausi and the fallen New Zealand Foreign Affairs high-flier who's been sent in to straighten out the consulate staff.</p>",
            updated: 1455576783,
            _links: {
                self: { href: 'http://api.tvmaze.com/shows/6191' },
                previousepisode: {
                    href: 'http://api.tvmaze.com/episodes/368819',
                },
            },
        },
    },
]

export const searchForShows = searchString => {
    if (!searchString || searchString.length < 3)
        throw Error('Please search for a show')

    const response = showResponse
        .sort((prev, next) => next.score - prev.score)
        .map(result => ({
            ...result.show,
            key: result.show.id,
        }))

    return new Promise(resolve => {
        setTimeout(() => resolve(response), 500)
    })
}
