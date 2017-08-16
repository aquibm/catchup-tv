import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableNativeFeedback } from 'react-native'

// Styled Components
import {
    SearchInputContainer,
    SearchInputWrap,
    ClearButtonWrap,
    SearchInput
} from './ShowSearch.styles'

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

    _clearSearch = () => {
        this.setState({ text: '' })
    }

    render() {
        const { text } = this.state

        return (
            <SearchInputContainer>
                <SearchInputWrap>
                    <SearchInput
                        value={text}
                        onChangeText={this._onChangeText}
                        onSubmitEditing={this._search}
                        autoCapitalize="sentences"
                        autoFocus={true}
                        autoCorrect={false}
                        placeholder="Search for TV shows"
                    />
                </SearchInputWrap>

                {text.length > 0 &&
                    <ClearButtonWrap>
                        <TouchableNativeFeedback onPress={this._clearSearch}>
                            <MaterialIcons
                                name="cancel"
                                size={20}
                                color="#999"
                            />
                        </TouchableNativeFeedback>
                    </ClearButtonWrap>}
            </SearchInputContainer>
        )
    }
}

export default ShowSearch
