import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTitile from '../Reusable/ReusableTitile'
import { useNavigation } from '@react-navigation/native'

const PopularList = ({ data }) => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <View style={{ marginBottom: 10 }}>
            <ReusableTitile item={item} onPress={() => navigation.navigate('PlaceDetail', item._id)} />
        </View>
    )
    return (
        <FlatList
            data={data}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
        />
    )
}

export default PopularList

const styles = StyleSheet.create({})