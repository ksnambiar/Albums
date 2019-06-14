import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Card from "../Card/Card"
import CardSection from "../Card/CardSection"
export default class AlbumDetail extends Component {
    render() {
        const {details} = this.props
        return (
            <View>
                <Card>
                <CardSection>
                <Text>{details.title}</Text>
                </CardSection>

                <CardSection>
                <Text>{details.title}</Text>
                </CardSection>
                </Card>
            </View>
        )
    }
}
