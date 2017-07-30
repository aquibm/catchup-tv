import React, { Component } from 'react'
import { Text, View } from 'react-native'

import navigatableScreen from '../navigatableScreen'

class ShowScreen extends Component {
    render() {
        return (
            <View>
                <Text>Show Screen!</Text>
            </View>
        )
    }
}

export default navigatableScreen(ShowScreen, 'Show')
