import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Card from "../Card/Card"
export default class AlbumDetail extends Component {
    render() {
        const {details} = this.props
        return (
            <View>
                <Card detail={details} />
            </View>
        )
    }
}
