import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBooking, TopInfo, TopTrips } from '../screens'
import { COLORS, SIZES } from '../constants/theme'
import { AppBar, HeightSpacer, Networkimages, ReusableText } from '../components'
import styles from '../screens/top/topTab.style'

const Tab = createMaterialTopTabNavigator()
const TopTab = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    <Networkimages
                        source={'https://th.bing.com/th/id/R.f80ec5b6dbe2cffc79cc900e9e01354e?rik=TInBO%2f3lwlWu%2fw&pid=ImgRaw&r=0'}
                        width={'100%'}
                        height={300}
                        radius={0}
                    />
                    <AppBar
                        top={40}
                        left={20}
                        right={20}
                        color={COLORS.white}
                        icon={'logout'}
                        color1={COLORS.white}
                        onPress1={() => { }}
                    />

                    <View style={styles.profile}>
                        <Image source={{ uri: 'https://th.bing.com/th/id/R.d2bd85d8f308a7ad8aed540b059fca48?rik=a0lx%2f7kvw92f0Q&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f118%2fchina_free.jpg&ehk=T8UeZwZIoXu%2b56JIFzeKo7p4fijP4FyTc0qED1O%2bGPI%3d&risl=&pid=ImgRaw&r=0' }}
                            style={styles.image}
                        />
                        <HeightSpacer height={5} />

                        <View style={{ alignItems: 'center' }}>
                            <ReusableText
                                text={'Jone CO'}
                                family={'medium'}
                                size={SIZES.medium}
                                color={COLORS.black}
                            />

                        </View>
                        <HeightSpacer height={5} />
                        <View style={styles.name}>
                            <View style={{ alignItems: 'center' }}>
                                <ReusableText
                                    text={'sjhdfksf@.gmail.com'}
                                    family={'medium'}
                                    size={SIZES.medium}
                                    color={COLORS.white}
                                />
                            </View>
                        </View>

                    </View>


                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen name='Bookings' component={TopBooking} />
                <Tab.Screen name='Trips' component={TopTrips} />
                <Tab.Screen name='Info' component={TopInfo} />
            </Tab.Navigator>
        </View>
    )
}

export default TopTab
