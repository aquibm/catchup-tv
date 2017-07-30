import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import navigatableScreen from '../navigatableScreen'
import { searchForShows } from '../../api/showSearch.stub'

import ShowSearch from '../../components/showSearch'

class SearchScreen extends Component {
    state = {
        shows: [],
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

    _renderShow = ({ item }) => {
        return (
            <View>
                <Image
                    source={{ uri: item.image.medium }}
                    style={{ width: 210, height: 295 }}
                />
                <Text>
                    {item.name}
                </Text>
            </View>
        )
    }

    render() {
        const { searchText, shows } = this.state

        return (
            <View>
                <ShowSearch onSearch={this._search} />
                <FlatList data={shows} renderItem={this._renderShow} />
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
