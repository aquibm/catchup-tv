import React, { Component } from 'react'
import { View, TextInput, Text, Image } from 'react-native'

import navigatableScreen from '../navigatableScreen'
import { searchForShows } from '../../api/showSearch.stub'

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

    _search = async () => {
        const { searchText } = this.state

        try {
            const shows = await searchForShows(searchText)

            this.setState(state => ({
                ...state,
                shows,
            }))
        } catch (error) {}
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
                <TextInput
                    value={searchText}
                    onChangeText={this._handleSearchChange}
                    onSubmitEditing={this._search}
                    style={{ height: 44, padding: 8 }}
                    autoCapitalize="sentences"
                    autoFocus={true}
                    placeholder="Search for TV shows"
                />
                {shows && shows.map(show => this.renderShow(show))}
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
