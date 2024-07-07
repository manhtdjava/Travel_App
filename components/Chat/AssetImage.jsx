import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AssetImage = ({ data, width, height, mode, radius }) => {
    return (
        <Image
            source={data}
            style={{
                width: width,
                height: height,
                resizeMode: mode,
                borderRadius: radius
            }}
        />
    )
}

export default AssetImage

const styles = StyleSheet.create({

})