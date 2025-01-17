import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const Reusablebtn = ({ onPress, btnText, textColor, width, backgroundColor, borderWidth, borderColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress} style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
        >
            <Text style={styles.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Reusablebtn

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: textColor
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderWidth: borderWidth

    })
})