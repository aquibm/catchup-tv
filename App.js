import React from 'react'
import { StackNavigator } from 'react-navigation'

import SearchScreen from './screens/search'
import ShowScreen from './screens/show'

const App = StackNavigator({
    Search: { screen: SearchScreen },
    Show: { screen: ShowScreen },
})

export default App
