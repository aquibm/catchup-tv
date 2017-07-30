import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

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
                <View>
                    <StatusBar
                        backgroundColor="#512DA8"
                        barStyle="light-content"
                    />
                    <WrappedComponent {...this.props} />
                </View>
            )
        }
    }
}

export default navigatableScreen
