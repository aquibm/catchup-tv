import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import navigatableScreen from '../navigatableScreen'
import { searchForShows } from '../../api/showSearch.stub'

import ShowSearch from '../../components/showSearch'

class SearchScreen extends Component {
    state = {
        searchText: 'Game of thrones',
    }

    _goToShow = () => {
        const { navigate } = this.props.navigation
        navigate('Show')
    }

    _handleSearchChange = searchText => {
        this.setState(state => ({
            ...state,
            searchText,
        }))
    }

    _search = async searchText => {
        try {
            const shows = await searchForShows(searchText)

            this.setState(state => ({
                ...state,
                shows,
            }))
        } catch (error) {
            // TOOD(AM): Alert or smth
        }
    }

    renderShow(show) {
        return (
            <View key={show.id}>
                <Image
                    source={{ uri: show.image.medium }}
                    style={{ width: 210, height: 295 }}
                />
                <Text>
                    {show.name}
                </Text>
            </View>
        )
    }

    render() {
        const { searchText, shows } = this.state

        return (
            <View>
                <ShowSearch onSearch={this._search} />
                {shows && shows.map(show => this.renderShow(show))}
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
