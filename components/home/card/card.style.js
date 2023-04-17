import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        borderRadius: 12,
        padding: 16
    },
    cardTop: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 16,
    },
    cardIcon: {
        backgroundColor: 'red',
        width: 40,
        height: 40
    },
    cardTitle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'SFproMedium',
    },
    cardBody: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 12,
    },
    cardDesc: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'SFproMedium',
    },
    cardDescBold: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'SFproSemiBold',
    },
    cardBottom: {
        alignItems: 'flex-end'
    },
    cardBottomText: (bgColor) => ( {
        color: '#fff',
        fontSize: 16,     
        fontFamily: 'SFproMedium',
        backgroundColor: bgColor,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 8,
    }),
})

export default styles;