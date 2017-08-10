import React from 'react'
import styled from 'styled-components/native'
import navigatableScreen from './navigatableScreen'

import AnimatedTimeToCatchUp from '../components/animatedTimeToCatchUp'
import Calculator from '../components/calculator'
import ShowStats from '../components/showStats'
import ShowSummary from '../components/showSummary'

const TestScreen = ({ navigation }) =>
    <ScrollView>
        <AnimatedTimeToCatchUp toMinutes={3000} />

        <Calculator episodes={63} averageRuntime={60} />

        <ShowStats
            imageUrl="http://static.tvmaze.com/uploads/images/original_untouched/1/2669.jpg"
            seasonCount={7}
            episodeCount={69}
            averageRuntime={63}
        />

        <ShowSummary summary="<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>" />

        <Button
            onPress={() => navigation.navigate('Search')}
            title="Go to search"
        />
    </ScrollView>

const ScrollView = styled.ScrollView`margin-bottom: -136px;`
const Button = styled.Button`margin-top: 50px;`

export default navigatableScreen(TestScreen, 'Test Screen')
