import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';


const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        width: SIZES.width, // Check if SIZES.width is accessible
        height: SIZES.height // Check if SIZES.height is accessible
    },
    stack: {
        position: "absolute",
        bottom: 0, // Corrected 'buttom' to 'bottom'
        marginBottom: 60,
        marginHorizontal: 20
    }
});

export default styles;