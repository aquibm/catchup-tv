import React from 'react'
import Please from 'pleasejs'
import noPoster from '../../assets/no-poster.png'

import Card from '../card'

// Styled Components
import {
    Poster,
    StatsContainer,
    Stats,
    StatsCount,
    StatsLabel
} from './ShowStats.styles'

const imageSrc = imageUrl => {
    if (!imageUrl) return noPoster

    return {
        uri: imageUrl
    }
}

const ShowStats = ({ imageUrl, seasonCount, episodeCount, averageRuntime }) =>
    <Card label="STATS" noPadding={true}>
        <Poster source={imageSrc(imageUrl)} />
        <StatsContainer>
            <Stats type="seasons">
                <StatsCount selectable>
                    {seasonCount}
                </StatsCount>
                <StatsLabel>SEASONS</StatsLabel>
            </Stats>

            <Stats type="episodes">
                <StatsCount selectable>
                    {episodeCount}
                </StatsCount>
                <StatsLabel>EPISODES</StatsLabel>
            </Stats>

            <Stats type="runtime">
                <StatsCount selectable>
                    {averageRuntime}
                </StatsCount>
                <StatsLabel>AVG RUNTIME</StatsLabel>
            </Stats>
        </StatsContainer>
    </Card>

export default ShowStats
