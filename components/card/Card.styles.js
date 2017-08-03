import styled from 'styled-components/native'

export const Wrapper = styled.View`margin: 20px 10px 0;`

export const Label = styled.Text`margin-bottom: 5px;`

export const Inner = styled.View`
    background: white;
    flex-direction: column;
    padding: ${p => (p.noPadding ? '0;' : '15px;')};
`
