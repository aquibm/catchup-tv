import React from 'react'
import Please from 'pleasejs'
import noPoster from '../../assets/no-poster.png'

// Styled Components
import {
    Wrapper,
    CardLabel,
    Card,
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
    <Wrapper>
        <CardLabel>STATS</CardLabel>
        <Card>
            <Poster source={imageSrc(imageUrl)} />
            <StatsContainer>
                <Stats type="seasons">
                    <StatsCount>
                        {seasonCount}
                    </StatsCount>
                    <StatsLabel>SEASONS</StatsLabel>
                </Stats>

                <Stats type="episodes">
                    <StatsCount>
                        {episodeCount}
                    </StatsCount>
                    <StatsLabel>EPISODES</StatsLabel>
                </Stats>

                <Stats type="runtime">
                    <StatsCount>
                        {averageRuntime}
                    </StatsCount>
                    <StatsLabel>AVG RUNTIME</StatsLabel>
                </Stats>
            </StatsContainer>
        </Card>
    </Wrapper>

export default ShowStats
