import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { overlay } from 'react-native-paper'
import reusable from '../../components/Reusable/reusable.style'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import ReusableTitile from './ReusableTitile'
import ReusableText from './ReusableText'

const AppBar = ({ color, title, color1, icon, onPress1, onPress, top, left, right }) => {
    return (
        <View style={styles.overlay(top, left, right)}>
            <View style={reusable.rowWithSpacer('space-between')}>
                <TouchableOpacity style={styles.box(color)} onPress={onPress}>
                    <AntDesign
                        name='left'
                        size={26}

                    />
                </TouchableOpacity>
                <ReusableText
                    text={title}
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black}
                />

                <TouchableOpacity style={styles.box(color1)} onPress={onPress1}>
                    <AntDesign
                        name={icon}
                        size={26}

                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: (top, left, right) => ({
        position: 'absolute',
        top: top,
        left: left,
        right: right,
        justifyContent: 'center'
    }),
    box: (color) => ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    box1: (color1) => ({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'
    })
})