import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeightSpacer, ReusableText, Reusablebtn } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import ReusableTitile from '../../components/Reusable/ReusableTitile'

const Failed = ({ navigation }) => {
    const hotel = {
        "_id": "1",
        "contry_id": "1",
        "title": "Hotel Alpha",
        "location": "U.S.A New York",
        "imageUrl": "https://th.bing.com/th/id/R.d2bd85d8f308a7ad8aed540b059fca48?rik=a0lx%2f7kvw92f0Q&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f118%2fchina_free.jpg&ehk=T8UeZwZIoXu%2b56JIFzeKo7p4fijP4FyTc0qED1O%2bGPI%3d&risl=&pid=ImgRaw&r=0",
        "rating": 4.8,
        "review": "24465 Reviews"
    }
    return (
        <View>
            <View style={{ marginTop: "40%" }}>
                <AssetImage
                    data={require('../../assets/images/cancel.png')}
                    width={'100%'}
                    height={200}
                    mode={'contain'}
                />
                <HeightSpacer height={40} />
                <View style={{ alignItems: 'center' }}>
                    <ReusableText
                        text={"Booking Failed"}
                        family={'medium'}
                        size={TEXT.xLarge}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={20} />
                    <ReusableText
                        text={"You can find your booking details below"}
                        family={'medium'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                    <HeightSpacer height={20} />



                </View>
                <View style={{ margin: 20 }}>
                    <ReusableText
                        text={"Room Details"}
                        family={'bold'}
                        size={SIZES.medium}
                        color={COLORS.dark}
                    />
                    <HeightSpacer height={20} />

                    <ReusableTitile
                        item={hotel}
                    />
                    <HeightSpacer height={40} />

                    <Reusablebtn
                        onPress={() => navigation.goBack()}
                        btnText={"Try again"}
                        width={SIZES.width - 50}
                        backgroundColor={COLORS.red}
                        borderColor={COLORS.red}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>
        </View>
    )
}

export default Failed