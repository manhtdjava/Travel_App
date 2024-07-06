import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import ReusableText from './ReusableText'
import { COLORS, SIZES } from '../../constants/theme'
import reusable from './reusable.style'

const ProfileTitle = ({ onPress, title, icon }) => {
    return (
        <TouchableOpacity style={styles.title} onPress={onPress}>
            <View style={reusable.rowWithSpacer('space-between')}>
                <View style={reusable.rowWithSpacer('flex-start')}>
                    <AntDesign name={icon} size={20} />
                    <WidthSpacer width={15} />
                    <ReusableText
                        text={title}
                        family={'regular'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                </View>
                <AntDesign name={'right'} size={20} />
            </View>
        </TouchableOpacity>
    )
}

export default ProfileTitle

const styles = StyleSheet.create({
    title: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 15,
        marginBottom: 15
    }
})