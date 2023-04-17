import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardLeft: {
        flexDirection: 'row',
        gap: 12,
    },
    cardRight: {

    },
    cardIconBg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 28,
    },
    cardText: {
    },
    cardTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'SFproMedium',
        lineHeight: 24,
        marginBottom: 5,
    },
    cardDesc: {
        color: '#F9F9F9',
        fontSize: 16,
        fontFamily: 'SFproRegular',
        lineHeight: 19,
        flexShrink: 1 ,
        maxWidth: 280
    },
    time: {
        color: '#F9F9F9',
        fontSize: 12,
        fontFamily: 'SFproRegular',
        lineHeight: 14,
    }
})

export default styles;