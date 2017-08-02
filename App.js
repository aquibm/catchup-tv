import React from 'react'
import { StackNavigator } from 'react-navigation'

import TestScreen from './screens/_testScreen'
import SearchScreen from './screens/search'
import ShowScreen from './screens/show'

const App = StackNavigator({
    // Test: { screen: TestScreen },
    Search: { screen: SearchScreen },
    Show: { screen: ShowScreen }
})

export default App
