import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'

import navigatableScreen from '../navigatableScreen'
import { searchForShows } from '../../api/showSearch'

import ShowSearch from '../../components/showSearch'
import ShowListItem from '../../components/showListItem'
import AnimatedTimeToCatchUp from '../../components/animatedTimeToCatchUp'
import Loader from '../../components/loader/Loader'

class SearchScreen extends Component {
    static propTypes = {
        showToast: PropTypes.func.isRequired
    }

    state = {
        shows: [],
        isSearching: false
    }

    _goToShow = id => {
        const { navigate } = this.props.navigation
        const { shows } = this.state

        const selectedShow = shows.find(show => show.id === id)

        if (!selectedShow) {
            this.props.showToast('Something went wrong')
            return
        }

        navigate('Show', {
            title: selectedShow.name,
            show: selectedShow
        })
    }

    _search = async searchText => {
        try {
            await this.setState({ isSearching: true })

            const shows = await searchForShows(searchText)

            if (!shows || shows.length < 1)
                this.props.showToast(
                    `Sorry, couldn't find anything for ${searchText}`
                )

            await this.setState({ shows, isSearching: false })
        } catch (error) {
            this.props.showToast(error.message)
        }
    }

    _renderShow = ({ item }) => {
        return <ShowListItem show={item} onPress={this._goToShow} />
    }

    render() {
        const { shows, isSearching } = this.state

        return (
            <View>
                <ShowSearch onSearch={this._search} />
                {isSearching && <Loader />}
                {!isSearching &&
                    <FlatList data={shows} renderItem={this._renderShow} />}
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
