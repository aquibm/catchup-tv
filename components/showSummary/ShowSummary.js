import React from 'react'
import HTMLView from 'react-native-htmlview'

import Card from '../card'

const ShowSummary = ({ summary }) =>
    <Card label="SUMMARY">
        <HTMLView
            value={summary}
            textComponentProps={{ selectable: true, style: { fontSize: 15 } }}
            nodeComponentProps={{ selectable: true }}
        />
    </Card>

export default ShowSummary
