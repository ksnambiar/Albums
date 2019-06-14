import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class AlbumDetail extends Component {
    render() {
        const {details} = this.props
        return (
            <View>
                <Text> {details.title} </Text>
            </View>
        )
    }
}
