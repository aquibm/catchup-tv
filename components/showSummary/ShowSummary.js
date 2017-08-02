import React from 'react'
import HTMLView from 'react-native-htmlview'

// Styled components
import { Wrapper, CardLabel, Card } from './ShowSummary.styles'

const ShowSummary = ({ summary }) =>
    <Wrapper>
        <CardLabel>SUMMARY</CardLabel>
        <Card>
            <HTMLView value={summary} />
        </Card>
    </Wrapper>

export default ShowSummary
