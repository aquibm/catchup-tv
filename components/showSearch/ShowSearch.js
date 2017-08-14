import React, { Component } from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'

// Styled Components
import { SearchInput } from './ShowSearch.styles'

class ShowSearch extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    }

    state = {
        text: ''
    }

    _onChangeText = text => {
        this.setState({ text })
    }

    _search = () => {
        const { text } = this.state
        this.props.onSearch(text)
    }

    render() {
        const { text } = this.state

        return (
            <SearchInput
                value={text}
                onChangeText={this._onChangeText}
                onSubmitEditing={this._search}
                autoCapitalize="sentences"
                autoFocus={true}
                clearButtonMode="always"
                placeholder="Search for TV shows"
                platform={Platform.OS}
            />
        )
    }
}

export default ShowSearch
