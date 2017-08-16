import React, { Component } from 'react'
import { View, FlatList, Image } from 'react-native'
import PropTypes from 'prop-types'

import navigatableScreen from '../navigatableScreen'
import { searchForShows } from '../../api/showSearch'
import searchHelp from '../../assets/search-help.png'

import ShowSearch from '../../components/showSearch'
import ShowListItem from '../../components/showListItem'
import AnimatedTimeToCatchUp from '../../components/animatedTimeToCatchUp'
import Loader from '../../components/loader'

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
            this.setState(state => ({
                shows: [],
                isSearching: false
            }))

            this.props.showToast(error.message)
        }
    }

    _renderShow = ({ item }) => {
        return <ShowListItem show={item} onPress={this._goToShow} />
    }

    _renderResults = shows => {
        const hasShows = shows && shows.length > 0

        return hasShows
            ? <FlatList data={shows} renderItem={this._renderShow} />
            : <Image
                  source={searchHelp}
                  style={{
                      width: 338,
                      height: 163,
                      alignSelf: 'center',
                      marginTop: 30
                  }}
              />
    }

    render() {
        const { shows, isSearching } = this.state

        return (
            <View>
                <ShowSearch onSearch={this._search} />
                {isSearching && <Loader />}
                {!isSearching && this._renderResults(shows)}
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
