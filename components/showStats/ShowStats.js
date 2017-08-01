import React from 'react'
import styled from 'styled-components/native'
import noPoster from '../../assets/no-poster.png'

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
            <Stats>
                <Stat>
                    Seasons: {seasonCount}
                </Stat>
                <Stat>
                    Episodes: {episodeCount}
                </Stat>
                <Stat>
                    Average Runtime: {averageRuntime} mins
                </Stat>
            </Stats>
        </Card>
    </Wrapper>

const Wrapper = styled.View`margin: 20px 10px 0;`
const CardLabel = styled.Text`margin-bottom: 5px;`

const Card = styled.View`
    background: white;
    padding: 15px;
    flex-direction: row;
`

const Poster = styled.Image`
    width: 180px;
    height: 250px;
`

const Stats = styled.View`
    flex: 1;
    margin-left: 10px;
`

const Stat = styled.Text``

export default ShowStats
