import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import reusable from '../../components/Reusable/reusable.style'
import { HeightSpacer, Recommendations, ReusableText } from '../../components'
import Places from '../../components/Home/Places'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'
import BestHotel from '../../components/Home/BestHotel'
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={reusable.container}>
            <View>
                <View style={reusable.rowWithSpacer('space-between')}>
                    <ReusableText
                        text={'Hey User!'}
                        family={'regular'}
                        size={TEXT.large}
                        color={COLORS.black}
                    />

                    <TouchableOpacity style={styles.box}
                        onPress={() => navigation.navigate('Search')}
                    >
                        <AntDesign
                            name='search1'
                            size={26}
                        />
                    </TouchableOpacity>


                </View>
                <HeightSpacer height={SIZES.xLarge} />
                <ReusableText
                    text={'Places'}
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black}
                />

                <Places />

                <HeightSpacer height={15} />

                <Recommendations />
                <HeightSpacer height={30} />

                <BestHotel />
            </View>
        </SafeAreaView>
    )
}

export default Home