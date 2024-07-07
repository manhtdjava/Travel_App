import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar, AssetImage, HeightSpacer, Reusablebtn, } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTitile from '../../components/Reusable/ReusableTitile'

const SelectRoom = ({ navigation }) => {
    const rooms = [
        {
            _id: "1",
            contry_id: "1",
            title: "Walt Disney World",
            imageUrl: "https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0",
            location: "U.S.A New York",
            rating: 4.7,
            review: "1204 Reviews"
        },
        {
            "_id": "2",
            "contry_id": "2",
            "title": "Statue of Liberty",
            "imageUrl": "https://th.bing.com/th/id/R.a73823e34e086ade6f8d5d8e34b10252?rik=y25B5i7fDO82wQ&pid=ImgRaw&r=0",
            "rating": 4.8,
            "location": "U.S.A New York",
            "review": "1204 Reviews"
        },
        {
            "_id": "3",
            "contry_id": "3",
            "title": "Goden Gate Bridge",
            "imageUrl": "https://th.bing.com/th/id/R.d2bd85d8f308a7ad8aed540b059fca48?rik=a0lx%2f7kvw92f0Q&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f118%2fchina_free.jpg&ehk=T8UeZwZIoXu%2b56JIFzeKo7p4fijP4FyTc0qED1O%2bGPI%3d&risl=&pid=ImgRaw&r=0",
            "rating": 4.8,
            "location": "U.S.A New York",
            "review": "24465 Reviews"
        },
        {
            "_id": "4",
            "contry_id": "4",
            "title": "Yellowstone Natitional Park",
            "imageUrl": "https://2.bp.blogspot.com/-sWts1F4KsEA/UW4b7VH50qI/AAAAAAAAADA/O_fxrqWUCYQ/s1600/gran-muralla-china.jpg",
            "rating": 4.8,
            "location": "U.S.A New York",
            "review": "3977 Reviews"
        },
        {
            "_id": "5",
            "contry_id": "5",
            "title": "Goden Gate Bridge",
            "imageUrl": "https://th.bing.com/th/id/R.d2bd85d8f308a7ad8aed540b059fca48?rik=a0lx%2f7kvw92f0Q&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f118%2fchina_free.jpg&ehk=T8UeZwZIoXu%2b56JIFzeKo7p4fijP4FyTc0qED1O%2bGPI%3d&risl=&pid=ImgRaw&r=0",
            "rating": 4.8,
            "location": "U.S.A New York",
            "review": "24465 Reviews"
        }
    ]
    return (
        <View style={{ marginBottom: 120 }}>
            <View style={{ height: 100 }}>
                <AppBar
                    top={60}
                    left={20}
                    right={20}
                    title={'Select Room'}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />

            </View>

            <FlatList
                data={rooms}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.titleColum}>
                        <View style={styles.title}>
                            <ReusableTitile item={item} />
                            <HeightSpacer height={10} />
                            <View style={styles.btnSty}>
                                <Reusablebtn
                                    onPress={() => navigation.navigate('SelectedRoom', { item })}
                                    btnText={"Select Room"}
                                    width={SIZES.width - 50}
                                    backgroundColor={COLORS.green}
                                    borderColor={COLORS.green}
                                    borderWidth={0}
                                    textColor={COLORS.white}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default SelectRoom

const styles = StyleSheet.create({
    titleColum: {
        marginHorizontal: 20, marginBottom: 10
    },
    title: { backgroundColor: COLORS.lightWhite, borderRadius: 12 },
    btnSty: {
        margin: 10, alignItems: 'center'
    }
})