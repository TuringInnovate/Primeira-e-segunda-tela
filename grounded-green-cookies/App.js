import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <Image source ={require ('./assets/logo.png')}  style={{
          width: 200,
          height: 200,
          position:'relative',
          top:'60px',
          right:'-70px',

        }}/>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Loging to your account</Text>
          <View style={styles.inputContainer}>

          <TextInput
              style={[styles.input, styles.blueInput]}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.inputContainer}>
           
            <TextInput
              style={[styles.input, styles.blueInput]}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity style={styles.whiteButton}>
            <Text style={[styles.buttonText, { color: 'black' }]}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.bottomTextContainer}>
          <TouchableOpacity onPress={() => console.log("aaaa")}>
              <Text style={styles.bottomText}>Create Account</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
 
  
  input: {
    flex: 1,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#008080',
  },
  blueInput: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  whiteButton: {
    backgroundColor: '#1B3788',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  
});

