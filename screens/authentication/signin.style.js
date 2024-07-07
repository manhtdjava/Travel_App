import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.lightWhite,
    },
    inpuWrapper: (boderColor) => ({
        boderColor: boderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',

    }),

    wrapper: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'right'
    },

    errorMassge: {
        color: COLORS.red,
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginTop: 5,
        marginEnd: 5,
    }


})
export default styles