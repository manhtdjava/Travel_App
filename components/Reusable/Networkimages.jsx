import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Networkimages = ({ source, width, height, radius }) => {
    return (
        <Image
            source={{ uri: source }}
            style={styles.image(width, height, radius)}
        />
    )
}

export default Networkimages

const styles = StyleSheet.create({
    image: (width, height, radius) => ({
        width: width,
        height: height,
        borderRadius: radius,
        resizeMode: "cover"
    })
})