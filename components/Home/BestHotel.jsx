import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { TEXT, COLORS, SIZES } from '../../constants/theme'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import HotelCard from '../Titles/Hotels/HotelCard'

const BestHotel = () => {
    const navigation = useNavigation();
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
        <View>
            <View style={[reusable.rowWithSpacer('space-between'), { paddingBottom: 20 }]}>
                <ReusableText
                    text={"Recommendations"}
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black}
                />

                <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
                    <Feather
                        name='list'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={hotels}
                horizontal
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                renderItem={({ item }) => (
                    <HotelCard item={item} margin={10} onPress={() => navigation.navigate('Hoteldetails')} />
                )}
            />

        </View>
    )
}

export default BestHotel

const styles = StyleSheet.create({})