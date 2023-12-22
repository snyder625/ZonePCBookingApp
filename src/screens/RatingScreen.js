import { View, Text, Pressable, ImageBackground, Image, Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Svg, Path, } from 'react-native-svg';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('screen')

function Star({ filled, onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
        {filled ? (
          <Ionicons name="star" size={30} color="yellow" />
        ) : (
          <Ionicons name="star-outline" size={30} color="white" />
        )}
      </TouchableOpacity>
    );
  }

function RatingScreen({navigation}) {
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

  const handleStarPress = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (comment) {
      setSubmitted(true);
      setComment(''); // Clear the comment after submitting
    }
  };


  return (
    
    <View style={styles.container} resizeMode="cover">
        <Text style={styles.cardHeading}>Leave a Review!</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: "10%"}}>
            <Image style={{height: 75, width: 75}} source={require("../../assets/images/PremiumZone.png")} />
            <View style={{marginHorizontal: '7%', marginTop: 15}}>
                <Text style={styles.middleCardHeading}>Twix Cyber Club</Text>
                <Text style={styles.middleCardText}>November 16 / Seat 14 / 5H</Text>
            </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: '10%', borderColor: '#0BA89D', borderWidth: 1, padding: '5%', borderRadius: 6 }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            filled={index < rating}
            onPress={() => handleStarPress(index)}
          />
        ))}
      </View>

      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Leave a comment"
          placeholderTextColor="#8C8C8C"
          value={comment}
          onChangeText={(text) => {
            setComment(text);
            setSubmitted(false); // Reset the submitted state when typing
            
          }}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Ionicons 
            name={submitted ? 'pencil' : 'send'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <Image style={{marginTop: '10%'}} source={require("../../assets/images/user.png")} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    width: width,
    height: height,
    backgroundColor: '#07161B',
    color: '#07161B',
  },
  cardHeading:{
    marginTop:'3%',
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PoppinsRegular'
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "10%",
    width: "90%",
  },
  commentInput: {
    flex: 1,
    height: 60,
    
    backgroundColor: '#0E252C',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 40, // Adjusted padding to accommodate the send button
    color: 'white',
  },
  sendButton: {
    position: 'absolute',
    right: 10,
    top: '30%',
    transform: [{ translateY: -12 }], // Adjusting position to center the icon vertically
    padding: 10,
  },
  upperCard: {
    height: 100,
    width: '40%',
    backgroundColor: '#0E252C',
    marginHorizontal: '2%',
    borderRadius: 12
  },
  middleContainer:{
    backgroundColor: '#0E252C',
    marginTop: '5%',
    width: '90%',
    borderRadius: 12
  },
  middleCard: {
    marginHorizontal: '3%'
  },
  middleCardHeading: {
    fontSize: 22,
    fontFamily: 'DMSansMedium',
    color: 'white'
  },
  middleCardText:{
    fontSize: 13,
    color: 'grey',
    fontFamily: 'DMSansRegular'
  },
  reverseBtn:{
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '4%'
  },
  btnText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'DMSansRegular'
  },
  btn: {

    fontSize: 17,
    height: 25,
    width: 55,
    backgroundColor: '#0BA89D',
    fontFamily: 'DMSansRegular',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: '3%'
  },
  
})

export default RatingScreen