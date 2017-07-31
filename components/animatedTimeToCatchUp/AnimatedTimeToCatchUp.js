import React, { Component } from 'React'
import PropTypes from 'prop-types'
import bezier from 'cubic-bezier'

// Styled Components
import { AnimatedView, Hours, Minutes } from './AnimatedTimeToCatchUp.styles'

class AnimatedTimeToCatchUp extends Component {
    static propTypes = {
        fromMinutes: PropTypes.number.isRequired,
        toMinutes: PropTypes.number.isRequired,
    }

    state = {
        currentMinutes: this.props.fromMinutes,
        incrementRate: Math.floor(this.props.toMinutes / 180),
    }

    componentDidMount() {
        this._tick()
    }

    componentWillUnmount() {
        const { timeout } = this.state
        timeout && clearTimeout(timeout)
    }

    // TODO(AM): Refactor!
    _tick = async () => {
        const { toMinutes } = this.props

        await this.setState(state => {
            let addMinutes = state.incrementRate
            let timeout

            if (toMinutes - state.currentMinutes < addMinutes)
                addMinutes = toMinutes - state.currentMinutes

            if (state.currentMinutes < toMinutes)
                timeout = setTimeout(
                    this._tick,
                    this._easeIn(
                        (state.currentMinutes + addMinutes) / toMinutes,
                    ) * 0.016666667,
                )

            return {
                currentMinutes: state.currentMinutes + addMinutes,
                timeout,
            }
        })
    }

    _easeIn = bezier(0.39, 0.575, 0.565, 1, 6000)

    render() {
        const { currentMinutes } = this.state

        const hours = Math.floor(currentMinutes / 60)
        const minutes = currentMinutes % 60

        return (
            <AnimatedView>
                <Hours>
                    {hours} h
                </Hours>

                <Minutes>
                    {minutes} m
                </Minutes>
            </AnimatedView>
        )
    }
}

export default AnimatedTimeToCatchUp
