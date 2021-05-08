import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';
import Loading from '../Loading';

const index = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [load, setLoad] = useState(false);

  const signUp = async () => {
    setLoad(true);
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      setLoad(false);
      navigation.navigate('Screen');
      setEmail('')
      setPassword('')
    } catch (err) {
      setError(err.message);
    }
  }

  return <>
    {!load ? <View style={styles.container}>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {
      error ?
        <Text style={{ color: 'red' }}>{error}</Text>
          : null
      }
      <Button title="SignUp" onPress={() => signUp()} />
      <TouchableHighlight style={styles.account} onPress={() => navigation.navigate('SignIn')}>
        <Text>Already have an account? Sign In</Text>
      </TouchableHighlight>
    </View> : <Loading />}
  </>
};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  account: {
    marginTop: 30
  },
});

export default index;