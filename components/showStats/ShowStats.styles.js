import styled from 'styled-components/native'

export const Wrapper = styled.View`margin: 20px 10px 0;`
export const CardLabel = styled.Text`margin-bottom: 5px;`

export const Card = styled.View`
    background: white;
    flex-direction: column;
`

export const Poster = styled.Image`
    width: 100%;
    height: 200px;
`

export const StatsContainer = styled.View`
    flex-direction: row;
    height: 60px;
`

export const Stats = styled.View`
    flex: 1;
    flex-direction: column;
    background: ${p => getColor(p.type)};
`

export const StatsCount = styled.Text`
    font-size: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
`

export const StatsLabel = styled.Text`
    font-size: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
`

const getColor = type => {
    switch (type) {
        case 'seasons':
            return 'rgb(250, 128, 114)'
        case 'episodes':
            return 'rgb(250, 173, 114))'
        case 'runtime':
            return 'rgb(250, 218, 114)'
        default:
            throw Error(`No colors defined for ${type}`)
    }
}
