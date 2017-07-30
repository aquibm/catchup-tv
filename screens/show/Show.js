import React from 'react'
import { Text, View } from 'react-native'

import navigatableScreen from '../navigatableScreen'

const ShowScreen = () =>
    <View>
        <Text>Show Screen!</Text>
    </View>

export default navigatableScreen(ShowScreen, 'Show')
