import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Toast from 'react-native-easy-toast'

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

        _showToast = message => {
            this.refs.toast.show(message)
        }

        render() {
            return (
                <StyledView>
                    <StatusBar
                        backgroundColor="#512DA8"
                        barStyle="light-content"
                    />
                    <Toast ref="toast" />
                    <WrappedComponent
                        {...this.props}
                        showToast={this._showToast}
                    />
                </StyledView>
            )
        }
    }
}

const StyledView = styled.View`padding-bottom: 136px;`

export default navigatableScreen
