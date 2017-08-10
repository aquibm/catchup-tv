import React, { Component } from 'React'
import PropTypes from 'prop-types'
import leftPad from 'left-pad'
import { View } from 'react-native'

import Card from '../card'

// Styled Components
import {
    AnimatedView,
    CountView,
    Number,
    Unit
} from './AnimatedTimeToCatchUp.styles'

class AnimatedTimeToCatchUp extends Component {
    static propTypes = {
        fromMinutes: PropTypes.number,
        toMinutes: PropTypes.number.isRequired
    }

    state = {
        currentMinutes: this.props.fromMinutes || 0,
        incrementRate: Math.floor(this.props.toMinutes / 15)
    }

    componentDidMount() {
        this._tick()
    }

    componentWillUnmount() {
        const { timeout } = this.state
        timeout && clearTimeout(timeout)
    }

    _tick = () => {
        const { toMinutes } = this.props

        this.setState(state => {
            let nextMinutes = state.currentMinutes + state.incrementRate
            let timeout

            if (nextMinutes > toMinutes) nextMinutes = toMinutes

            if (nextMinutes > state.currentMinutes)
                timeout = setTimeout(this._tick, 16)

            return {
                currentMinutes: nextMinutes,
                timeout
            }
        })
    }

    render() {
        const { currentMinutes } = this.state

        const hours = leftPad(Math.floor(currentMinutes / 60), 4, '0')
        const minutes = leftPad(currentMinutes % 60, 4, '0')

        return (
            <Card label="TIME TO CATCH UP" noPadding>
                <AnimatedView>
                    <CountView>
                        <Number hours="true">
                            {hours}
                        </Number>
                        <Unit>HOURS</Unit>
                    </CountView>

                    <CountView>
                        <Number>
                            {minutes}
                        </Number>
                        <Unit>MINUTES</Unit>
                    </CountView>
                </AnimatedView>
            </Card>
        )
    }
}

export default AnimatedTimeToCatchUp
