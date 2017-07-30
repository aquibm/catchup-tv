import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    margin: 5px 10px;
    padding: 10px;
    background: white;
`

export const Info = styled.View`
    margin-left: 20px;
    flex: 1;
`

export const Name = styled.Text`font-size: 20px;`

export const Year = styled.Text`font-size: 16px;`

export const Poster = styled.Image`
    width: 85px;
    height: 120px;
`

export const GenreWrap = styled.View`
    flex: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
`

export const Genre = styled.Text`
    font-size: 16px;
    background: palevioletred;
    color: white;
    border-radius: 4px;
    padding: 4px;
    margin-right: 10px;
`
