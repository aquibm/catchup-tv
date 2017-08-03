import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import { Wrapper, Label, Inner } from './Card.styles'

const Card = ({ label, noPadding, children }) =>
    <Wrapper>
        <Label>
            {label}
        </Label>
        <Inner noPadding={noPadding}>
            {children}
        </Inner>
    </Wrapper>

Card.propTypes = {
    label: PropTypes.string.isRequired,
    margin: PropTypes.bool
}

export default Card
