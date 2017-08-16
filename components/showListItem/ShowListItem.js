import React from 'react'
import PropTypes from 'prop-types'
import ColorHash from 'color-hash'
import { TouchableHighlight } from 'react-native'

import noPoster from '../../assets/no-poster.png'

// Styled Components
import {
    Container,
    Info,
    Name,
    Year,
    Poster,
    GenreWrap,
    Genre
} from './ShowListItem.styles'

const getShowYear = premiereDate => {
    return new Date(premiereDate).getFullYear()
}

const getPoster = image => {
    if (!image || !image.medium) return noPoster

    return { uri: image.medium }
}

const colorHash = new ColorHash({
    lightness: 0.6
})

const ShowListItem = ({ show, onPress }) =>
    <TouchableHighlight onPress={() => onPress(show.id)}>
        <Container>
            <Poster source={getPoster(show.image)} />
            <Info>
                <Name>
                    {show.name}
                </Name>
                <Year>
                    {getShowYear(show.premiered)}
                </Year>
                <GenreWrap>
                    {show.genres.map((genre, idx) =>
                        <Genre key={idx} color={colorHash.hex(genre)}>
                            {genre}
                        </Genre>
                    )}
                </GenreWrap>
            </Info>
        </Container>
    </TouchableHighlight>

ShowListItem.propTypes = {
    show: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
}

export default ShowListItem
