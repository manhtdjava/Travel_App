import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slides from '../../components/Onbroad/Slides'

const Onboarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/img1.jpg'),
            title: "Find the perfect place to say"
        },
        {
            id: 2,
            image: require('../../assets/images/img2.jpeg'),
            title: "Discover the word"
        },
        {
            id: 3,
            image: require('../../assets/images/img3.jpg'),
            title: "Find the perfect place to say"
        },
    ]
    return (
        <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Slides item={item} />}
        />
    )
}

export default Onboarding

const styles = StyleSheet.create({})