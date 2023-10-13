import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginEmail from "./src/screens/LoginEmail"
import LoginMobile from "./src/screens/LoginMobile"
import SignupMobile from "./src/screens/SignupMobile"

export default function App() {
  return (
    <View style={styles.container}>
      <LoginMobile/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
