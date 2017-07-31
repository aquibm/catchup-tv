import React, { Component } from 'React'
import PropTypes from 'prop-types'

// Styled Components
import { AnimatedView, Hours, Minutes } from './AnimatedTimeToCatchUp.styles'

class AnimatedTimeToCatchUp extends Component {
    static propTypes = {
        fromMinutes: PropTypes.number.isRequired,
        toMinutes: PropTypes.number.isRequired,
    }

    state = {
        currentMinutes: this.props.fromMinutes,
    }

    componentDidMount() {
        this._tick()
    }

    componentWillUnmount() {
        const { timeout } = this.state
        timeout && clearTimeout(timeout)
    }

    _tick = async () => {
        const { toMinutes } = this.props

        await this.setState(state => {
            let addMinutes = 10
            let timeout

            if (toMinutes - state.currentMinutes < addMinutes)
                addMinutes = toMinutes - state.currentMinutes

            if (this.state.currentMinutes < toMinutes)
                timeout = setTimeout(this._tick, 10)

            return {
                currentMinutes: state.currentMinutes + addMinutes,
                timeout,
            }
        })
    }

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
