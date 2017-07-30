import React, { Component } from 'react'
import { Text, View } from 'react-native'
import moment from 'moment'

import navigatableScreen from '../navigatableScreen'
import { loadAiredEpisodes } from '../../api/showEpisodes'

import { Loader } from './Show.styles'

class ShowScreen extends Component {
    state = {
        isLoading: true,
        timeToCatchup: 0,
        show: this.props.navigation.state.params.show,
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
                0,
            )

            await this.setState(state => ({
                ...state,
                timeToCatchup: timeToCatchupInMinutes,
                isLoading: false,
            }))
        } catch (error) {
            this.props.showToast(error.message)
        }
    }

    render() {
        const { isLoading, timeToCatchup } = this.state
        return (
            <View>
                {isLoading && <Loader />}
                {!isLoading &&
                    <Text>
                        {timeToCatchup}
                    </Text>}
            </View>
        )
    }
}

export default navigatableScreen(ShowScreen, 'Show')
