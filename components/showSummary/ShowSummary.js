import React from 'react'
import HTMLView from 'react-native-htmlview'

import Card from '../card'

const ShowSummary = ({ summary }) =>
    <Card label="SUMMARY">
        <HTMLView value={summary} />
    </Card>

export default ShowSummary
