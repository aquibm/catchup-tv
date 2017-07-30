import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import styled from 'styled-components/native'

function navigatableScreen(WrappedComponent, title) {
    return class extends Component {
        static navigationOptions = {
            title,
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTitleStyle: {
                color: '#FFF',
            },
            headerTintColor: '#FFF',
        }

        render() {
            return (
                <StyledView>
                    <StatusBar
                        backgroundColor="#512DA8"
                        barStyle="light-content"
                    />
                    <WrappedComponent {...this.props} />
                </StyledView>
            )
        }
    }
}

const StyledView = styled.View`padding-bottom: 136px;`

export default navigatableScreen
