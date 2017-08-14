import styled from 'styled-components/native'

export const SearchInput = styled.TextInput`
    width: 100%;
    padding: 15px;
    fontSize: 18px;
    margin-bottom: ${p => (p.platform === 'android' ? '10px' : 0)};
    border-color: ${p => (p.platform === 'ios' ? '#d9d9d9' : 'transparent')};
    border-width: ${p => (p.platform === 'ios' ? 1 : 0)};
    background-color: ${p => (p.platform === 'ios' ? 'white' : 'transparent')};
`
