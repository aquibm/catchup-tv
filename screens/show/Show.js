import React, { Component } from 'react'
import { Text, View } from 'react-native'

import navigatableScreen from '../navigatableScreen'
import { loadAiredEpisodes } from '../../api/showEpisodes'
import AnimatedTimeToCatchUp from '../../components/animatedTimeToCatchUp'

import { Loader } from './Show.styles'

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

            await this.setState(state => ({
                ...state,
                timeToCatchup: timeToCatchupInMinutes,
                isLoading: false
            }))
        } catch (error) {
            this.props.showToast(error.message)
            this.props.navigation.navigate('Search')
        }
    }

    render() {
        const { isLoading, timeToCatchup } = this.state
        return (
            <View>
                {isLoading && <Loader />}
                {!isLoading &&
                    <AnimatedTimeToCatchUp toMinutes={timeToCatchup} />}
            </View>
        )
    }
}

export default navigatableScreen(ShowScreen, 'Show')
