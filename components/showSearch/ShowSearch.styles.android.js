import styled from 'styled-components/native'

export const SearchInputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
    background: white;
    border-bottom-color: #d9d9d9;
    border-bottom-width: 1px;
`

export const SearchInputWrap = styled.View`
    flex: 1;
    margin: 0;
`

export const ClearButtonWrap = styled.View`
    margin: 0;
    padding-right: 20px;
`

export const SearchInput = styled.TextInput.attrs({
    underlineColorAndroid: 'rgba(0, 0, 0, 0)'
})`
    width: 100%;
    padding: 15px;
    fontSize: 18px;
`
