import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import PropTypes from 'prop-types'

import navigatableScreen from '../navigatableScreen'
import { searchForShows } from '../../api/showSearch'

import ShowSearch from '../../components/showSearch'
import ShowListItem from '../../components/showListItem'

class SearchScreen extends Component {
    static propTypes = {
        showToast: PropTypes.func.isRequired,
    }

    state = {
        shows: [],
    }

    _goToShow = id => {
        const { navigate } = this.props.navigation
        navigate('Show')
    }

    _search = async searchText => {
        try {
            const shows = await searchForShows(searchText)

            this.setState(state => ({
                ...state,
                shows,
            }))
        } catch (error) {
            this.props.showToast(error.message)
        }
    }

    _renderShow = ({ item }) => {
        return <ShowListItem show={item} onPress={this._goToShow} />
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
