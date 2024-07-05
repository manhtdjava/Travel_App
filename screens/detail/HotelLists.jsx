import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTitile from '../../components/Reusable/ReusableTitile'
const HotelLists = ({ navigation }) => {
    const hotels = [

        {
            "_id": "1",
            "contry_id": "1",
            "title": "Hotel Alpha",
            "location": "U.S.A New York",
            "imageUrl": "https://th.bing.com/th/id/R.d2bd85d8f308a7ad8aed540b059fca48?rik=a0lx%2f7kvw92f0Q&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f118%2fchina_free.jpg&ehk=T8UeZwZIoXu%2b56JIFzeKo7p4fijP4FyTc0qED1O%2bGPI%3d&risl=&pid=ImgRaw&r=0",
            "rating": 4.8,
            "review": "24465 Reviews"
        },
        {
            "_id": "2",
            "contry_id": "2",
            "title": "Yellowstone Natitional",
            "location": "U.S.A New York",
            "imageUrl": "https://2.bp.blogspot.com/-sWts1F4KsEA/UW4b7VH50qI/AAAAAAAAADA/O_fxrqWUCYQ/s1600/gran-muralla-china.jpg",
            "rating": 4.8,
            "review": "3977 Reviews"
        },
        {
            "_id": "3",
            "contry_id": "3",
            "title": "Goden Gate Bridge",
            "location": "U.S.A New York",
            "imageUrl": "https://th.bing.com/th/id/R.d2bd85d8f308a7ad8aed540b059fca48?rik=a0lx%2f7kvw92f0Q&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f118%2fchina_free.jpg&ehk=T8UeZwZIoXu%2b56JIFzeKo7p4fijP4FyTc0qED1O%2bGPI%3d&risl=&pid=ImgRaw&r=0",
            "rating": 4.8,
            "review": "24465 Reviews"
        },
        {
            "_id": "4",
            "contry_id": "4",
            "title": "Seaside Resort",
            "imageUrl": "https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0",
            "location": "U.S.A New York",
            "rating": 4.9,
            "review": "1204 Reviews"
        },
        {
            "_id": "5",
            "contry_id": "5",
            "title": "Mountain Lodge",
            "imageUrl": "https://th.bing.com/th/id/R.a73823e34e086ade6f8d5d8e34b10252?rik=y25B5i7fDO82wQ&pid=ImgRaw&r=0",
            "rating": 4.8,
            "review": "1204 Reviews"
        },
    ]
    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <View style={{ height: 50 }}>
                <AppBar
                    top={10}
                    right={0}
                    left={0}
                    title={'Nearby Hotels'}
                    color={COLORS.white} icon={'search1'}
                    color1={COLORS.white} onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>
            <View style={{ paddingTop: 20 }}>
                <FlatList
                    data={hotels}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                            <ReusableTitile item={item} onPress={() => navigation.navigate('Hoteldetails', item._id)} />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default HotelLists

const styles = StyleSheet.create({})