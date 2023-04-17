import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 55,
        flexDirection:'column',
        flexGrow: 1,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'SFproMedium',
        textAlign: 'center',
        marginBottom: 40,
    },
    cardContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        gap: 36,
    },
})

export default styles;