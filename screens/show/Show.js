import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import navigatableScreen from '../navigatableScreen'
import { loadAiredEpisodes } from '../../api/showEpisodes'
import AnimatedTimeToCatchUp from '../../components/animatedTimeToCatchUp'
import Loader from '../../components/loader'
import ShowStats from '../../components/showStats'
import ShowSummary from '../../components/showSummary'

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

            const episodeWithImage = episodes.find(
                episode => episode.image && episode.image.original
            )

            const imageUrl = episodeWithImage && episodeWithImage.image.original

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

            const summary = show.summary

            await this.setState(state => ({
                ...state,
                timeToCatchup: timeToCatchupInMinutes,
                imageUrl,
                episodeCount: episodes.length,
                seasonCount,
                averageRuntime,
                summary,
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
            averageRuntime,
            summary
        } = this.state

        const screenHeight = Dimensions.get('window').height

        return (
            <Container height={screenHeight}>
                {isLoading && <Loader />}
                {!isLoading &&
                    <View>
                        <AnimatedTimeToCatchUp toMinutes={timeToCatchup} />
                        <ScrollView>
                            <ScrollSheet>
                                <ShowStats
                                    imageUrl={imageUrl}
                                    episodeCount={episodeCount}
                                    seasonCount={seasonCount}
                                    averageRuntime={averageRuntime}
                                />
                                <ShowSummary summary={summary} />
                            </ScrollSheet>
                        </ScrollView>
                    </View>}
            </Container>
        )
    }
}

const Container = styled.View`height: ${p => p.height};`
const ScrollSheet = styled.View`margin-bottom: 240px;`

export default navigatableScreen(ShowScreen, 'Show')
