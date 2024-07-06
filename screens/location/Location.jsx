import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
    const coordinastes = {
        latitude: 35.6855,
        longtitude: 139.68884,
        latitudeDelta: 0.01,
        longtitudeDelta: 0.01,
        title: "My location"
    }
    return (
        <MapView initialRegion={coordinastes} style={styles.mapStyle}>
            <Marker coordinate={coordinastes} title={coordinastes.title} />
        </MapView>
    )
}

export default Location

const styles = StyleSheet.create({
    mapStyle: {
        ...StyleSheet.absoluteFillObject
    }
})