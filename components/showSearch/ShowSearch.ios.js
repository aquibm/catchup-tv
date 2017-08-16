import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Keyboard } from 'react-native'

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
        Keyboard.dismiss()
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
            />
        )
    }
}

export const SearchInput = styled.TextInput`
    width: 100%;
    padding: 15px;
    fontSize: 18px;
    border-color: #d9d9d9;
    border-width: 1px;
    background-color: white;
`

export default ShowSearch
