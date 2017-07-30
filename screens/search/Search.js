import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import navigatableScreen from '../navigatableScreen'

class SearchScreen extends Component {
    goToShow = () => {
        const { navigate } = this.props.navigation
        navigate('Show')
    }

    render() {
        return (
            <View>
                <Text>Search Screen!</Text>
                <Button title="Go to show!" onPress={this.goToShow} />
            </View>
        )
    }
}

export default navigatableScreen(SearchScreen, 'Catchup TV')
