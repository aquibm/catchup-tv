import React, { Component } from 'react'
import { Text, View } from 'react-native'

import navigatableScreen from '../navigatableScreen'
import { loadAiredEpisodes } from '../../api/showEpisodes'
import AnimatedTimeToCatchUp from '../../components/animatedTimeToCatchUp'
import Loader from '../../components/loader'
import ShowStats from '../../components/showStats'

class ShowScreen extends Component {
    state = {
        isLoading: true,
        timeToCatchup: 0,
        show: this.props.navigation.state.params.show
    }

    componentDidMount() {
        this.calculateTimeToCatchup()
    }

    async calculateTimeToCatchup() {
        const { show } = this.state

        try {
            const episodes = await loadAiredEpisodes(show.id)
            const timeToCatchupInMinutes = episodes.reduce(
                (acc, episode) => acc + episode.runtime,
                0
            )

            const imageUrl = show.image && show.image.medium
            const seasonCount =
                episodes.reduce(
                    (prev, episode) =>
                        episode.season > prev ? episode.season : prev,
                    0
                ) || 'N/A'

            const averageRuntime = Math.floor(
                episodes.reduce((acc, episode) => acc + episode.runtime, 0) /
                    episodes.length
            )

            await this.setState(state => ({
                ...state,
                timeToCatchup: timeToCatchupInMinutes,
                imageUrl,
                episodeCount: episodes.length,
                seasonCount,
                averageRuntime,
                isLoading: false
            }))
        } catch (error) {
            this.props.showToast(error.message)
            this.props.navigation.navigate('Search')
        }
    }

    render() {
        const {
            isLoading,
            timeToCatchup,
            show,
            imageUrl,
            episodeCount,
            seasonCount,
            averageRuntime
        } = this.state
        return (
            <View>
                {isLoading && <Loader />}
                {!isLoading &&
                    <View>
                        <AnimatedTimeToCatchUp toMinutes={timeToCatchup} />
                        <ShowStats
                            imageUrl={imageUrl}
                            episodeCount={episodeCount}
                            seasonCount={seasonCount}
                            averageRuntime={averageRuntime}
                        />
                    </View>}
            </View>
        )
    }
}

export default navigatableScreen(ShowScreen, 'Show')
