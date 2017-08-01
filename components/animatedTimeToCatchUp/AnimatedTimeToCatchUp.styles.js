import styled from 'styled-components/native'

export const AnimatedView = styled.View`
    flex-direction: row;
    height: 140px;
    padding: 20px;
    background: #333;
`

export const CountView = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
`

export const Number = styled.Text`
    flex: .75;
    font-size: 50px;
    text-align: center;
    color: white;
    font-family: Roboto;
`

export const Unit = styled.Text`
    flex: .25;
    font-size: 20px;
    text-align: center;
    color: white;
    font-family: Roboto;
`
