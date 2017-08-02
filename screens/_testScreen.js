import React from 'react'
import styled from 'styled-components/native'
import navigatableScreen from './navigatableScreen'

import ShowStats from '../components/showStats'

const TestScreen = ({ navigation }) =>
    <View>
        <ShowStats
            imageUrl="http://static.tvmaze.com/uploads/images/original_untouched/1/2669.jpg"
            seasonCount={7}
            episodeCount={69}
            averageRuntime={63}
        />

        <Button
            onPress={() => navigation.navigate('Search')}
            title="Go to search"
        />
    </View>

const View = styled.View``
const Button = styled.Button``

export default navigatableScreen(TestScreen, 'Test Screen')
