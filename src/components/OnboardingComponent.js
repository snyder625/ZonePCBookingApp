import {View, Text, Image, Dimensions, StyleSheet } from 'react-native'

const {width} = Dimensions.get('screen')

const OnboardingComponent = ({item, index}) => {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <View style={styles.scrollbar}>
              <View style={{flex: 1, backgroundColor: index === 0 ? '#0BA89D' : ''}}></View>
              <View style={{flex: 1, backgroundColor: index === 1 ? '#0BA89D' : ''}}></View>
              <View style={{flex: 1, backgroundColor: index === 2 ? '#0BA89D' : ''}}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        width: width, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 24, 
        // marginTop: 50
    },
    image: {
        width: 250, 
        height: 250, 
        borderRadius: 150
    },
    title: {
        color: 'white', 
        fontSize: 32,
        fontFamily: 'PoppinsSemiBold'
    },
    subtitle: {
        color: '#fff', 
        opacity: 0.7, 
        fontSize: 18, 
        paddingHorizontal: 16, 
        textAlign: 'center',
        fontFamily: 'PoppinsLight'
    },
    scrollbar: {
        backgroundColor: '#B3B3B3', 
        height: 6, 
        width: '50%', 
        borderRadius: 50, 
        overflow: 'hidden', 
        flexDirection: 'row',
        marginTop: 12
    }
})

export default OnboardingComponent