import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const login = () => {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const onSignInPress = () =>{
        
    }
  return (
    <View style={styles.container}>
      <Spinner visible={loading} />

      <TextInput autoCapitalize="none" placeholder="simon@galaxies.dev" value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />
      <TextInput placeholder="password" value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />

      <Button onPress={onSignInPress} title="Login" color={'#6c47ff'}></Button>

      <Link href="/reset" asChild>
        <Pressable style={styles.button}>
          <Text>Forgot password?</Text>
        </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable style={styles.button}>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default login

const styles = StyleSheet.create({  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    margin: 8,
    alignItems: 'center',
  },})