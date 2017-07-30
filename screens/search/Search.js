import React, { Component } from 'react'
import { View, TextInput, Text, Image } from 'react-native'

import navigatableScreen from '../navigatableScreen'

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

        if (!searchText || searchText.length < 3) return // TODO(AM): Alert

        response = await fetch(
            `http://api.tvmaze.com/search/shows?q=${searchText}`,
        )

        json = await response.json()

        this.setState(state => ({
            ...state,
            response: json,
        }))
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
        const { searchText, response } = this.state

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
                {response &&
                    response.map(result => this.renderShow(result.show))}
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
