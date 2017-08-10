import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TextInput, View, Picker } from 'react-native'
import moment from 'moment'

import Card from '../card'

// TODO(AM): Refactor this mess.
class Calculator extends Component {
    static propTypes = {
        episodes: PropTypes.number.isRequired,
        averageRuntime: PropTypes.number.isRequired
    }

    state = {
        episodesPerDay: 1,
        daysToCatchUp: 0
    }

    componentDidMount() {
        this.computeDaysToCatchup()
    }

    computeDaysToCatchup() {
        const { episodes } = this.props

        this.setState(state => {
            const daysToCatchUp = episodes / state.episodesPerDay

            return {
                daysToCatchUp
            }
        })
    }

    _onEpisodesPerDayChange = episodesPerDay => {
        this.setState({ episodesPerDay })
        this.computeDaysToCatchup()
    }

    renderEpisodesPerDayPickerOptions(
        selectedEpisodesPerDay,
        totalEpisodes,
        averageRuntime
    ) {
        const possibleEpisodesPerDay = Math.min(
            totalEpisodes,
            Math.floor(24 * 60 / averageRuntime)
        )

        const episodeList = new Array(possibleEpisodesPerDay)
            .fill(0)
            .map((el, idx) => idx + 1)

        return (
            <View
                style={{
                    flex: 1,
                    borderRightColor: '#d9d9d9',
                    borderRightWidth: 1
                }}
            >
                <Text style={{ paddingLeft: 10 }}>Episodes per day</Text>
                <Picker
                    selectedValue={selectedEpisodesPerDay}
                    onValueChange={this._onEpisodesPerDayChange}
                >
                    {episodeList.map(i =>
                        <Picker.Item label={`${i}`} value={i} key={i} />
                    )}
                </Picker>
            </View>
        )
    }

    render() {
        const { episodesPerDay, daysToCatchUp } = this.state
        const { episodes, averageRuntime } = this.props

        const totalHours = Math.floor(episodesPerDay * averageRuntime / 60)
        const humanized = moment.duration(daysToCatchUp, 'days').humanize()

        return (
            <Card label="CATCH UP">
                <View style={{ flexDirection: 'row' }}>
                    {this.renderEpisodesPerDayPickerOptions(
                        episodesPerDay,
                        episodes,
                        averageRuntime
                    )}
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{ fontSize: 30, textAlign: 'center' }}
                            selectable
                        >
                            {humanized}
                        </Text>
                    </View>
                </View>
            </Card>
        )
    }
}

export default Calculator
