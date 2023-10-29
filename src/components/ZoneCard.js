import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Svg, Ellipse, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export const zones = [
    {
        image: require('../../assets/images/twix-cyber.png'),
        name: 'Twix Cyber Club',
        rate: '389,99',
        available: '15',
        reserved: '4',
        inUsePcs: '7',
        rating: '4.7'
    },
    {
      image: require('../../assets/images/twix-cyber.png'),
      name: 'Senior Cyber Club',
      rate: '489,99',
      available: '11',
      reserved: '9',
      inUsePcs: '2',
      rating: '4.5'
  },
  {
    image: require('../../assets/images/twix-cyber.png'),
    name: 'Major Cyber Club',
    rate: '399,99',
    available: '15',
    reserved: '0',
    inUsePcs: '5',
    rating: '4.4'
}
];

const ZoneCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground source={require('../../assets/images/twix-cyber.png')} resizeMode='cover' style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.zoneName}>{item.name}</Text>
      </ImageBackground>
      <View style={{backgroundColor: '#074644', paddingHorizontal: 8, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', gap: 6}}>
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
          <Ellipse cx={10} cy={11.6667} rx={6.66667} ry={6.66667} stroke="white" />
          <Path d="M10 11.6667L10 9.16667" stroke="white" strokeLinecap="round" />
          <Path d="M14.5834 6.25L15.8334 5" stroke="white" strokeLinecap="round" />
          <Path
            d="M8.39008 1.9755C8.48504 1.8869 8.69428 1.80861 8.98536 1.75277C9.27643 1.69694 9.63307 1.66667 9.99996 1.66667C10.3668 1.66667 10.7235 1.69694 11.0146 1.75277C11.3056 1.80861 11.5149 1.8869 11.6098 1.9755"
            stroke="white"
            strokeLinecap="round"
          />
        </Svg>

        <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
          <Svg width={12} height={14} viewBox="0 0 12 14" fill="none">
            <G clipPath="url(#clip0_345_1373)">
              <Path d="M1 1.16675H11M1 4.50008H11M6 4.50008V12.8334" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </G>
            <Defs>
              <ClipPath id="clip0_345_1373">
                <Rect width={12} height={14} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text style={{color: '#FFFFFF'}}>{item.rate} / h</Text>
        </View>
        <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>·</Text>

        <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
          <Text style={{color: '#34A853'}}>{item.available}</Text>
          <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
            <Path
              d="M6 7.66667V9.33333M2.11111 7.66667H9.88889C10.5025 7.66667 11 7.16921 11 6.55556V2.11111C11 1.49746 10.5025 1 9.88889 1H2.11111C1.49746 1 1 1.49746 1 2.11111V6.55556C1 7.16921 1.49746 7.66667 2.11111 7.66667ZM2.66667 11H9.33333V10.4444C9.33333 9.83079 8.83587 9.33333 8.22222 9.33333H3.77778C3.16413 9.33333 2.66667 9.83079 2.66667 10.4444V11Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>

        <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
          <Text style={{color: '#C43D28'}}>{item.reserved}</Text>
          <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
            <Path
              d="M6 7.66667V9.33333M2.11111 7.66667H9.88889C10.5025 7.66667 11 7.16921 11 6.55556V2.11111C11 1.49746 10.5025 1 9.88889 1H2.11111C1.49746 1 1 1.49746 1 2.11111V6.55556C1 7.16921 1.49746 7.66667 2.11111 7.66667ZM2.66667 11H9.33333V10.4444C9.33333 9.83079 8.83587 9.33333 8.22222 9.33333H3.77778C3.16413 9.33333 2.66667 9.83079 2.66667 10.4444V11Z"
              stroke="white"
              strokeOpacity={0.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>

        <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
          <Text style={{color: '#C47C28'}}>{item.inUsePcs}</Text>
          <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
            <Path
              d="M6 7.66667V9.33333M2.11111 7.66667H9.88889C10.5025 7.66667 11 7.16921 11 6.55556V2.11111C11 1.49746 10.5025 1 9.88889 1H2.11111C1.49746 1 1 1.49746 1 2.11111V6.55556C1 7.16921 1.49746 7.66667 2.11111 7.66667ZM2.66667 11H9.33333V10.4444C9.33333 9.83079 8.83587 9.33333 8.22222 9.33333H3.77778C3.16413 9.33333 2.66667 9.83079 2.66667 10.4444V11Z"
              stroke="white"
              strokeOpacity={0.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>

        <View style={{marginLeft: 16}}>
          <Svg width="14" height="19" viewBox="0 0 14 19" fill="none">
            <Path
              d="M9.795 0C11.7175 0 13.125 1.565 13.125 3.75C13.125 5.66 12.1 7.47 10.3792 9.15417C9.97833 9.54583 9.5625 9.91167 9.14417 10.2458L9.365 11.3458L10.5108 17.5958C10.5305 17.7032 10.5216 17.8138 10.4852 17.9167C10.4489 18.0195 10.3862 18.1111 10.3034 18.1822C10.2206 18.2533 10.1207 18.3016 10.0135 18.3221C9.90636 18.3426 9.79567 18.3347 9.6925 18.2992L6.76583 17.2933C6.63407 17.248 6.49093 17.248 6.35917 17.2933L3.43333 18.2992C3.33016 18.3347 3.21948 18.3426 3.1123 18.3221C3.00512 18.3016 2.90519 18.2533 2.82243 18.1822C2.73967 18.1111 2.67698 18.0195 2.64059 17.9167C2.6042 17.8138 2.59538 17.7032 2.615 17.5958L3.76333 11.3358L3.98083 10.245C3.56417 9.91167 3.1475 9.54667 2.74667 9.15333C1.02417 7.47083 0 5.66083 0 3.75C0 1.565 1.4075 0 3.33 0C4.62167 0 5.78583 0.626667 6.52333 1.63917L6.5625 1.695L6.60167 1.63917C6.94788 1.15757 7.3984 0.760395 7.9196 0.477286C8.4408 0.194176 9.01921 0.0324456 9.61167 0.00416666L9.795 0ZM8.03333 11.0675C7.685 11.305 7.34333 11.5192 7.01833 11.7092L6.86833 11.795C6.77492 11.8474 6.66961 11.8749 6.5625 11.8749C6.45539 11.8749 6.35008 11.8474 6.25667 11.795L6.1975 11.7617L5.81417 11.535C5.57917 11.3908 5.33667 11.235 5.09083 11.0667L4.99 11.5708L4.03583 16.77L5.9525 16.1117C6.29719 15.9929 6.66905 15.9772 7.0225 16.0667L7.1725 16.1108L9.08833 16.7692L8.1375 11.5808L8.03333 11.0675ZM9.795 1.25C8.575 1.25 7.51917 2.06917 7.1625 3.29917C6.98833 3.9 6.13667 3.9 5.9625 3.29917C5.60583 2.06917 4.55 1.25 3.32917 1.25C2.12917 1.25 1.25 2.2275 1.25 3.75C1.25 5.25917 2.11583 6.78917 3.62 8.26C4.55886 9.17048 5.60354 9.96504 6.73167 10.6267L6.71583 10.6175L6.5625 10.525L6.685 10.4517C7.58108 9.90039 8.4224 9.26473 9.1975 8.55333L9.50583 8.26C11.0083 6.78917 11.875 5.25917 11.875 3.75C11.875 2.2275 10.9958 1.25 9.795 1.25Z"
              fill="#0BA89D"
            />
          </Svg>
        </View>

        <View style={{height: 100, width: 100, borderWidth: 1, borderColor: '#0BA89D', flexDirection: 'row', position: 'absolute', bottom: -20, right: -20, borderRadius: 100, backgroundColor: '#074644', alignItems: 'center', padding: 12, gap: 6}}>
          <Svg width={25} height={30} viewBox="0 0 25 30" fill="none">
            <Path
              d="M24.5378 12.07C24.5378 12.07 23.0415 13.4665 20.4978 15.1124C19.7996 11.0724 17.8544 6.08486 14.0639 0C14.0639 0 12.817 6.53374 8.67726 12.6685C6.88173 9.87542 6.08372 7.68088 6.08372 7.68088C-6.88401 20.6985 3.88918 29.9255 10.6723 29.9255C19.3507 29.9255 26.9817 25.736 24.5378 12.07Z"
              fill="#07161B"
            />
            <Path
              d="M19.4009 23.6411C20.1491 21.9952 20.6977 19.8505 20.7975 17.1572C20.7975 17.1572 19.7501 18.055 17.9545 19.2021C17.4558 16.5088 16.1091 13.217 13.4657 9.1272C13.4657 9.1272 12.6178 13.4664 9.72501 17.6061C8.47812 15.7607 7.92948 14.2644 7.92948 14.2644C5.78482 17.656 4.93693 20.3493 4.88705 22.4939C3.69003 22.045 2.94189 21.6959 2.94189 21.6959C4.98681 27.7808 9.22626 29.1274 11.1215 29.1274C14.5131 29.1274 17.9545 28.1299 21.3461 23.2919C21.3461 23.2421 20.598 23.4416 19.4009 23.6411Z"
              fill="#3D737F"
            />
            <Path
              d="M7.03148 20.8981C7.03148 20.8981 8.42801 22.7934 9.4754 22.3445C9.4754 22.3445 11.4704 19.2023 14.3632 17.4567C14.3632 17.4567 13.7647 22.2447 14.463 23.0926C15.3608 24.2398 17.8047 21.8457 17.8047 21.8457C17.8047 24.6887 14.7124 28.2299 11.9193 28.2299C9.22602 28.2299 5.3357 25.1376 7.03148 20.8981Z"
              fill="#0BA89D"
            />
          </Svg>
          <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 700, fontFamily: 'DMSansRegular'}}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden', 
    borderRadius: 12, 
    marginVertical: 16
  },
  zoneName: {
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 20,
    fontFamily: 'DMSansRegular'
  }
})

export default ZoneCard