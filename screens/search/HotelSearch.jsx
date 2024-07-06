import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { AppBar, HeightSpacer } from '../../components'
import HotelCard from '../../components/Titles/Hotels/HotelCard'

const HotelSearch = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('')
    const [searchResults, setSearchResults] = useState([])
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
        <SafeAreaView >
            <View style={{ height: 50 }}>
                <AppBar
                    top={10}
                    left={20}
                    right={20}
                    title={'Look for hotels'} color={COLORS.white} icon={'filter'}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => { }}
                />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        value={searchKey}
                        onChangeText={setSearchKey}
                        placeholder='Where do you want to stay'
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather
                        name='search'
                        size={24}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>

            {hotels.length === 0 ? (
                <View>
                    <HeightSpacer height={'20%'} />
                    <Image
                        source={require('../../assets/images/search.png')}
                        style={styles.searchImage}
                    />
                </View>
            ) : (
                <View style={{ marginLeft: 12 }}>
                    <FlatList
                        data={hotels}
                        keyExtractor={(item) => item._id}
                        numColumns={2}
                        ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
                        renderItem={({ item }) => (

                            <HotelCard item={item} margin={10} onPress={() => navigation.navigate('Hoteldetails', item._id)} />

                        )}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}

export default HotelSearch

