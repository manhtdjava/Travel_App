import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppBar, DescriptionText, HeightSpacer, HotelMap, Networkimages, ReusableText, Reusablebtn, ReviewList, WidthSpacer } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './hotelDetails.style'
import reusable from '../../components/Reusable/reusable.style'
import { Rating } from 'react-native-stock-star-rating'
import { Feather } from '@expo/vector-icons'

const Hoteldetails = ({ navigation }) => {
    const hotel = {
        availability: {
            start: "2023-08-20T00:00:00",
            end: "2023-08-23T00:00:00",
        },
        coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
        },
        _id: "1",
        contry_id: "1",
        title: "Walt Disney World",
        description: "The USA is a tourit, know for its diverer landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustLing streets of New York City, there's something for every travler. The USA is a touris magnet, know for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustLing streets of New York City, there's something for every travler. The USA is a touris magnet, know for its diverse landscapes, rich history, and vibrant culture. ",
        contact: "1",
        imageUrl: "https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0",
        rating: 4.8,
        review: "1204 Reviews",
        location: "San Francisco, CA",
        price: 400,
        _v: 1,
        reviews: [
            {
                _id: "1",
                review: "Lorem ipsum dolor sit consectetur adipisicing alit. Maxime mollita, \nmolestiae vel sint commodi",
                rating: 4.6,
                user: {
                    _id: "1",
                    username: "Jone Doe",
                    profile: "https://2.bp.blogspot.com/-sWts1F4KsEA/UW4b7VH50qI/AAAAAAAAADA/O_fxrqWUCYQ/s1600/gran-muralla-china.jpg",
                },
                updatedAt: "2023-08-09T13:09:09:200Z"
            },
            {
                _id: "2",
                review: "Lorem ipsum dolor sit consectetur adipisicing alit. Maxime mollita, \nmolestiae vel sint commodi",
                rating: 4.6,
                user: {
                    _id: "1",
                    username: "Kaa Doe",
                    profile: "https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0",
                },
                updatedAt: "2023-08-09T13:09:09:200Z"
            },
        ]

    };

    let coordinates = {
        id: hotel._id,
        title: hotel.title,
        latitude: hotel.coordinates.latitude,
        longitude: hotel.coordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }
    return (
        <ScrollView >
            <View style={{ height: 80 }}>
                <AppBar
                    top={60}
                    left={20}
                    right={20}
                    title={hotel.title}
                    color={COLORS.white}
                    icon={'search1'}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => { }}
                />
            </View>
            <View>
                <View style={styles.container}>
                    <Networkimages
                        source={hotel.imageUrl}
                        width={"100%"}
                        height={220}
                        radius={25}
                    />
                    <View style={styles.titleContainer}>
                        <View style={styles.titleColunm}>
                            <ReusableText
                                text={hotel.title}
                                family={'medium'}
                                size={SIZES.xLarge}
                                color={COLORS.black}
                            />
                            <HeightSpacer height={10} />
                            <ReusableText
                                text={hotel.location}
                                family={'medium'}
                                size={SIZES.medium}
                                color={COLORS.black}
                            />

                            <HeightSpacer height={15} />

                            <View style={reusable.rowWithSpacer('space-between')}>
                                <Rating
                                    maxStars={5}
                                    stars={hotel.rating}
                                    bordered={false}
                                    color={'#FD9942'}
                                />
                                <ReusableText
                                    text={`(${hotel.review})`}
                                    family={'medium'}
                                    size={SIZES.medium}
                                    color={COLORS.gray}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                {/* // */}

                <View style={[styles.container, { paddingTop: 90 }]}>
                    <ReusableText
                        text={"Description"}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={10} />
                    <DescriptionText text={hotel.description} />
                    <HeightSpacer height={10} />
                    <ReusableText
                        text={"Location"}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={15} />
                    <ReusableText
                        text={hotel.location}
                        family={'regular'}
                        size={SIZES.small + 2}
                        color={COLORS.gray}
                    />

                    <HotelMap coordinates={coordinates} />

                    <View style={reusable.rowWithSpacer('space-between')}>
                        <ReusableText
                            text={"Reviews"}
                            family={'regular'}
                            size={SIZES.large}
                            color={COLORS.black}
                        />

                        <TouchableOpacity>
                            <Feather name="list" size={20} />
                        </TouchableOpacity>
                    </View>

                    <HeightSpacer height={10} />
                    <ReviewList reviews={hotel.reviews} />



                </View>
                <View style={[reusable.rowWithSpacer('space-between'), styles.bottom]}>
                    <View>
                        <ReusableText
                            text={`\$ ${hotel.price}`}
                            family={'medium'}
                            size={SIZES.large}
                            color={COLORS.black}
                        />
                        <HeightSpacer height={5} />
                        <ReusableText
                            text={"Jan 01 - Dec 25"}
                            family={'medium'}
                            size={SIZES.medium}
                            color={COLORS.gray}
                        />
                    </View>
                    <Reusablebtn
                        onPress={() => navigation.navigate('SelectRoom')}
                        btnText={"Select Room"}
                        width={(SIZES.width - 50) / 2.2}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Hoteldetails
