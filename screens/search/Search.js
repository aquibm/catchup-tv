import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Catchup TV',
    }

    goToShow = () => {
        const { navigate } = this.props.navigation
        navigate('Show')
    }

    render() {
        return (
            <View>
                <Text>Search Screen!</Text>
                <Button title="Go to show!" onPress={this.goToShow} />
            </View>
        )
    }
}

export default SearchScreen
