import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 60,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'SFproMedium',
        textAlign: 'center',
        marginBottom: 40,
    },
    tabContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        marginHorizontal: 30,
    },
    tab: (active) => ( {
        color: active ? '#27A9E1' : '#fff',
        fontSize: 16,
        fontFamily: 'SFproMedium',
        lineHeight: 19,
        textAlign: 'center',
        borderRadius: 6,
        paddingHorizontal: 4,
        paddingVertical: 3,
        borderRadius: 4,
        backgroundColor: active ? '#fff' : 'transparent',
    }),
    dateText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'SFproMedium',
        marginBottom: 25,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 12,
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: 30,
    },
    cardLeft: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 8,
        paddingVertical: 19.5,
    },
    cardRight: {
        padding: 12
    },
    cardTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'SFproMedium',
        lineHeight: 19,
        marginBottom: 8,
    },
    cardDesc: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'SFproSemiBold',
        lineHeight: 23.87,
    }
})

export default styles;