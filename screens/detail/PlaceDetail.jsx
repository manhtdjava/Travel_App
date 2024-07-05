import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { DescriptionText, HeightSpacer, Networkimages, PopularList, ReusableText, Reusablebtn } from '../../components'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, TEXT, SIZES } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import { Feather } from '@expo/vector-icons'

const PlaceDetail = ({ navigation }) => {
    const route = useRoute()
    const id = route.params

    const place = {
        _id: "1",
        contry_id: "1",
        title: "Walt Disney World",
        description: "The USA is a tourit, know for its diverer landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustLing streets of New York City, there's something for every travler. The USA is a touris magnet, know for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustLing streets of New York City, there's something for every travler. The USA is a touris magnet, know for its diverse landscapes, rich history, and vibrant culture. ",
        contact_id: "1",
        imageUrl: "https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0",
        rating: 4.7,
        review: "1204 Reviews",
        latitude: "40.68989",
        longitude: "-74.98799",
        location: "U.S.A New York",
        popular: [
            {
                _id: "1",
                title: "Walt Disney World",
                imageUrl: "https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0",
                location: "U.S.A New York",
                rating: 4.7,
                review: "1204 Reviews"
            },
            {
                _id: "2",
                title: "Statue of Liberty",
                imageUrl: "https://th.bing.com/th/id/R.a73823e34e086ade6f8d5d8e34b10252?rik=y25B5i7fDO82wQ&pid=ImgRaw&r=0",
                rating: 4.8,
                review: "1204 Reviews",
                location: "U.S.A New York",
            }

        ],

    }
    return (
        <ScrollView>
            <View>
                <Networkimages
                    source={place.imageUrl}
                    width={"100%"}
                    height={350}
                    radius={30}
                />

                <AppBar
                    top={60}
                    left={20}
                    right={20}
                    title={place.title} color={COLORS.white} icon={'search1'}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => { }}
                />
            </View>

            <View style={styles.descriptions}>
                <ReusableText
                    text={place.location}
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black}
                />


                <DescriptionText text={place.description} />

                <View style={{ alignContent: 'center' }}>
                    <HeightSpacer height={20} />
                    <View style={reusable.rowWithSpacer('space-between')}>
                        <ReusableText
                            text={"Popular Hotels"}
                            family={'medium'}
                            size={TEXT.xLarge}
                            color={COLORS.black}
                        />
                        <TouchableOpacity onPress={() => { }}>
                            <Feather
                                name='list'
                                size={20}

                            />
                        </TouchableOpacity>

                    </View>
                    <HeightSpacer height={20} />
                    <PopularList data={place.popular} />
                    <HeightSpacer height={20} />
                    <Reusablebtn
                        onPress={() => navigation.navigate('HotelSearch')}
                        btnText={"Find Best Hotels"}
                        width={SIZES.width - 50}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                    <HeightSpacer height={50} />
                </View>
            </View>
        </ScrollView>
    )
}

export default PlaceDetail

const styles = StyleSheet.create({
    descriptions: {
        marginHorizontal: 20,
        paddingTop: 20
    }
})